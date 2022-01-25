// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      0.5
// @description  Stream your Dice to another window
// @author       Azmoria
// @include      https://www.dndbeyond.com/profile/*/characters/*
// @include      https://www.dndbeyond.com/characters/*
// @include      https://www.dndbeyond.com/encounter-builder
// @include      https://www.dndbeyond.com/combat-tracker*
// @include      https://www.dndbeyond.com/campaigns/*
// @include      https://www.dndbeyond.com/encounters/*
// @include      https://www.dndbeyond.com/my-encounters
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dndbeyond.com
// ==/UserScript==

setTimeout(function () {

const childWindow = window.open(window.location.href + 'DiceTray')
childWindow.document.write('<video id="video" muted autoplay></video>')
const canvas = document.querySelector('canvas');
const video = childWindow.document.querySelector('video');
const body = childWindow.document.querySelector('body');
body.setAttribute("id", 'diceTrayBody');
const stream = canvas.captureStream();
childWindow.document.title = "Dice Tray - " + document.title;
video.srcObject = stream;


 }, 1000);





