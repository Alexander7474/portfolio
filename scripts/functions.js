
// Met a jour le temps dans tous les éléments avec l'id time
function updateTime() {
  // heure actuelle
  const now = new Date();

  // Format
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  // Mettre l'heure a jour
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

function createWindow() {
  //creation de la fenêtre 
  const win = document.createElement("div");
  win.classList.add("window");

  //creation de la top bar de la fenetre 
  const topWin = document.createElement("div");
  topWin.classList.add("top-window");

  //creation du body de la fenêtre 
  const bodyWin = document.createElement("div");
  bodyWin.classList.add("body-window");

  //creation des trois boutons de la top bar 
  let buttons = [];
  for(let i = 0; i < 3; i++){
    const b = document.createElement("div");
    b.classList.add("icon-anim");
    b.classList.add("circular-button");
    buttons.push(b);
  }

  buttons[0].classList.add("hide-button");
  buttons[1].classList.add("resize-button");
  buttons[2].classList.add("close-button");

  for (let i = 0; i < 3; i++) {
    topWin.appendChild(buttons[i]);
  }

  win.appendChild(topWin);
  win.appendChild(bodyWin);
  
  return win;
}

function setBackground(bgPath) {
  const bgDiv = document.getElementById("main-bg");
  bgDiv.style.backgroundImage = "url('" + bgPath + "')";
}
