const teamoneNumShoots = document.querySelector("#teamone-numshots");
const teamoneShootButton = document.querySelector("#teamone-shoot-button");
const teamtwoNumShoots = document.querySelector("#teamtwo-numshots");
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
const numResets = document.querySelector("#num-resets");
const resetButton = document.querySelector("#reset-button");

teamoneShootButton.addEventListener("click", function () {
  let counterValue = Number(teamoneNumShoots.innerHTML) + 1;
  teamoneNumShoots.innerHTML = counterValue;
  if (Math.random() * 100 < 55) {
    console.log("Shot made!");
  }
});

teamtwoShootButton.addEventListener("click", function () {
  let counterValue = Number(teamtwoNumShoots.innerHTML) + 1;
  teamtwoNumShoots.innerHTML = counterValue;
  if (Math.random() * 100 < 55) {
    console.log("Shot made!");
  }
});

resetButton.addEventListener("click", function () {
  let counterValue = Number(numResets.innerHTML) + 1;
  numResets.innerHTML = counterValue;
  teamoneNumShoots.innerHTML = 0;
  teamtwoNumShoots.innerHTML = 0;
});
