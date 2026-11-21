window.__deskData = null;
window.__deskState = {seeded: 0, openId: null, filter: 'all'};

window.DeskProgress = {
    refresh: (data) => {
        const count = window.DeskStore.earnedCount();
        const pct = Math.round((count / 55) * 100);
        document.getElementById("progress-line").textContent = `${count} of 55 trophies filed · ${pct}%`;
        window.Itinerary.render(data);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetch("data/trophies.json")
        .then(r => r.json())
        .then(data => {
            window.__deskData = data;

            window.FieldNote.setData(data.trophies);
            window.DeskTable.render(data);
            window.Itinerary.render(data);
            window.Watchlist.render(data);
            window.DeskProgress.refresh(data);

            window.DeskStore.onChange(() => {
                window.DeskTable.render(data);
                window.DeskProgress.refresh(data);
                if (window.__deskState.openId) window.FieldNote.open(window.__deskState.openId);
            });

            // Wiring controls
            document.querySelectorAll(".chip").forEach(btn => {
                btn.addEventListener("click", () => {
                    const group = btn.dataset.filter;
                    window.DeskFilters.setGroup(group);
                    window.DeskTable.render(data);
                    document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    window.__deskState.filter = group;
                });
            });

            document.getElementById("search-box").addEventListener("input", (e) => {
                window.DeskFilters.setQuery(e.target.value);
                window.DeskTable.render(data);
            });

            document.getElementById("veil-toggle").addEventListener("change", (e) => {
                window.DeskStore.setVeil(e.target.checked);
                window.DeskTable.render(data);
                window.Watchlist.render(data);
                if (window.__deskState.openId) window.FieldNote.open(window.__deskState.openId);
            });

            document.getElementById("export-btn").addEventListener("click", () => {
                const blob = new Blob([window.DeskStore.exportJSON()], {type: "application/json"});
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "platinum-desk-progress.json";
                a.click();
            });

            document.getElementById("import-btn").addEventListener("click", () => {
                document.getElementById("import-file").click();
            });

            document.getElementById("import-file").addEventListener("change", (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (window.DeskStore.importJSON(event.target.result)) {
                        window.DeskTable.render(data);
                        window.DeskProgress.refresh(data);
                        window.Watchlist.render(data);
                        if (window.__deskState.openId) window.FieldNote.open(window.__deskState.openId);
                        document.getElementById("progress-line").textContent = "Import successful";
                    } else {
                        document.getElementById("progress-line").textContent = "Import failed";
                    }
                };
                reader.readAsText(file);
            });

            // URL Hash
            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);

            if (params.has('seed')) {
                const n = parseInt(params.get('seed'));
                const trophiesToEarn = data.trophies.slice(0, n).map(t => t.id);
                console.log("Applying seed:", n, trophiesToEarn);
                window.DeskStore.applyDemoEarned(trophiesToEarn);
                window.__deskState.seeded = n;
            }

            if (params.has('filter')) {
                const g = params.get('filter');
                window.DeskFilters.setGroup(g);
                window.DeskTable.render(data);
                document.querySelectorAll(`.chip[data-filter="${g}"]`).forEach(b => b.classList.add("active"));
                window.__deskState.filter = g;
            }

            if (params.has('veil')) {
                const v = params.get('veil');
                window.DeskStore.setVeil(v === 'on');
                document.getElementById("veil-toggle").checked = (v === 'on');
            }

            if (params.has('open')) {
                const id = parseInt(params.get('open'));
                window.FieldNote.open(id);
                window.__deskState.openId = id;
            }
        })
        .catch(e => {
            document.getElementById("desk-body").textContent = "Error loading data.";
        });
});
