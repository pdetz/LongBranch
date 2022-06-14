function Editor(name, editor){
    this.name = name;
    this.editor = editor;
    this.button = make("button.top").html(name).data("view", this.editor);

}

function loadEditors(season) {
    season.editors = [];

    season.editors.push(new Editor("Meets", meetEditor(season)));
    season.editors.push(new Editor("Roster", rosterEditor(season)));
    
    
}

function meetEditor(season){
    editor = make("div.editor");
    season.meets.forEach(meet =>{
        editor.append(meet.name + '\n');
    });
    return editor;
}

function rosterEditor(season){
    editor = make("div.editor");
    season.roster.forEach(swimmer =>{
        editor.append(swimmer.nombre + ' ' + swimmer.apellido + '\n');
    });
    return editor;
}