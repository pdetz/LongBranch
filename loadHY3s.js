function loadHY3(fileInput, season, loadFunction, meet){
    fileInput.change(function(){
        let file = fileInput.get(0).files[0];
        let reader = new FileReader();
        reader.onload = function(){
            let uploadedFile = reader.result;
            //console.log(uploadedFile);
            loadFunction.call(this, uploadedFile, season, meet);
        };
        reader.readAsText(file);
        
    });
}

function loadEntries(uploadedFile, season, meet){
    let athletes = uploadedFile.split("\nD1");
    let roster = [];
    athletes.slice(1).forEach(athlete =>{
        let entries = athlete.split('\n');
        console.log(athlete, entries);
    });
}

function loadRoster(uploadedFile, season, meet){

            let athletes = uploadedFile.split("\nD1");
            let roster = [];
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

                roster.push(new Swimmer(swimmer));

            });    
            season.roster = roster;

            $("table.roster").remove();

            season.meets.forEach(meet =>{
                meet.lineup.append("testing");
                meet.lineup.empty();
            });
            //$(".meet_lineup").remove();
            loadTables(season);
}