// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      1.0.025
// @description  Stream your Dice to another window
// @author       Azmoria
// @downloadURL  https://github.com/Azmoria/dndbeyonddark/raw/master/Dice%20Tray%20Stream%20Window.user.js
// @updateURL    https://github.com/Azmoria/dndbeyonddark/raw/master/Dice%20Tray%20Stream%20Window.user.js
// @include      https://www.dndbeyond.com/profile/*/characters/*
// @include      https://www.dndbeyond.com/characters/*
// @include      https://www.dndbeyond.com/encounter-builder
// @include      https://www.dndbeyond.com/combat-tracker*
// @include      https://www.dndbeyond.com/encounters/*
// @include      https://www.dndbeyond.com/my-encounters
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dndbeyond.com
// @run-at       document-end
// @grant        window.focus
// ==/UserScript==
var childWindow = null;

async function resizeChild(child){
    var winHeight = await window.innerHeight;
    var winWidth = await window.innerWidth;
    var childHTML = await child.document.documentElement;
    if(winHeight > (screen.height-2) && winWidth == screen.width) {
        await childHTML.requestFullscreen();
    }
    else if(winWidth<screen.width){
        await child.resizeTo(window.outerWidth, winHeight+68);
    }
    else{
        await child.resizeTo(window.outerWidth, winHeight+61);
    }
}

async function diceTray() {
    if(window.parent != null && (window.parent.childWindow != undefined || window.parent.childWindow != null)) {
        childWindow = window.parent.childWindow;
        window.childWindow = childWindow;
        console.log(childWindow.name + " is the child of parent window");
    }
    if (childWindow == null) {
        childWindow = await window.open('', 'Dice Tray', 'toolbar=0,location=0,menubar=0');
        window.childWindow = childWindow;
        window.parent.childWindow = childWindow;
        console.log(childWindow.name + " is the child of this window");
    }
    if(childWindow.document.querySelector('video') == undefined || childWindow.document.querySelector('video') == null){
        await childWindow.document.write('<video id="video" muted autoplay></video>');
        resizeChild(childWindow);
    }
    if(window.location.href.indexOf("abovevtt") > -1) {
        await childWindow.history.pushState({}, "Dice Tray - AboveVTT", window.location.href+"#DiceTray");
        childWindow.document.title = "Dice Tray - AboveVTT";
    }
    else if (window.parent.location.href.indexOf("abovevtt") > -1) {
        await childWindow.history.pushState({}, "Dice Tray - AboveVTT", window.parent.location.href+"#DiceTray");
        childWindow.document.title = "Dice Tray - AboveVTT";
    }
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
        stream.label = await window.location.href;
        video.srcObject = await stream;
    }
    else {
        canvas = await document.querySelector('.dice-rolling-panel__container');
        var newStream = await canvas.captureStream(30);
        newStream.label = await window.location.href;
        var n = 0;
        var videoTags = await childWindow.document.getElementsByTagName("video");
        let addRemove = "Video added to ";
        for (let i=0; i < videoTags.length; i++){
            if(videoTags[i].srcObject.label.indexOf("character") > -1 && window.location.href.indexOf("character") > -1) {
                await childWindow.document.querySelector('#video'+n).remove();
                addRemove = "Video replaced in "
                n=i;
                break;
            }
            if(videoTags[i].srcObject.label.indexOf("combat-tracker") > -1 && window.location.href.indexOf("combat-tracker") > -1){
                if (n > 2) {
                    await childWindow.document.querySelector('#video'+n).remove();
                    addRemove = "Video replaced in "
                    n=i;
                    break;
                }
            }
            if(videoTags[i].srcObject.label.indexOf("encounter-builder") > -1 && window.location.href.indexOf("encounter-builder") > -1){
                await childWindow.document.querySelector('#video'+n).remove();
                addRemove = "Video replaced in "
                n=i;
                break;
            }
            if(videoTags[i].srcObject.label.indexOf("my-encounters") > -1 && window.location.href.indexOf("my-encounters") > -1){
                await childWindow.document.querySelector('#video'+n).remove();
                addRemove = "Video replaced in "
                n=i;
                break;
            }
            else {
                n+=1;
            }
        }
        await childWindow.document.write('<video id="video'+n+'" muted autoplay></video>');
        const newVideo = await childWindow.document.querySelector('#video'+n);
        newVideo.srcObject = await newStream;
        console.log(addRemove + childWindow.name);
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
}, 2000);
