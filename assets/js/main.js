// 1. Sélection du bouton
const fetchButton = document.querySelector('#fetch-button');
const loader = document.querySelector('#loader');
const errorMessage = document.querySelector('#error-message');

// 2. Définition des constantes
const API_URL = 'https://oracles-api.sidathsoeun.fr/oracle_api.php';
const API_KEY = 'SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!';

// 3. La fonction pour afficher les horoscopes
function displayHoroscopes(horoscopes) {
    const container = document.querySelector('#horoscope-container');
    container.innerHTML = '';
    for (const sign in horoscopes) {
        const message = horoscopes[sign];
        const card = document.createElement('div');
        card.className = 'horoscope-card';
        card.innerHTML = `<h3>${sign}</h3><p>${message}</p>`;
        container.appendChild(card);
    }
}

// 4. On modifie l'écouteur d'événement
// ... (le haut du fichier et la fonction displayHoroscopes ne changent pas)

fetchButton.addEventListener('click', async () => {
    
    loader.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    document.querySelector('#horoscope-container').innerHTML = '';

    try {
        // 1. On crée une promesse qui se résoudra après 3 secondes (3000 millisecondes)
        const timerPromise = new Promise(resolve => setTimeout(resolve, 3000));

        // 2. On lance l'appel fetch (qui est aussi une promesse)
        const fetchPromise = fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "api_key": API_KEY })
        });

        // 3. On attend que LES DEUX promesses soient terminées avec Promise.all
        // La variable 'response' contiendra le résultat de la première promesse (fetchPromise)
        const [response] = await Promise.all([fetchPromise, timerPromise]);

        // Le reste de la logique est identique
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        displayHoroscopes(data.horoscope); 

    } catch (error) {
        errorMessage.textContent = `Erreur : Impossible de contacter l'oracle. Veuillez réessayer plus tard. (${error.message})`;
        errorMessage.classList.remove('hidden');
    } finally {
        loader.classList.add('hidden');
    }
});