// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Initialiser l'heure dès le début
updateTime();

// getion des tiles
let winCount = 1; // Compteur de tile

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

    const win = createWindow();
    const bodyWin = win.querySelector(".body-window");

    if(name == "Me"){ // Page personnel

      bodyWin.innerHTML = "<h1>\uf4ff Alexandre LANTERNIER</h1>";
      bodyWin.innerHTML += "<p>Welcome to my portfolio</p>";

    }else if(name == "Git"){ //Page github

      bodyWin.innerHTML = "<a target='_blank' href='https://github.com/Alexander7474'><p>Mon profil github \uf245</p></a>";

    }else if(name == "HTB"){ //Page Hack the box

      bodyWin.innerHTML = "<p style='color:green;'>My Hack the Box profile \uf024</p>";
      bodyWin.innerHTML += "<a target='_blank' href='https://app.hackthebox.com/profile/384315'><img src='https://www.hackthebox.com/badge/image/384315' width='400' height='100'></a>";

    }

    document.getElementById("windows-conteneur").appendChild(win);
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
