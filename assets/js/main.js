// 1. On sélectionne le bouton dans le document HTML grâce à son ID.
const fetchButton = document.querySelector('#fetch-button');

// 2. On ajoute un "écouteur d'événement" sur ce bouton.
// Il va surveiller l'événement 'click' et exécuter une fonction dès que cet événement se produit.
fetchButton.addEventListener('click', () => {
    // 3. Pour l'instant, on se contente d'afficher un message dans la console pour vérifier que tout fonctionne.
    console.log('Bouton cliqué ! Le JavaScript est bien connecté.');
});