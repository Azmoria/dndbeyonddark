// ==UserScript==
// @name         Dice Tray Stream Window
// @namespace    Azmoria
// @version      1.0.003
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
// ==/UserScript==
var childWindow;

function OpenWindow()
{

  if(typeof(childWindow) == 'undefined' || childWindow.closed)
  {
    //create new
    var url = "https://www.dndbeyond.com/DiceTray";
    childWindow = window.open('', 'Dice Tray');
    var childUrl = childWindow.document.location.href;
    var subChildStr = childUrl.substring(childUrl.length - 9)
    if(childWindow == null || subChildStr != "/DiceTray")
    {
      childWindow = window.open(url, 'Dice Tray');
    }
  }
  else
  {

  }
}

setTimeout(function() {

    OpenWindow();
    if(childWindow.document.querySelector('video')==null){
        childWindow.document.write('<video id="video" muted autoplay></video>');
    }
    const video = childWindow.document.querySelector('video');
    const body = childWindow.document.querySelector('body');
    const canvas = document.querySelector('canvas');
    var stream = canvas.captureStream(60);
    body.setAttribute("id", 'diceTrayBody');
    childWindow.postMessage("addSourceToVideo", childWindow.document.location.href);
    childWindow.document.title = "Dice Tray - " + document.title;
    childWindow.history.pushState({}, "Dice Tray - " + document.title, "/DiceTray");
    video.srcObject = stream;

}, 1000);







