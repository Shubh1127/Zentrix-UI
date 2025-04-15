// src/components/ChessHero.jsx

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ChessHero() {
  const navigate=useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Chess pattern properties
    const gridSize = 40;
    const lineWidth = 1;
    // const lineColor = "rgba(0, 0, 0, 0.1)"; // Darker lines for light background

    // Line movement properties
    const verticalLines = [];
    const horizontalLines = [];

    // Initialize vertical lines
    for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
      verticalLines.push({
        x,
        offsetY: 0,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    // Initialize horizontal lines
    for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
      horizontalLines.push({
        y,
        offsetX: 0,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    // Points/stars properties
    const points = [];
    const pointCount = 50;

    // Initialize points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient for fading effect
      const fadeGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5);
      fadeGradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
      fadeGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      const time = Date.now() / 3000;
      const halfHeight = canvas.height * 0.5; // Only draw in top 50%

      // Draw and update vertical lines
      verticalLines.forEach((line, index) => {
        // Move line upward
        line.offsetY -= line.speed;

        // Add sine wave effect
        const waveOffset = Math.sin(time + line.x * 0.01) * 5;

        // Draw line if it's in the visible area
        if (line.offsetY > -canvas.height) {
          ctx.beginPath();
          ctx.moveTo(line.x + waveOffset, 0 + line.offsetY);
          ctx.lineTo(line.x + waveOffset, Math.min(halfHeight, canvas.height + line.offsetY));
          ctx.strokeStyle = fadeGradient;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }

        // Reset line if it's moved off screen
        if (line.offsetY < -canvas.height) {
          line.offsetY = 0;
        }
      });

      // Draw and update horizontal lines
      horizontalLines.forEach((line, index) => {
        // Move line upward
        line.y -= line.speed;

        // Add cosine wave effect
        const waveOffset = Math.cos(time + line.y * 0.01) * 5;

        // Draw line if it's in the visible area and above the halfway point
        if (line.y >= 0 && line.y <= halfHeight) {
          ctx.beginPath();
          ctx.moveTo(0, line.y);
          ctx.lineTo(canvas.width, line.y);
          ctx.strokeStyle = fadeGradient;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }

        // Reset line if it's moved off screen
        if (line.y < -gridSize) {
          line.y = canvas.height;
        }
      });

      // Draw and update points
      points.forEach((point) => {
        // Only draw points in the top half with fading
        if (point.y < halfHeight) {
          const opacity = 1 - point.y / halfHeight;
          // Draw point
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.5})`;
          ctx.fill();
        }

        // Move point upward
        point.y -= point.speed;

        // Reset point if it goes off screen
        if (point.y < -10) {
          point.y = canvas.height + 10;
          point.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden rounded-4xl bg-[#E5E7EB]">
      {/* Chess pattern background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
         Ultimate Destination for
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                 Frontend Developer's
        </h1>
        <p className=" mt-6 text-xl w-[42vw]  text-slate-700">
        Zentrix UI is a modern, lightweight UI component library designed for seamless integration into React applications. It offers customizable components with a focus on clean, responsive design to enhance user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button onClick={()=>navigate('/components')} size="lg" className="bg-slate-900 text-white border-transparent p-3 rounded-md w-[12vw]  hover:bg-white hover:border-slate-900 hover:text-slate-900 border-2 transition duration-300 ease-in-out cursor-pointer">
            Browse Components
          </button>
          <button size="lg" variant="outline" className="text-slate-900 border-slate-900 bg-white w-[12vw] rounded-md hover:bg-slate-900/10">
            ~ npm i @zentrix/ui
          </button>
        </div>
      </div>
    </section>
  );
}
