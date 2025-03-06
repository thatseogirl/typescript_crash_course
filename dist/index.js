"use strict";
//basic types
let id = 5;
let age = 8;
let maritalStatus = true;
let company = "mypersonal";
let x = 7;
//array types
let arrays = [{ "key": "value" }];
let anyArray = [];
//Tuple arrays
let tupleArray1 = [1, "shshsh", true]; //single array
let tupleArray2 = [
    [1, "sample"],
    [2, "samle2"]
];
//unions
let pid = "samson";
//enum
var Directions1;
(function (Directions1) {
    Directions1[Directions1["up"] = 0] = "up";
    Directions1[Directions1["down"] = 1] = "down";
    Directions1[Directions1["left"] = 2] = "left";
    Directions1[Directions1["right"] = 3] = "right";
})(Directions1 || (Directions1 = {}));
const user = {
    id: 1,
    name: "shade"
};
//type Assertion
let cid = 1;
let typeAssertionTest = cid;
// or 
let typeAssertionTest2 = cid;
typeAssertionTest = "8";
//function types
function addNumber(x, y) {
    return x + y;
}
//functions with no returns 
function noReturn(message) {
    console.log(message);
}
noReturn("you're welcome here ");
