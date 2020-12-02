$(document).ready(function() {

var spielbrett = document.getElementById('leinwand')

var spielfigur = new Image();
spielfigur.src='bilder/spielfigur.png';

spielfeld = spielbrett.getContext('2d');

console.log(spielfeld);
console.log("spielfigur: "+spielfigur.src);
});