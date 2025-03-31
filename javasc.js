let light = document.getElementById("Light");
let navColor = document.getElementsByClassName("nav-link");
let body = document.getElementById("body");
let textWhite = document.getElementsByClassName("text-dark-mode");
let expertiseCard1 = document.getElementById("expertise-card-1");
let expertiseCard2 = document.getElementById("expertise-card-2");
let expertiseCard3 = document.getElementById("expertise-card-3");

light.addEventListener("click", () => {
  if (light.textContent == "Light") {
    light.textContent = "Dark";
    minenav.style.background = "#fff";
    for (let i = 0; i <= 4; i++) {
      navColor[i].style.color = "#000";
    }
    body.style.background = "#fff";
    for (let i = 0; i < textWhite.length; i++) {
      textWhite[i].style.color = "#000";
    }
    expertiseCard1.style.background = "#b0b5b9";
    expertiseCard2.style.background = "#b0b5b9";
    expertiseCard3.style.background = "#b0b5b9";

    console.log("Light");
  } else {
    minenav.style.background = "#000";
    light.textContent = "Light";
    for (let i = 0; i <= 4; i++) {
      navColor[i].style.color = "#fff";
    }
    body.style.background = "#000";
    for (let i = 0; i < textWhite.length; i++) {
      textWhite[i].style.color = "#fff";
    }

    expertiseCard1.style.background = "rgb(29, 29, 29)";
    expertiseCard2.style.background = "rgb(29, 29, 29)";
    expertiseCard3.style.background = "rgb(29, 29, 29)";
    console.log("Dark");
  }
});
