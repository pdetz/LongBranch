function SomeObject(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
}

function arrayTest(){
    let arr = [];
    arr.push(new SomeObject(1, "one"));
    arr.push(new SomeObject(2, "two"));
    arr.push(new SomeObject(3, "three"));

    let arr2 = [arr[1], arr[2], arr[0]];

    arr2[1].prop2 = "FOUR??";
    arr[0].prop2 = "EIGHT????";

    console.log(arr.indexOf(arr2[0]));
    console.log(arr2);
}