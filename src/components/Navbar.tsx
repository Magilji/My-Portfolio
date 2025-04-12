import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.header initial="hidden" animate="visible" variants={navVariants} className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-bg/90 backdrop-blur shadow-md py-4' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-portfolio-accent font-bold text-2xl">
          Mahesh M
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {navItems.map((item, i) => <li key={i}>
                <a href={item.href} className="nav-link font-mono">
                  <span className="text-portfolio-accent">0{i + 1}.</span> {item.name}
                </a>
              </li>)}
          </ol>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-portfolio-accent" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div variants={mobileMenuVariants} initial="closed" animate={mobileMenuOpen ? "open" : "closed"} className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-portfolio-secondary shadow-lg pt-20 px-6">
        <nav className="flex flex-col space-y-6">
          <ol className="flex flex-col space-y-6">
            {navItems.map((item, i) => <li key={i}>
                <a href={item.href} className="nav-link text-lg font-mono block" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-portfolio-accent">0{i + 1}.</span> {item.name}
                </a>
              </li>)}
          </ol>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button className="btn w-full">Resume</Button>
          </a>
        </nav>
      </motion.div>
    </motion.header>;
};
export default Navbar;