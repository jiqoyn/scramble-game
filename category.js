document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('c')?.replace('_', ' ');

    document.getElementById('category-title').textContent = category || 'Unknown Category';

    const wordsList = document.getElementById('words-list');

    try {
        const response = await fetch('word_data.json'); // Load words
        const data = await response.json();

        if (category in data) {
            wordsList.innerHTML = ''; // Clear placeholder text

            data[category].forEach(word => {
                const wordDiv = document.createElement('div');
                wordDiv.classList.add('word-card');

                wordDiv.innerHTML = `
                    <p class="scrambled">${word.scrambled.toUpperCase()}</p>
                    <a href="game.html?w=${word.scrambled}&o=${word.original}&c=${category.replace(' ', '_')}" class="btn">Play</a>
                    <a href="${word.qr_code_path}" target="_blank" class="btn">View QR Code</a>
                `;

                wordsList.appendChild(wordDiv);
            });
        } else {
            wordsList.innerHTML = '<p>No words found for this category.</p>';
        }
    } catch (error) {
        wordsList.innerHTML = `<p>Error loading words: ${error.message}</p>`;
    }
});
