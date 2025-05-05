
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
    <div class="center-align"> 
      <p class="medium-font">Salut, je suis<br><br>
      <b>Alexandre Lanternier</b><br>
      <span class="little-font">Etudiant en informatique</span></p>
    </div>
    <p>
      <b>Qualités:</b>
    </p>
    <p>
      - Curieux
    </p>
    <p>
      - Patient
    </p>
    <p>
      <b>Certifications:</b>
    </p>
    <p>
      - <strong>CCNA1</strong>
    </p>
    <p style="margin-bottom: 1rem;">
      - <strong>eJPTv2, </strong> actuellement en préparation pour approfondir mes compétences en sécurité offensive.
    </p>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function createWindowGit() {
  const win = createWindow();
  const bodyWin = win.querySelector(".body-window");

  bodyWin.innerHTML = `
    <div class="center-align"> 
      <p class="medium-font">Mes projets</p>
    </div>
    <p class="medium-font">
      <b>Bbop-2D:</b>
    </p>
    <p style="margin-bottom: 1rem;">
      Une <strong>librairie 2D</strong> en <strong>C++</strong> avec <strong>OpenGL</strong>. <a href="https://github.com/Alexander7474/Bbop-2D" style="color: #38bdf8; text-decoration: underline;">Bbop-2D</a>.
    </p>
    <p class="medium-font">
      <b>24h pour coder:</b>
    </p>
    <p style="margin-bottom: 1rem;">
      Deux fois participant au concours <strong>24h pour coder</strong> organiser par le BDE du CERI. J'ai terminé avec mon équipe à chaque fois sur le podium en utilisant la librairie Bbop-2D
    </p>
    <p class="medium-font">
      <b>System Inforation:</b>
    </p>
    <p style="margin-bottom: 1rem;">
      Un outils de survéillance de server linux développé en bash et en python. <a href="https://github.com/Alexander7474/System_Information" style="color: #38bdf8; text-decoration: underline;">System Information</a>.
    </p>
    <p class="medium-font">
      <b>GitHub:</b>
    </p>
    <div class="center-align"> 
      <div class="github-profile">
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Photo de Profil GitHub">
        <h1>Alexandre Lanternier</h1>
        <p>Suivez tous mes projets sur GitHub !</p>
        <a href="https://github.com/Alexander7474" target="_blank">Voir mon GitHub</a>
      </div>
    </div>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function createWindowHTB() {
  const win = createWindow();
  const bodyWin = win.querySelector(".body-window");

  bodyWin.innerHTML = `
    <div class="center-align"> 
      <p class="medium-font">CTF</p>
    </div>
    <p style="margin-bottom: 1rem;">
        Passionné par la <strong>cybersécurité</strong> et le <strong>pentesting</strong>, je fais régulièrement des <strong>CTF</strong> sur <em>Hack The Box</em> et <em>TryHackMe</em>.
      </p>


    <div class="center-align">  
      <br>
      <p>Hack The Box</p>

      <a class="htb-link" href="https://app.hackthebox.com/profile/384315">
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
      </a>

      <br>
      <p> TryHackMe </p>

      <div style="overflow: hidden; width: 390px; height: 500px;">
        <iframe 
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=592596" 
          style="border:none; transform: scale(1.2); transform-origin: top left; width: 100%; height: 100%;">
        </iframe>
      </div>
    </div>
  `;

  document.getElementById("windows-conteneur").appendChild(win);
}

function setBackground(bgPath) {
  const bgDiv = document.getElementById("main-bg");
  bgDiv.style.backgroundImage = "url('" + bgPath + "')";
}
