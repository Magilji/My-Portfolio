
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="section-container text-center py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-portfolio-accent mb-2">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
      
      <p className="text-portfolio-textLight max-w-md mx-auto mb-8">
        My inbox is always open. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you! Feel free to mail me about any relevant 
        job opportunities as well.
      </p>
      
      <a href="mailto:youremail@example.com">
        <Button className="btn text-base px-7 py-5">Say Hello</Button>
      </a>
    </motion.section>
  );
};

export default Contact;
