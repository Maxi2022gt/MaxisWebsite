function ytchannelredirect() {
  window.location.href = "https://youtube.com/@MaxiToysOfficial?si=UOuoZnNFYuHyV6dJ";
}
function githubredirect() {
  window.location.href = "https://github.com/Maxi2022gt";
}
function discordserverredirect() {
  window.location.href = "https://discord.gg/UNHM39Y63N";
}
function youfish() {
  var myWindow = window.open("", "🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟", "width=00,height=100");
  myWindow.document.write("<p>🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟</p>");
}
function whattimeisit() {
  d = new Date();
  sec = d.getSeconds()
  min = d.getMinutes()
  h = d.getHours()
  secString = sec.toString()
  secArray = secString.split("")
  minString = min.toString()
  minArray = minString.split("") 
  hString = h.toString()
  hArray = hString.split("")
  if (secArray.length === 1) {
    secString = "0" + secString
  }
  if (minArray.length === 1) {
    minString = "0" + minString
  }
  if (hArray.length === 1) {
    hString = "0" + hString
  }
  time = hString + ":" + minString + ":" + secString // is it just me that im a beginner or is this made incorrectly
  document.getElementById("time").innerHTML = time
  console.log(secString)
}
function reversetext() {
  var result = document.getElementById("textbox").value;
  // let BadWords = ["<style>","</style>","<b>","</b>"];
  // if (result.includes(BadWords[0])) {
  //   e = alert("ACE Detected! i have prevented you to reverse this text, as it can cause some harful things.")
  // }
  // else {
  //   if (result.includes(BadWords[1]) ) {
  //     return e;
  //   }
  //   else {
  //     reversedText = result.split("").reverse().join("")
  //     document.getElementById("Out").innerHTML = reversedText;
  //     console.log(reversedText)
  //   }
  // }
  // ^^ detection didnt work. i have to disable the antidetection then :<
  reversedText = result.split("").reverse().join("")
  document.getElementById("Out").innerHTML = reversedText;
  console.log(reversedText)
}
async function CopyText() {
  let texttocopy = document.getElementById("textbox").innerHTML
  try {
    await navigator.clipboard.writeText(texttocopy)
    alert("Succesfully copied to clipboard!")
  }
  catch (err) {
    alert("Failed to copy. Have you accepted the Clipboard permisson?")
  }
}
// var x = Math.floor(Math.random()*7) // x is to randomize the text
// var textarray = [ // modify this if you want
//   "Wait, what am i doing here?",
//   "super mega ultra lollll",
//   "No",
//   "The decimal number of the day is " + Math.random()*32,
//   "<b>bold</b>",
//   "see that scrolling bar at the bottom? thats just a bug and idk if i can fix it :/",
//   "Max's website explained on comments of code!"
// ]
// document.getElementById("splash").innerHTML = textarray[x]; // "innerHTML" is to modify the text and "getElementById("splash")" is to get the element with id "splash"
// console.log("test")
// ok this is very weird it doesnt get the splash