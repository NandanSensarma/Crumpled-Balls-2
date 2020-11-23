class Paper {
    constructor() {
      var options = {
        isStatic:false,  
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(200,300,10,options);
      this.image=loadImage("paper (1).png")
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      imageMode(CENTER);
      image(this.image,0,0,40,40);
      pop();
    }
  }
  