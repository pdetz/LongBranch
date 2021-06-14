function Meet(meet){
    this.name = meet.name;
    this.events = meet.events;

    this.entries = meet.entries; // array of Entries
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;
    this.type = meet.type;

    this.lineup = make("div");
}

function SavedMeet(meet){
    this.name = meet.name;
    this.entries = meet.entries; // array of Entries
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;
    this.type = meet.type;
}

function Event(n, gender, ageGroup, distance, stroke){
    this.n = n;
    this.gender = gender;
    this.ageGroup = AGE_GROUPS[ageGroup];
    this.distance = distance;
    this.stroke = STROKES[stroke];
}

function SavedEvent(e){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = AGE_GROUPS.indexOf(e.ageGroup);
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

