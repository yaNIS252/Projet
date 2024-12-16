function Bonne_reponse(){
    window.location.href="reponse.html"
}

// Fonction pour réinitialiser le quiz
function resetQuiz() {
    // Désélectionner toutes les cases à cocher
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Masquer la correction
    document.getElementById('correction').style.display = none;
}

function retour(){
    window.location.href="index.html"
}

function home(){
    window.location.href="../index.html"
}



