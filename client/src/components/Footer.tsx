import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-12 mt-20 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#f5f6f7]">Raster Group</h3>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: '#def8e9' }}>
              Innovating technology solutions with a focus on accessibility, AI, and meaningful digital experiences.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#f5f6f7]">Navigate</h4>
            <div className="space-y-3">
              <Link href="/">
                <span className="cursor-pointer text-sm block transition-colors hover:text-white" style={{ color: '#def8e9' }}>
                  Home
                </span>
              </Link>
              <Link href="/projects">
                <span className="cursor-pointer text-sm block transition-colors hover:text-white" style={{ color: '#def8e9' }}>
                  Projects
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="cursor-pointer text-sm block transition-colors hover:text-white" style={{ color: '#def8e9' }}>
                  Portfolio
                </span>
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#f5f6f7]">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@rasterworks.com" 
                className="text-sm block transition-colors hover:text-white"
                style={{ color: '#def8e9' }}
              >
                info@rasterworks.com
              </a>
              <a 
                href="https://instagram.com/rasterworks"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm flex items-center gap-2 transition-colors hover:text-white"
                style={{ color: '#def8e9' }}
              >
                <SiInstagram className="w-4 h-4" style={{ color: '#def8e9' }} />
                @rasterworks
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <p className="text-xs" style={{ color: '#def8e9' }}>
              © 2025 Raster Group. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-xs" style={{ color: '#def8e9' }}>
              Privacy
            </span>
            <span className="text-xs" style={{ color: '#def8e9' }}>
              Terms
            </span>
            <span className="text-xs" style={{ color: '#def8e9' }}>
              Support
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}