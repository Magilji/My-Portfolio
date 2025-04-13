import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'UI/UX Design', 
    'Flutter', 
    'FlutterFlow', 
    'Unity3D', 
    'Firebase',
    'AR Development',
    '3D Modeling',
    'Real-Time Database Integration'
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
              Hello! I'm <span className="highlight">Mahesh M</span>, an aspiring Computer Science professional passionate 
              about UI/UX design, seeking to create intuitive, visually appealing interfaces and enhance 
              user experience through innovative, user-centric solutions in a collaborative environment.
            </p>
            
            <p className="mb-4">
              I graduated with a <span className="highlight">Bachelor of Technology in Computer Science</span> from 
              APJ Abdul Kalam Technological University with a CGPA of 7.21/10. Currently, I'm working as an 
              <span className="highlight"> App Developer at Cygnus IT Solutions</span> where I design and develop 
              innovative mobile apps, handling the full app development lifecycle from concept to deployment.
            </p>
            
            <p className="mb-4">
              I collaborate with developers, designers, and project managers to create user-friendly, scalable apps
              and enhance the company's reputation by delivering high-quality tech solutions.
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
              <div className="relative z-10 w-full h-full">
                <div className="absolute w-full h-full rounded bg-portfolio-accent/20 translate-x-5 translate-y-5"></div>
                <div className="absolute inset-0 rounded border-2 border-portfolio-accent bg-portfolio-bg overflow-hidden group">
                  <div className="absolute inset-0 bg-portfolio-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    alt="Profile Image" 
                    src="/lovable-uploads/74006def-7e54-4693-9986-30ec9a337121.jpg" 
                    className="w-full h-full object-cover mix-blend-multiply filter grayscale contrast-100 brightness-90 group-hover:filter-none group-hover:mix-blend-normal group-hover:brightness-100 transition-all duration-300" 
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
