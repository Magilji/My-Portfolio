import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div 
          className="max-w-2xl" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <motion.p className="font-mono text-portfolio-accent mb-4" variants={itemVariants}>
            Hi, my name is
          </motion.p>
          
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={itemVariants}>
            Mahesh M
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-portfolio-textLight mb-6" 
            variants={itemVariants}
          >
            UI/UX Designer & AR Developer
          </motion.h2>
          
          <motion.p className="text-portfolio-textLight text-lg mb-8 max-w-lg" variants={itemVariants}>
            I specialize in building exceptional digital experiences with Flutter, Unity3D, and AR technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex space-x-4">
            <a href="#projects">
              <Button className="btn text-base px-7 py-5">Check out my work!</Button>
            </a>
            <a href="/Mahesh_M_Resume.pdf" download>
              <Button variant="outline" className="btn text-base px-7 py-5">Download Resume</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
