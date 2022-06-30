function Editor(name, editor){
    this.name = name;
    this.editor = editor;
    this.button = make("button.top.editor").html(name).data("editor", this.editor);

}

function loadEditors(season) {
    season.editors = [];

    season.editors.push(new Editor("Meets", meetEditor(season)));
    season.editors.push(new Editor("Roster", rosterEditor(season)));
    season.editors.push(new Editor("Meet Builder", meetBuilder(season)));
    season.editors.push(new Editor("Relay Builder", meetBuilder(season)));
    
    //console.log(season.editors);
    
}

function meetEditor(season){


    editor = make("div.editor");
    season.meets.forEach(meet =>{
        let thisMeet = make("div.meetEditor");

        let fileInput = $('<input type="file" class="entries" accept=".hy3,.HY3" style="display:none"></input>');
        loadHY3(fileInput, season, loadEntries, meet);


        let name = make("input.edit.name").val(meet.name)
                    .data("update", meet.button);
        let title = make("input.edit.title").val(meet.title.html())
                    .data("update", meet.title);
        let description = make("textarea.edit.description").val(meet.description.html())
                            .data("update", meet.description);
        thisMeet.append(name, " &#8212; ", title, description)
                .append(fileInput)
                .append(make("button.top.entries").append(UPLOAD, "Upload ", meet.name, " Entries"));


        editor.append(thisMeet);
    });
    return editor;
}

function rosterEditor(season){
    editor = make("div.editor");
    season.roster.forEach(swimmer =>{
        editor.append(swimmer.nombre + ' ' + swimmer.apellido + '<br>');
    });
    return editor;
}