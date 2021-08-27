class Obstacle1 {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }

  show() {
    image(GreenShell, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= 4;
  }
}
