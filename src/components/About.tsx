
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Express', 'HTML & CSS', 'Tailwind CSS', 'Three.js'
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title numbered-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
          <div>
            <p className="mb-4">
              Hello! My name is <span className="highlight">Your Name</span> and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking 
              together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at <span className="highlight">an advertising agency</span>, 
              <span className="highlight"> a start-up</span>, <span className="highlight">a huge corporation</span>, and 
              <span className="highlight"> a student-led design studio</span>. My main focus these days is building accessible, 
              inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p className="mb-4">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            
            <p className="mb-6">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center before:content-['▹'] before:text-portfolio-accent before:mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96 transition-all">
              {/* Image wrapper */}
              <div className="relative z-10 w-full h-full">
                <div className="absolute w-full h-full rounded bg-portfolio-accent/20 translate-x-5 translate-y-5"></div>
                <div className="absolute inset-0 rounded border-2 border-portfolio-accent bg-portfolio-bg overflow-hidden group">
                  <div className="absolute inset-0 bg-portfolio-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://placehold.co/600x800/0a192f/ccd6f6?text=Your+Photo"
                    alt="Profile Image"
                    className="w-full h-full object-cover mix-blend-multiply filter grayscale contrast-100 brightness-90 group-hover:filter-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
