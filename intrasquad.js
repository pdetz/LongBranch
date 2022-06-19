

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
    return make("div.editor")
        .append(make("table.lineup").append(this.builder));
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
