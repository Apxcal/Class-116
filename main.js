mustacheX=0;
mustacheY=0;

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(300, 300)
    webcam.hide();
    posenet=ml5.posenet(webcam, modelLoaded);
    posenet.on("pose", gotPoses);
}

function preload(){
    mustache=loadImage("https://i.postimg.cc/zvXxGVLM/moustache.png";)
}

function draw(){
    image(webcam, 0, 0, 300, 300);
    image(mustache_nose, noseX, noseY, 30, 30)
}

function modelLoaded(){
    console.log("Model is loaded.");
}

function gotPoses(results){
    if(results.length>0){
        mustacheX=results[0].pose.nose.x;
        mustacheY=results[0].pose.nose.y;
        console.log(results);
        console.log("NoseX = "+results[0].pose.nose.x);
        console.log("NoseY = "+results[0].pose.nose.y);
    }
}

