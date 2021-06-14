function Meet(meet, meetTypes){
    this.name = meet.name;
    this.events = meet.events;

    this.entries = meet.entries; // array of Entries
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;
    this.type = meetTypes[meet.type];

    this.lineup = make("div");
}

function SavedMeet(meet, meetTypes){
    this.name = meet.name;
    this.entries = meet.entries; // array of Entries
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;
    this.type = meetTypes.indexOf(meet.type);
}

function Event(e, ageGroups){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = ageGroups[e.ageGroup];
    this.distance = e.distance;
    this.stroke = STROKES[e.stroke];
}

function SavedEvent(e, ageGroups){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = ageGroups.indexOf(e.ageGroup);
    this.distance = e.distance;
    this.stroke = STROKES.indexOf(e.stroke);
}

function Entries(){
    this.event = event;
    this.swimmer = swimmer;
}

Meet.prototype.savedEventsJSON = function() {
    let meet = this;
    let savedEvents = [];
    meet.events.forEach(e => {
        savedEvents.push(new SavedEvent(e));
    });
    return savedEvents;
}

