(function() {
    let state = { group: "all", query: "" };

    window.DeskFilters = {
        setGroup: (g) => { state.group = g; },
        setQuery: (q) => { state.query = q.toLowerCase(); },
        current: () => ({...state}),
        matches: (trophy) => {
            let groupMatch = false;
            if (state.group === "all") {
                groupMatch = true;
            } else if (state.group === "missable") {
                groupMatch = !!trophy.flag;
            } else {
                groupMatch = trophy.filter_group === state.group;
            }

            if (!groupMatch) return false;

            if (!state.query) return true;

            const name = window.DeskVeil.maskName(trophy).toLowerCase();
            const kind = (trophy.kind || "").toLowerCase();
            return name.includes(state.query) || kind.includes(state.query);
        }
    };
})();
