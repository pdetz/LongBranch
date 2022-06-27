function Swimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id.slice(-14);
    this.address = swimmer.address;
    this.zip = swimmer.zip;

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

function SavedSwimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id;
    this.address = swimmer.address;
    this.zip = swimmer.zip;
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