// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      1.0.010
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
    var winHeight = window.innerHeight;
    var winwidth = window.innerWidth;
    if(winwidth<1070){
        child.resizeTo(winwidth+17, winHeight+69);
    }
    else{
        child.resizeTo(winwidth-1, winHeight+60);
    }
}

async function diceTray() {
    childWindow = await window.open('', 'Dice Tray', 'toolbar=0,location=0,menubar=0');
    await childWindow.document.write('<video id="video" muted autoplay></video>');
    await childWindow.history.pushState({}, "Dice Tray - " + document.title, "/DiceTray");
    childWindow.document.title = "Dice Tray - " + await document.title;
    resizeChild(childWindow);
    const body = await childWindow.document.querySelector('body');
    const canvas = await document.querySelector('canvas');
    const video = await childWindow.document.querySelector('video');
    await body.setAttribute("id", 'diceTrayBody');
    var stream = await canvas.captureStream(30);
    video.srcObject = await stream;
    await window.addEventListener('resize', function(event){
        resizeChild(childWindow);
    });
    return childWindow;
}

setTimeout(async function() {
    childWindow = await diceTray();
}, 1000);
