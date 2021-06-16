function Season(season){
    this.roster = []; // array of Swimmers
    
    season.roster.sort(compareNames);

    season.roster.forEach(swimmer =>{
        this.roster.push(new Swimmer(swimmer));
    });
        
    this.meetTypes = [];
    season.meetTypes.forEach(meetType =>{
        this.meetTypes.push(new MeetType(meetType));
    });

    this.meets = []; // array of Meets
    season.meets.forEach(meet =>{
        this.meets.push(new Meet(meet, this));
    });

    //this.meetTypes = season.meetTypes; // array of Meet Types
    this.currentMeet = season.currentMeet;

}

function SavedSeason(season){
    this.roster = []; // array of Swimmers

    season.roster.forEach(swimmer =>{
        this.roster.push(new SavedSwimmer(swimmer));
    })

    this.meetTypes = [];
    season.meetTypes.forEach(meetType => {
        this.meetTypes.push(new SavedMeetType(meetType));
    });

    this.meets = []; // array of Meets
    season.meets.forEach(meet =>{
        this.meets.push(new SavedMeet(meet, season));
        console.log(this.meets);
    });

    this.currentMeet = season.currentMeet;
    return this;
}

function MeetType(meetType){
    this.name = meetType.name;
    this.ageGroups = meetType.ageGroups;
    this.events = [];
    meetType.events.forEach(e=>{
        this.events.push(new Event(e, this.ageGroups));
    });
}

function SavedMeetType(meetType){
    this.name = meetType.name;
    this.ageGroups = meetType.ageGroups;
    this.events = [];
    meetType.events.forEach(e =>{
        this.events.push(new SavedEvent(e, this.ageGroups));
    });
}

function AgeGroup(name, ages){
    this.name = name;
    this.ages = ages;
    this.swimmers = [];
}

const _8U = new AgeGroup("8&U", [4, 5, 6, 7, 8]);
const _9_10 = new AgeGroup("9-10", [9, 10]);
const _11_12 = new AgeGroup("11-12", [11, 12]);
const _13_14 = new AgeGroup("13-14", [13, 14]);
const _15_18 = new AgeGroup("15-18", [15, 16, 17, 18]);
const _19 = new AgeGroup("19", [19]);
const _12U = new AgeGroup("12&U", [4, 5, 6, 7, 8, 9, 10, 11, 12]);

const AGE_GROUPS = [_8U, _9_10, _11_12, _13_14, _15_18, _19, _12U];

function Stroke(name, abbr){
    this.name = name;
    this.abbr = abbr;
}

const FR = new Stroke("Freestyle", "FR");
const BK = new Stroke("Backstroke", "BK");
const BR = new Stroke("Breaststroke", "BR");
const FL = new Stroke("Butterfly", "FL");
const IM = new Stroke("Individual Medley", "IM");
const RELAY = new Stroke("Relay", "RE");

const STROKES = [IM, FR, BK, BR, FL, RELAY];

function Gender(name, abbr){
    this.name = name;
    this.abbr = abbr;
}
const GENDERS = {"M": "Boys", "F": "Girls", "X": "Mixed"};