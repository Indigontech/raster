import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiSpotify, SiInstagram } from "react-icons/si";
import logoImage from "@assets/raster (Albumhoes) (3)_1749816421836.png";
import niraLogo from "@assets/Auralis (7)_1749820049329.png";

const portfolioItems = [
  {
    title: "AI Music Production",
    description: "Original music created using cutting-edge AI technologies. Professional quality tracks available on all streaming platforms.",
    category: "Music",
    status: "Live",
    link: "https://open.spotify.com/artist/6ValdrKyRDEQmuLGL1YGsA?si=n8-zfWcwSB-uFeA4ZteX0w",
    icon: SiSpotify,
    color: "text-green-400"
  },
  {
    title: "NIRA - AI Music Generation",
    description: "Advanced AI music generation platform creating original compositions and soundscapes using machine learning technologies.",
    category: "AI Development",
    status: "In Development",
    progress: 45,
    customLogo: niraLogo
  },
  {
    title: "Dating App for People with Disabilities",
    description: "Inclusive dating platform designed specifically to make love more accessible and easier for everyone.",
    category: "App Development",
    status: "In Development",
    progress: 30
  },
  {
    title: "AI Assistant Platform",
    description: "Smart personal assistant leveraging natural language processing for enhanced user interaction.",
    category: "AI Development",
    status: "In Development",
    progress: 25
  },
  {
    title: "Grocery List App",
    description: "Smart shopping lists with meal planning, budget tracking, and intelligent recommendations.",
    category: "App Development", 
    status: "In Development",
    progress: 20
  },
  {
    title: "Accessibility Helper Tools",
    description: "Comprehensive toolkit designed to enhance digital accessibility and improve daily life for users with disabilities.",
    category: "Accessibility",
    status: "In Development",
    progress: 25
  }
];

