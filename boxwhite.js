class Boxwhite {
    constructor(x,y,width,height) {
      var options = {
        isStatic: false,
        restitution:0.3,
        friction:1.0,
        density:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      strokeWeight(4);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
    score(){
      if (this.visiblity<0 && this.visiblity>-105){
        score++;
      }
    }
  };