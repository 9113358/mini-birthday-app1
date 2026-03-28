let p = 1;

function go(n){
 document.getElementById("p"+p).classList.remove("active");
 document.getElementById("p"+n).classList.add("active");
 p = n;

 if(n===3) fireworks();
 if(n===5) startGame();
}

// 🎂
function sliceCake(){
 alert("Cake sliced 🍰");
}

// 🔥
function blow(){
 document.getElementById("flame").style.display="none";
}

// 🎆
function fireworks(){
 let c=document.getElementById("fw");
 let ctx=c.getContext("2d");
 c.width=innerWidth;
 c.height=innerHeight;

 setInterval(()=>{
   let x=Math.random()*c.width;
   let y=Math.random()*c.height;

   for(let i=0;i<50;i++){
     ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
     ctx.fillRect(x,y,2,2);
   }
 },400);
}

// 🎁
function yes(){
 alert("Your gift is on the way! 💖");
 go(5);
}

function no(){
 document.getElementById("no").style.transform="scale(0.5)";
}

// 🎮 GAME
let score=0, time=20;

function startGame(){
 let timer=setInterval(()=>{
   time--;
   document.getElementById("t").innerText=time;

   if(time<=0){
     clearInterval(timer);
     endGame();
   }
 },1000);

 setInterval(spawn,700);
}

function spawn(){
 let h=document.createElement("div");
 h.innerText="💖";
 h.style.position="absolute";
 h.style.left=Math.random()*innerWidth+"px";

 h.onclick=()=>{
   score++;
   document.getElementById("s").innerText=score;
   h.remove();
 };

 document.getElementById("game").appendChild(h);

 let fall=setInterval(()=>{
   h.style.top=(h.offsetTop+5)+"px";
   if(h.offsetTop>innerHeight){
     clearInterval(fall);
     h.remove();
   }
 },30);
}

function endGame(){
 let f=document.getElementById("final");
 f.style.display="block";

 f.innerHTML="✨ Happy Birthday Mini! You are Pure Magic! ✨";
}