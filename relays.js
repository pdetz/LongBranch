function relays(season) {
    let editor = make("div");
    let meet = season.meets[8];

    season.relayRosterTables.empty(); //= make("div.relayRoster");
    season.potentialRelays.empty(); // = make("div.potentialRelays");
    season.relaysRoster = [];

    let fileInput = $('<input type="file" class="entries" accept=".csv,.CSV" style="display:none"></input>');
    loadHY3(fileInput, season, loadPRs, season.meets[8]);

    season.potentialRelays.html(fileInput)
        .append(make("button.top.entries").append(UPLOAD, "Upload Top Times"))
        .append("<br>");

    //let fileInput = $('<input type="file" class="entries" accept=".csv,.CSV" style="display:none"></input>');
    //loadHY3(fileInput, season, loadPRs, meet);

    let ag = [_8U, _9_10, _11_12, _13_14, _15_18];

    let swimmers = make("div.relay.swimmers");
    let relays = make("div.relay.relays");

    
    ag.forEach(ageGroup => {
        ["M", "F"].forEach(gender => {
            season.relaysRoster.push(listOfSwimmers(season.roster, ageGroup, gender, []));
            season.relayRosterTables.append(season.relayRoster(ageGroup, gender, meet));
        });
    });

    loadRelays(season);


    season.potentialRelays.append(relays);

    return editor; //.append(relays);
}


