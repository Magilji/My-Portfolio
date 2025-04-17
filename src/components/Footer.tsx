
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Magilji' },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/mahesh-m-18b8b1251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
    },
  ];

  return (
    <motion.footer 
      className="py-8 px-4 text-center text-portfolio-textLight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors link-effect"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="text-sm font-mono">
        <p>Designed & Built by Mahesh M</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>

      <div className="fixed bottom-0 right-8 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="h-24 w-px bg-portfolio-textLight mb-4"></div>
          <motion.a 
            href="mailto:mahesh.m.chandran@gmail.com"
            className="font-mono text-xs rotate-90 mb-28 hover:text-portfolio-accent transition-colors link-effect tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            mahesh.m.chandran@gmail.com
          </motion.a>
        </div>
      </div>

      <div className="fixed bottom-0 left-8 hidden md:block">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-textLight hover:text-portfolio-accent hover:-translate-y-1 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
              >
                {link.name === 'GitHub' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
                
                {link.name === 'LinkedIn' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
          <div className="h-24 w-px bg-portfolio-textLight mt-6"></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
