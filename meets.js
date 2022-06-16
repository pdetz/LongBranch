function Meet(meet, season){

    let thisMeet = this;

    this.name = meet.name;
    this.title = make("div.title").html(meet.title);
    this.description = make("div.description").html(meet.description);

    this.type = season.meetTypes[meet.type];
    this.date = meet.date;

    this.entries = [];

   
    meet.entries.forEach(entry => {
        thisMeet.entries.push(new Entry(entry, thisMeet, season.roster));
        console.log(entry);
    }); // array of Entries

    this.lineup = make("div.meet_lineup");
    this.button = make("button.top.meet").html(this.name).data("meet", this);
}

function SavedMeet(meet, season){
    this.name = meet.name;
    this.title = meet.title.html();
    this.description = meet.title.html();
    this.type = season.meetTypes.indexOf(meet.type);
    
    this.date = meet.date;
    this.entries = [];
    
    meet.entries.forEach(entry =>{
        this.entries.push(new SavedEntry(entry, meet, season.roster));
        console.log(meet.entries);
    })

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
    console.log(this);
}

function SavedEntry(entry, meet, roster){
    this.e = meet.type.events.indexOf(entry.e);
    this.swimmer = roster.indexOf(entry.swimmer);
    this.time = entry.t;
}

Entry.prototype.removeEntry = function() {
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
        swimmer: 0,
        t: t
    }
    let newE = new Entry(entry, meet, "[{}]");
    newE.swimmer = swimmer;
    return newE;
}