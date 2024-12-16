document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#facture tbody");
    const sousTotalEl = document.getElementById("sous-total");
    const totalFinalEl = document.getElementById("total-final");
    const remiseEl = document.getElementById("remise");
    const taxeEl = document.getElementById("taxe");
    const fraisExpeditionEl = document.getElementById("frais-expedition");

    document.getElementById("ajouter-ligne").addEventListener("click", ajouterLigne);
    document.getElementById("remplir-automatiquement").addEventListener("click", remplirAutomatiquement);
    document.getElementById("calculer").addEventListener("click", calculer);
    document.getElementById("annuler").addEventListener("click", annuler);

    function ajouterLigne() {
        const ligneModele = document.querySelector(".ligne");
        const nouvelleLigne = ligneModele.cloneNode(true);
        nouvelleLigne.querySelector(".desc").value = "";
        nouvelleLigne.querySelector(".qte").value = 1;
        nouvelleLigne.querySelector(".prix").value = 0;
        nouvelleLigne.querySelector(".total-ligne").textContent = "0";
        tableBody.appendChild(nouvelleLigne);
    }

    function remplirAutomatiquement() {
        const descriptions = ["Article A", "Article B", "Article C", "Article D"];
        document.querySelectorAll(".ligne").forEach(ligne => {
            const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
            const randomQte = Math.floor(Math.random() * 10) + 1;
            const randomPrix = Math.floor(Math.random() * 100) + 1;

            ligne.querySelector(".desc").value = randomDesc;
            ligne.querySelector(".qte").value = randomQte;
            ligne.querySelector(".prix").value = randomPrix;
            ligne.querySelector(".total-ligne").textContent = randomQte * randomPrix;
        });
    }

    function calculer() {
        let sousTotal = 0;

        document.querySelectorAll(".ligne").forEach(ligne => {
            const qte = parseInt(ligne.querySelector(".qte").value) || 0;
            const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
            const totalLigne = qte * prix;
            ligne.querySelector(".total-ligne").textContent = totalLigne.toFixed(2);
            sousTotal += totalLigne;
        });

        const remise = parseFloat(remiseEl.value) || 0;
        const taxe = parseFloat(taxeEl.value) || 0;
        const fraisExpedition = parseFloat(fraisExpeditionEl.value) || 0;

        const sousTotalMoinsRemise = sousTotal - (sousTotal * remise / 100);
        const taxeTotale = sousTotalMoinsRemise * taxe / 100;
        const totalFinal = sousTotalMoinsRemise + taxeTotale + fraisExpedition;

        sousTotalEl.textContent = sousTotal.toFixed(2);
        totalFinalEl.textContent = totalFinal.toFixed(2);
    }
});


function annuler() {
    // Clear all rows except the first three and reset fields
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach((row, index) => {
        if (index < 3) {
            row.querySelector(".desc").value = "";
            row.querySelector(".qte").value = 1;
            row.querySelector(".prix").value = 0;
            row.querySelector(".total-ligne").value = "0";
            
        } else {
            row.remove();
        }
    });

    sousTotalEl.value = "0.00";
    remiseEl.value = "0";
    taxeEl.value = "10";
    fraisExpeditionEl.value = "0";
    totalFinalEl.value = "0.00";
}

    