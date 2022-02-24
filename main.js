video=" ";
status=" ";


function setup(){
    canvas=createCanvas(600,520);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,520);
    video.hide();
}

function draw(){
    image(video,0,0,600,520);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status:Detecting Objects!!!!";
}

function modelLoaded(){
    console.log(modelLoaded);
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}