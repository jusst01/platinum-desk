(function() {
    let trophyData = [];

    window.FieldNote = {
        setData: (data) => { trophyData = data; },
        open: (id) => {
            const container = document.getElementById('field-note');
            if (!container) return;

            const t = trophyData.find(x => x.id == id);
            if (!t) return;

            const earned = window.DeskStore.isEarned(t.id);

            container.innerHTML = '';

            const h2 = document.createElement('h2');
            h2.textContent = window.DeskVeil.maskName(t);
            container.appendChild(h2);

            const meta = document.createElement('p');
            meta.textContent = `${t.grade} · ${t.kind} · Stage ${t.stage}`;
            container.appendChild(meta);

            const blockquote = document.createElement('blockquote');
            blockquote.textContent = window.DeskVeil.maskDescription(t);
            container.appendChild(blockquote);

            if (t.flag) {
                const p = document.createElement('p');
                p.className = 'flag-warning';
                let warnText = '';
                if (t.flag === 'missable') warnText = "MISSABLE: The point-of-no-return warning.";
                else if (t.flag === 'caution') warnText = "CAUTION: The permanent Irredeemable choice warning.";
                else if (t.flag === 'unknown') warnText = "UNCONFIRMED: Requirement not yet confirmed by the sources.";
                p.textContent = warnText;
                container.appendChild(p);
            }

            const h3 = document.createElement('h3');
            h3.textContent = 'FIELD NOTES';
            container.appendChild(h3);

            const ol = document.createElement('ol');
            ol.className = 'step-list';
            t.steps.forEach(step => {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(step.text + ' '));
                step.cites.forEach(c => {
                    const sup = document.createElement('sup');
                    sup.className = 'cite';
                    sup.textContent = `[${c}]`;
                    li.appendChild(sup);
                    li.appendChild(document.createTextNode(' '));
                });
                ol.appendChild(li);
            });
            container.appendChild(ol);

            const sources = document.createElement('p');
            sources.className = 'note-sources';
            sources.textContent = 'Sources: ' + t.sources.join(' · ');
            container.appendChild(sources);

            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = earned ? 'Filed ✓ — tap to unfile' : 'File as earned';
            toggleBtn.onclick = () => {
                window.DeskStore.toggleEarned(t.id);
                window.FieldNote.open(t.id);
                if (window.DeskTable) window.DeskTable.render(trophyData);
            };
            container.appendChild(toggleBtn);
        }
    };
})();
