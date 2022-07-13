function Meet(meet, season){

    let thisMeet = this;

    this.name = meet.name;
    this.title = make("div.title").html(meet.title);
    this.description = make("div.description").html(meet.description);

    this.type = season.meetTypes[meet.type];
    this.date = meet.date;
    this.ISMeet = "A Meet";

    if (meet.ISMeet == "A Meet"){
        this.ISMeet = "A Meet";
    }
    else {
        //this.ISMeet = intrasquad(season, meet);
        this.ISMeet = loadIntrasquad(season, this, meet.ISMeet.events);
    }
    this.entries = [];

    meet.entries.forEach(entry => {
        thisMeet.entries.push(new Entry(entry, thisMeet, season.roster));
    }); // array of Entries


    this.lineup = make("div.meet_lineup");
    this.button = make("button.top.meet").html(this.name).data("meet", this);
}

function SavedMeet(meet, season){
    this.name = meet.button.html();
    this.title = meet.title.html();
    this.description = meet.description.html();
    this.type = season.meetTypes.indexOf(meet.type);
    
    if (meet.ISMeet == "A Meet"){
        this.ISMeet = "A Meet";
    }
    else {
        this.ISMeet = {
            meet: season.meets.indexOf(meet),
            events: []
        }
        meet.ISMeet.events.forEach(event=>{
            this.ISMeet.events.push(new SavedEvent(event, AGE_GROUPS));
        });
    }

    this.date = meet.date;
    this.entries = [];
    
    meet.entries.forEach(entry =>{
        this.entries.push(new SavedEntry(entry, meet, season.roster));
        console.log(meet.entries);
    });
    console.log(this);
}

function Event(e, ageGroups){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = ageGroups[e.ageGroup];
    this.distance = e.distance;
    this.stroke = STROKES[e.stroke];
    this.heats = [];
}

function SavedEvent(e, ageGroups){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = ageGroups.indexOf(e.ageGroup);
    this.distance = e.distance;
    this.stroke = STROKES.indexOf(e.stroke);
    this.heats = e.heats.length;
}


function Entry(entry, meet, roster){
    this.meet = meet;
    this.e = meet.type.events[entry.e];
    //this.swimmer = entry.swimmer;
    this.swimmer = roster[entry.swimmer];
    this.time = entry.time;
    this.heat = entry.heat;
    this.lane = entry.lane;
    this.n = entry.n;
    this.button = make("button.bolt");
    this.heatLane = "";
}

function SavedEntry(entry, meet, roster){
    this.e = meet.type.events.indexOf(entry.e);
    this.swimmer = roster.indexOf(entry.swimmer);
    this.time = entry.time;
    this.heat = entry.heat;
    this.lane = entry.lane;
    if (meet.ISMeet !== "A Meet"){
        this.n = entry.n;
    }
}

Entry.prototype.removeEntry = function() {
    if (this.heatLane !== ""){
        this.heatLane.seedLane(NO_SWIMMER);
        this.heatLane.entry = "";
    }
    let entries = this.meet.entries;
    let index = entries.indexOf(this);
    console.log(this);
    if (index > -1) {
        entries.splice(index, 1);
    }
}

function newEntry(meet, e, swimmer, t){
    let entry = {
        e: e,
        //swimmer: swimmer,
        t: t
    }
    console.log(t);
    let newE = new Entry(entry, meet, "[{}]");
    newE.swimmer = swimmer;
    return newE;
}

Entry.prototype.EHL = function(){
    let e = this.n;
    let h = this.heat + 1;
    let l = this.lane + 1;
    //this.button.html("yeah");
    this.button.html(e.toString() + "," + h.toString() + "," + l.toString());
}