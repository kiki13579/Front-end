// 1. Sélection du bouton
const fetchButton = document.querySelector('#fetch-button');

// 2. Définition des constantes
const API_URL = 'https://oracles-api.sidathsoeun.fr/oracle_api.php';
const API_KEY = 'SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!';

// 3. La fonction pour afficher les horoscopes
function displayHoroscopes(horoscopes) {
    // 1. On sélectionne le conteneur où on va ajouter les cartes
    const container = document.querySelector('#horoscope-container');
    
    // 2. On le vide au cas où il y aurait de précédents résultats
    container.innerHTML = '';

    // 3. On parcourt l'objet des horoscopes (ex: { "Taureau": "message...", "Bélier": "message..." })
    for (const sign in horoscopes) {
        const message = horoscopes[sign];

        // 4. Pour chaque signe, on crée une nouvelle div pour la carte
        const card = document.createElement('div');
        card.className = 'horoscope-card'; // On lui donne une classe pour le CSS

        // 5. On remplit la carte avec le signe et le message
        card.innerHTML = `
            <h3>${sign}</h3>
            <p>${message}</p>
        `;

        // 6. On ajoute la carte nouvellement créée au conteneur
        container.appendChild(card);
    }
}

// 4. On modifie l'écouteur d'événement
fetchButton.addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "api_key": API_KEY })
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        
        // AU LIEU D'UN CONSOLE.LOG, ON APPELLE NOTRE NOUVELLE FONCTION
        // On passe data.horoscope car les messages sont dans cette propriété de l'objet reçu
        displayHoroscopes(data.horoscope); 

    } catch (error) {
        console.error('Impossible de récupérer les horoscopes:', error);
    }
});