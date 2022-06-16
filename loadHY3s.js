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
    let athletes = uploadedFile.slice(0,-1).split("\nD1");

    meet.entries = [];
    meet.lineup.empty();

    athletes.slice(1).forEach(athlete =>{

        let entries = athlete.split('\n');

        const id = entries.shift().slice(66, 81).trim();
        console.log(id);
        let entrySwimmer = "";

        season.roster.forEach(swimmer =>{
            if (swimmer.id == id) {
                entrySwimmer = swimmer;
            }
        });

        entries.forEach(hy3Entry =>{
            console.log(hy3Entry);
            let e = parseInt(hy3Entry.slice(39, 41).trim());
            let t = parseFloat(hy3Entry.slice(44, 51).trim());
            meet.entries.push(newEntry(meet, e-1, entrySwimmer, t));
            console.log(e, t);
        });
        console.log(entrySwimmer, entries);
    });


    loadTable(meet, season);
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