
function addGroupingListeners() {
    addListener("#minutes", forces.minutes);
    addListener("#ppg", forces.ppg);
    addListener("#asts", forces.asts);
    addListener("#reb", forces.reb);

    function addListener(selector, forces) {
        d3.select(selector).on("click", function() {
            updateForces(forces);

        })
    }
}