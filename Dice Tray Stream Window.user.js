// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      0.2
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

window.onload = function(){

const childWindow = window.open('DiceTray')
childWindow.document.write('<video id="video"></video>')
const canvas = document.querySelector('canvas');
const video = childWindow.document.querySelector('video');
const body = childWindow.document.querySelector('body');
video.setAttribute("controls", '');
body.setAttribute("id", 'diceTrayBody');
const stream = canvas.captureStream();
video.srcObject = stream;


}





