import React from 'react';
import { motion } from 'framer-motion';

const criteria = [
  { id: 1, name: 'Innovation', description: 'Creativity in solving fleet management challenges.' },
  { id: 2, name: 'Functionality', description: 'Completeness and usability of the solution.' },
  { id: 3, name: 'Scalability', description: 'The potential of the solution to handle large-scale operations.' },
  { id: 4, name: 'Technical Excellence', description: 'Quality of code and architecture.' },
  { id: 5, name: 'User Experience', description: 'Intuitive design and ease of navigation.' },
];

const JudgingCriteria = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Judging Criteria
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-800 bg-opacity-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;

