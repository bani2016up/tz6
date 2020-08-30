const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
$(".game-field").removeClass("target");
$(".game-field").html("");

  let divSelector = randomDivId();
  $(divSelector).addClass("target");

  


  
  



  // TODO: помечать target текущим номером

  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === 0){
    firstHitTime=getTimestamp();
  }
console.log("firstHitTime" , firstHitTime)
  $(divSelector).html(hits+1);
 
  console.log("hits", hits);
  
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $(".game-field").hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }
}



function init() {


  $(".game-field").click(handleClick);

  $("#button-start").click(function() {
    round();
    $("#button-start").hide();
  });

  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
