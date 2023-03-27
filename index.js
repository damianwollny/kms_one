// global variables
const container = document.getElementById("container");
let number = document.getElementById("number");
let radius = 15;
let correct = false;
let wrong = false;
let glob_level = 1;
let glob_rep = 1;
let point_counter = 0;
let num = 1;
var t0 = 0;
var t1 = 0;

// event listeners
document.getElementById("correct").addEventListener("click", correct_click);
document.getElementById("wrong").addEventListener("click", wrong_click);
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

// react to clicking
function correct_click(){
    correct = true
    wrong = false
    compare();
}
function wrong_click(){
    correct = false
    wrong = true
    compare();
}

// react to keys
function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        correct = true
        wrong = false
        compare();
    }
    //down
    if (event.keyCode == 40) {
        correct = false
        wrong = true
        compare();
    }
}
function keyUp(event) {
    //up
    if (event.keyCode == 38) {
      correct = false;
      wrong = false;
    }
    //down
    if (event.keyCode == 40) {
        correct = false;
        wrong = false;
    }
}

// draw number in written form
function drawnum(amount){
    num = number.textContent = amount;
}

// clear all 9 points
function clearpoints(){
    for (let elem = 1; elem <= 16; elem++) {
        let point_element = document.getElementById(elem);
        point_element.className = 'empty_point';
    }
}

// draw points
function drawpoints(amount){
    clearpoints();
    // pick random startpoint in grid
    rnd_start = Math.floor(Math.random() * (16-amount)) + 1;
    for (let elem = rnd_start; elem < rnd_start+amount; elem++) {
        let point_element = document.getElementById(elem);
        point_element.className = 'fill_point';
        point_counter=amount;
    }
}

// comparison
function compare(){
    console.log(point_counter)
    if (num==point_counter & correct == true) {
        //alert("RICHTIG!");
        glob_rep = ++glob_rep
        if (glob_rep == 3) {
            glob_level = ++glob_level
            if (glob_level == 4) {
                restart_game("SUPER!")
            }
            document.getElementById("title").innerHTML = "LEVEL: " + glob_level
            glob_rep = 1
        }
        level_up_down(glob_level, glob_rep);
    }else if(num!=point_counter & wrong == true){
        //alert("RICHTIG!");
        glob_rep = ++glob_rep
        if (glob_rep == 3) {
            glob_level = ++glob_level
            if (glob_level == 4) {
                measuretime();
                restart_game()
            }
            document.getElementById("title").innerHTML = "LEVEL: " + glob_level
            glob_rep = 1
        }
        measuretime();
        level_up_down(glob_level, glob_rep);
    }else{
        restart_game("LEIDER FALSCH!");
    }
}

// measure time
function measuretime(){
    if (glob_level == 1 & glob_rep == 2) {
        t0 = performance.now();
    }else if (glob_level == 4) {
        t1 = performance.now();
        console.log("end = ", t1)
        console.log("start = ", t0)
        alert("SUPER! " + Math.round((t1 - t0)/1000) + " Sekunden");
    }
}

// restart game
function restart_game(alert_text){
    if (glob_level < 4) {
        alert(alert_text);
    }
    glob_level = 1;
    glob_rep = 1;
    document.getElementById("title").innerHTML = "LEVEL: 1";
    level_up_down(glob_level, glob_rep);
}


function level_up_down(a_level, b_rep){
    // one array / level
    arr_1 = [1,2,3];
    arr_2 = [4,5,6];
    arr_3 = [7,8,9];
    console.log("LEVEL=", glob_level);
    console.log("REP=", glob_rep)
    // -- careful: the following only works if all arrays are the same length
    // Math.random() -> get random number between 0-1
    // Math.floor() -> rounds up number
    // window["arr_" + level][] -> gets arr_[1|2|3] index
    let f1 = Math.floor(Math.random()*arr_1.length)
    let f2 = Math.floor(Math.random()*arr_1.length)
    let f3 = window["arr_" + a_level][f1]
    let f4 = window["arr_" + a_level][f2]
    console.log("num1="+ f3)
    console.log("num2="+ f4)
    drawnum(f3);
    drawpoints(f4);
}

// initialize game
function init() {
    drawnum(num);
    drawpoints(1);
}

init();

