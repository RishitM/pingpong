img = "";
noseX = 0;
noseY = 0;

function preload() {
  
}

function setup() {
  canvas=createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.hide()
  posenet = ml5.poseNet(video, modeloaded);
  posenet.on("pose", gotPoses);
}
function gotPoses(results) {
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
}
function draw() {
  background("#D3D3D3");

  image(video, 0,0, 650, 400);
}
function modeloaded() {
  console.log("loaded");
}
