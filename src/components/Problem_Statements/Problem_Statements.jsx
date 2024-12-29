import React from 'react';
import ProblemStatements from './ProblemStatements';
import GeneralFeatures from './GeneralFeatures';
import JudgingCriteria from './JudgingCriteria';
import { motion } from 'framer-motion';

const HackathonPage = () => {
  return (
    <div className="bg-gray-900">
      <ProblemStatements />
      <GeneralFeatures />
      <JudgingCriteria />
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white text-center py-8"
      >
        <p className="text-lg">Bring your best ideas to life and revolutionize the fleet management industry with technology!</p>
        <p className="text-2xl font-bold mt-4">Good luck!</p>
      </motion.footer>
    </div>
  );
};

export default HackathonPage;

