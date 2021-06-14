Season.prototype.loadTables = function(){
    let season = this;

    season.meets.forEach(meet =>{
        meet.lineup.append(meet.name, "<br>");
    
        for (let i = 0; i < 6; i++){
            let tables = make("div.lineup");
            ["M", "F"].forEach(gender => {
                let half = make("div.half");
                half.append(season.lineupTable(i, gender, meet));
                tables.append(half);
            });
            meet.lineup.append(tables);
        }

    });

    $("#left").append(season.meets[season.currentMeet].lineup);
}

Season.prototype.lineupTable = function(ag, gender, meet){
    let swimmers = [];
    let season = this;
    let meetType = season.meetTypes[meet.type];
    let events = meetType.events;
    let ageGroup = meetType.ageGroups[ag];
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

    let eventNumbersRow = make("tr").append(make("td.events").html("Event #s -- Please learn"));
    for (let i = 0; i < 5; i++){
        let td = make("td.events");
       // let stroke = STROKES[i];
        events.forEach(e=>{
            if (e.stroke == i && e.gender == gender && ageMatch(meetType.ageGroups, ag, e.ageGroup)){
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
    let tr = make("tr")  
        .append(make("td").html(swimmer.display()));
    for (let i = 0; i < 5; i++){
        tr.append(make("td")
            .append(make("button.bolt").html(BOLT)
                .data("swimmer", swimmer)
                .data("meet", meet)
                .data("e", eventNumbers[i])
        ));
    }
    return tr;
}

function ageMatch(ageGroups, a, b){
    let match = true;
    if (a != b){
        ageGroups[a].ages.forEach(age =>{
            match = ageGroups[b].ages.includes(age);
        });
    }
    return match;
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