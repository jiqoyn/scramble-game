document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const scrambledWordEl = document.getElementById('scrambled-word');
    const originalWordEl = document.getElementById('original-word');
    const categoryEl = document.getElementById('category');
    const revealBtn = document.getElementById('reveal-btn');
    const hideBtn = document.getElementById('hide-btn');
    const answerDiv = document.getElementById('answer');

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const scrambledWord = urlParams.get('w');
    const originalWord = urlParams.get('o');
    const category = urlParams.get('c')?.replace('_', ' ');

    // Display the words and category
    if (scrambledWord && originalWord && category) {
        scrambledWordEl.textContent = scrambledWord.toUpperCase();
        originalWordEl.textContent = originalWord.toUpperCase();
        categoryEl.textContent = category;
    } else {
        scrambledWordEl.textContent = 'Error: Invalid parameters';
        originalWordEl.textContent = 'Error: Invalid parameters';
        categoryEl.textContent = 'Error';
    }

    // Reveal button click handler
    revealBtn.addEventListener('click', () => {
        answerDiv.classList.remove('hidden');
        revealBtn.classList.add('hidden');
        hideBtn.classList.remove('hidden');
    });

    // Hide button click handler
    hideBtn.addEventListener('click', () => {
        answerDiv.classList.add('hidden');
        revealBtn.classList.remove('hidden');
        hideBtn.classList.add('hidden');
    });
});
