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
            season.relaysRoster.push(listOfSwimmers(season.roster, ageGroup, gender));
            swimmers.append(season.relayRoster(ageGroup, gender, meet));
        });
    });

    loadRelays(season);

    return editor.append(swimmers).append(relays);
}

function loadRelays(season){

    let _8ub = season.relaysRoster[0];
    let _8ug = season.relaysRoster[1];
    let _910b = season.relaysRoster[2];
    let _910g = season.relaysRoster[3];
    let _1112b = season.relaysRoster[4];
    let _1112g = season.relaysRoster[5];
    let _1314b = season.relaysRoster[6];
    let _1314g = season.relaysRoster[7];
    let _1518b = season.relaysRoster[8];
    let _1518g = season.relaysRoster[9];

    console.log(_8ub);



    //season.relayEvents.push(medleyRelay(8, "Boys Open Medley", "200M", _8ub));
    //season.relayEvents.push(new Relay([], 9, "Girls Open Medley", "200M"));
    //season.relayEvents.push(new Relay([], 10, "14&U Boys Medley", "100M"));
    season.relayEvents.push(new Relay([], 11, "14&U Girls Medley", "100M"));
    
    season.relayEvents.push(new Relay([], 12, "8&U Boys Medley", "100M"));
    season.relayEvents.push(new Relay([], 13, "8&U Girls Medley", "100M"));
    season.relayEvents.push(new Relay([], 14, "9-10 Boys Medley", "100M"));
    season.relayEvents.push(new Relay([], 15, "9-10 Girls Medley", "100M"));
    season.relayEvents.push(new Relay([], 16, "15-18 Mixed Medley", "200M"));
    season.relayEvents.push(new Relay([], 17, "11-12 Boys Medley", "200M"));
    
    let event18 = new Relay(18, "11-12 Girls Medley", "200M");
    event18.relays.push(medleyRelay);

    season.relayEvents(season.relayEvents.length).relays.push(medley)
    
    
    season.relayEvents.push(new Relay([], 19, "13-14 Boys Medley", "200M"));
    season.relayEvents.push(new Relay([], 20, "13-14 Girls Medley", "200M"));        
}



function Relay(eventNumber, name, distance){
    //this.table = make("table.lineups");
    this.name = name;
    this.eventNumber = eventNumber;
    this.n = 1;
    this.distance = distance;
    this.relays = [];
}

function RelayEntry(swimmer, time, stroke, distance){
    this.swimmer = swimmer;
    this.time = time;
    this.stroke = stroke;
    this.distance = distance;
}

function PotentialRelay(entries){
    this.entries = entries;

    this.table = potentialRelayTable(this);

}

function potentialRelayTable(potentialRelay){
    let table = make("table.lineup");
    let tbody = make("tbody");
    tbody.append(
        make("tr")
        .append(make("td").html("Stroke"))
        .append(make("td").html("Swimmer"))
        .append(make("td").html("Time")));

    potentialRelay.entries.forEach(entry =>{
        tbody.append(
            make("tr")
            .append(make("td").html(entry.stroke.abbr))
            .append(make("td").html(entry.swimmer.display()))
            .append(make("td").html(entri.time)));
    });

    return table.append(tbody);
}


function medleyRelay(eventNumber, name, distance, group){
    let list = [];
    group.forEach(swimmer => {
        list.push(swimmer);
    });
    let relay = [];
    for (let i = 0; i < 4, i++){
        relay.push(new RelayEntry(NO_SWIMMER, 999, MR[i], splitDistance(distance)));
    }
    return relay;
}

function splitDistance(distance){
    if (distance == "200M") return "50M";
    if (distance == "100M") return "25M";
}

function fastest(stroke, roster){

}

function listOfSwimmers(roster, ageGroup, gender){
    let list = [];
    roster.forEach(swimmer =>{
        if(swimmer.gender == gender && swimmer.isAge(ageGroup)){
            list.push(swimmer);
        }
    });
    return list;
}

Season.prototype.relayRoster = function(ageGroup, gender, meet){
    let swimmers = listOfSwimmers(this.roster, ageGroup, gender);

    let events = meet.type.events;
    //console.log(events);
    //console.log(meet.type);
    console.log(ageGroup);

    let eventNumbers = [];
    //this.roster.forEach(swimmer =>{
   //     if(swimmer.gender == gender && swimmer.isAge(ageGroup)){
    //        swimmers.push(swimmer);
     //   }
    //});
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