import React, { useEffect, useRef } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const maxStars = Math.min(500, window.innerWidth / 2); // Adjust star count dynamically
    const stars = [];
    const fps = 30; // Limit the frame rate to 30 FPS
    let angle = 0; // Rotation angle for starfield

    // Star class with optimized properties
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * 1.2 + 0.2;
      }

      move() {
        this.z -= 2;
        if (this.z <= 0) {
          this.z = canvas.width;
        }
      }

      draw() {
        const px = this.x * (canvas.width / this.z);
        const py = this.y * (canvas.width / this.z);
        const size = this.size * (canvas.width / this.z);

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        ctx.beginPath();
        ctx.arc(
          px + canvas.width / 2,
          py + canvas.height / 2,
          size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize stars
    for (let i = 0; i < maxStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += 0.1;
      if (angle >= 360) angle = 0;

      stars.forEach((star) => {
        star.move();
        star.draw();
      });
    };

    // Start throttled animation
    const intervalId = setInterval(animate, 1000 / fps);

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(intervalId); // Clean up interval
    };
  }, []);

  return <canvas ref={canvasRef} className="stars-canvas"></canvas>;
};

export default StarCanvas;
