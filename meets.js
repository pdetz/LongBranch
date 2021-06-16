function Meet(meet, season){
    this.name = meet.name;
    this.type = season.meetTypes[meet.type];

    this.entries = [];

   
    meet.entries.forEach(entry => {
        this.entries.push(new Entry(entry, this, season.roster));
    }); // array of Entries
    
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;

    this.lineup = make("div");
}

function SavedMeet(meet, season){
    this.name = meet.name;
    this.type = season.meetTypes.indexOf(meet.type);
    
    this.entries = [];
    
    meet.entries.forEach(entry =>{
        this.entries.push(new SavedEntry(entry, meet, season.roster));
    })

    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;
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

function Entry(entry, meet, roster){
    this.meet = meet;
    this.e = meet.type.events[entry.e];
    //this.swimmer = entry.swimmer;
    this.swimmer = roster[entry.swimmer];
    this.time = entry.t;
}

function SavedEntry(entry, meet, roster){
    this.e = meet.type.events.indexOf(entry.e);
    this.swimmer = roster.indexOf(entry.swimmer);
    this.time = entry.t;
}

Entry.prototype.removeEntry = function() {
    let entries = this.meet.entries;
    let index = entries.indexOf(this);
    if (index > -1) {
        entries.splice(index, 1);
    }
}

function newEntry(meet, e, swimmer, t){
    let entry = {
        e: e,
        swimmer: 0,
        t: t
    }
    let newE = new Entry(entry, meet, "[{}]");
    newE.swimmer = swimmer;
    return newE;
}