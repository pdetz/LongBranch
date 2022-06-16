$(document).ready(function(){
    let season = new Season(LBWW22);

    loadTables(season);
    loadEditors(season);
    loadLeftBar(season);
    loadRightBar(season);

    console.log(season.editors[0].editor);

    $("#right").append(season.editors[0].editor);

    attachClickHandlers();
    attachKeyHandlers();
});

function clearSeasonEntries(season){
    season.meets.forEach(meet =>{
        console.log(meet.name);
        meet.entries = [];
    });

}

function tempseason() {
    let season = new Season(LBWW, [], [EVENTS], 0);
    let meetNames = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B", "DIV"]
    meetNames.forEach(meet => {
        season.meets.push(new Meet(meet, 0, "Long Branch", "8700 Piney Branch Rd", "", "8:00 AM"));
    });

    //console.log(JSON.stringify(season));

    return season;
}