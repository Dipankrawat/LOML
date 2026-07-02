function openLetter(){

document.getElementById("letter").style.display="block";

}

function showNote(){

document.getElementById("secret").style.display="block";

}

function popupMemory(){

document.getElementById("memoryCard").style.display="block";

}

document.addEventListener("click",function(e){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💖","💕","❤️","💗","🌸"][Math.floor(Math.random()*5)];

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2000);

});

function flowers(){

for(let i=0; i<60; i++){

let flower = document.createElement("div");

flower.className = "flower";

const flowers = ["🌸","🌺","🌷","🌼","💮","🪻"];

flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left = Math.random()*100 + "vw";

flower.style.animationDuration = (3 + Math.random()*3) + "s";

flower.style.fontSize = (20 + Math.random()*25) + "px";

document.body.appendChild(flower);

setTimeout(()=>{
    flower.remove();
},6000);

}

}

let hearts=0;

function fillHeart(){

hearts++;

const level=document.getElementById("heartLevel");

if(hearts==1)
level.innerHTML="💗";

else if(hearts==2)
level.innerHTML="💖";

else
level.innerHTML="❤️";

}

function hug(){

document.getElementById("hugText").innerHTML = `
<div class="hugContainer">

<img src="images/teddy.gif" class="teddy">

<div class="hugHearts">
💖 💕 ❤️ 💗 💞
</div>

<p class="hugMessage">
Crushing you in my arms...
</p>

</div>
`;

}

function gift(){

document.getElementById("giftBox").innerHTML=

"💖 Inside this gift is every apology, every promise, every memory, and every piece of my heart. I hope one day I can earn another chance to make new memories with you. 🌸";

}