// 1. Sélection du bouton
const fetchButton = document.querySelector('#fetch-button');

// 2. Définition des constantes
const API_URL = 'https://oracles-api.sidathsoeun.fr/oracle_api.php';
const API_KEY = 'SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!';

// 3. Écouteur d'événement
fetchButton.addEventListener('click', async () => {
    
    try {
        // Lancement de la requête
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "api_key": API_KEY 
            })
        });

        // Vérification de la réponse
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        // Conversion de la réponse en JSON
        const data = await response.json();

        // Affichage dans la console
        console.log('Données reçues de l\'API :', data);

    } catch (error) {
        // Gestion de l'erreur
        console.error('Impossible de récupérer les horoscopes:', error);
    }
});