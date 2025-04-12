
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  whatIDid: string;
  howIDid: string;
  technologiesUsed: string;
  whatILearned: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  reverse?: boolean;
};

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative grid grid-cols-12 items-center mb-24 md:mb-32 ${
        isOdd ? 'md:text-right' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`col-span-full md:col-span-7 md:col-start-${isOdd ? '6' : '1'} relative rounded`}>
        <a 
          href={project.links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative block w-full h-full"
        >
          <div className="absolute inset-0 bg-portfolio-accent/20 rounded z-10 opacity-60 md:opacity-10 md:group-hover:opacity-0 md:group-focus:opacity-0 transition-opacity duration-300"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded"
          />
        </a>
      </div>

      {/* Project Content */}
      <div className={`col-span-full md:col-span-6 md:col-start-${isOdd ? '1' : '7'} relative z-20 
        ${isOdd ? 'md:text-right' : ''}
        p-6 md:p-0 bg-portfolio-secondary md:bg-transparent rounded mt-[-40px] md:mt-0`}
      >
        <p className="font-mono text-portfolio-accent text-sm mb-1">Featured Project</p>
        <h3 className="text-2xl font-bold mb-2">
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-portfolio-textLight text-sm italic mb-4">{project.subtitle}</p>
        
        <div className="mb-4 md:mb-6 p-6 md:p-5 bg-portfolio-secondary rounded">
          <p className="mb-3">{project.description}</p>
          <p className="mb-3"><strong>What I Did:</strong> {project.whatIDid}</p>
          <p className="mb-3"><strong>How I Did It:</strong> {project.howIDid}</p>
          <p className="mb-3"><strong>Technologies:</strong> {project.technologiesUsed}</p>
          <p><strong>What I Learned:</strong> {project.whatILearned}</p>
        </div>
        
        <ul className={`flex flex-wrap text-sm font-mono mb-6 gap-x-4 gap-y-2 ${
          isOdd ? 'md:justify-end' : ''
        }`}>
          {project.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        
        <div className={`flex items-center gap-4 ${
          isOdd ? 'md:justify-end' : ''
        }`}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-textLight hover:text-portfolio-accent"
              aria-label="GitHub Link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-textLight hover:text-portfolio-accent"
              aria-label="Live Link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ReviveLab",
      subtitle: "Unity3D, Blender",
      description: "An interactive AR game where users can learn to assemble a personal computer in an immersive augmented reality environment.",
      whatIDid: "Designed the scenes of an interactive AR game where users can learn to assemble a personal computer in an immersive augmented reality environment.",
      howIDid: "Designed various PC assembly scenes by importing 3D models of computer components, arranging them in a virtual environment, and implementing interactivity using Unity3D.",
      technologiesUsed: "Unity3D for AR development and interaction, and 3D models of PC components for a realistic assembly experience.",
      whatILearned: "Enhanced skills in AR game design, 3D model integration, scene optimization, and creating educational tools in an interactive and engaging format.",
      tags: ["Unity3D", "AR", "3D Modeling", "Educational Game"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=ReviveLab",
      links: {
        github: "https://github.com/Magilji/revive-Lab",
      }
    },
    {
      title: "Lead Central",
      subtitle: "Flutter, Firebase",
      description: "A lead management app that helps users upload property details, including images, location, and data, for contractors to access and initiate construction-related procedures.",
      whatIDid: "Designed the app UI using Figma for a lead management app that helps users upload property details, including images, location, and data, for contractors to access and initiate construction-related procedures.",
      howIDid: "Created an intuitive UI/UX in Figma, focusing on user-friendly navigation and efficient data input. The UI was then implemented in Flutter with widgets for capturing site images and automatic location detection. Integrated Firebase for real-time data storage and retrieval.",
      technologiesUsed: "Figma for UI/UX design, Flutter for frontend development, Firebase for backend integration, and device location APIs for geotagging property details.",
      whatILearned: "Enhanced skills in UI/UX design with Figma, translating designs into Flutter components, leveraging device features like camera and location, and integrating Firebase for real-time database operations.",
      tags: ["Flutter", "Firebase", "Figma", "UI/UX"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=Lead+Central",
      links: {
        github: "https://github.com/Magilji/lead-central",
      },
      reverse: true
    },
    {
      title: "Cost Cater",
      subtitle: "FlutterFlow, Firebase",
      description: "An app for catering agencies to streamline order management, including menu generation with user details, event specifics, payment information, and terms and conditions.",
      whatIDid: "Developed an app for catering agencies to streamline order management, including menu generation with user details, event specifics, payment information, and terms and conditions.",
      howIDid: "Designed an intuitive order-taking UI using FlutterFlow and implemented backend logic in Firebase for payment management and automatic PDF generation of the menu and order details.",
      technologiesUsed: "FlutterFlow for frontend development, Firebase for backend operations, and flutter libraries for PDF generation.",
      whatILearned: "Gained experience in building customer-centric UI, integrating backend services for financial management, and automating document generation processes in an application.",
      tags: ["FlutterFlow", "Firebase", "PDF Generation"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=Cost+Cater",
      links: {
        github: "https://github.com",
      }
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title numbered-heading mb-16">Some Things I've Built</h2>
        
        <div>
          {projects.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
