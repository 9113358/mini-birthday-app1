let p = 1;

function go(n){
 document.getElementById("p"+p).classList.remove("active");
 document.getElementById("p"+n).classList.add("active");
 p = n;
 if(n===3) fireworks();
 if(n===5) startGame();
}

// 🎂 Cake
function sliceCake(){ alert("Cake sliced 🍰"); }
function blow(){ document.getElementById("flame").style.display="none"; }

// 🎆 Fireworks
function fireworks(){
 let c=document.getElementById("fw"), ctx=c.getContext("2d");
 c.width=innerWidth; c.height=innerHeight;
 setInterval(()=>{
   let x=Math.random()*c.width, y=Math.random()*c.height;
   for(let i=0;i<50;i++){
     ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
     ctx.fillRect(x,y,2,2);
   }
 },400);
}

// 🎁 Gift
function yes(){ alert("Your gift is on the way! 💖"); go(5); }
function no(){ document.getElementById("no").style.transform="scale(0.5)"; }

// 🎮 Mini-game
let score=0, time=20;
function startGame(){
 let timer=setInterval(()=>{
   time--;
   document.getElementById("t").innerText=time;
   if(time<=0){ clearInterval(timer); endGame(); }
 },1000);
 setInterval(spawn,700);
}

function spawn(){
 let h=document.createElement("div"); h.innerText="💖";
 h.style.position="absolute";
 h.style.left=Math.random()*innerWidth+"px";
 h.onclick=()=>{
   score++; document.getElementById("s").innerText=score; h.remove();
 };
 document.getElementById("game").appendChild(h);
 let fall=setInterval(()=>{
   h.style.top=(h.offsetTop+5)+"px";
   if(h.offsetTop>innerHeight){ clearInterval(fall); h.remove(); }
 },30);
}

function endGame(){
 let f=document.getElementById("final");
 f.style.display="block";
 f.innerHTML="✨ Happy Birthday Mini! You are Pure Magic! ✨";
}

// 🌈 BALLOONS & SPARKLES
const balloonContainer = document.getElementById('balloon-container');
function createBalloon() {
  const balloon = document.createElement('div'); balloon.classList.add('balloon');
  balloon.style.backgroundColor = `hsl(${Math.random()*360},80%,60%)`;
  balloon.style.left = Math.random()*window.innerWidth + 'px';
  balloon.style.animationDuration = 5 + Math.random()*5 + 's';
  balloonContainer.appendChild(balloon);
  setTimeout(()=>{ balloon.remove(); }, parseFloat(balloon.style.animationDuration)*1000);
}
setInterval(createBalloon, 800);

document.addEventListener('mousemove', e=>{
 const sparkle = document.createElement('div'); sparkle.className='sparkle';
 sparkle.style.left=e.pageX+'px'; sparkle.style.top=e.pageY+'px';
 document.body.appendChild(sparkle); setTimeout(()=>sparkle.remove(),1000);
});
