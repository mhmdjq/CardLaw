document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize your custom data layer
    // We are using the 'damage' variable you provided to show "Total Damage Dealt" by players
    // This connects your personal context to the site logic.
    if (typeof window.damage === 'undefined') {
        window.damage = 1; // Default from your memory
    }

    const damageDisplay = document.getElementById('damage-counter');
    const updateDamageDisplay = () => {
        // Formats the number to look like a game score (e.g., 0001)
        damageDisplay.innerText = window.damage.toString().padStart(6, '0');
    };

    // Initial render
    updateDamageDisplay();

    // 2. Glitch Text Effect for Hero Title
    const glitchTitle = document.querySelector('.glitch');
    setInterval(() => {
        glitchTitle.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0px #ff00de,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0px #00ff9d
        `;
        setTimeout(() => {
            glitchTitle.style.textShadow = '4px 4px 0px #333';
        }, 100);
    }, 3000);

    // 3. Download Button Logic
    const dlBtn = document.getElementById('downloadBtn');
    
    dlBtn.addEventListener('click', () => {
        const originalText = dlBtn.innerText;
        dlBtn.innerText = "INITIATING...";
        dlBtn.style.background = "#fff";
        
        // Simulating a "damage" hit when downloading (just for fun logic)
        window.damage += 100; 
        updateDamageDisplay();

        setTimeout(() => {
            dlBtn.innerText = "DOWNLOADING...";
            // Here you would normally trigger the actual file download
            // window.location.href = 'your-game-file.zip';
        }, 800);

        setTimeout(() => {
            dlBtn.innerText = "THANKS FOR PLAYING!";
            dlBtn.style.background = "var(--accent)";
        }, 2500);
    });
});