//console.log("hello riya");
//var a=10
//var b=123.123
//var c="keerthana"
//var d=false
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
// var a = 10
// var b = "10"
// if (a == b) {
//     console.log("buchi");
// } else {
//     console.log("booo");
// }
// if (a === b) {
//     console.log("buchi");
// } else {
//     console.log("booo");
// }

//console.log(2*3);
//console.log(2 ** 3);

//for(let index = 1; index < 10; index++){
//  console.log(index);
//}

// var userInput = 1600;
// if ((userInput % 4 === 0 && userInput % 100 !== 0) || (userInput % 400 === 0)) {
//     console.log("hureryyyyyyyyyy its a leap year");
// } else {
//     console.log("not a leap year");
// }
// var num=5
// var fc=0
// for(let i = 1; i <= num; i++) {
//     if(num % i === 0)
//         fc++;
// }
// if(fc === 2) {
//     console.log("prime");
// } else  {
//     console.log("Not a prime");
// }
//----------------------15/06/2026------------------------
// let heading = document.getElementsByClassName("h1");
// console.log(heading);
// heading[1].textContent = "bye bye";
// heading[1].innerHTML = "bye bye";
// heading[2].innerHTML = "bye bye";
//let display = document.getElementById("display");
//console.log(display);
//let para = document.getElementById("para");
// console.log(para);
//para.innerHTML="<b>adios</b>";


// const change = () => {
//     let display = document.getElementById("display");
//     display.innerHTML = "Hello Keerthana";
//     display.style.backgroundColor = "green";
//     display.style.color="yellow";
// }

// const colors = ["red", "blue", "green", "yellow", "orange", "pink"];
// function randomColor() {
//     return colors[Math.floor(Math.random() * colors.length)];
// }
// function changeColor() {
//     document.getElementById("box").style.backgroundColor = `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
//     changeColor();
//     setInterval(changeColor, 1000);
// }
//const changecolor = () => {
       //let box = document.getElementById("box");
        // box.style.backgroundColor = "red";
 // }
//   function changeColor() {
//      let r = Math.floor(Math.random() * 256);
//      let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);

//      let box = document.getElementById("box");
//       box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//       //setInterval(changeColor, 1000);
//   }


// function changeColor() {
//     const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

//     const c1 = colors[Math.floor(Math.random() * colors.length)];
//     const c2 = colors[Math.floor(Math.random() * colors.length)];
//     const c3 = colors[Math.floor(Math.random() * colors.length)];

//     document.getElementById("box").style.background =
//         `linear-gradient(45deg, ${c1}, ${c2}, ${c3})`;
// }


let colorcodes= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const changeColor = () => {
       let display = document.getElementById("display");
       let randcolor = "#";
       let color = document.getElementById("color");
       for(let i = 0; i < 6; i++) {
              let randNo = Math.floor(Math.random() * 16);
              randcolor += colorcodes[randNo];
       }
       color.innerHTML = randcolor
       display.style.backgroundColor = randcolor;
}






