"use strict";

//document.body.style.background = "red";
/*
document.body.style.opacity = 0;
document.body.style.transition = "1s";
*/
// 1 Le contenu de body apparait avec transition
//setTimeout cree un delai.
setTimeout(() => {
  document.body.style.opacity = 1; //style inline, force 500
}, 500);

// 2 La propriété background-color de l'élément header est aléatoire ["hotpink", "tomato", "orange"]
const headerEl = document.getElementById("header");
console.dir(headerEl);
const colors = ["hotpink", "tomato", "orange"];
const randomIndexColor = Math.floor(Math.random() * colors.length);

//headerEl.style.backgroundColor = colors[randomIndexColor];

headerEl.setAttribute(
  "style",
  `background-color:${colors[randomIndexColor]}!important;`
);

// 3 Le tagline est aléatore ['Hello', 'Salut', 'Hola', 'Cześć']
const tagline = document.querySelector("#tagline");

const bonjours = ["Hello", "Salut", "Hola", "Cześć"];

const randomBonjoursIndex = Math.floor(Math.random() * bonjours.length);

tagline.innerHTML = `<strong>${bonjours[randomBonjoursIndex]}</strong>`;

// 4 L'intro-criteres contient l'information sur le nombre de critères

const pIntroEl = document.getElementById("intro-criteres");

const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix `;

// 5 Le bouton info affiche le titre (lang) et URL de la page
const infoBtn = document.getElementById("info-btn");
// OU const infoBtn = document.querySelector("#info-btn")

const infoBtnClickHandler = () => {
  alert(
    `Le titre de cette page est "${document.title}" (${document.documentElement.lang})`
  );
};
if (infoBtn) {
  infoBtn.addEventListener("click", infoBtnClickHandler);
}

// 6 Le panneau publicitaire disparait en click (il faut appliqué le clique sur le boutton et non sur la pub )
// 7 Le panneau publicitaire disparait en click sur le bouton
const pubEl = document.getElementById("pub");
// OU const pubEl = document.querySelector("#pub-btn")

const pubBtn = document.getElementById("pub-btn");
if (pubBtn) {
  pubBtn.addEventListener("click", () => {
    //on ne veut plus avoir pubEl
    pubEl.remove();
    // ou cacher le panneau
    //pubEl.hidden = true;
  });
}

// 8 Le bouton 😎 regénere la tagline
const generateHeader = () => {
  const headerEl = document.getElementById("header");
  console.dir(headerEl);
  const colors = ["hotpink", "tomato", "orange"];
  const randomIndexColor = Math.floor(Math.random() * colors.length);
  const tagline = document.querySelector("#tagline");
  const bonjours = ["Hello", "Salut", "Hola", "Cześć"];
  const randomBonjoursIndex = Math.floor(Math.random() * bonjours.length);

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important;`
  );

  tagline.innerHTML = `<strong>${bonjours[randomBonjoursIndex]}</strong>`;
};
generateHeader();

const headerBtn = document.querySelector("#header button");

if (headerBtn) {
  headerBtn.addEventListener("click", generateHeader);
}

// 9 Et si on voulait désactiver tous les boutons ?
const buttons = document.querySelectorAll("button");
//ou const buttons = document.getElementsByTagName('button')
for (let button of buttons) {
  button.disabled = true;
}

// 10 Ajouter un element a la page
const pCookies = document.createElement("p");
pCookies.textContent = "Ce site n'utilise pas de cookies";
document.body.append(pCookies);
pCookies.className = "text-center";
