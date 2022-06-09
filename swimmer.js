function Swimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id;
    this.address = swimmer.address;

    //this.age = age;
    this.age = age(this.dob, "06012022");
    this.display = function(){
        let disp = this.apellido + ", ";
        if (this.nickname == ""){
            disp += this.nombre;
        }
        else{
            disp += this.nickname;
        }
        return disp + " " + this.age;
    }
}

function SavedSwimmer(swimmer){
    this.dob = swimmer.dob;
    this.nombre = swimmer.nombre;
    this.apellido = swimmer.apellido;
    this.nickname = swimmer.nickname;
    this.gender = swimmer.gender;
    this.id = swimmer.id;
    this.address = swimmer.address;
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