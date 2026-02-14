function createMiniFlower(container){
  for(let i=0;i<8;i++){
    const petal = document.createElement("div");
    petal.className="petal";
    petal.style.setProperty("--rotate", i*45+"deg");
    container.appendChild(petal);
  }

  const center = document.createElement("div");
  center.className="center";
  container.appendChild(center);
}

document.querySelectorAll(".flower.small").forEach(f=>{
  createMiniFlower(f);
});

/* Partikel glowing */
function createParticle(xPos = Math.random()*window.innerWidth){
  const p = document.createElement("div");
  p.className = "particle";

  const size = Math.random()*8+4;
  p.style.width = size+"px";
  p.style.height = size+"px";

  const hue = 200 + Math.random()*40;
  p.style.background = `hsl(${hue},100%,70%)`;
  p.style.boxShadow = `0 0 10px hsl(${hue},100%,70%),0 0 25px hsl(${hue},100%,50%)`;

  p.style.left = xPos+"px";
  p.style.bottom = "-20px";
  p.style.animationDuration = (Math.random()*5+6)+"s";

  document.body.appendChild(p);
  setTimeout(()=>p.remove(),10000);
}

setInterval(()=>createParticle(),120);

document.addEventListener("mousemove",(e)=>{
  createParticle(e.clientX);
});
