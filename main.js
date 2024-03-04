x=0
y=0
var draw_apple=""
var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
var apple=""
var speak_data=""
to_number=0
function preload(){
apple=loadImage("APPLE.webp")
}
function start(){
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="The Speech Has Been Recognized As "+content
    to_number=Number(content);
    if(Number.isInteger(to_number)){
document.getElementById("status").innerHTML="Started Drawing Apple"
draw_apple="set"
    }
    else{
        document.getElementById("status").innerHTML="The speech has not recognized a number"
    }
    }

function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width, screen_height-150)
}
function draw(){
    if (draw_apple=="set") {
        for (let i = 1; i <= to_number; i++) {   
x=Math.floor(Math.random()*screen_width);
y=Math.floor(Math.random()*screen_height);
image(apple, x, y, 50, 50)
        }
draw_apple=""
    }
}
