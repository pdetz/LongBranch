function Season(season){
    this.roster = season.roster; // array of Swimmers
    this.meets = []; // array of Meets

    season.meets.forEach(meet =>{
        this.meets.push(new Meet(meet));
    });

    this.meetTypes = season.meetTypes; // array of Meet Types
    this.currentMeet = season.currentMeet;

    this.ageGroups = AGE_GROUPS;
}

Season.prototype.loadTables = function(){
    let season = this;
    let tables = make("div.lineup");

    season.meets.forEach(meet =>{
        meet.lineup.append(meet.name, "<br>");
    
        ["M", "F"].forEach(gender => {
            let half = make("div.half");
            for (i = 0; i < 5; i++){
                half.append(lineupTable(season.ageGroups[i], gender, season.roster, meet));
            }
            meet.lineup.append(half);
        });


    });

    $("#left").append(season.meets[season.currentMeet].lineup);
}

function lineupTable(ageGroup, gender, roster, meet){
    let table = make("table.lineup");
    let tbody = make("tbody");

    tbody.append(
        make("tr")
        .append(make("td").html(ageGroup.name + " " + GENDERS[gender]))
        .append(make("td").html("IM"))
        .append(make("td").html("FR"))
        .append(make("td").html("BK"))
        .append(make("td").html("BR"))
        .append(make("td").html("FL")));
    return table.append(tbody);
}

Season.prototype.loadButtons = function(){
    let season = this;
    let buttons = make("div.topbar");

    season.meets.forEach(meet =>{
        buttons.append(make("button.meet").html(meet.name).data("meet", meet));
    });

    $("#leftbar").append(buttons);
}

Season.prototype.loadDropDowns = function(){
    console.log("Dropdowns loaded");
}

Season.prototype.saveSeason = function(){
    let season = this;
    return season;
}

function Swimmer(nombre, apellido, nickname, gender, dob, id, address){
    this.dob = dob;
    //this.age = age;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nickname = nickname;
    this.gender = gender;
    this.id = id;
    this.address = address;
}

function AgeGroup(name, ages){
    this.name = name;
    this.ages = ages;
    this.swimmers = [];
}

const _8U = new AgeGroup("8&U", [4, 5, 6, 7, 8]);
const _9_10 = new AgeGroup("9-10", [9, 10]);
const _11_12 = new AgeGroup("11-12", [11, 12]);
const _13_14 = new AgeGroup("13-14", [13, 14]);
const _15_18 = new AgeGroup("15-18", [15, 16, 17, 18]);
const _19 = new AgeGroup("19", [19]);
const _12U = new AgeGroup("12&U", [4, 5, 6, 7, 8, 9, 10, 11, 12]);

const AGE_GROUPS = [_8U, _9_10, _11_12, _13_14, _15_18, _19, _12U];

function Stroke(name, abbr){
    this.name = name;
    this.abbr = abbr;
}

const FR = new Stroke("Freestyle", "FR");
const BK = new Stroke("Backstroke", "BK");
const BR = new Stroke("Breaststroke", "BR");
const FL = new Stroke("Butterfly", "FL");
const IM = new Stroke("Individual Medley", "IM");
const RELAY = new Stroke("Relay", "RE");

const STROKES = [IM, FR, BK, BR, FL, RELAY];

function Gender(name, abbr){
    this.name = name;
    this.abbr = abbr;
}
const GENDERS = {"M": "Boys", "F": "Girls", "X": "Mixed"};