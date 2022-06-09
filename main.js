var interval;
var distance = 0;

function playGame() {
  play_game.style.display = "none";
  interval = setInterval(() => {
    player.style.left = distance++ + "px";
    player.style.top = distance + "px";
    // console.log(distance);
    if (distance >= 500) {
      clearInterval(interval);
      alert("GAME OVER");
    }
  }, 100);
}

function getPlayerKey(e) {
  if (e.key == "arrowUp") {
    player.style.top = distance - 1 + "px";
  }
}
