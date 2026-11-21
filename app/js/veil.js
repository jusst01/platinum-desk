(function() {
    function shouldMask(trophy) {
        return window.DeskStore.veilOn() && trophy.secret && !window.DeskStore.isEarned(trophy.id);
    }

    window.DeskVeil = {
        maskName: (trophy) => shouldMask(trophy) ? "Hidden trophy" : trophy.name,
        maskDescription: (trophy) => shouldMask(trophy) ? "A hidden trophy. Lift the spoiler veil, or earn it, to read what PlayStation says." : trophy.description,
        appliesTo: (trophy) => shouldMask(trophy)
    };
})();
