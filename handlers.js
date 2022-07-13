function attachClickHandlers(season){
    let body = $("#body");

    body.on("click", "button.menu", function(e){
        e.stopImmediatePropagation();
        $(this).data("onclick").call();

    });

    $("#right").on("click", "button.heat", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let heat = button.data("heat");
        let event = button.data("event");
        console.log(heat, event);
        if (heat.swimmers() === 0) event.removeHeat(heat);
    });

    $("#right").on("click", "button.lane.name", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let lane = button.data("lane");
        let event = lane.event;
        console.log(button.data("lane").swimmer.nombre);
        if (season.selectedLane == ""){
            season.selectedLane = button.data("lane");
            button.addClass("sel");
        }
        else if (season.selectedLane == lane){
            season.selectedLane = "";
            button.removeClass("sel");
        }
        else if (season.selectedLane !== lane){
            swap(season.selectedLane, lane);
            season.selectedLane.button.removeClass("sel");
            season.selectedLane = "";
            button.removeClass("sel");
        }
    });

    $("#left").on("click", "button.absence", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let season = button.data("season");
        let swimmer = button.data("swimmer");
        if (button.hasClass("absent")){
            button.removeClass("absent");
            season.relayAbsent.splice(season.relayAbsent.indexOf(swimmer), 1);
        }
        else {
            button.addClass("absent");
            season.relayAbsent.push(swimmer);
        }
        loadRelays(season);
    });
    
    $("#right").on("click", "button.eventTitle.distance", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        button.data("e").distance = button.html();
        button.siblings("button.eventTitle.distance.sel").removeClass("sel");
        button.addClass("sel");
        button.data("e").updateTitle();
    });
    $("#right").on("click", "button.eventTitle.ageGroup", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        console.log(button.data("e"), "Event data");
        button.data("e").ageGroup = button.data("age");
        button.siblings("button.eventTitle.ageGroup.sel").removeClass("sel");
        button.addClass("sel");
        button.data("e").updateTitle();
    });
    $("#right").on("click", "button.eventTitle.stroke", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        button.data("e").stroke = button.data("stroke");
        console.log(button.data("e"));
        button.siblings("button.eventTitle.stroke.sel").removeClass("sel");
        button.addClass("sel");
        button.data("e").updateTitle();
    });

    $('#leftbar').on("click", "button.meet", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let meet = button.data("meet");
            $("#left").children().hide();
            $("#left").append(meet.lineup);
            meet.lineup.show();
            $("button.meet.sel").removeClass("sel");
            $("button.relay.sel").removeClass("sel");
            button.toggleClass("sel");
            season.currentMeet = meet;
            document.title = season.currentMeet.title.html();
        };
    });   
    
    $('#leftbar').on("click", "button.relay", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let season = button.data("season");
            console.log(season);
            let meet = "REL";

            relays(season);

            $("#left").children().hide();
            $("#left").append(season.relayRosterTables);
            season.relayRosterTables.show();
            
            $("#right").children().hide();
            $("#right").append(season.potentialRelays);
            season.potentialRelays.show();
            
            $("button.meet.sel").removeClass("sel");
            button.toggleClass("sel");
            season.currentMeet = meet;
            document.title = "Relay Carnival";
        };
    });   
    
    $('#rightbar').on("click", "button.editor", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let editor = button.data("editor");
            $("#right").children().hide();
            $("#right").append(editor);
            editor.show();
            $("button.editor.sel").removeClass("sel");
            button.toggleClass("sel");
        };
    });   

    $('#right').on("click", "button.top.entries", function(e){
        e.stopImmediatePropagation();
            let button = $(this);
            button.parent().children("input.entries").click();
    });
        
    body.on("click", "button.bolt", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let swimmer = button.data("swimmer");
        let meet = button.data("meet");
        let eN = button.data("e");
        let stroke = meet.type.events[eN].stroke;
        //console.log(swimmer, meet, eN);
        if (button.hasClass("entry")){
            console.log(button.data("entry"));
            button.empty();
            button.data("entry").removeEntry();
            button.data("entry", "");
            button.data("stroke","");
            button.data("distance","");
        }
        else {
            let t = "";
            let entry = newEntry(meet, eN, swimmer, t);
            entry.button = button;
            meet.entries.push(entry);
            button.data("entry", entry);1
            button.data("stroke", stroke);
            //console.log(meet.entries);
            if (KEYPRESSED == 0){
                button.append(BOLT);
            }
            else if (KEYPRESSED == 83) {
                button.append(STAR);
                //button.data("entry").flag("swim up");
            }
            else if (KEYPRESSED == 50 || KEYPRESSED == 98){
                console.log(stroke);
                if (stroke === 0){
                    button.data("distance", "200M")
                }
                else{
                    button.append("25");
                    button.data("distance","25M");
                }
            }
            else if (KEYPRESSED == 53 || KEYPRESSED == 101){
                button.append("50");
                button.data("distance","50M");
                console.log("50M");
            }
            else if (KEYPRESSED == 49 || KEYPRESSED == 97){
                button.append("100");
                button.data("distance","100M");

            }
            if (meet.ISMeet !== "A Meet"){
                meet.ISMeet.events.forEach(event => {
                    if (button.data("distance") == event.distance && button.data("stroke") == event.stroke){
                        meet.ISMeet.seedEntry(entry, event);
                        entry.EHL();
                        //button.html("2h" + entry.heat + "l" + entry.lane);
                    }
                });
            }
        }
        button.toggleClass("entry");
    });
}

function Input(obj, prop, size) {
    let input = make("input.var").attr("size", size);
    input.data("obj", obj).data("prop",prop);
    input.val(input.data("obj")[input.data("prop")]);
    this.input = input;
    return this.input;
}

function attachKeyHandlers(){
    let right = $("#right");

    $("#right").on("keyup", ".edit", function(e) {
        e.stopImmediatePropagation();
        let input = $(this);
        input.data("update").html(input.val());
    });

    $(window).keydown(function(e) {
        if (KEYPRESSED != e.which){
            KEYPRESSED = e.which;
        }
    });
    $(window).keyup(function(e) {
        KEYPRESSED = 0;
    });


    right.on("keyup", "input.var", function(e){
        let input = $(this);
        input.data("obj")[input.data("prop")] = input.val();
        input.setVar(input.val());
    });
    /*
    $("#left").on("keyup", "input.meet_info", function(e){
        let input = $(this);
        let teacher = input.obj();
        meet.name = input.val();
        if (e.which == 13){
            input.blur();
        }
    });
*/
}