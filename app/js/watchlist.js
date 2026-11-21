window.Watchlist = (function() {
    const flagReasons = {
        "MISSABLE": "gone if the story choice goes the other way",
        "CAUTION": "a permanent profile choice",
        "UNKNOWN": "requirement not yet confirmed — plan around it"
    };

    function render(data) {
        const chipsRoot = document.getElementById("watch-chips");
        if (chipsRoot) {
            chipsRoot.innerHTML = "";
            const flaggedIds = [28, 48, 44, 45, 49, 50, 51];
            const flaggedTrophies = data.trophies.filter(t => flaggedIds.includes(t.id));

            flaggedTrophies.forEach(t => {
                const kind = t.flag === "MISSABLE" ? "missable" : (t.flag === "CAUTION" ? "caution" : "unknown");
                const button = document.createElement("button");
                button.className = `watch-chip flag-${kind}`;
                const reason = flagReasons[t.flag] ? `<span class="flag-reason">${flagReasons[t.flag]}</span>` : "";
                button.innerHTML = `
                    <span class="flag-label">${t.flag}</span>
                    <span class="trophy-name">${t.name}</span>
                    ${reason}
                `;
                button.onclick = () => window.FieldNote.open(t.id);
                chipsRoot.appendChild(button);
            });
        }

        const sourcesList = document.getElementById("sources-list");
        if (sourcesList) {
            sourcesList.innerHTML = "";
            data.sources_rail.forEach(s => {
                const div = document.createElement("div");
                div.innerHTML = `<strong>${s.name}</strong> — ${s.role} (cited across all 55 guides)`;
                sourcesList.appendChild(div);
            });
        }

        const auditLine = document.getElementById("audit-line");
        if (auditLine) {
            let totalSteps = 0;
            let citedSteps = 0;
            data.trophies.forEach(t => {
                t.steps.forEach(s => {
                    totalSteps++;
                    if (s.cites && s.cites.length > 0) citedSteps++;
                });
            });
            auditLine.textContent = `${totalSteps} field notes · ${citedSteps} of ${totalSteps} cited · 55 of 55 trophies`;
        }
    }
    return { render };
})();
