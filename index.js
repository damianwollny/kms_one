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

// draw points on canvas
function drawgame(point_quant){
    clearscreen();
    // 
    for (let j = 1; j <= point_quant; j++) {
        drawpoint(30*(j), 30*(j), "grey");
        point_counter++
    }
    drawnum();
}
// draw number (on canvas) in symbolic form
function drawpoint(x,y, circ_color){
    ctx.fillStyle = circ_color;
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI * 2);
    ctx.fill();
}

// draw number in written form
function drawnum(){
    num = number.textContent += 4;
}

// remove all points (draw only background)
function clearscreen(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1000,1000)
}

// print important information on console
function print_output(){
    console.log("written number = ", num);
    console.log("number of dots = ", point_counter);
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
drawnum();
drawgame(4);
