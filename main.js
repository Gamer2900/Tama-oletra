function setup() {
  video=createCapture(VIDEO);
  video.size(550, 500);
  video.position(60, 100);
    canvas=createCanvas(550, 500);
    canvas.position(620, 100);
    
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  background('#ddf0e3');
}

function modelLoaded() {
  console.log('El modelo se cargo =]');
}

function gotPoses(results) {
  if(results.length>0) {
    console.log(results);
  }
}