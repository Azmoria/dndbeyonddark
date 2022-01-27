// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      0.8
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
// ==/UserScript==

setTimeout(function() {
    const childWindow = window.open("", "");
    childWindow.document.write('<video id="video" muted autoplay></video>');
    const video = childWindow.document.querySelector('video');
    const body = childWindow.document.querySelector('body');
    const canvas = document.querySelector('canvas');
    const stream = canvas.captureStream();
    body.setAttribute("id", 'diceTrayBody');
    video.srcObject = stream;
    childWindow.history.pushState({}, "Dice Tray - " + document.title, "#DiceTray");
    childWindow.document.title = "Dice Tray - " + document.title;
}, 1000);






