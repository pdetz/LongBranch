$(document).ready(function(){
 
    let season = new Season(LBWW21);
   
    loadMenu(season);
    load(season);

    attachClickHandlers();
    attachKeyHandlers();

    arrayTest();

});

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
    let menuButtons = make("div")
        .addMenuButton(DOWNLOAD, "Download", "download", function(){
            saveText("let LBWW21 = " + JSON.stringify(new SavedSeason(season)) + ";", "lbww2021.js");
        })
        .addMenuButton(PRINT, "Print", "print", window.print);
    $("#rightbar").append(menuButtons);
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
        $(this).data("onclick").call();
    });
    body.on("click", "button.meet", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let meet = button.data("meet");
            $("#left").html(meet.lineup);
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
    right.on("keyup", "input.var", function(e){
        let input = $(this);
        //input.data("obj")[input.data("prop")] = input.val();
        input.setVar(input.val());
    });
}

function loadHY3(fileInput){
    let roster = [];
    fileInput.change(function(){
        let file = fileInput.get(0).files[0];
        let reader = new FileReader();
        reader.onload = function(){
            let uploadedFile = reader.result;

            let athletes = uploadedFile.split("\nD1");
            athletes.slice(1).forEach(athlete =>{

                let lines = athlete.split("\n");
                let athleteInfo = lines[0];
                let gender = athleteInfo.slice(0, 1);
                let apellido = athleteInfo.slice(6, 26).trim();
                let nombre = athleteInfo.slice(26, 46).trim();
                let nickname = athleteInfo.slice(46, 66).trim();
                let id = athleteInfo.slice(66, 86).trim();
                let dob = athleteInfo.slice(86, 94).trim();
                //let age = athleteInfo.slice(95, 97).trim();
                let address = lines[1].slice(2, 62) + "/" + lines[1].slice(62, 94) + " " + lines[1].slice(94, 99);

                roster.push(new Swimmer(nombre, apellido, nickname, gender, dob, id, address))

                /*
                right.append(apellido, ", ", nombre, " (", nickname, ")<br>");
                right.append("Gender: ", gender, "<br>");
                right.append("ID: ", id, "<br>");
                right.append("DOB, age: ", dob, ", ", age, "<br>");
                right.append("Address: ", address);
*/
            });
            $("#right").append(JSON.stringify(roster));

        };
        reader.readAsText(file);
    });
    return roster;
}