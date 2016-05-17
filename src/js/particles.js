// header animation
(function(){
  
  var H, Particle, W, animateParticles, canvas, clearCanvas, colorArray, createParticles, ctx, drawParticles, initParticleSystem, particleCount, particles, updateParticles, resizeCanvas;

  particleCount = 45;
  particles = [];
  // colorArray = ["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0.05)"];
  colorArray = [
    "#E2E3DD",
    "#CCCDC7",
    "#E2E3DD",
    "#CCCDC7",
    "#E2E3DD",
    "#CCCDC7",
    "#E2E3DD",
    "#E43E20"
    // "#FAB93E"
  ];
  canvas = document.getElementById("js-particles");
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', 200);
  W = canvas.width;
  H = canvas.height;
  ctx = canvas.getContext("2d");

  Particle = function() {
    this.color = colorArray[Math.floor(Math.random() * colorArray.length )];
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.direction = {
      x: -1 + Math.random() * 2,
      y: -1 + Math.random() * 2
    };
    this.vx = 1 * Math.random() + .008;
    this.vy = 1 * Math.random() + .008;
    this.radius = 2.5;
    this.move = function() {
      this.x += this.vx * this.direction.x;
      this.y += this.vy * this.direction.y;
    };
    this.changeDirection = function(axis) {
      this.direction[axis] *= -1;
    };
    this.draw = function() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    };
    this.boundaryCheck = function() {
      if (this.x >= W - this.radius) {
        this.x = W - this.radius;
        this.changeDirection("x");
      } else if (this.x <= 0 + this.radius) {
        this.x = 0 + this.radius;
        this.changeDirection("x");
      }
      if (this.y >= H - this.radius) {
        this.y = H - this.radius;
        this.changeDirection("y");
      } else if (this.y <= 0 + this.radius) {
        this.y = 0 + this.radius;
        this.changeDirection("y");
      }
    };
  };
  resizeCanvas = function() {
    canvas.setAttribute('width', window.innerWidth);
  }
  clearCanvas = function() {
    ctx.clearRect(0, 0, W, H);
  };
  createParticles = function() {
    var i, p;
    i = particleCount - 1;
    while (i >= 0) {
      p = new Particle();
      particles.push(p);
      i--;
    }
  };
  drawParticles = function() {
    var i, p;
    i = particleCount - 1;
    while (i >= 0) {
      p = particles[i];
      p.draw();
      i--;
    }
  };
  updateParticles = function() {
    var i, p;
    i = particles.length - 1;
    while (i >= 0) {
      p = particles[i];
      p.move();
      p.boundaryCheck();
      i--;
    }
  };
  initParticleSystem = function() {
    createParticles();
    drawParticles();
  };
  animateParticles = function() {
    clearCanvas();
    drawParticles();
    updateParticles();
    requestAnimationFrame(animateParticles);
  };

  initParticleSystem();
  requestAnimationFrame(animateParticles);

  $(window).resize(resizeCanvas);
  
})();
