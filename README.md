# Projet : Horoscope Oracle du Jour

Une application web frontend simple et élégante qui affiche l'horoscope du jour en se connectant à une API externe. Ce projet a été réalisé dans le cadre de l'ECF 1 pour le titre DWWM.

## Site en ligne

[https://ecf1-bernard-kellyan.sidathsoeun.fr/](https://ecf1-bernard-kellyan.sidathsoeun.fr/)

## Fonctionnalités

* **Appel API :** Un clic sur le bouton "Tirer les 12 messages" lance un appel `POST` à une API externe.
* **Affichage Dynamique :** Les 12 messages de l'horoscope sont générés dynamiquement en JavaScript et affichés sous forme de cartes.
* **Retours Visuels :** Un loader est visible pendant le chargement des données et un message d'erreur clair s'affiche en cas de problème.
* **Design Responsive :** L'interface est entièrement responsive et s'adapte aux écrans mobiles, tablettes et ordinateurs.
* **Animations CSS :** Des transitions fluides au survol des cartes améliorent l'expérience utilisateur.

## Technologies utilisées

* HTML5 (Sémantique)
* CSS3 (Grid, Flexbox, Media Queries)
* JavaScript Natif (Vanilla JS) avec `fetch()` pour les appels API.

## Organisation des fichiers

Le projet suit une structure claire pour séparer les responsabilités :
- `index.html`: Fichier principal de la structure de la page.
- `assets/css/style.css`: Fichier contenant tous les styles.
- `assets/js/main.js`: Fichier contenant toute la logique de l'application.
- `assets/images/`: Dossier pour les images (favicon, etc.).

## Lancer le projet en local

1.  Clonez le dépôt : `git clone https://github.com/depot`
2.  Ouvrez le dossier du projet.
3.  Ouvrez le fichier `index.html` directement dans votre navigateur web.