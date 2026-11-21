(function() {
    window.DeskTable = {
        render: function(data) {
            const body = document.getElementById('desk-body');
            if (!body) return;
            body.innerHTML = '';

            const trophies = data.trophies.filter(t => window.DeskFilters.matches(t));

            trophies.sort((a, b) => a.id - b.id).forEach(t => {
                const earned = window.DeskStore.isEarned(t.id);
                const tr = document.createElement('tr');
                tr.className = 'desk-row' + (earned ? ' filed' : '');
                tr.dataset.id = t.id;

                // Filed (a)
                const tdFiled = document.createElement('td');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'file-box';
                checkbox.checked = earned;
                checkbox.onclick = (e) => {
                    e.stopPropagation();
                    window.DeskStore.toggleEarned(t.id);
                    if (window.DeskProgress && typeof window.DeskProgress.refresh === 'function') {
                        window.DeskProgress.refresh(data);
                    }
                    window.DeskTable.render(data);
                };
                tdFiled.appendChild(checkbox);
                tr.appendChild(tdFiled);

                // Grade (b)
                const tdGrade = document.createElement('td');
                const gradeSpan = document.createElement('span');
                gradeSpan.className = 'grade-chip grade-' + t.grade.toLowerCase();
                gradeSpan.textContent = t.grade;
                tdGrade.appendChild(gradeSpan);
                tr.appendChild(tdGrade);

                // Trophy (c)
                const tdTrophy = document.createElement('td');
                tdTrophy.textContent = window.DeskVeil.maskName(t);
                if (t.flag) {
                    const badge = document.createElement('span');
                    badge.className = 'flag-badge flag-' + t.flag;
                    const text = t.flag === 'unknown' ? 'UNCONFIRMED' : t.flag.toUpperCase();
                    badge.textContent = text;
                    tdTrophy.appendChild(document.createTextNode(' '));
                    tdTrophy.appendChild(badge);
                }
                tr.appendChild(tdTrophy);

                // Kind (d)
                const tdKind = document.createElement('td');
                tdKind.textContent = t.kind;
                tr.appendChild(tdKind);

                // Stage (e)
                const tdStage = document.createElement('td');
                tdStage.textContent = "Stage " + t.stage;
                tr.appendChild(tdStage);

                // Notes (f)
                const tdNotes = document.createElement('td');
                tdNotes.textContent = (t.steps ? t.steps.length : 0) + " notes";
                tr.appendChild(tdNotes);

                tr.onclick = () => {
                    document.querySelectorAll('.desk-row').forEach(r => r.classList.remove('selected'));
                    tr.classList.add('selected');
                    window.FieldNote.open(t.id);
                };

                body.appendChild(tr);
            });
        }
    };
})();
