function relays(season) {
    let editor = make("div.editor");
    let meet = season.meets[8];

    let fileInput = $('<input type="file" class="entries" accept=".csv,.CSV" style="display:none"></input>');
    loadHY3(fileInput, season, loadPRs, meet);

    let ag = [_8U, _9_10, _11_12, _13_14, _15_18];

    let swimmers = make("div.relay.swimmers");
    let relays = make("div.relay.relays");

    relays.append(fileInput)
        .append(make("button.top.entries").append(UPLOAD, "Upload Top Times"));

    ag.forEach(ageGroup => {
        console.log(ageGroup);
        ["M", "F"].forEach(gender => {
            swimmers.append(season.relayTable(ageGroup, gender, meet));
        });
    });

    return editor.append(swimmers).append(relays);
}

Season.prototype.relayTable = function(ageGroup, gender, meet){
    let swimmers = [];
    let season = this;

    let events = meet.type.events;
    //console.log(events);
    //console.log(meet.type);
    console.log(ageGroup);

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
        .append(make("td").html("FR"))
        .append(make("td").html("BK"))
        .append(make("td").html("BR"))
        .append(make("td").html("FL")));

    let eventNumbersRow = make("tr").append(make("td.events").html("Event #s — Please learn"));
    for (let i = 1; i < 5; i++){
        let td = make("td.events");
        let stroke = STROKES[i];
        //td.html(ag);
        events.forEach(e=>{
            e.number;
            if (e.stroke == stroke && e.gender == gender && ageMatch(ageGroup, e.ageGroup)){
                td.html(e.n);
                eventNumbers.push(events.indexOf(e));
            }
        });
        eventNumbersRow.append(td);
    }

    tbody.append(eventNumbersRow);
    swimmers.forEach(swimmer =>{
        tbody.append(prs(swimmer, meet));
    });
    return table.append(tbody);
}

function prs(swimmer, meet){
    let tr = make("tr" + swimmerRowID(swimmer, meet))  
    .append(make("td").html(swimmer.display()));
    
    for (let i = 1; i < 5; i++){
        //tr.append(make("td").html(STROKES[i].name));
        tr.append(make("td.relays").html(swimmer.topTimes[i]));
    }
    return tr;
}

function loadPRs(uploadedFile, season){

    let prs = uploadedFile.slice(0, -1).split("\n");

    //console.log(prs);
    prs.slice(1).forEach(pr => {
        let prData = pr.split(",");
        let prSwimmer = {"nombre": prData[8],
                        "appellido": prData[7],
                        "id":999};
        let swimmer = findSwimmer(season.roster, prSwimmer);

        let stroke = findStroke(prData[2]);

        //console.log(swimmer);
        if (swimmer !== NO_SWIMMER) {
            swimmer.topTimes[STROKES.indexOf(stroke)] = prData[5];
        }
    });

    $("#right").empty()
                .append(relays(season));
}

function findStroke(str){
    let stroke = "";
    STROKES.forEach(s => {
        if (str == s.name) stroke = s;
    });
    return stroke;
}

function findSwimmer(roster, swimmer){
    let i = 0;
    let rosterSwimmer = NO_SWIMMER;
    while (i < roster.length){
        if (roster[i].nombre == swimmer.nombre && roster[i].appelido == swimmer.apellido){
            rosterSwimmer = roster[i];
            break;
        }
        i++;
    }
    return rosterSwimmer;
}