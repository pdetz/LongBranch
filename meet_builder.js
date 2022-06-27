function meetBuilder(season){

    //let meet = intrasquad(season, season.meets[1]);
    let meet = season.meets[1].ISMeet; // = meet;

    let builder = make("div.editor");
    //builder.append(newEventButton(meet.events));
    meet.events.forEach(event =>{
        builder.append(event.editor);//.append(newEventButton(meet.events));
    });
    loadTimerSheets(meet, builder);

    meet.meet.entries.forEach(entry =>{
        entry.button.html(meet.events[entry.n-1].distance.slice(0, -1));
        meet.seedEntry(entry, meet.events[entry.n-1]);
    });
    return builder;
}

function loadTimerSheets(meet, timerSheets){
    for (let lane = 0; lane < 6; lane++){
        let timerSheet = make("div.laneSheet");
        timerSheet.append(make("div.timerTitle").append("Lane ", lane+1));
        meet.events.forEach(event=>{
            let e = make("div.timers.event").html(event.titleLine.html());
            event.heats.forEach(heat=>{
                let h = make("div.timers.heat");
                let name = make("span.timers.name")
                            .append(NO_SWIMMER.nicknames());
                            //.append(event.heatLane(heat.n-1, lane).swimmer.nicknames());
                h.append("Heat ", heat.n, ": ", name)
                 .append(timerLine(), timerLine(), timerLine());
                event.heatLane(heat.n-1, lane).name = name;
                e.append(h);
            });
            timerSheet.append(e);
        });
        timerSheets.append(timerSheet);
    }
    return timerSheets;
}

Lane.prototype.updateTimerSheet = function(){
    this.name.html(this.swimmer.nicknames());    
}

function timerLine(){
    let l = make("div.timerLine");//.append("test");
    return l;
}

function intrasquad(season, meet, events){
    let newMeet = new ISMeet(season, meet, []);
    events.forEach(event=>{
        newMeet.events.push(new ISEvent(season, newMeet.events, event));
    });
    return newMeet;
}

ISMeet.prototype.seedEntry = function(entry, event){
    let laneOrder = [3, 2, 4, 1, 5, 0];
    let seeded = false; let h = 0; let l = 0;
while (!seeded){
    while (!seeded && h < event.heats.length){
        let heat = event.heats[h];
        while (!seeded && l < 6){
            let lane = heat.lanes[laneOrder[l]];
            if (lane.swimmer == NO_SWIMMER) {
                entry.heat = h;
                entry.lane = laneOrder[l];
                entry.n = event.n;
                entry.heatLane = lane;
                lane.seedLane(entry.swimmer);
                lane.entry = entry;
                seeded = true;
                //lane.append(entry.button);
            }
            l++;
        }
        l = 0;
        h++;
    }
    if (!seeded){
        let newHeat = new Heat(event);
        event.heats.push(newHeat);
        event.editor.append(newHeat.editor);
    }
}
}

Lane.prototype.seedLane = function(swimmer){
    this.swimmer = swimmer;
    this.button.html(swimmer.nicknames());
    this.updateTimerSheet();
}

function Lane(event, heat, swimmer, n){
    this.n = n + 1;
    this.event = event;
    this.heat = heat;
    this.swimmer = swimmer;
    this.lane = make("div.lane").append(this.n, ".");
    this.button = make("button.lane.name").html(swimmer.nicknames()).data("lane", this);
    this.entry = "";
    this.lane.append(this.button);
}

