(function() {
    const KEY = "platinum-desk-v1";
    let state = { earned: {}, veil: true };
    let demoEarned = new Set();
    let listeners = [];

    function load() {
        try {
            const saved = localStorage.getItem(KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                state.earned = parsed.earned || {};
                state.veil = typeof parsed.veil === 'boolean' ? parsed.veil : true;
            }
        } catch (e) {
            console.error("Failed to load store", e);
            state = { earned: {}, veil: true };
        }
    }

    function save() {
        localStorage.setItem(KEY, JSON.stringify(state));
        notify();
    }

    function notify() {
        listeners.forEach(fn => fn());
    }

    load();

    window.DeskStore = {
        isEarned: (id) => !!state.earned[id] || demoEarned.has(id),
        toggleEarned: (id) => {
            state.earned[id] = !state.earned[id];
            save();
            return state.earned[id];
        },
        earnedCount: () => {
            const allEarned = new Set(Object.keys(state.earned).filter(id => state.earned[id]));
            demoEarned.forEach(id => allEarned.add(id));
            return allEarned.size;
        },
        setVeil: (on) => {
            state.veil = !!on;
            save();
        },
        veilOn: () => state.veil,
        exportJSON: () => JSON.stringify(state),
        importJSON: (text) => {
            try {
                const parsed = JSON.parse(text);
                if (parsed && typeof parsed.earned === 'object' && typeof parsed.veil === 'boolean') {
                    state = parsed;
                    save();
                    return true;
                }
            } catch (e) {}
            return false;
        },
        applyDemoEarned: (idsArray) => {
            idsArray.forEach(id => demoEarned.add(id));
            notify();
        },
        clearDemo: () => {
            demoEarned.clear();
            notify();
        },
        snapshot: () => ({ ...state }),
        getDemoCount: () => demoEarned.size,
        onChange: (fn) => listeners.push(fn)
    };
})();
