// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      1.0.017
// @description  Stream your Dice to another window
// @author       Azmoria
// @downloadURL  https://github.com/Azmoria/dndbeyonddark/raw/master/Dice%20Tray%20Stream%20Window.user.js
// @updateURL    https://github.com/Azmoria/dndbeyonddark/raw/master/Dice%20Tray%20Stream%20Window.user.js
// @include      https://www.dndbeyond.com/profile/*/characters/*
// @include      https://www.dndbeyond.com/encounter-builder
// @include      https://www.dndbeyond.com/combat-tracker*
// @include      https://www.dndbeyond.com/encounters/*
// @include      https://www.dndbeyond.com/my-encounters
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dndbeyond.com
// @run-at      document-end
// ==/UserScript==
var childWindow = null;

async function resizeChild(child){
    var winHeight = await window.innerHeight;
    var winWidth = await window.innerWidth;
    var childHTML = await child.document.documentElement;
        if(winHeight == screen.height && winWidth == screen.width) {
            await childHTML.requestFullscreen();
        }
        else if(winWidth<1900){
            await child.resizeTo(winWidth+16, winHeight+71);
        }
        else{
            await child.resizeTo(winWidth-1, winHeight+60);
        }
}

async function diceTray() {
    if (childWindow == null) {
        childWindow = await window.open('', 'Dice Tray', 'toolbar=0,location=0,menubar=0');
    }
    if(childWindow.document.querySelector('video') == undefined || childWindow.document.querySelector('video') == null){
        await childWindow.document.write('<video id="video" muted autoplay></video>');
    }
    if(childWindow.location.href.indexOf("abovevtt") > -1 && childWindow.location.href.indexOf("encounter") > -1 && childWindow.location.href.indexOf("#DiceTray") > -1) {}
    else{
        await childWindow.history.pushState({}, "Dice Tray - " + document.title, window.location.href+"#DiceTray");
        childWindow.document.title = "Dice Tray - " + await document.title;
    }
    const body = await childWindow.document.querySelector('body');
    var canvas = await document.querySelector('.dice-rolling-panel__container');
    const video = await childWindow.document.querySelector('#video');
    await body.setAttribute("id", 'diceTrayBody');
    var stream = await canvas.captureStream(30);
    if(video.srcObject == undefined || video.srcObject == null){
        video.srcObject = await stream;
    }
    else {
        canvas = await document.querySelector('.dice-rolling-panel__container');
        var newStream = await canvas.captureStream(30);
        var n = 0;
        var videoTags = await childWindow.document.getElementsByTagName("video");
        for (let i=0; i < videoTags.length; i++){
            if(n>2) {
                await childWindow.document.querySelector('#video'+n).remove();
                await focus();
                n=3;
                break;
            }
            else {
            n+=1;
            }
        }
        await childWindow.document.write('<video id="video'+n+'" muted autoplay></video>');
        const newVideo = await childWindow.document.querySelector('#video'+n);
        newVideo.srcObject = await newStream;
    }
    await window.addEventListener('resize', function(event){
        if(childWindow.location.href.indexOf("abovevtt") > -1 && childWindow.location.href.indexOf("encounter") > -1 && childWindow.location.href.indexOf("#DiceTray") > -1){}
        else{
            if(childWindow.innerHeight < (childWindow.screen.height-1) && childWindow.innerwidth != childWindow.screen.width) {
                resizeChild(childWindow);
            }
        }
    });
    return childWindow;
}

setTimeout(async function() {
    childWindow = await diceTray();
}, 1000);
