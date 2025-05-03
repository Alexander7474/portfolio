// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Initialiser l'heure dès le début
updateTime();

// getion des tiles
let winCount = 1; // Compteur de tile

createWindowMe();
createWindowGit();
createWindowHTB();

//chargement de la liste de fond d'ecran
let backgrounds = [
  "img/background0.jpg",
  "img/background1.jpg",
  "img/background2.jpg"
];
let actualBgCnt = 0;  

//listener sur la list d'icon dans la bar de navigation
document.querySelectorAll(".nav-icon").forEach(div => {
  div.addEventListener("click", function() {
    const name = div.querySelector("img").getAttribute("alt");

    if(name == "Me"){ // Page personnel
      createWindowMe();
    }else if(name == "Git"){ //Page github
      createWindowGit();
    }else if(name == "HTB"){ //Page Hack the box
      createWindowHTB();
    }
  });
});

//listenner sur le conteneur de fenêtre
document.getElementById("windows-conteneur").addEventListener("click", (event) => {
  // Vérifier si l'élément cliqué est une div avec la classe "carre"
  if (event.target && event.target.classList.contains("close-button")) {
    event.target.parentElement.parentElement.remove();
  }
  if (event.target && event.target.classList.contains("hide-button")) {
    event.target.parentElement.parentElement.remove();
  }
});

//listenner sur le bouton de changement de font d'écran 
document.getElementById("change-bg").addEventListener("click", (event) => {
  actualBgCnt++;
  if(actualBgCnt >= backgrounds.length){
    actualBgCnt = 0;
  }
  setBackground(backgrounds[actualBgCnt]);
});
