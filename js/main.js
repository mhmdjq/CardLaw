document.addEventListener('DOMContentLoaded', () => {

    // 1. Data Layer: Damage Counter
    if (typeof window.damage === 'undefined') {
        window.damage = 1; 
    }

    const damageDisplay = document.getElementById('damage-counter');
    
    // Smooth Count-Up Animation
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Run animation on load (from 0 to your stored damage value)
    animateValue(damageDisplay, 0, window.damage, 2000);

    // 2. Download Button Logic
    const dlBtn = document.getElementById('downloadBtn');
    dlBtn.addEventListener('click', () => {
        // Increase damage visually
        let oldVal = window.damage;
        window.damage += 100;
        
        // Flash Effect
        dlBtn.style.background = "#fff"; 
        dlBtn.innerText = "ATTACKING SERVER...";
        
        // Animate the number jump
        animateValue(damageDisplay, oldVal, window.damage, 500);

        setTimeout(() => {
            dlBtn.style.background = "var(--gold)";
            dlBtn.innerText = "DOWNLOAD STARTED";
        }, 800);
    });
});
