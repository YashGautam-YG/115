function preload(){
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoded);
poseNet.on('pose',getPoses);
}
function draw(){

}
function modelLoded(){
console.log("modelLoded");
}
function getPoses(results){
    console.log("posenet is intialized")
}