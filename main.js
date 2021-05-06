function preload(){
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function modelLoaded(){
    console.log("Model is loaded!!");
    status = true;
}
function draw(){
    image(video, 0, 0,300,300);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: In Detection Mode";
}