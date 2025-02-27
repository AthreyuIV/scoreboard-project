const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const homePlusOne = document.getElementById("plus-one-home");
const homePlusTwo = document.getElementById("plus-two-home");
const homePlusThree = document.getElementById("plus-three-home");
const guestPlusOne = document.getElementById("plus-one-guest");
const guestPlusTwo = document.getElementById("plus-two-guest");
const guestPlusThree = document.getElementById("plus-three-guest");
const resetButton = document.getElementById("reset-button");
const quarterButton = document.getElementById("quarter-button");

homePlusOne.addEventListener("click", () => homeScore.textContent = parseInt(homeScore.textContent) + 1);
homePlusTwo.addEventListener("click", () => homeScore.textContent = parseInt(homeScore.textContent) + 2);
homePlusThree.addEventListener("click", () => homeScore.textContent = parseInt(homeScore.textContent) + 3);
guestPlusOne.addEventListener("click", () => guestScore.textContent = parseInt(guestScore.textContent) + 1);
guestPlusTwo.addEventListener("click", () => guestScore.textContent = parseInt(guestScore.textContent) + 2);
guestPlusThree.addEventListener("click", () => guestScore.textContent = parseInt(guestScore.textContent) + 3);

resetButton.addEventListener("click", () => {
    homeScore.textContent = "0";
    guestScore.textContent = "0";
});

quarterButton.addEventListener("click", () => {});



