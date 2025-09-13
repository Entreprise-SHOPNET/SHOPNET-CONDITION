
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("accept-terms");
    const continueBtn = document.getElementById("continue-btn");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    // Activer/désactiver le bouton lorsque l'utilisateur coche/décoche la case
    checkbox.addEventListener("change", () => {
        continueBtn.disabled = !checkbox.checked;
    });

    // Lorsque l'utilisateur clique sur le bouton "Accepter et continuer"
    continueBtn.addEventListener("click", () => {
        // Sauvegarder dans localStorage que l'utilisateur a accepté les conditions
        localStorage.setItem('accepted', 'true');
        
        // Rediriger l'utilisateur vers la page suivante
        window.location.href = 'Univer.html'; // Remplace par l'URL de la page cible
    });

    // Vérifier si l'utilisateur a déjà accepté les conditions
    const accepted = localStorage.getItem('accepted');
    if (accepted === 'true') {
        continueBtn.disabled = false; // Si déjà accepté, bouton activé
    }

    // ===== Scroll Effects =====
    window.addEventListener('scroll', () => {
        // Réduction du header
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }

        // Affichage du footer uniquement à la fin du scroll
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    });
});
