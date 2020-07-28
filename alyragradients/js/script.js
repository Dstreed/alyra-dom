"use strict";

/* 
le script gradients.js est chargé avant script.js
la variable gradients est disponible - vous pouvez le voir dans la console
*/
console.log(gradients);

/* dans le paragraphe #intro afficher la phrase 
Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles

ou ... correspond au nombre de dégradés */
const intro = document.querySelector("#intro");
intro.innerHTML = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`;

/* header : 
ajouter la propriété backgroundImage au style de header
linear-gradient(90deg, .., ..)
ou ... correspondent aux couleurs start et end d'un des objet de l'array gradients (choix aléatoire)

Le bouton #header-button permet de regénérer le header (=changer le dégradé)
*/

/*const headerEl = document.getElementById("header");

const randomIndexGradients = Math.floor(Math.random() * gradients.length);

const randomGradients = gradients[randomIndexGradients];

const startColors = randomGradients.start;

const endColors = randomGradients.end;

console.log(randomGradients);
console.log("start", startColors);
console.log("end", endColors);

const gradientsCSS = `linear-gradient(to right, ${startColors}, ${endColors})`;
header.style.backgroundImage = gradientsCSS;*/

const generateHeader = () => {
  const randomIndexGradients = Math.floor(Math.random() * gradients.length);

  const randomGradients = gradients[randomIndexGradients];

  const startColors = randomGradients.start;

  const endColors = randomGradients.end;

  const gradientsCSS = `linear-gradient(to right, ${startColors}, ${endColors})`;
  header.style.backgroundImage = gradientsCSS;
};
generateHeader();

const headerBtn = document.getElementById("header-button");

if (headerBtn) {
  headerBtn.addEventListener("click", generateHeader);
}
