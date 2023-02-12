const canvas = document.getElementById("points");
const ctx = canvas.getContext("2d");
const container = document.getElementById("container")
let number = document.getElementById("number");
//let x = canvas.width / 2;
//let y = canvas.height / 2;
let radius = 20;
let new_radius = 10;
// nonsense comment
testt = number.textContent += 2;
//console.log(testt);

document.getElementById("test").addEventListener("click", changeradius)

function changeradius(){
    radius = radius+5;
    //console.log(radius)
    drawgame();
}
ctx.fillStyle = "lightgrey";
ctx.fillRect(0,0,1000,1000);

function drawgame(){
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(20,50, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(30,60, radius, 0, Math.PI * 2);
    ctx.fill();

    console.log(radius)

}

drawgame();

function myfunction(){
    alert("test")
}