function loadRelays(season){

    console.log(season.relaysRoster);

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
    let _openb = _1518b.concat(_1314b).concat(_1112b).concat(_910b).concat(_8ub);
    let _openg = _1518g.concat(_1314g).concat(_1112g).concat(_910g).concat(_8ug);

    season.relayEvents = [];
    season.potentialRelays.children("div.relays").remove();

    //season.relayEvents.push(medleyRelay(8, "Boys Open 200M Medley", "200M", _8ub));
    //season.relayEvents.push(new Relay(9, "Girls Open 200M Medley", "200M"));

    season.relayEvents.push(new Relay(1, "14 & Under Boys Free", 200).addFreeRelays([_910b, _1112b, _1314b, _8ub], season, [50,50,50,25]));
    season.relayEvents.push(new Relay(2, "14 & Under Girls Free", 200).addFreeRelays([_910g, _1112g, _1314g, _8ug], season, [50,50,50,25]));
    season.relayEvents.push(new Relay(3, "15-18 Mixed Free", 200).addFreeRelays([_1518b, _1518g, _1518g, _1518b], season));
    season.relayEvents.push(new Relay(4, "13-14 Mixed Free", 200).addFreeRelays([_1314b, _1314g, _1314g, _1314b], season));
    season.relayEvents.push(new Relay(5, "8&U Mixed Free", 100).addFreeRelays([_8ug, _8ub, _8ub, _8ug], season));
    season.relayEvents.push(new Relay(6, "9-10 Mixed Free", 200).addFreeRelays([_910b, _910g, _910g, _910b], season));
    season.relayEvents.push(new Relay(7, "11-12 Mixed Free", 200).addFreeRelays([_1112g, _1112b, _1112g, _1112b], season));


    let event8 = new Relay(8, "Boys Open 200M Medley", 200);
    event8.addMedleyRelays([_openb,_openb,_openb,_openb], P4, season);
 //   season.relayEvents.push(event8);
    
    let event9 = new Relay(9, "Girls Open 200M Medley", 200);
    event9.addMedleyRelays([_openg,_openg,_openg,_openg], P4, season);
 //   season.relayEvents.push(event9);
    
    let event10 = new Relay(10, "14&U Boys 100M Medley", 100);
    let boys14u = [_8ub, _910b, _1112b, _1314b];
    P4.forEach(order =>{
        //console.log(order);
        ageOrder = [];
        order.forEach(p =>{
            ageOrder.push(boys14u[p]);
        })
        event10.addMedleyRelays(ageOrder, [[0,1,2,3]], season);
    });
   // season.relayEvents.push(event10);

    let event11 = new Relay(11, "14&U Girls 100M Medley", 100);
    let girls14u = [_8ug, _910g, _1112g, _1314g];
    P4.forEach(order =>{
        //console.log(order);
        ageOrder = [];
        order.forEach(p =>{
            ageOrder.push(girls14u[p]);
        })
        event11.addMedleyRelays(ageOrder, [[0,1,2,3]], season);
    });
  //  season.relayEvents.push(event11);
    
    let event12 = new Relay(12, "8&U Boys 100M Medley", 100);
    event12.addMedleyRelays([_8ub, _8ub, _8ub, _8ub], P4, season);
  //  season.relayEvents.push(event12);

    let event13 = new Relay(13, "8&U Girls 100M Medley", 100);
    event13.addMedleyRelays([_8ug, _8ug, _8ug, _8ug], P4, season);
   // season.relayEvents.push(event13);

    let event14 = new Relay(14, "9-10 Boys 100M Medley", 100);
    event14.addMedleyRelays([_910b, _910b, _910b, _910b], P4, season);
    //season.relayEvents.push(event14);

    let event15 = new Relay(13, "9-10 Girls 100M Medley", 100);
    event15.addMedleyRelays([_910g, _910g, _910g, _910g], P4, season);
    //season.relayEvents.push(event15);

    let event16 = new Relay(16, "15-18 Mixed Medley", 200);
    event16.addMedleyRelays([_1518b, _1518b, _1518g, _1518g], P4, season);
    event16.addMedleyRelays([_1518b, _1518g, _1518b, _1518g], P4, season);
    event16.addMedleyRelays([_1518b, _1518g, _1518g, _1518b], P4, season);
    event16.addMedleyRelays([_1518g, _1518b, _1518b, _1518g], P4, season);
    event16.addMedleyRelays([_1518g, _1518b, _1518g, _1518b], P4, season);
    event16.addMedleyRelays([_1518g, _1518g, _1518b, _1518b], P4, season);
    //season.relayEvents.push(event16);
    
    let event17 = new Relay(17, "11-12 Boys Medley", 200);
    event17.addMedleyRelays([_1112b, _1112b, _1112b, _1112b], P4, season);
    //season.relayEvents.push(event17);
    
    let event18 = new Relay(18, "11-12 Girls Medley", 200);
    event18.addMedleyRelays([_1112g, _1112g, _1112g, _1112g], P4, season);
    //season.relayEvents.push(event18);

    let event19 = new Relay(19, "13-14 Boys Medley", 200);
    event19.addMedleyRelays([_1314b, _1314b, _1314b, _1314b], P4, season);
    //season.relayEvents.push(event17);
    
    let event20 = new Relay(20, "13-14 Girls Medley", 200);
    event20.addMedleyRelays([_1314g, _1314g, _1314g, _1314g], P4, season);
    //season.relayEvents.push(event18);

    season.relayEvents.push(new Relay(21, "Boys Free Crescendo", 250).addFreeRelays([_8ub, _1112b, _1518b, _1314b, _910b], season, [25,50,100,50,25]));
    season.relayEvents.push(new Relay(22, "Girls Free Crescnedo", 250).addFreeRelays([_8ug, _1112g, _1518g, _1314g, _910g], season, [25,50,100,50,25]));

    season.relayEvents.forEach(relay =>{
        for (let r = 0; r < 1 && r < relay.relays.length; r++){
            relay.tables.append(relay.relays[r].table);
        }
        season.potentialRelays.append(relay.tables);
    });      
    
}

Relay.prototype.addFreeRelays = function(groups, season, distances = "even"){

    let mrOrder = [2, 3, 4, 1];

        let exclude = [].concat(season.relayAbsent);
        let entries = [];
        let validRelay = true;
        let s = 0;
        let distance = this.distance / 4;

        groups.forEach(group => {
            if (distances !== "even") {
                distance = distances[s];
            }
            let swimmer = fastest(group, exclude, FR, distance);
            if (swimmer === NO_SWIMMER) {
                validRelay = false;
            }
            else {
                exclude.push(swimmer);
                entries.push(new RelayEntry(swimmer, relaySplit(swimmer.timeByStroke(FR), distance), FR, distance));
            };
            s++;
        });

        if (distances === "even"){
            console.log(entries);
            entries.sort((entry1, entry2) =>{
                console.log(entry1.time, entry2.time);
                return entry1.time - entry2.time;
            });
            let anchor = entries.shift();
            entries.push(anchor);
        }

        if (validRelay) this.addRelay(new PotentialRelay(entries));
        season.relayEvents.push(this);

    return this;
}

