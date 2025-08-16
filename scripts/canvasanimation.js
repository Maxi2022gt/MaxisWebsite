let canv = document.getElementById("titl")
let ctx = canv.getContext("2d")

canv.width = window.innerWidth;
window.addEventListener("resize",()=>{
    canv.width = window.innerWidth;
    w = canv.width;
})
let w = canv.width;
let h = canv.height;
let t = [128,64];
let frame = 0;
function draw() {
for (let x = -30; x <= (w+30); x += 30) {
for (let y = -30; y <= (h+30); y += 30) {
ctx.fillStyle = "rgb("+t[(x/30)+(y/30)&1]+",0,0)"
ctx.fillRect(x+(frame%30),y+(frame%30),30,30)
}
}
ctx.font = "40px Arial"
ctx.fillStyle = "white"
   ctx.textAlign = 'center';
       ctx.textBaseline = 'middle';
ctx.fillText("Hello, I am Maxi.",w/2,h/2+Math.sin(frame/10)*5)
ctx.font = "10px Arial"
ctx.fillText("(Commonly known as Maxi Toys)",w/2,h/2+Math.sin(frame/10)*5+30)
frame++;
requestAnimationFrame(draw)
}

draw()