function swap(lane1, lane2){
    console.log(lane1.entry.button);
    
    let entry1 = lane1.entry;
    let entry2 = lane2.entry;

    let swimmer1 = lane1.swimmer;
    let swimmer2 = lane2.swimmer;

    console.log(swimmer1.nombre, swimmer2.nombre);

    if (entry1 !== "" && entry2 !== ""){
        entry1.button.data("entry", entry2);
        entry2.button.data("entry", entry1);

        let holdButton = entry1.button;
        entry1.button = entry2.button;
        entry2.button = holdButton;
        
        //lane1.entry = entry2;
        //lane2.entry = entry1;

        lane1.swimmer = swimmer2;
        lane2.swimmer = swimmer1;
        
        entry1.button.data("entry").swimmer = swimmer2;
        entry2.button.data("entry").swimmer = swimmer1;

        entry1.button.html("h" + entry1.button.data("entry").heat + "l" + entry1.button.data("entry").lane);
        entry2.button.html("h" + entry2.button.data("entry").heat + "l" + entry2.button.data("entry").lane);
        entry1.button.html(entry1.button.data("entry").swimmer.nombre);
        entry2.button.html(entry2.button.data("entry").swimmer.nombre);
    }
    if (entry1 == ""){
        
    }

    //lane1.swimmer = lane2Swimmer;
    //lane2.swimmer = lane1Swimmer;
    
    lane1.seedLane(swimmer2);
    lane2.seedLane(swimmer1);
}

Heat.prototype.heatEditor = function(event){
    let heat = this;
    let editor = make("div.heat").append("Heat ", this.n, " of ", event.heats.length + 1, '<br>');
    for (l = 0; l < 6; l++){
        editor.append(heat.lanes[l].lane);
    };
    return editor;
}

ISEvent.prototype.heatLane = function(heat, lane){
    return this.heats[heat].lanes[lane];
}

function newEventButton(events){
    let button = make("button.new").append("New Event");
    button.data("events", events);
    return button;
}

function loadIntrasquad(season, meet, events){
    let newMeet = new ISMeet(season, meet, events);
    return newMeet;
}


function ISMeet(season, meet, events){
    this.meet = meet;
    this.events = [];
    events.forEach(event=>{
        let newEvent = new ISEvent(season, events, event);
        this.events.push(newEvent);
    });
    //console.log(this.events[0].titleLine);
}

function ISEvent(season, events, event){
    this.n = event.n;
    this.gender = event.gender;
    this.heats = [];
    for (h = 0; h < event.heats; h++){
        this.heats.push(new Heat(this));
    }
    //this.swimmers = [];
    this.distance = event.distance;
    this.ageGroup = AGE_GROUPS[event.ageGroup];
    this.stroke = STROKES[event.stroke];
    this.titleLine = make("div.eventTitle").html("this is the title");
    this.editor = this.eventEditor(season, events);
}

ISEvent.prototype.eventEditor = function(season, events){
    let eventSelector = make("div.noprint");
    let editor =  make("div.builder"); //.append(eventSelector);

    let ages = [_10U, _OPEN];
    for (a = 0; a < 2; a++){
        let aButton = make("button.eventTitle.ageGroup").data("e", this).data("age", ages[a]).append(ages[a].name);
        if (this.ageGroup == ages[a]) aButton.addClass("sel");
        eventSelector.append(aButton);            
    }
    
    eventSelector.append(" | ");

    let distances = ["25M", "50M", "100M"];
    for (d = 0; d < 3; d++){
        let dButton = make("button.eventTitle.distance").data("e", this).append(distances[d]);
        if (this.distance == distances[d]) dButton.addClass("sel");
        eventSelector.append(dButton);
    }

    eventSelector.append(" | ");
    
    STROKES.forEach(stroke =>{
        let sButton = make("button.eventTitle.stroke").data("e", this).data("stroke",stroke).append(stroke.abbr);
        if (this.stroke == stroke) sButton.addClass("sel");
        eventSelector.append(sButton);
    });

    this.updateTitle();
    editor.append(this.titleLine);

    this.heats.forEach(heat=>{
        editor.append(heat.editor);
        //console.log(heat.editor);
    })

    return editor;
}

ISEvent.prototype.updateTitle = function(){
    let eventNumber = make("span.eventNumber").html(this.n);
    this.titleLine.html("Event ").append(eventNumber, ". ", this.ageGroup.name, " ", this.distance, " ", this.stroke.name);
}


function Heat(event){
    this.n = event.heats.length + 1;
    this.lanes = [];
    for (let i = 0; i < 6; i++){
        this.lanes.push(new Lane(event, this, NO_SWIMMER, i));
    }
    this.editor = this.heatEditor(event);
}


