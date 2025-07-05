import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];
    
    const initCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 100}, ${200 + Math.random() * 55}, ${0.3 + Math.random() * 0.7})`
        });
      }
    };
    
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 120, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', initCanvas);
    initCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', initCanvas);
    };
  }, []);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-red-900/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Master Quantum Computing <span className="text-red-400">Code</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The hub for developers diving into quantum programming. Learn, code, and collaborate with a community of quantum enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md text-lg font-medium transition-colors flex items-center justify-center">
              Explore Tutorials
            </button>
          </div>
        </div>
      </div>

      {/* Canadian Themed Section */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-red-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">🍁 Welcome to the Canadian Diversity Quest!</h2>
        <p className="mb-4 text-lg">
          Explore Canada's rich multicultural heritage and learn aboot diversity, eh!
        </p>
        <button className="mt-2 px-4 py-2 bg-white text-red-500 font-semibold rounded">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;