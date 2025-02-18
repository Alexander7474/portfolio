function updateTime() {
  // Récupérer l'heure actuelle
  const now = new Date();

  // Format de l'heure (hh:mm:ss)
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  // Mettre l'heure à jour dans la div
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Initialiser l'heure dès le début
updateTime();
