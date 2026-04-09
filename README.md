# Projet TP2 : Tableau de Bord Météo en Temps Réel via WebSocket

## 1. Présentation du Projet
Ce projet implémente une architecture client-serveur de type "temps réel" permettant la visualisation dynamique de données météorologiques. L'application repose sur le protocole WebSocket (RFC 6455) pour assurer une communication bidirectionnelle continue et à faible latence entre un serveur backend Node.js et une interface utilisateur web.

## 2. Architecture Technique

### Backend (Node.js)
Le serveur agit comme un fournisseur de données (Data Provider).
* **Technologie :** Node.js avec les modules `ws` et `csvtojson`.
* **Fonctionnement :** Il écoute sur le port 5002. À chaque nouvelle connexion client, il procède à l'extraction des données depuis un fichier plat (`temp.csv`), les convertit au format JSON, et les transmet via un flux continu (Stream) à raison d'un paquet toutes les 3 secondes.

### Frontend (Client Web)
Le client agit comme un consommateur de données (Data Consumer).
* **Technologie :** HTML5, CSS3, JavaScript natif, `Chart.js`, `jQuery`.
* **Fonctionnement :** Il initie la connexion WebSocket. À la réception de chaque trame JSON, il met à jour le Modèle Objet du Document (DOM) de manière asynchrone, alimentant un tableau de données et deux graphiques de suivi statistique.

## 3. Fonctionnalités Implémentées
* **Streaming de données :** Transmission asynchrone des données CSV vers le client.
* **Visualisation Graphique :**
  * Suivi des températures (Max/Min) via un graphique linéaire (Line Chart).
  * Suivi de la pluviosité via un graphique en barres (Bar Chart).
* **Contrôle d'état (Extensions) :**
  * Interruption et reprise de la consommation du flux (Pause/Reprise).
  * Réinitialisation de l'environnement de travail et purge des données (Reset).

## 4. Structure de l'Arborescence
```text
tp2-meteo-realtime/
│
├── node_modules/         # Dossier généré automatiquement (contient ws, csvtojson, etc.)
│
├── app2.js               # Le serveur backend (Node.js) qui lit le CSV et envoie les données
├── index_tab.html        # Le client frontend (HTML/JS) avec le tableau, les graphiques et les boutons
│
├── package-lock.json     # Fichier généré automatiquement par npm (verrouille les versions)
├── package.json          # Fichier de configuration du projet (liste tes dépendances)
│
├── temp.csv              # Ta base de données simulée (les données météo brutes)
└── README.md             # Le fichier de présentation et de documentation de ton projet

```


## 🎥 Démo de l'application





## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Module :** `Développement web full-stack avec JavaScript`
