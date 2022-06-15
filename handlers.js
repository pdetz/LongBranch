function attachClickHandlers(){
    let body = $("#body");

    body.on("click", "button.menu", function(e){
        e.stopImmediatePropagation();
        $(this).data("onclick").call();
    });
    
    $('#leftbar').on("click", "button.meet", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        if (!button.hasClass("sel")){
            let meet = button.data("meet");
            $("#left").children().hide();
            $("#left").append(meet.lineup);
            meet.lineup.show();
            $("button.sel").removeClass("sel");
            button.toggleClass("sel");
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
            $("button.sel").removeClass("sel");
            button.toggleClass("sel");
            console.log(editor);
        };
    });   
    
    body.on("click", "button.bolt", function(e){
        e.stopImmediatePropagation();
        let button = $(this);
        let swimmer = button.data("swimmer");
        let meet = button.data("meet");
        let eN = button.data("e");
        //console.log(swimmer, meet, eN);
        if (button.hasClass("entry")){
            console.log(button.data("entry"));
            button.empty();
            button.data("entry").removeEntry();
            button.data("entry", "");
        }
        else {
            let t = "";
            if (KEYPRESSED == 0){
                button.append(BOLT);
            }
            else {
                button.append('DQ');
                t = "DQ";
            }
            let entry = newEntry(meet, eN, swimmer, t);
            meet.entries.push(entry);
            button.data("entry", entry);
            //console.log(meet.entries);
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
            console.log(KEYPRESSED, e.which);
        }
    });
    $(window).keyup(function(e) {
        KEYPRESSED = 0;
        console.log(KEYPRESSED);
    });


    right.on("keyup", "input.var", function(e){
        let input = $(this);
        //input.data("obj")[input.data("prop")] = input.val();
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