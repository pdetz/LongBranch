function Meet(meet){
    this.name = meet.name;
    this.events = meet.events;

    this.entries = meet.entries; // array of Entries
    this.pool = meet.pool;
    this.address = meet.address;
    this.date = meet.date;
    this.time = meet.time;

    this.lineup = make("div");
}

Meet.prototype.meetBuilder = function(){
    let builder = make("tbody");
    builder.append(
        make("tr")
            .append(make("td").html("#"))
            .append(make("td").html("Gender"))
            .append(make("td").html("Age Group"))
            .append(make("td").html("Distance"))
            .append(make("td").html("Stroke"))
    );
    this.events.forEach(e => {
        builder.append(e.editRow());
    });
    this.builder = builder;
    return make("table").attr("class", "lineup").append(this.builder);
}

function Event(n, gender, ageGroup, distance, stroke){
    this.n = n;
    this.gender = gender;
    this.ageGroup = AGE_GROUPS[ageGroup];
    this.distance = distance;
    this.stroke = STROKES[stroke];
}

Event.prototype.editRow = function(){
    let tr = make("tr").data(this);
    let gbutton = make("button.open_dropdown");

    tr.append(make("td").html(new Input(this, "n", 1)))
        .append(make("td").html(gbutton.html(GENDERS[this.gender])
            .data("obj", this).data("prop", "gender")
            .data("onclick", function(){
                if (gbutton.returnVar() == "M") {
                    gbutton.setVar("F").html("Girls");
                }
                else {
                    gbutton.setVar("M").html("Boys");
                }
            })
        ))
        .append(make("td").html(ddOpenButton(DD_AGE_GROUPS, this, "ageGroup")))
        .append(make("td").html(new Input(this, "distance", 1)))
        .append(make("td").html(ddOpenButton(DD_STROKES, this, "stroke")));
    return tr;
}

function Input(obj, prop, size) {
    let input = make("input.var").attr("size", size);
    input.data("obj", obj).data("prop",prop);
    input.val(input.data("obj")[input.data("prop")]);
    this.input = input;
    return this.input;
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

function SavedEvent(e){
    this.n = e.n;
    this.gender = e.gender;
    this.ageGroup = AGE_GROUPS.indexOf(e.ageGroup);
    this.distance = e.distance;
    this.stroke = STROKES.indexOf(e.stroke);
}

function ddMenu(list){
    let menu = make("div.dropdown");
    menu.data("open_button", "");
    list.forEach(item => {
        let ddButton = make("button.dropdown_button").html(item.name).data("obj", item);
        ddButton.data("onclick", function(){
            let openButton = menu.data("open_button");
            openButton.setVar(ddButton.data("obj"));
            openButton.html(ddButton.data("obj").name);
            menu.hide();
        });
        menu.append(ddButton);
    });
    return menu;
}

function ddOpenButton(ddMenu, obj, prop){
    let button = make("button.open_dropdown").html(obj[prop].name);
    button.data("obj", obj).data("prop", prop);
    button.data("onclick", function(){
        ddMenu.data("open_button", button);
        button.parent().append(ddMenu);
        ddMenu.show();
        console.log(button.parent());
    });
    return button;
}

const DD_AGE_GROUPS = new ddMenu(AGE_GROUPS);
const DD_STROKES = new ddMenu(STROKES);