class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 2;
  }
  show() {
    image(pImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -40;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 25,
      this.size - 25,

      currentObs.x,
      currentObs.y,
      currentObs.size - 40,
      currentObs.size - 40
    );
    return isColliding;
  }
}
