const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var polygon;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28;
var box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40;
var slingshot;
var ground2;
var score=0;
var blackImg;
var whiteImg;
var backgroundImg;

function preload() {
    // polygon = loadImage("polygon.png");
    blackImg=loadImage("black.png");
    whiteImg=loadImage("white.png");
    getTime();
}

function setup() {
    var canvas = createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;


    polygon = new Polygon(100, 250, 50, 59);
    ground = new Ground(550, 350, 350, 10);
    // box1 = new Box(390, 340, 40, 50);
    box2 = new Box(430, 340, 40, 50);
    box3 = new Box(470, 340, 40, 50);
    box4 = new Box(510, 340, 40, 50);
    box5 = new Box(550, 340, 40, 50);
    box6 = new Box(590, 340, 40, 50);
    box7 = new Box(630, 340, 40, 50);
    box8 = new Box(670, 340, 40, 50);
    // box9 = new Box(710, 340, 40, 50);
    // box10 = new Box(410, 290, 40, 50);
    // box12 = new Box(450, 290, 40, 50);

    box13 = new Boxpurple(470, 290, 40, 50);
    box14 = new Boxpurple(510, 290, 40, 50);
    box15 = new Boxpurple(550, 290, 40, 50);
    box16 = new Boxpurple(590, 290, 40, 50);
    box17 = new Boxpurple(630, 290, 40, 50);
    // box18 = new Box(690, 290, 40, 50);
    box19 = new Box(730, 290, 40, 50);

    box20 = new Boxgreen(510, 240, 40, 50);
    box21 = new Boxgreen(550, 240, 40, 50);
    box22 = new Boxgreen(590, 240, 40, 50);

    box23 = new Boxwhite(550, 190, 40, 50);


    ground2 = new Ground(1000, 205, 350, 10)

    box24 = new Box(880, 150, 40, 50);
    box25 = new Box(920, 150, 40, 50);
    box26 = new Box(960, 150, 40, 50);
    box27 = new Box(1000, 150, 40, 50);
    box28 = new Box(1040, 150, 40, 50);
    box29 = new Box(1080, 150, 40, 50);
    box30 = new Box(1120, 150, 40, 50);

    box31 = new Boxpurple(920, 100, 40, 50);
    box32 = new Boxpurple(960,100,40,50);
    box33 = new Boxpurple(1000,100,40,50);
    box34 = new Boxpurple(1040,100,40,50);
    box35 = new Boxpurple(1080,100,40,50);

    box36 = new Boxgreen(960,50,40,50);
    box37 = new Boxgreen(1000,50,40,50);
    box38 = new Boxgreen(1040,50,40,50);
    box39=new Boxwhite(1000,0,40,50);


    slingshot = new SlingShot(polygon.body, { x: 200, y: 250 });



}

function draw() {
    if(backgroundImg){
        background(backgroundImg);
    }

    stroke(10);
    fill("red")
    textSize(20);
    text("SCORE : "+score,1250,40);
    push();
    fill("black");
    stroke("yellow");
    textSize(40);
    strokeWeight(5);
    text("Drag the polygon and shoot the blocks ",400,600);
    pop();
    // image(polygon, 100, 250, 50, 50);
    Engine.update(engine);

    polygon.display();
    ground.display();
    // box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    // box9.display();
    // box10.display();
    // box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    // box18.display();
    // box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    ground2.display();
    box24.display();
    box25.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();

    // box1.display();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    // box9.display();
    // box10.display();
    // box12.display();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    // box18.display();
    // box19.display();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    ground2.display();
    box24.score();
    box25.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}
async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);
    var dt=responseJSON.datetime;
    console.log(dt);
    var hr=dt.slice(11,13);
    console.log(hr);
    if(hr>=06 && hr<=18){
        // background(255);
        var bg="white.png";
    }
    else{
        var bg="black.png";
        // background(0);
    }
    backgroundImg=loadImage(bg);
}

