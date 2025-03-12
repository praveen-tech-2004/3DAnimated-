import { motion } from 'framer-motion';
import './HolographicPanel.css';

function HolographicPanel({ title, content }) {
  return (
    <motion.div
      className="holographic-panel"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1, filter: 'hue-rotate(45deg)' }}
      role="region" // Accessibility role
      aria-labelledby="panel-title" // Link to the title for screen readers
    >
      <motion.div className="glitch-effect" />
      <h3 id="panel-title">{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
}

export default HolographicPanel;