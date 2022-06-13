let KEYPRESSED = 0;

$(document).ready(function(){


    let season = new Season(LBWW22);

    loadMenu(season);

    load(season);

    $("#right").append(loadEditor(season));

    $.getJSON('lb.json', function(data) {
        console.log(data);
    });

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

function loadMenu(season){
    
    let fileInput = $('<input type="file" id="upload" accept=".hy3,.HY3" style="display:none"></input>');

    let menuButtons = make("div")

        .addMenuButton(DOWNLOAD, "Download", "download_button", function(){
            let newSeason = new SavedSeason(season);
            console.log(newSeason);
            saveText("let LBWW22 = " + JSON.stringify(newSeason) + ";", "lbww2022.js");
        })
        .addMenuButton(PRINT, "Print", "print_button", window.print)
        .addMenuButton(UPLOAD, "Upload", "upload_button", function(){
            console.log("lineups 44", $("#upload"));
            $("#upload").click();
        });
    $("#rightbar").append(menuButtons).append(fileInput);
    loadHY3(fileInput, season);
}

$.fn.addMenuButton = function(svg, label, id, clickHandler){
    let button = make("button#" + id + ".menu");
    button.append(svg)
          .data("onclick", clickHandler);
    $(this).append(button);
    return $(this);
}

function saveText(text, filename){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click();
}

function load(season) {
    season.loadTables();
    season.loadButtons();
    season.loadDropDowns();
}

function attachClickHandlers(){
    let body = $("#body");
    body.on("click", "button.menu", function(e){
        e.stopImmediatePropagation();
        console.log(this);
        $(this).data("onclick").call();
    });
    body.on("click", "button.meet", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let meet = button.data("meet");
            $("#left").children().hide();
            $("#left").append(meet.lineup);
            meet.lineup.show();
            $("button.sel").removeClass("sel");
            button.toggleClass("sel");
        };
    });
    body.on("click", "button.bolt", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let swimmer = button.data("swimmer");
        let meet = button.data("meet");
        let eN = button.data("e");
        console.log(swimmer, meet, eN);
        if (button.hasClass("entry")){
            console.log(button.data("entry"));
            button.empty();
            button.data("entry").removeEntry();
            button.data("entry", "");
        }
        else {
            let t = "";
            if (KEYPRESSED == 0){
                button.append(BOLT);
            }
            else {
                button.append('DQ');
                t = "DQ";
            }
            let entry = newEntry(meet, eN, swimmer, t);
            meet.entries.push(entry);
            button.data("entry", entry);
            console.log(meet.entries);
        }
        button.toggleClass("entry");
    });
}

function Input(obj, prop, size) {
    let input = make("input.var").attr("size", size);
    input.data("obj", obj).data("prop",prop);
    input.val(input.data("obj")[input.data("prop")]);
    this.input = input;
    return this.input;
}

function attachKeyHandlers(){
    let right = $("#right");

    $(window).keydown(function(e) {
        if (KEYPRESSED != e.which){
            KEYPRESSED = e.which;
            console.log(KEYPRESSED, e.which);
        }
    });
    $(window).keyup(function(e) {
        KEYPRESSED = 0;
        console.log(KEYPRESSED);
    });


    right.on("keyup", "input.var", function(e){
        let input = $(this);
        //input.data("obj")[input.data("prop")] = input.val();
        input.setVar(input.val());
    });
    /*
    $("#left").on("keyup", "input.meet_info", function(e){
        let input = $(this);
        let teacher = input.obj();
        meet.name = input.val();
        if (e.which == 13){
            input.blur();
        }
    });
*/
}