
function preload(){

}

function setup()
{
    canvas = createCanvas(1280, 960);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 320, 240, 640, 480);
    fill('green');
    rect(160, 120, 940, 20);
    rect(160, 120, 20, 720);
    rect(1100, 120, 20, 740);
    rect(160, 840, 940, 20);
    
    fill('orange');
    circle(170, 130, 70);
    fill('orange');
    circle(170, 840, 70);
    fill('orange');
    circle(1110, 130, 70);
    fill('orange');
    circle(1110, 840, 70);
    fill('orange');
    
}

function take_snapshot()
{
    save('tunishq.png');
}


