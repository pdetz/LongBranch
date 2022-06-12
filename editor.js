function loadEditor(season) {
    let editor = make("div.editor");
    let meetTitle = make("input#meet_title");

    

    editor.append(meetTitle);
    return editor;
}