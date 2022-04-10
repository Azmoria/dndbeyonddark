// ==UserScript==
// @name         Dice Speed DNDBeyond
// @namespace    Azmoria
// @version      0.1
// @description  Modify the speed of the dice
// @author       Azmoria
// @include      https://www.dndbeyond.com/profile/*/characters/*
// @include      https://www.dndbeyond.com/characters/*
// @include      https://www.dndbeyond.com/encounter-builder
// @include      https://www.dndbeyond.com/combat-tracker*
// @include      https://www.dndbeyond.com/encounters/*
// @include      https://www.dndbeyond.com/my-encounters
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dndbeyond.com
// @grant        none
// ==/UserScript==

(function() {
    let diceSpeed = 1000/60; // This is the number of ms between frames. You can put in forumlas or numbers. 1000/60 = 60fps = ~ 16. The dice have a set number of frames in a full animation therefore a lower number will = faster dice
	window.requestAnimationFrame = function(e) { setTimeout(e, diceSpeed); }
})();
