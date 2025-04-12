
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  description: string;
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
          href={project.links.live || project.links.github} 
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
        <h3 className="text-2xl font-bold mb-4">
          <a 
            href={project.links.live || project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors"
          >
            {project.title}
          </a>
        </h3>
        
        <div className="mb-4 md:mb-6 p-6 md:p-5 bg-portfolio-secondary rounded">
          <p>{project.description}</p>
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
      title: "Featured Project 1",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tags: ["React", "Express", "Spotify API", "Heroku"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=Project+1",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      }
    },
    {
      title: "Featured Project 2",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=Project+2",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
      reverse: true
    },
    {
      title: "Featured Project 3",
      description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, size, or most recently pushed to. Share them with the community or keep them private.",
      tags: ["Next.js", "Chart.js", "GitHub API", "Vercel"],
      image: "https://placehold.co/800x500/0a192f/ccd6f6?text=Project+3",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      }
    }
  ];

  const otherProjects = [
    {
      title: "Time to Have More Fun",
      description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      }
    },
    {
      title: "Building a Custom Mechanical Keyboard",
      description: "Documentation website about building a custom mechanical keyboard, designed and built using Gatsby and MDX",
      tags: ["Gatsby", "MDX", "GraphQL"],
      links: {
        github: "https://github.com",
      }
    },
    {
      title: "My Personal Website",
      description: "The first iteration of my personal website built with React and hosted on Netlify",
      tags: ["React", "CSS", "Netlify"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      }
    },
    {
      title: "Weather App",
      description: "A weather dashboard that shows weather forecast for cities around the world using OpenWeather API",
      tags: ["JavaScript", "CSS", "OpenWeather API"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
      }
    },
    {
      title: "Markdown Note App",
      description: "A markdown note-taking app with a clean UI, built with Electron and React",
      tags: ["Electron", "React", "Node.js"],
      links: {
        github: "https://github.com",
      }
    },
    {
      title: "Portfolio v1",
      description: "Previous iteration of my personal website built with HTML, CSS, and vanilla JavaScript",
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com",
        live: "https://example.com",
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Other Noteworthy Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-portfolio-secondary p-6 rounded h-full flex flex-col hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-portfolio-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-textLight hover:text-portfolio-accent"
                        aria-label="GitHub Link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-portfolio-text">
                  <a 
                    href={project.links.live || project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-portfolio-accent transition-colors"
                  >
                    {project.title}
                  </a>
                </h4>
                
                <p className="text-portfolio-textLight mb-6 grow">{project.description}</p>
                
                <ul className="flex flex-wrap text-xs font-mono gap-x-3 gap-y-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn">Show More</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
