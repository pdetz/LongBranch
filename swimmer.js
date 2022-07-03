function Swimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id.slice(-14);
    this.address = swimmer.address;
    this.zip = swimmer.zip;

    this.topTimes = [];
    swimmer.topTimes.forEach(time => {
        if (!time) {
            this.topTimes.push(null);
        }
        else {
            let t = new Time(parseInt(time.distance), STROKES[time.stroke], parseInt(time.t));
            this.topTimes.push(t);
        }
    }); //new Array(5);
    //console.log(this.topTimes);

    //this.age = age;
    this.age = age(this.dob, "06012022");
    let name = this.apellido + ", ";
    this.nicknames = function(){
        let name = this.apellido + ", ";
        if (this.nickname == ""){
            name += this.nombre;
        }
        else{
            name += this.nickname;
        }
        return name;
    }
    this.display = function(){
        let disp = this.nicknames() + " " + this.age;
        return disp;
    }

}

function Time(d, s, t){
    this.distance = d;
    this.stroke = s;
    this.t = t;
}

function SavedTime(time){
    this.distance = time.distance;
    this.stroke = STROKES.indexOf(time.stroke);
    this.t = time.t;
}

function newTime(d, s, t){
    return new Time(d, s, t);
}

Swimmer.prototype.nicknames = function(){
    let name = this.apellido + ", ";
    if (this.nickname == ""){
        name += this.nombre;
    }
    else{
        name += this.nickname;
    }
    return name;
}

Swimmer.prototype.timeByStroke = function(stroke){
    //this.topTimes.forEach(time)
    return this.topTimes[STROKES.indexOf(stroke)];
}

function SavedSwimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id;
    this.address = swimmer.address;
    this.zip = swimmer.zip;
    this.topTimes = [];
    swimmer.topTimes.forEach(time => {
        if (!time) {
            this.topTimes.push(null);
        }
        else {
            let t = new SavedTime(parseInt(time.distance), STROKES.indexOf(time.stroke), parseInt(time.t));
            this.topTimes.push(t);
        }
    }); //new Array(5);
    this.topTimes = swimmer.topTimes;
}

function age(dob, date){
    let yy = parseInt(date.slice(4,8)) - parseInt(dob.slice(4,8));
    if (parseInt(date.slice(0,4)) < parseInt(dob.slice(0,4))){yy--}
    return yy;
}

Swimmer.prototype.isAge = function(ageGroup){
    let is = false;
    let swimmersAge = this.age;
    ageGroup.ages.forEach(age =>{
        if (age == swimmersAge) {is = true}
    });
    return is;
}

Swimmer.prototype.isSwimmer = function(swimmer){
    let is = (this.id == swimmer.id);
    if (!is && this.nombre == swimmer.nombre && this.apellido == swimmer.apellido) is = true;
    return is;
}

function EMPTY(){
    this.dob = "";
    this.nombre = "";
    this.apellido = "";
    this.nickname = "";
    this.nicknames = function(){
        return make("div.empty").html(" ");
    }
}

const NO_SWIMMER = new EMPTY();