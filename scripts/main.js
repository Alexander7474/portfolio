// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Initialiser l'heure dès le début
updateTime();

// getion des tiles
let winCount = 1; // Compteur de tile
   
//listener sur la list d'icon dans la bar de navigation
document.querySelectorAll(".nav-icon").forEach(div => {
  div.addEventListener("click", function() {
    const name = div.querySelector("img").getAttribute("alt");

    const win = createWindow();
    const bodyWin = win.querySelector(".body-window");

    if(name == "Me"){ // Page personnel

      bodyWin.innerHTML = "<h1>Alexandre LANTERNIER</h1>";
      bodyWin.innerHTML += "<p>Bienvenue sur mon portfolio</p>";

    }else if(name == "Git"){ //Page github

    }else if(name == "HTB"){ //Page Hack the box
      bodyWin.innerHTML = "<p>Mon profil Hack the box</p>";
      bodyWin.innerHTML += "<a href='https://app.hackthebox.com/profile/384315'><img src='https://www.hackthebox.com/badge/image/384315'></a>";
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
