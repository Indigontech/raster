import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { SiSpotify } from "react-icons/si";
import logoImage from "@assets/raster (Albumhoes) (3)_1749816421836.png";

const projectData = [
  { 
    title: "AI Music – Original & Professional", 
    description: "Creating original music using AI technologies. Available now on Spotify.",
    type: "music",
    spotifyLink: "https://open.spotify.com/artist/6ValdrKyRDEQmuLGL1YGsA?si=n8-zfWcwSB-uFeA4ZteX0w"
  },
  { 
    title: "AI Assistant", 
    description: "Smart personal assistant with natural language processing",
    type: "app"
  },
  { 
    title: "Grocery List App", 
    description: "Smart shopping lists with meal planning and budget tracking",
    type: "app"
  },
  { 
    title: "Dating App for People with Disabilities", 
    description: "Inclusive dating platform making love accessible for everyone",
    type: "app"
  }
];

function ProjectCard({ index }: { index: number }) {
  const project = projectData[index];
  
  if (!project) return null;

  const handleCardClick = () => {
    if (project.type === "music" && project.spotifyLink) {
      window.open(project.spotifyLink, '_blank');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-4 md:p-5 h-32 md:h-36 flex flex-col justify-between group cursor-pointer relative"
      onClick={handleCardClick}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-bold text-sm md:text-base line-clamp-1 drop-shadow-sm">
            {project.title}
          </h4>
          {project.type === "music" && project.spotifyLink && (
            <a 
              href={project.spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <SiSpotify className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-gray-200 text-xs md:text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="w-8 h-1 bg-white/30 rounded-full">
          <div className={`${project.type === "music" ? "w-3/4" : "w-1/4"} h-full bg-white/70 rounded-full`}></div>
        </div>
        <span className="text-white/80 text-xs font-medium">
          {project.type === "music" ? "Available Now" : "Coming Soon"}
        </span>
      </div>
    </motion.div>
  );
}

function RotatingText() {
  const worksWords = ["works", "scales", "matters", "lasts", "inspires"];
  
  const [worksIndex, setWorksIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorksIndex((prev) => (prev + 1) % worksWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span>Do</span>
        <span className="text-white">something</span>
        <span>that</span>
        <div className="relative h-16 md:h-20 flex items-center min-w-[150px] md:min-w-[200px] justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={worksWords[worksIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute text-green-300"
            >
              {worksWords[worksIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-green-50 text-lg md:text-xl font-light leading-relaxed opacity-90 mt-8 max-w-3xl mx-auto"
      >
        We're building the next generation of technology solutions that make a real difference.{" "}
        <span className="text-green-200 font-medium">Innovation with purpose.</span>
      </motion.p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen gradient-bg-static relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300/60 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
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

          {/* Navigation links on the right */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-green-200 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                Home
              </motion.span>
            </Link>
            <Link href="/portfolio">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-green-200 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                Portfolio
              </motion.span>
            </Link>
            <span className="text-white font-medium text-sm md:text-base">Projects</span>
          </div>
        </motion.nav>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8 md:mb-12 max-w-4xl px-4"
          >
            <RotatingText />
          </motion.div>

          {/* Project Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full max-w-7xl mx-auto mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {Array.from({ length: 4 }, (_, i) => (
                <ProjectCard key={i} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Highlighted Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="glass-card p-8 md:p-10 max-w-4xl mx-auto mb-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Coming Soon to the App Store
              </h3>
              <p className="text-green-50 text-lg md:text-xl leading-relaxed">
                Currently developing apps that will soon be available on the App Store. One of them is a{" "}
                <span className="text-green-300 font-semibold">dating app made specifically for people with disabilities</span>
                {" "}— making love more accessible and easier for everyone.
              </p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold rounded-full bg-green-500 hover:bg-green-400 text-white transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg hover:shadow-xl"
              >
                Get Notified About Our Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}