Relay.prototype.addMedleyRelays = function(groups, orders, season){

    let mrOrder = [2, 3, 4, 1];

    orders.forEach(order => {
        let exclude = [].concat(season.relayAbsent);
        let entries = [];
        let validRelay = true;
        order.forEach(pick =>{
            let stroke = STROKES[mrOrder[pick]];
            let distance = this.distance / 4;
            //console.log(distance);
            let swimmer = fastest(groups[pick], exclude, stroke, distance);
            if (swimmer == NO_SWIMMER){
                validRelay = false;
            }
            else {
                exclude.push(swimmer);
                entries.push(new RelayEntry(swimmer, relaySplit(swimmer.timeByStroke(stroke), distance), stroke, distance));

                sortRelayEntries(entries);    
            }
            //console.log(swimmer.timeByStroke(stroke));
        });
        if (validRelay) this.addRelay(new PotentialRelay(entries));
    });
    season.relayEvents.push(this);
    return this;
}

Relay.prototype.addRelay = function(potentialRelay){
    let newRelay = true;
    this.relays.forEach(relay => {
        if (sameRelay(relay, potentialRelay)){
            potentialRelay.n++;
            newRelay = false;
        }      
    });
    if (newRelay) this.relays.push(potentialRelay);
    this.relays.sort(function(r1, r2){
        return r1.time - r2.time;
    });
}

function sameRelay(r1, r2){
    let same = true;
    for (let s = 0; s < 4; s++){
        //console.log(r1.entries[s].swimmer, r2.entries[s].swimmer);
        if (r1.entries[s].swimmer !== r2.entries[s].swimmer) same = false;
    }
    return same;
}

function sortRelayEntries(entries){
    entries.sort(function(e1, e2){
        return MR.indexOf(e1.stroke) - MR.indexOf(e2.stroke);
    });
}

function fastest(group, exclude, stroke, distance){
    //console.log(group, stroke);
    let fastest = NO_SWIMMER;
    group.sort(function(swimmer1, swimmer2){
        if (swimmer1.timeByStroke(stroke) === null) return 1;
        if (swimmer2.timeByStroke(stroke) === null) return -1;

        //console.log(swimmer1.timeByStroke(stroke), relaySplit(swimmer1.timeByStroke(stroke), distance));
        //let r1 = relaySplit(swimmer1.timeByStroke(stroke), distance);
        //console.log(r1);
        
        return relaySplit(swimmer1.timeByStroke(stroke), distance) - relaySplit(swimmer2.timeByStroke(stroke), distance);
    });
    let s = 0;
    while (s < group.length){
        if (!exclude.includes(group[s]) && group[s].timeByStroke(stroke) !== null){
            //console.log(exclude);
            fastest = group[s];
            break;
        }
        s++;
    }
    return fastest;
}

function relaySplit(time, distance){
    if (time.distance == distance) return time.t;
    if (time.distance == 100 && distance == 50) return Math.floor(time.t / 2 - 400);
    if (time.distance == 50 && distance == 25) return Math.floor(time.t / 2 - 200);
    if (time.distance == 25 && distance == 50) return 2 * time + 600;
    //console.log(time.distance, distance);
}

function Relay(eventNumber, name, distance){
    this.tables = make("div.relays").append(make("span.bold").html("Event " + eventNumber + ". " + name));
    this.name = name;
    this.eventNumber = eventNumber;
    this.distance = distance;
    this.relays = [];
}

function RelayEntry(swimmer, time, stroke, distance){
    this.swimmer = swimmer;
    this.time = time;
    //console.log(time);
    this.stroke = stroke;
    this.distance = distance;
}

