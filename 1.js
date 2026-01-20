const adviceNumber = document.getElementById('adviceNumber');
const adviceText = document.getElementById('adviceText');
const diceButton = document.getElementById('diceButton');
const container = document.querySelector('.container');

async function getAdvice() {
    try {
        container.classList.add('loading');
        diceButton.disabled = true;

        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        adviceNumber.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
        
        container.classList.remove('loading');
        diceButton.disabled = false;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = '"Failed to fetch advice. Please try again."';
        container.classList.remove('loading');
        diceButton.disabled = false;
    }
}

diceButton.addEventListener('click', getAdvice);