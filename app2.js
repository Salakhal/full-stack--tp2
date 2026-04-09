// On importe les modules de façon plus moderne
const { WebSocketServer } = require("ws");
const convertisseurCsv = require("csvtojson");

// Configuration du port
const portServeur = 5002;
const serveurMeteo = new WebSocketServer({ port: portServeur });

console.log(`✅ Serveur prêt et en écoute sur ws://localhost:${portServeur}`);

// Quand un navigateur (client) se connecte à notre serveur
serveurMeteo.on("connection", async (clientConnecte) => {
  console.log("🟢 Un nouveau dashboard vient de se connecter !");

  try {
    // 1. Lecture du fichier et transformation en tableau JSON
    const donneesMeteo = await convertisseurCsv().fromFile("temp.csv");
    
    // Curseur pour savoir où on en est dans le tableau
    let indexLigne = 0;

    // 2. Envoi progressif des données (toutes les 3 secondes)
    const chronometre = setInterval(() => {
      // Tant qu'il reste des données à lire
      if (indexLigne < donneesMeteo.length) {
        const ligneActuelle = donneesMeteo[indexLigne];
        clientConnecte.send(JSON.stringify(ligneActuelle));
        indexLigne++;
      } else {
        // Si on a tout lu, on stoppe la boucle
        clearInterval(chronometre);
      }
    }, 3000);

    // 3. Que faire si le client ferme la page web ?
    clientConnecte.on("close", () => {
      clearInterval(chronometre); // On arrête d'envoyer des données dans le vide
      console.log(" Le dashboard s'est déconnecté.");
    });

  } catch (erreur) {
    console.error("❌ Problème détecté côté serveur :", erreur);
  }
});