Season.prototype.viewRoster = function(){
    let div = make("div.roster");
    let table = make("table.roster.lineup");
    let tbody = make("tbody");
    let season = this;
    season.newSwimmer = new Swimmer({dob:"", nombre:"", apellido:"", nickname:"", gender:"", id:"", address:""});

    season.roster.forEach(swimmer => {
        tbody.append(rosterTR(swimmer));
    });

    div.append(table.append(tbody));

    tbody.append(make("tr")).append(make("td")
        .addMenuButton("New Swimmer:", "Add", "add", function(){
            season.roster.push(new Swimmer(season.newSwimmer));
            tbody.append(rosterTR(season.roster[season.roster.length - 1]));
            season.newSwimmer.dob = "";
            season.newSwimmer.nombre = "";
            season.newSwimmer.apellido = "";
            season.newSwimmer.nickname = "";
            season.newSwimmer.gender = "";
            season.newSwimmer.id = "";
            $("#new_swimmer").find("input").val("");
        }));
    tbody.append(rosterTR(season.newSwimmer).attr("id", "new_swimmer"));

    return div;
}

function rosterTR(swimmer){
    let tr = make("tr");
    tr.append(make("td").append(new Input(swimmer, "apellido", 5)))
      .append(make("td").append(new Input(swimmer, "nombre", 4)))
      .append(make("td").append(new Input(swimmer, "nickname", 4)))
      .append(make("td").append(new Input(swimmer, "dob", 5)))
      .append(make("td").append(new Input(swimmer, "gender", 1)))
      .append(make("td").append(new Input(swimmer, "id", 6)))
      .append(make("td").append(new Input(swimmer, "address", 18)))
    return tr;
}

function compareNames(a, b){
    let apellidoA = a.apellido.toUpperCase();
    let apellidoB = b.apellido.toUpperCase();
    let nombreA = a.nombre.toUpperCase();
    let nombreB = b.nombre.toUpperCase();
    //console.log(apellidoA, apellidoB);
    if (apellidoA < apellidoB){
        return -1;
    }
    if (apellidoA > apellidoB){
        return 1;
    }
    if(apellidoA == apellidoB){
        if (nombreA < nombreB){
            return -1;
        }
        else {
            return 1;
        }
    }
}