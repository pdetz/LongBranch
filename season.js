function Season(){
    this.roster = roster; // array of Swimmers
    this.meets = meets; // array of Meets
    this.meetTypes = meetTypes; // array of Meet Types
    this.currentMeet = currentMeet;
}

function Swimmer(){
    this.dob = dob;
    this.age = age;
    this.nombre = nombre;
    this.apellido = apellido;
    this.address = address;
}

function AgeGroup(){
    this.
}

function Meet(events, entries, pool, address, date, time){
    this.events = events; // array of Events
    this.entries = entries; // array of Entries
    this.pool = pool;
    this.address = address;
    this.date = date;
    this.time = time;
}

function Event(){
    this.n = n;
    this.gender = gender;
    this.ageGroup = ageGroup;
    this.distance = distance;
    this.stroke = stroke;
    this.edit = make()
}

function Entries(){
    this.event = event;
    this.swimmer = swimmer;
}

