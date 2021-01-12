class Boxgreen {
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
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed>4){
        push();
        World.remove(world,this.body);
        this.visiblity-=5;
        tint(255,this.visiblity);
        var pos =this.body.position;
        pop();
      }
      else{
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      strokeWeight(4);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }
    }
    score(){
      if (this.visiblity<0 && this.visiblity>-105){
        score++;
      }
    }
  };