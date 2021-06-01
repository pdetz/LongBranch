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

function Meet(){
    this.events = events; // array of Events
    this.entries = entries; // array of Entries
    this.pool = pool;
    this.address = address;
    this.date = date;
    this.time = time;
}

function Event(){
    this.number = number;
    this.gender = gender;
    this.ageGroup = ageGroup;
    this.distance = distance;
    this.stroke = stroke;
}

function Entries(){
    this.event = event;
    this.swimmer = swimmer;
}