import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';

// Import your portfolio data
import portfolioData from '../data/portfolioData';

const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      const stars = [];
      const numStars = 150;
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          originalOpacity: Math.random() * 0.8 + 0.2,
          hue: Math.random() * 60 + 200 // Blue to purple range
        });
      }
      starsRef.current = stars;
    };

    initStars();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const stars = starsRef.current;
      const mouse = mouseRef.current;
      
      // Draw stars
      stars.forEach((star, index) => {
        // Twinkle effect
        star.opacity = star.originalOpacity + Math.sin(Date.now() * star.twinkleSpeed + index) * 0.3;
        
        // Mouse interaction - stars get brighter when mouse is near
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          star.opacity = Math.min(1, star.originalOpacity + influence * 0.5);
          star.size = Math.min(4, star.size + influence * 2);
        } else {
          star.size = Math.max(0.5, star.size - 0.02);
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 70%, 80%, ${star.opacity})`;
        ctx.fill();
        
        // Add star glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 70%, 80%, ${star.opacity * 0.1})`;
        ctx.fill();
      });
      
      // Draw constellation lines
      ctx.strokeStyle = 'rgba(100, 149, 237, 0.2)';
      ctx.lineWidth = 1;
      
      stars.forEach((star, i) => {
        stars.slice(i + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(100, 149, 237, ${opacity})`;
            ctx.stroke();
          }
        });
      });
      
      // Mouse constellation effect
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = 'rgba(138, 43, 226, 0.3)';
        ctx.lineWidth = 2;
        
        stars.forEach((star) => {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(star.x, star.y);
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
            ctx.stroke();
          }
        });
        
        // Draw mouse point
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(138, 43, 226, 0.8)';
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 8, 23, 0.95) 100%)' }}
    />
  );
};

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Full-Stack Developer", "Software Engineer", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Constellation Background */}
      <ConstellationBackground />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0]}
            </span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="inline-block transition-all duration-500">
              {titles[currentTitle]}
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {portfolioData.about.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
            >
              Get In Touch <ArrowRight size={20} />
            </a>
            
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:text-blue-400 hover:scale-110 hover:rotate-3 transition-all duration-300 hover:bg-gray-700/50"
              >
                <Github size={24} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:text-blue-400 hover:scale-110 hover:-rotate-3 transition-all duration-300 hover:bg-gray-700/50"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Modern Scroll Down Indicator */}
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full opacity-75">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mx-auto mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;