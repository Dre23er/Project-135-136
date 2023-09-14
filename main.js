status = "";
objects = [];

function preload(){
    
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380, 380);
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectiong Objects ";
    object_name = document.getElementById("object_name").value;
}

function draw(){
    image(video, 0, 0, 480,380);
}