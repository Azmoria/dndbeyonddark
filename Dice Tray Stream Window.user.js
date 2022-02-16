// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      1.0.013
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
    childWindow = await window.open('', 'Dice Tray', 'toolbar=0,location=0,menubar=0,width="'+window.innerWidth+'",height="'+window.innerHeight+'"');
    if(childWindow.document.querySelector('video') == undefined || childWindow.document.querySelector('video') == null){
        await childWindow.document.write('<video id="video" muted autoplay></video>');
    }
    await childWindow.history.pushState({}, "Dice Tray - " + document.title, window.location.href+"#DiceTray");
    childWindow.document.title = "Dice Tray - " + await document.title;
    resizeChild(childWindow);
    const body = await childWindow.document.querySelector('body');
    const canvas = await document.querySelector('canvas');
    const video = await childWindow.document.querySelector('video');
    await body.setAttribute("id", 'diceTrayBody');
    var stream = await canvas.captureStream(30);
    video.srcObject = await stream;
    await window.addEventListener('resize', function(event){
        if(childWindow.innerHeight != screen.height) {
            resizeChild(childWindow);
        }
    });
    return childWindow;
}

setTimeout(async function() {
    childWindow = await diceTray();
}, 1000);
