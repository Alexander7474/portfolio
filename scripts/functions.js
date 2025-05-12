
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
      Une <strong>librairie 2D</strong> en <strong>C++</strong> avec <strong>OpenGL</strong>.
    </p>
    <a href="https://github.com/Alexander7474/Bbop-2D" style="color: #38bdf8; text-decoration: underline;">Bbop-2D</a>
    <p class="medium-font">
      <b>24h pour coder:</b>
    </p>
    <p style="margin-bottom: 1rem;">
      Deux fois participant au concours <strong>24h pour coder</strong> organiser par le BDE du CERI. Mon équipe a fini à chaque fois sur le podium en utilisant la librairie Bbop-2D
    </p>
    <a href="https://github.com/Alexander7474/24h-game" style="color: #38bdf8; text-decoration: underline;">Première participation</a>
    <a href="https://github.com/Alexander7474/24h-coder-2" style="color: #38bdf8; text-decoration: underline;">Seconde participation</a>
    <p class="medium-font">
      <b>System Info:</b>
    </p>
    <p style="margin-bottom: 1rem;">
      Un outils de survéillance de server linux développé en bash et en python.
    </p>
    <a href="https://github.com/Alexander7474/System_Information" style="color: #38bdf8; text-decoration: underline;">System Information</a>
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
      <p> Root Me </p>
      <a class="htb-link" href="https://www.root-me.org/Alexander74">
        <div class="show_js_badge" style="width: 440px; height:100px; background-color: #343c41; border-radius:8px; text-align: left;
          background-image: url(https://root-me-badge.cloud.duboc.xyz/storage_server/skull-white.png); background-size: 40px 40px;
          background-position: right 4px bottom 6px; background-repeat: no-repeat;">
            <style scoped>
                @font-face {
                    font-family: "Roboto"; font-style: normal; font-weight: 400;
                    src: url(https://root-me-badge.cloud.duboc.xyz/storage_server/htb-font.woff2) format("woff2");
                }
                .rootme_font {
                    font-family: "Roboto", monospace;
                }
                .rootme_nickname {
                    color: #ffffff; font-size: 24px; font-weight: bold;
                }
                .rootme_points {
                    color: #4bb7ef; font-size: 20px; position: relative; right: 22px;
                }
                .rootme_top {
                    color: #ffae01; font-size: 20px; position: relative; right: 40px;
                }
                .rootme_ranking {
                    color: #ffffff; font-size: 20px;
                }
                .rootme_line {
                    line-height: 24px; margin: 0px; padding: 0px;
                }
                .rootme_link {
                    color: #9acc14; font-size: 1.2em; text-decoration: none;
                }
                .rootme_link:hover {
                    color: #9acc14; font-size: 1.2em; text-decoration: underline;
                }
                .rootme_link:visited {
                    color: #9acc14;
                }
                .rootme_rank {
                    color: #ffffff; font-size: 22px;
                }
                .rootme_icon_target {
                    position: relative; top: 4px; right: 8px; width: 20px; height:20px;
                }
                .rootme_icon_star {
                    position: relative; top: 3.6px; right: 28px; width: 20px; height:20px;
                }
            </style>

            <div style="width: 80px; height: 80px; border-radius:8px; float:left; margin-top:10px; margin-left:10px;">
                <img style="width:80px; height: 80px; border-radius:8px;" src="img/2025-02-19_18-35.png">
            </div>

            <div class="rootme_font" style="float:left; height:80px; padding-left: 10px; margin-top:10px;">
                <p class="rootme_line">
                    <span class="rootme_nickname">Alexander74</span>
                    <span class="rootme_rank">trainee</span><br>
                </p>
                <p class="rootme_line">
                    <span class="rootme_ranking">Score:830</span>
                    <img src="https://root-me-badge.cloud.duboc.xyz/storage_server/target.png" class="rootme_icon_target">
                    <span class="rootme_points">66/599</span>
                    <img src="https://root-me-badge.cloud.duboc.xyz/storage_server/star.png" class="rootme_icon_star">
                    <span class="rootme_top">4.23%</span><br>
                </p>
                <p class="rootme_line">
                    <a href="https://www.root-me.org" class="rootme_link">root-me.org</a>
                </p>
            </div>
          </div>
        </a>

        <br>
        <p> Try Hack Me </p>

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
