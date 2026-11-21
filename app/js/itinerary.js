window.Itinerary = (function() {
    const stageNames = {
        1: "Opening Chapters",
        2: "Strangers & Encounters",
        3: "Collections",
        4: "Pastimes",
        5: "Feats",
        6: "Money",
        7: "The Long Road",
        8: "Platinum"
    };

    function render(data) {
        const root = document.getElementById("itinerary-root");
        if (!root) return;
        root.innerHTML = "";

        for (let i = 1; i <= 8; i++) {
            const trophiesInStage = data.trophies.filter(t => t.stage === i);
            const earnedCount = trophiesInStage.filter(t => window.DeskStore.isEarned(t.id)).length;
            const totalCount = trophiesInStage.length;

            const card = document.createElement("div");
            card.className = "stage-card";
            card.dataset.stage = i;
            card.innerHTML = `
                <h3>STAGE ${i}</h3>
                <p>${stageNames[i]}</p>
                <div class="count-line">${earnedCount} of ${totalCount} filed</div>
            `;
            root.appendChild(card);
        }
    }
    return { render };
})();
