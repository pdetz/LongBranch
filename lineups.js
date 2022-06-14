$(document).ready(function(){
    let season = new Season(LBWW22);

    loadTables(season);
    loadLeftBar(season);
    loadRightBar(season);
    loadEditors(season);

    $("#right").append(loadEditor(season));

    attachClickHandlers();
    attachKeyHandlers();
});

function loadHY3(fileInput, season){
    let roster = [];
    fileInput.change(function(){
        let file = fileInput.get(0).files[0];
        let reader = new FileReader();
        reader.onload = function(){
            let uploadedFile = reader.result;

            let athletes = uploadedFile.split("\nD1");
            //console.log(athletes);
            athletes.slice(1).forEach(athlete =>{

                let lines = athlete.split("\n");
                let athleteInfo = lines[0];

                const swimmer = {
                    gender : athleteInfo.slice(0, 1),
                    apellido : athleteInfo.slice(6, 26).trim(),
                    nombre : athleteInfo.slice(26, 46).trim(),
                    nickname : athleteInfo.slice(46, 66).trim(),
                    id : athleteInfo.slice(66, 86).trim(),
                    dob : athleteInfo.slice(86, 94).trim(),
                    address : lines[1].slice(2, 62).trim(),
                    zip: lines[1].slice(94, 99)
                };
                console.log(swimmer.nombre, swimmer.address, swimmer.zip);

                roster.push(new Swimmer(swimmer));

            });    
            season.roster = roster;

            $("table.roster").remove();

            season.meets.forEach(meet =>{
                meet.lineup.append("testing");
                meet.lineup.empty();
            });
            //$(".meet_lineup").remove();
            season.loadTables();
        };
        reader.readAsText(file);
        
    });
}

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