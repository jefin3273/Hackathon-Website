import React from 'react';
import { motion } from 'framer-motion';

const features = [
  'Home: An intuitive landing page showcasing the purpose of the platform.',
  'About: Details about the service, its vision, and mission.',
  'Contact/Support: Easy access to customer support and FAQs.',
  'Investors: Information for stakeholders and potential investors.',
  'Career - Vacancies/Jobs: A portal for job seekers to explore opportunities.',
  'Login/Register: Secure authentication for all user roles.',
  'Partner with Us: Dedicated sections for Vendors and Drivers to collaborate.',
  'Blog & News: Updates and insights related to fleet management and eco-mobility.',
  'Testimonials: Feedback from existing users to build trust.',
  'Refer & Earn: Incentivize referrals to boost user acquisition.',
  'Multi-Language Support: Ensure accessibility for users across regions.',
  'Eco-Mobility: Highlight the platform\'s commitment to sustainable transportation.'
];

const GeneralFeatures = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          General Application Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-center"
        >
          All solutions should also include the following sections to provide a holistic user experience:
        </motion.p>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-800 bg-opacity-50 p-4 rounded-lg"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralFeatures;

