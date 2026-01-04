document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. User Information Integration ---
    // Using your saved 'damage' variable as the base value.
    // If not present, default to 1.
    if (typeof window.damage === 'undefined') {
        window.damage = 1; 
    }

    const damageDisplay = document.getElementById('damage-counter');
    
    // Function to update the number on screen
    const updateStats = () => {
        damageDisplay.innerText = window.damage.toLocaleString();
    };
    
    // Initial Load
    updateStats();

    // --- 2. Button Interaction ---
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // "Hit" effect when clicking download
        window.damage += 50; // Critical hit!
        updateStats();

        // Visual feedback
        const originalText = downloadBtn.innerText;
        downloadBtn.innerText = "PREPARING SPELL...";
        downloadBtn.style.backgroundColor = "var(--magic-cyan)";
        downloadBtn.style.color = "black";

        setTimeout(() => {
            downloadBtn.innerText = originalText;
            downloadBtn.style.backgroundColor = ""; // Revert
            downloadBtn.style.color = ""; 
            alert("Thanks for playing the demo! (Download simulated)");
        }, 1500);
    });
});