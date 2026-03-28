let p = 1;

function go(n){
  document.getElementById("p"+p).classList.remove("active");
  document.getElementById("p"+n).classList.add("active");
  p = n;
  if(p===1) startFireworksBG();
  if(n===3) fireworks();
  if(n===5) startGame();
}

// ---------------- FIREWORKS BACKGROUND ----------------
function startFireworksBG() {
  const canvas = document.getElementById("fw-bg");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  class Particle {
    constructor(x,y,color){
      this.x=x; this.y=y; this.color=color;
      this.vx=(Math.random()-0.5)*5;
      this.vy=Math.random()*-3-2;
      this.alpha=1;
    }
    update(){ this.x+=this.vx; this.y+=this.vy; this.alpha-=0.01; }
    draw(){ ctx.globalAlpha=this.alpha; ctx.fillStyle=this.color; ctx.beginPath(); ctx.arc(this.x,this.y,2,0,Math.PI*2); ctx.fill();}
  }

  let particles=[];

  function burst(){
    const x=Math.random()*canvas.width;
    const y=Math.random()*canvas.height/2;
    const hue=Math.random()*360;
    for(let i=0;i<60;i++){
      particles.push(new Particle(x,y, `hsl(${hue},100%,60%)`));
    }
  }

  function animate(){
    ctx.fillStyle="rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    if(Math.random()<0.05) burst();
    particles.forEach((p,i)=>{ p.update(); p.draw(); if(p.alpha<=0) particles.splice(i,1); });
    requestAnimationFrame(animate);
  }

  animate();
}

// 🎂 Cake
function sliceCake(){ alert("Cake sliced 🍰"); }
function blow(){ document.getElementById("flame").style.display="none"; }

// 🎆 Fireworks PAGE 3
function fireworks(){
  const c=document.getElementById("fw"), ctx=c.getContext("2d");
  c.width=innerWidth; c.height=innerHeight;
  let particles=[];
  class Particle{
    constructor(x,y,color){this.x=x;this.y=y;this.color=color;this.vx=(Math.random()-0.5)*5;this.vy=(Math.random()*-3)-2;this.alpha=1;}
    update(){this.x+=this.vx;this.y+=this.vy;this.alpha-=0.01;}
    draw(){ctx.globalAlpha=this.alpha;ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,2,0,Math.PI*2);ctx.fill();}
  }
  function burst(){const x=Math.random()*c.width,y=Math.random()*c.height/2,hue=Math.random()*360;for(let i=0;i<50;i++){particles.push(new Particle(x,y, `hsl(${hue},100%,50%)`));}}
  function animate(){ctx.fillStyle="rgba(0,0,0,0.15)";ctx.fillRect(0,0,c.width,c.height);if(Math.random()<0.05) burst();particles.forEach((p,i)=>{p.update();p.draw();if(p.alpha<=0)particles.splice(i,1);});requestAnimationFrame(animate);}
  animate();
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
  h.style.position="absolute"; h.style.left=Math.random()*innerWidth+"px";
  h.onclick=()=>{ score++; document.getElementById("s").innerText=score; h.remove(); };
  document.getElementById("game").appendChild(h);
  let fall=setInterval(()=>{ h.style.top=(h.offsetTop+5)+"px"; if(h.offsetTop>innerHeight){ clearInterval(fall); h.remove(); } },30);
}

function endGame(){
  let f=document.getElementById("final");
  f.style.display="block";
  f.innerHTML="✨ Happy Birthday Mini! You are Pure Magic! ✨";
}

// 🌈 BALLOONS
const balloonContainer=document.getElementById('balloon-container');
function createBalloon(){
  const balloon=document.createElement('div'); balloon.classList.add('balloon');
  balloon.style.backgroundColor=`hsl(${Math.random()*360},80%,70%)`;
  balloon.style.left=Math.random()*window.innerWidth+'px';
  balloon.style.animationDuration=4+Math.random()*4+'s';
  balloonContainer.appendChild(balloon);
  setTimeout(()=>{balloon.remove();},8000);
}
setInterval(createBalloon,600);

// SPARKLE CURSOR
document.addEventListener('mousemove', e=>{
  const sparkle=document.createElement('div'); sparkle.className='sparkle';
  sparkle.style.left=e.pageX+'px'; sparkle.style.top=e.pageY+'px';
  document.body.appendChild(sparkle);
  setTimeout(()=>sparkle.remove(),1000);
});

// start fireworks bg on page load
startFireworksBG();
