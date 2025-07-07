import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Portfolio data structure - this would be imported from your portfolioData
const portfolioData = {
  clients: [
    {
      id: 1,
      name: "Association of Chartered Certified Accountants (ACCA)",
      logo: "public/images/accalogo.png",
      description: "A global professional accounting body that offers the Chartered Certified Accountant qualification"
    },
    {
      id: 2,
      name: "Rocell",
      logo: "public/images/rocell.jpg",
      description: "Sri Lanka's leading tile and bathware manufacturer"
    },
    {
      id: 3,
      name: "Avyana",
      logo: "public/images/avyannalogo.png",
      description: "A serene Maldivian paradise awaits, with crystal-clear waters, unspoiled beaches, and a vibrant local culture"
    },
    {
      id: 4,
      name: "International Education Consultancy (IEC)",
      logo: "public/images/ieclogo.png",
      description: "An authorized Agent since 1990 as a representative and support service provider for University/Institute enrollments"
    },
    {
      id: 5,
      name: "Brandix",
      logo: "public/images/brandixlogo.png",
      description: "Net-Zero Carbon Apparel Manufacturing in Sri Lanka"
    },
    {
      id: 6,
      name: "PMF Finance",
      logo: "public/images/pmflogo.png",
      description: "Provide financial products and services that will support Sri Lankans and SMEs on the pathway to success"
    }
  ]
};

const clientLogos = portfolioData.clients;

const ModernLogoCarousel = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleImageError = (clientId) => {
    setImageErrors(prev => new Set(prev).add(clientId));
  };

  // Create duplicated arrays for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Amazing Clients</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Logos Container */}
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                width: `${duplicatedLogos.length * (100 / itemsPerView)}%`
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 px-4 transition-transform duration-300 hover:scale-105"
                  style={{ width: `${100 / duplicatedLogos.length}%` }}
                >
                  <div className="bg-transparent p-10 h-56 flex items-center justify-center hover:bg-gray-800/20 transition-all duration-500 group/logo rounded-lg">
                    <div className="text-center w-full">
                      <div className="mb-4 flex justify-center">
                        {imageErrors.has(client.id) ? (
                          // Fallback when image fails to load
                          <div className="w-48 h-32 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center opacity-70 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500">
                            <span className="text-base text-gray-300 font-medium text-center px-3">
                              {client.name.split(' ')[0]}
                            </span>
                          </div>
                        ) : (
                          // Actual logo image
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="h-32 w-auto max-w-48 object-contain opacity-80 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500 filter brightness-100 group-hover/logo:brightness-110 group-hover/logo:drop-shadow-lg"
                            onError={() => handleImageError(client.id)}
                          />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm group-hover/logo:text-blue-400 transition-colors duration-500 leading-tight font-medium line-clamp-2">
                        {client.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>

          {/* Status indicator */}
          <div className="flex justify-center mt-6">
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`}></div>
              <span>{isPaused ? 'Paused' : 'Auto-scrolling'}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(100 / 3)}%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ModernLogoCarousel;