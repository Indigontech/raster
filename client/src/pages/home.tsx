import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import logoImage from "@assets/raster (Albumhoes) (2)_1749799802095.png";
import headerLogoImage from "@assets/raster (Albumhoes) (3)_1749816421836.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your email service
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
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
          className="flex justify-between items-center mb-6 md:mb-8"
        >
          {/* Logo on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <motion.img 
              src={headerLogoImage} 
              alt="Raster Group Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>

          {/* Navigation links on the right */}
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-green-200 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              Projects
            </motion.span>
          </Link>
        </motion.nav>

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-12"
          >
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="logo-container inline-block p-4 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <img
                src={logoImage}
                alt="Raster Group Logo"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Main Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-8"
          >
            <div className="relative">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="text-shimmer">The Future of</span>
                <br />
                <span className="text-green-200">Technology</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-light text-green-100 mb-6"
              >
                <motion.span
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  is coming soon!
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mb-8 md:mb-12 max-w-2xl px-4"
          >
            <p className="text-green-50 text-lg md:text-xl font-light leading-relaxed opacity-90">
              We're crafting something extraordinary that will revolutionize how you interact with technology.{" "}
              <span className="text-green-200 font-medium">Stay tuned for innovation.</span>
            </p>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full max-w-md mx-auto mb-12"
          >
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg hover:shadow-xl ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-green-500 hover:bg-green-400 text-white"
                  }`}
                >
                  {isSubmitted ? "Thank You!" : "Notify Me"}
                </motion.button>
              </div>
              <p className="text-green-200 text-sm text-center opacity-80">
                Be the first to know when we launch
              </p>
            </form>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full max-w-xs mx-auto mb-8"
          >
            <div className="flex justify-between text-green-200 text-sm mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1.5 }}
                className="bg-gradient-to-r from-green-400 to-green-300 h-2 rounded-full"
              />
            </div>
          </motion.div>

          {/* Footer with Instagram */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center items-center space-x-3"
          >
            <span className="text-green-200 text-sm">Follow us:</span>
            <motion.a
              href="https://instagram.com/rasterworks"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-green-200 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}