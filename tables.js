function loadTables(season){

    season.meets.forEach(meet =>{
        loadTable(meet, season);
    });

    $("#left").append(season.currentMeet.lineup);
}

function loadTable(meet, season){
    meet.lineup.append(meet.title, meet.description);
    
    for (let i = 0; i < 5; i++){
        let tables = make("div.lineup");
        ["M", "F"].forEach(gender => {
            let half = make("div.half");
            half.append(season.lineupTable(i, gender, meet));
            tables.append(half);
        });
        meet.lineup.append(tables);
    }
}

Season.prototype.lineupTable = function(ag, gender, meet){
    let swimmers = [];
    let season = this;

    let events = meet.type.events;
    //console.log(events);
    let ageGroup = meet.type.ageGroups[ag];
    //console.log(meet.type);
    //console.log(ageGroup);

    let eventNumbers = [];
    this.roster.forEach(swimmer =>{
        if(swimmer.gender == gender && swimmer.isAge(ageGroup)){
            swimmers.push(swimmer);
        }
    });
    let table = make("table.lineup");
    let tbody = make("tbody");

    tbody.append(
        make("tr")
        .append(make("td").html(ageGroup.name + " " + GENDERS[gender] + "<span style='font-weight:normal'> (" + swimmers.length + ")</span>"))
        .append(make("td").html("IM"))
        .append(make("td").html("FR"))
        .append(make("td").html("BK"))
        .append(make("td").html("BR"))
        .append(make("td").html("FL")));

    let eventNumbersRow = make("tr").append(make("td.events").html("Event #s — Please learn"));
    for (let i = 0; i < 5; i++){
        let td = make("td.events");
        let stroke = STROKES[i];
        //td.html(ag);
        events.forEach(e=>{
            //console.log(e);
            if (e.stroke == stroke && e.gender == gender && ageMatch(ageGroup, e.ageGroup)){
                td.html(e.n);
                eventNumbers.push(events.indexOf(e));
            }
        });
        eventNumbersRow.append(td);
    }

    tbody.append(eventNumbersRow);
    swimmers.forEach(swimmer =>{
        tbody.append(season.swimmerRow(swimmer, meet, eventNumbers));
    });

    //console.log(swimmers);
    return table.append(tbody);
}

Season.prototype.swimmerRow = function(swimmer, meet, eventNumbers){
    let tr = make("tr" + swimmerRowID(swimmer, meet))  
        .append(make("td").html(swimmer.display()));
    for (let i = 0; i < 5; i++){
        let bolt = make("button.bolt") //.html(BOLT)
            .data("swimmer", swimmer)
            .data("meet", meet)
            .data("e", eventNumbers[i]);
        tr.append(make("td").append(bolt));
        meet.entries.forEach(entry => {
            if (entry.swimmer == swimmer && entry.e == meet.type.events[eventNumbers[i]]){
                bolt.addClass("entry")
                    .data("entry", entry)
                    .html(BOLT);
                entry.button = bolt;
            }
        });
    }
    return tr;
}

function swimmerRowID(swimmer, meet){
    return "#" + meet.name + swimmer.id;
}

function ageMatch(a, b){
    let match = true;
    if (a != b){
        a.ages.forEach(age =>{
            match = b.ages.includes(age);
        });
    }
    return match;
}

Season.prototype.loadDropDowns = function(){
    //console.log("Dropdowns loaded");
}

function ddMenu(list){
    let menu = make("div.dropdown");
    menu.data("open_button", "");
    list.forEach(item => {
        let ddButton = make("button.dropdown_button").html(item.name).data("obj", item);
        ddButton.data("onclick", function(){
            let openButton = menu.data("open_button");
            openButton.setVar(ddButton.data("obj"));
            openButton.html(ddButton.data("obj").name);
            menu.hide();
        });
        menu.append(ddButton);
    });
    return menu;
}

function ddOpenButton(ddMenu, obj, prop){
    let button = make("button.open_dropdown").html(obj[prop].name);
    button.data("obj", obj).data("prop", prop);
    button.data("onclick", function(){
        ddMenu.data("open_button", button);
        button.parent().append(ddMenu);
        ddMenu.show();
        console.log(button.parent());
    });
    return button;
}

const DD_AGE_GROUPS = new ddMenu(AGE_GROUPS);
const DD_STROKES = new ddMenu(STROKES);