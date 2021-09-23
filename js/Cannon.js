class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    fill("#676e6a");
    console.log(this.angle)

    if(keyIsDown(RIGHT_ARROW) && this.angle<0.35){
      this.angle+=0.2;
    }

    if(keyIsDown(LEFT_ARROW)&& this.angle>-1.45){
      this.angle-=0.2;
    }

    push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(-10, -20, this.width, this.height);
    pop();

    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