function PortfolioCard({ item, index }: { item: any; index: number }) {
  const handleClick = () => {
    if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`glass-card p-4 sm:p-5 md:p-6 min-h-[160px] sm:min-h-[176px] md:min-h-[192px] flex flex-col justify-between group ${item.link ? 'cursor-pointer' : ''} relative overflow-hidden`}
      onClick={handleClick}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-green-600 text-xs font-medium uppercase tracking-wide">
              {item.category}
            </span>
            <h3 className="text-black font-bold text-lg mt-1 line-clamp-2">
              {item.title}
            </h3>
          </div>
          {item.customLogo ? (
            <img 
              src={item.customLogo} 
              alt={`${item.title} logo`}
              className="w-8 h-8 flex-shrink-0 object-contain filter brightness-0"
            />
          ) : item.icon && (
            <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0`} />
          )}
        </div>
        <p className="text-black text-sm line-clamp-3 leading-relaxed">
          {item.description}
        </p>
      </div>
      
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {item.progress && (
            <div className="w-12 sm:w-14 md:w-16 h-1.5 bg-white/20 rounded-full flex-shrink-0">
              <div 
                className="h-full bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          )}
          <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
            item.status === 'Live' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-orange-100 text-orange-700'
          }`}>
            {item.status}
          </span>
        </div>
        {item.link && (
          <ExternalLink className="w-4 h-4 text-black/60 group-hover:text-black transition-colors flex-shrink-0" />
        )}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#EBE9E9' }}>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300/40 rounded-full"
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 11}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 min-h-screen flex flex-col px-4 py-8">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-6 md:mb-12"
        >
          {/* Logo on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/">
              <motion.img 
                src={logoImage} 
                alt="Raster Group Logo" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </motion.div>

          {/* Navigation links */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-black hover:text-green-600 transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                Home
              </motion.span>
            </Link>
            <Link href="/projects">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-black hover:text-green-600 transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                Projects
              </motion.span>
            </Link>
            <span className="text-black font-medium text-sm md:text-base">Portfolio</span>
          </div>
        </motion.nav>

        <div className="flex-1 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8 md:mb-16 px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              My <motion.span 
                className="text-black"
                animate={{ 
                  color: ['#000000', '#96e8ba', '#000000']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Portfolio
              </motion.span>
            </h1>
            <p className="text-black text-lg md:text-xl max-w-2xl">
              Showcasing innovative projects in AI, accessibility, and technology that make a meaningful impact.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-6xl mx-auto mb-8 md:mb-16 px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full max-w-5xl mx-auto mb-8 md:mb-16 px-4"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
                  📚 What I'm Learning – 2025 to 2027
                </h2>
                <p className="text-green-600 text-lg">In practice & school</p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-black leading-relaxed mb-6">
                  As part of my training to become an <span className="text-green-600 font-semibold">ICT Support Technician (Level 3)</span>, I'm not only working on real-world projects, but also building my professional skills through a structured curriculum.
                </p>
                
                <p className="text-black leading-relaxed mb-6">
                  In addition to the core and specialized parts of my studies, I follow optional modules (called keuzedelen) that allow me to deepen my knowledge or prepare for further education. These modules are tailored to my interests and career goals.
                </p>
                
                <h3 className="text-black text-xl font-semibold mb-4">Key Learning Topics:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Advanced Software Techniques",
                    "Web Development Basics", 
                    "Programming Fundamentals",
                    "Cybersecurity in Systems & Networks",
                    "Advanced & Basic Digital Skills",
                    "Safety & Craftsmanship (VeVa)",
                    "Working at the Ministry of Defence (optional specialization)"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-black/5 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-black">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-6">
                  <h4 className="text-green-700 font-semibold mb-3">Special Focus: Ministry of Defence</h4>
                  <p className="text-black leading-relaxed">
                    I will discuss my choices with a mentor to align them with my ambitions. For example, if I choose the VeVa program (Safety & Craftsmanship), I will follow extra military-focused classes and sports training, and do a hands-on internship with the Dutch Ministry of Defence at the Meulenspie 2 location in Teteringen.
                  </p>
                </div>
                
                <p className="text-black leading-relaxed">
                  These modules will prepare me to work not only in tech support, but also in environments that demand <span className="text-green-600">discipline, security awareness, and strong digital skills</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="w-full max-w-5xl mx-auto mb-8 md:mb-16 px-4"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
                  🛠️ In My Free Time – Personal Projects at Raster
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-black leading-relaxed mb-6">
                  Outside of school, I'm actively building my own brand called <span className="text-green-600 font-semibold">Raster</span>. Through Raster, I focus on:
                </p>
                
                <div className="space-y-6 mb-6">
                  <div className="flex items-start gap-4 p-4 bg-black/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">App & Game Development</h4>
                      <p className="text-black">
                        Developing innovative apps and games for the Google Play Store and Apple App Store (coming soon)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-black/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">Artificial Intelligence</h4>
                      <p className="text-black">
                        Learning and exploring Artificial Intelligence, both in theory and development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-black/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">Hardware & Software Innovation</h4>
                      <p className="text-black">
                        Staying up-to-date with the latest hardware technologies, constantly upgrading my skills in both software and hardware development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-black/5 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-black font-semibold mb-2">Microsoft & Cloud Technologies</h4>
                      <p className="text-black">
                        Gaining hands-on knowledge in Microsoft 365 Fundamentals, Microsoft Azure, and Cybersecurity Essentials
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-lg p-6 text-center">
                  <p className="text-black leading-relaxed">
                    <span className="text-green-600 font-semibold">Raster</span> is where I turn my curiosity and passion into real, working products — designed to <span className="text-green-600">help, inspire, and entertain</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="glass-card p-4 sm:p-5 md:p-6 text-center"
          >
            <h3 className="text-black text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <a 
                href="https://open.spotify.com/artist/6ValdrKyRDEQmuLGL1YGsA?si=n8-zfWcwSB-uFeA4ZteX0w"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <SiSpotify className="w-5 h-5 text-green-600" />
                <span className="text-black">Listen on Spotify</span>
              </a>
              <span className="text-black/50">•</span>
              <a 
                href="https://instagram.com/rasterworks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <SiInstagram className="w-5 h-5 text-green-600" />
                <span className="text-black">@rasterworks</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}