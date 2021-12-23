function preload() { 
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEI);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}
function draw() {
}

function take_snapshot() {
    save('myfilterimage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("lip x = " + results[0].pose.lip.x);
        console.log("lip y = " + results[0].pose.lip.y);
    }
}
