

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("accept-terms");
    const continueBtn = document.getElementById("continue-btn");

    // Activer/désactiver le bouton lorsque l'utilisateur coche/décoche la case
    checkbox.addEventListener("change", () => {
        continueBtn.disabled = !checkbox.checked; // Si la case est décochée, le bouton est désactivé
    });

    // Lorsque l'utilisateur clique sur le bouton "Accepter et continuer"
    continueBtn.addEventListener("click", () => {
        // Sauvegarder dans localStorage que l'utilisateur a accepté les conditions
        localStorage.setItem('accepted', 'true');
        
        // Rediriger l'utilisateur vers la page suivante
        window.location.href = 'Univer.html'; // Remplace par l'URL de la page cible
    });

    // Vérifier si l'utilisateur a déjà accepté les conditions lors d'une visite précédente
    const accepted = localStorage.getItem('accepted');
    if (accepted === 'true') {
        // Ne redirige pas automatiquement à ce stade, seulement après avoir cliqué sur le bouton
        continueBtn.disabled = false; // Si déjà accepté, on active le bouton
    }
});