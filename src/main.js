let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* Hi, I'm Yinchun Yang
    you can call me Alex
    I will show you my front-end skill next
    first, we need a div
 **/
#div1{
  border: 1px solid black;
  height:200px;
  width:200px;
}
/*
  Next I gonna turn div to Taiji Diagram
  Just watch out
  First, make div to a circle
**/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,20,0.5);
  border:none;
}
/*
  Taiji Diagram is half black and white
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
  background: #000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
/*
  make it more like Taiji
**/
`;
let string2 = "";
let n = 0;


let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp"
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};
step();