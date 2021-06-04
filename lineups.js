$(document).ready(function(){
    console.log("yeah buddy");

    let right = $("#right");

    let fileInput = $('<input type="file" id="upload" accept=".hy3"></input>');

    right.html("Long Branch 2021").append(fileInput, "<hr>");

    fileInput.change(function(){
        let file = fileInput.get(0).files[0];
        let reader = new FileReader();
        reader.onload = function(){
            let uploadedFile = reader.result;

            let athletes = uploadedFile.split("\nD1");
            console.log(athletes);

            athletes.slice(1).forEach(athlete =>{

                let lines = athlete.split("\n");
                let athleteInfo = lines[0];
                let gender = athleteInfo.slice(0, 1);
                let apellido = athleteInfo.slice(6, 26).trim();
                let nombre = athleteInfo.slice(26, 46).trim();
                let nickname = athleteInfo.slice(46, 66).trim();
                let id = athleteInfo.slice(66, 86).trim();
                let dob = athleteInfo.slice(86, 94).trim();
                let age = athleteInfo.slice(95, 97).trim();
                let address = lines[1].slice(2, 62) + "<br>" + lines[1].slice(62, 94) + " " + lines[1].slice(94, 99);

                right.append(apellido, ", ", nombre, " (", nickname, ")<br>");
                right.append("Gender: ", gender, "<br>");
                right.append("ID: ", id, "<br>");
                right.append("DOB, age: ", dob, ", ", age, "<br>");
                right.append("Address: ", address);

                lines.forEach(line => {
                    //$("#right").append(detail, "<br>");
                });

                right.append("<hr>");
            });

        };
        reader.readAsText(file);
    });
});