function PotentialRelay(entries){
    this.entries = entries;
    this.time = 0;
    this.n = 1;
    this.entries.forEach(entry => {
        this.time += entry.time;
        //console.log(this.time);
    });

    this.table = this.potentialRelayTable();
}

PotentialRelay.prototype.potentialRelayTable = function(){
    let table = make("table.lineup.relays");
    let tbody = make("tbody");

    let freeRelay = true;

    tbody.append(
        make("tr")
        .append(make("td"))
        .append(make("td").html("Swimmer"))
        .append(make("td").html("Time")));

    this.entries.forEach(entry =>{if (entry.stroke != FR) freeRelay = false });

    this.entries.forEach(entry =>{

        let strokeOrDistance = make("td.relayEntry").html(entry.stroke.abbr);
        if (freeRelay) {strokeOrDistance.addClass("free").html(entry.distance)};

        tbody.append(
            make("tr")
            .append(strokeOrDistance)
            .append(make("td").html(entry.swimmer.display()))
            .append(make("td").html(displayTime(entry.time))));
    });

    tbody.append(
        make("tr.timeRow")
        .append(make("td"))//.html("(" + this.n + ")"))
        .append(make("td"))
        .append(make("td").append(make("span.bold").html(displayTime(this.time)))));

    return table.append(tbody);
}

function displayTime(time){
    let timeString = "";
    let t = time;
    if (time == null){
        return "";
    }
    let m = Math.floor(t / 6000);
    
    if (m > 0){
        t -= m * 6000;
        timeString = m.toString() + ":";
    }
    if (t < 1000) timeString += "0";

    timeString += (t / 100).toFixed(2);

    return timeString;
}

function listOfSwimmers(roster, ageGroup, gender, exclude){
    let list = [];
    roster.forEach(swimmer =>{
        if(swimmer.gender == gender && swimmer.isAge(ageGroup)){
            let absent = false;
            exclude.forEach(absentee =>{
                if (absentee.isSwimmer(swimmer)) absent = true;
            });
            if (!absent) list.push(swimmer);
        }
    });
    return list;
}

Season.prototype.relayRoster = function(ageGroup, gender, meet){
    let season = this;
    let swimmers = listOfSwimmers(this.roster, ageGroup, gender, []);

    let events = meet.type.events;
    //console.log(events);
    //console.log(meet.type);

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
        tbody.append(prs(swimmer, season));
    });
    return table.append(tbody);
}

function prs(swimmer, season){
    let tr = make("tr")  
    .append(make("td").append(removeSwimmerButton(swimmer, season)));
    
    for (let i = 1; i < 5; i++){
        //tr.append(make("td").html(STROKES[i].name));
        let time = (swimmer.topTimes[i] === null) ? null : displayTime(swimmer.topTimes[i].t)
        tr.append(make("td.relays").html(time));
    }
    return tr;
}

function removeSwimmerButton(swimmer, season){
    let button = make("button.absence").data("season", season).data("swimmer", swimmer);
    if (season.relayAbsent.includes(swimmer)) button.addClass("absent");
    button.append(swimmer.display());
    return button;
}

function loadPRs(uploadedFile, season){

    let prs = uploadedFile.slice(0, -1).split("\n");

    //console.log(prs);
    prs.slice(1).forEach(pr => {
        let prData = pr.split(",");
        let prSwimmer = {"nombre": upperCaseName(prData[8]),
                        "appellido": upperCaseName(prData[7]),
                        "id":999};
        let swimmer = findSwimmer(season.roster, prSwimmer);
        let stroke = findStroke(prData[2]);
        let time = newTime(parseInt(prData[1]), stroke, parseInt(prData[5]));

        //console.log(swimmer, time);
        //let newTime = new Time(distance, stroke, t);
        if (swimmer !== NO_SWIMMER) {
            swimmer.topTimes[STROKES.indexOf(stroke)] = time;
        }
        //console.log(swimmer.topTimes);
    });

    season.relayEvents = [];
    relays(season);

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