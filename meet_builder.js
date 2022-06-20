function meetBuilder(season){
    let builder = make("div.editor");

    let events = [];
    events.push(new ISEvent(season, events));
    events.push(new ISEvent(season, events));

    builder.append(newEventButton(events));
    events.forEach(event =>{
        builder.append(event.editor).append(newEventButton(events));
    });
    return builder;
}

function newEventButton(events){
    let button = make("button.new").append("New Event");
    button.data("events", events);
    return button;

}

function ISEvent(season, events){
    this.n = events.length + 1;
    this.heats = [];
    this.heats.push(new Heat(this, season));
    this.heats.push(new Heat(this, season));
    this.heats.push(new Heat(this, season));
    this.heats.push(new Heat(this, season));
    this.distance
    this.editor = this.eventEditor(season, events);
}

ISEvent.prototype.eventEditor = function(season, events){
    let eventTitle = make("div.eventTitle");
    let editor =  make("div.builder").append(eventTitle);


    eventTitle.append("Event ", this.n, ".");
    let distances = ["25M", "50M", "100M"];
    for (d = 0; d < 3; d++){
        eventTitle.append(make("button.eventTitle.distance").append(distances[d]));
    }

    STROKES.forEach(stroke =>{
        eventTitle.append(make("button.eventTitle.abbr").append(stroke.abbr))
                    .append(make("button.eventTitle.sel.strokeName").append(stroke.name));
    });

    console.log(this.heats);

    this.heats.forEach(heat=>{
        editor.append(heat.editor);
        console.log(heat.editor);
    })

    return editor;
}


function Heat(event, season){
    this.n = event.heats.length + 1;
    this.lanes = [];
    for (let i = 0; i < 6; i++){
        this.lanes.push(NO_SWIMMER);
    }
    this.editor = this.heatEditor(event, season);
    console.log(this.lanes);
}


Heat.prototype.heatEditor = function(event, season){
    let heat = this;
    let editor = make("div.heat").append("Heat ", this.n, " of ", event.heats.length + 1, '<br>');
    for(l = 0; l < 6; l++){
        let lane = make("div.lane").append(l+1, ",");
        let name = make("button.lane.name").append(heat.lanes[l].display());
        editor.append(lane.append(name));
    };
    console.log(editor);
    return editor;
}

