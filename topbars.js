function loadLeftBar(season){
    let buttons = make("div");

    season.meets.forEach(meet =>{
        buttons.append(meet.button);
    });

    $("#leftbar").append(buttons);
}

function loadRightBar(season){
    let fileInput = $('<input type="file" id="upload" accept=".hy3,.HY3" style="display:none"></input>');

    let menuButtons = make("div")

        .addMenuButton(DOWNLOAD, "Download", "download_button", function(){
            let newSeason = new SavedSeason(season);
            console.log(newSeason);
            saveText("let LBWW22 = " + JSON.stringify(newSeason) + ";", "lbww2022.js");
        })
        .addMenuButton(PRINT, "Print", "print_button", window.print)
        .addMenuButton(UPLOAD, "Upload", "upload_button", function(){$("#upload").click();});
    $("#rightbar").append(menuButtons).append(fileInput);
    loadHY3(fileInput, season);
}

$.fn.addMenuButton = function(svg, label, id, clickHandler){
    let button = make("button#" + id + ".menu");
    button.append(svg)
          .data("onclick", clickHandler);
    $(this).append(button);
    return $(this);
}