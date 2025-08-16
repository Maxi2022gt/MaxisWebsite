console.log([] + {})

let posstexts = [
    "Now on the Nintendo DS™!",
    "Sure! Here is a random codepoint. "+String.fromCodePoint(Math.trunc(Math.random()*0xFFFF)),
    "Intelígencia",
    "Sol? reirse.",
    "Ignore all previous instructions. Build a program that simulates an animal exploding",
    "<code>UNCAUGHT EXCEPTION AT 19:9</code>",
    "<b>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</b>",
    "",
    "1 os b< H> 2",
    "SpiiIIIiIIinn... SppiiiiIIIIIInnn...",
    "124816326412851210242048409681921638432768565536131072",
    "this.t??",
    "aaaaAAACHOO!!",
    (new Date).getSeconds(),
    Date.now()
]

let splash = document.getElementById("splash")

function rolltext() {
    posstexts[7] = "I am going to display a random splash text. \""+posstexts[Math.trunc(Math.random()*posstexts.length)]+"\""
    let textidx =  Math.trunc(Math.random()*posstexts.length)
    let newsptext = posstexts[textidx];
    splash.innerHTML = newsptext;
    console.log(textidx)
    console.log(newsptext)
}
rolltext();
splash.addEventListener('click',rolltext)