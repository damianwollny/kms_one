//const canvas = document.getElementById("points");
//const ctx = canvas.getContext("2d");
const container = document.getElementById("container");
let number = document.getElementById("number");
let radius = 15;
let correct = false;
let wrong = false;
let point_counter = 0;

document.getElementById("correct").addEventListener("click", correct_click);
document.getElementById("wrong").addEventListener("click", wrong_click);

// react to clicking: correct
function correct_click(){
    correct = true
    wrong = false
    compare();
    print_output()
}

// react to clicking: correct
function wrong_click(){
    correct = false
    wrong = true
    compare();
    print_output()
}

// draw number in written form
function drawnum(amount){
    num = number.textContent += amount;
}

// print important information on console
function print_output(){
    console.log("written number = ", num);
    console.log("number of dots = ", point_counter);
}

// draw points
function drawpoints(amount){
    for (let elem = 1; elem <= amount; elem++) {
        let point_element = document.getElementById(elem);
        point_element.className = 'fill_point';
        point_counter++;
    }
}

// comparison
function compare(){
    if (num==point_counter & correct == true) {
        alert("SUPER!")
    }else if(num!=point_counter & wrong == true){
        alert("SUPER!")
    }else{
        alert("FALSCH!")
    }
}

// --- game loop ---

// init
drawnum(1);
drawpoints(1);
// one array / level
arr_1 = [1,2,3];
arr_2 = [4,5,6];
arr_3 = [7,8,9];
// level loop:
// how many levels do you want to play? 
for (let level = 1; level <= 3; level++) {
    console.log("LEVEL=", level);
    break;
    // repetition loop:
    // how often do you want to play each level?
    for (let rep = 1; rep <= 3; rep++) {
        console.log("REP=", rep)
        // -- careful: the loop only works if all arrays are the same length
        // Math.random() -> get random number between 0-1
        // Math.floor() -> rounds up number
        // window["arr_" + level][] -> gets arr_[1|2|3] index
        let f1 = Math.floor(Math.random()*arr_1.length)
        let f2 = Math.floor(Math.random()*arr_1.length)
        let f3 = window["arr_" + level][f1]
        let f4 = window["arr_" + level][f2]
        console.log("num1="+ f3)
        console.log("num2="+ f4)
        drawnum(f3);
        drawpoints(f4);
        //break;
    }
}