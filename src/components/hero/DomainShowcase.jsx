import React from 'react';
import { motion } from 'framer-motion';
import './DomainShowcase.css';

const domains = [
  { name: 'Web', icon: '🌐' },
  { name: 'App', icon: '📱' },
  { name: 'Blockchain', icon: '🔗' },
  { name: 'AI/ML', icon: '🧠' },
];

const DomainShowcase = () => {
  return (
    <section className="domain-showcase">
      <h2 className="domain-showcase__title">Available Domains</h2>
      <div className="domain-showcase__grid">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.name}
            className="domain-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="domain-card__icon">{domain.icon}</div>
            <h3 className="domain-card__name">{domain.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DomainShowcase;
