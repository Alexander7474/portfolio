
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

function createWindowMe() {
  const win = createWindow();
  const bodyWin = win.querySelector(".body-window");

  bodyWin.innerHTML = `
    <p class="medium-font">Salut, je suis<br><br>
    <b>Alexandre Lanternier</b><br>
    <span class="little-font">Etudiant en informatique</span></p>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function createWindowGit() {
  const win = createWindow();
  const bodyWin = win.querySelector(".body-window");

  bodyWin.innerHTML = `
    <div class="github-profile">
      <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Photo de Profil GitHub">
      <h1>Alexandre Lanternier</h1>
      <p>Développeur passionné - Suivez mon travail sur GitHub !</p>
      <a href="https://github.com/Alexander7474" target="_blank">Voir mon GitHub</a>
    </div>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function createWindowHTB() {
  const win = createWindow();
  const bodyWin = win.querySelector(".body-window");

  bodyWin.innerHTML = `
    <div class="htb-badge">
      <img class="htb-avatar" src="https://www.hackthebox.com/storage/avatars/2c140cfcb1f046e098dc26af6a79719a.png" alt="Avatar">
      <div class="htb-info">
        <div class="htb-line">
          <span class="htb-nickname">Alexander74</span> <span class="htb-rank">Script Kiddie</span>
        </div>
        <div class="htb-line">
          <span class="htb-ranking">Rank: 896</span>
          <img class="htb-icons" src="https://www.hackthebox.com/images/screenshot.png" alt="points">
          <span class="htb-points">10</span>
          <img class="htb-icons" src="https://www.hackthebox.com/images/star.png" alt="respect">
          <span class="htb-respect">0</span>
        </div>
        <div class="htb-line">
          <a class="htb-link" href="https://www.hackthebox.com" target="_blank">hackthebox.com</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function setBackground(bgPath) {
  const bgDiv = document.getElementById("main-bg");
  bgDiv.style.backgroundImage = "url('" + bgPath + "')";
}
