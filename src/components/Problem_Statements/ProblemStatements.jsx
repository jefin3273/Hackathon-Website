import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const domains = [
  {
    id: 1,
    name: 'Web Application',
    title: 'Building an All-In-One Fleet Management Portal',
    content: `Your task is to design and develop a multi-functional web platform that empowers stakeholders in a fleet management ecosystem. This portal should cater to several user roles, including Admins (business owners), Drivers, Employers, Employees, and Vendors. The platform must address operational, financial, and logistical challenges efficiently.

Features to Include:
1. Admin Panel:
   - A centralized dashboard for overseeing fleet operations.
   - Tools for managing driver information, training modules, and payout schedules.
   - Real-time business analytics and income/expense tracking.
   - Fleet Management: Monitor vehicle health, fuel consumption, and maintenance schedules.
   - Subcontractor & Vendor Management: Add, update, and track vehicles and contracts.
   - Integration with accounting systems for automated financial workflows.
   - Audit Trail: Maintain logs of every action performed in the system for compliance.

2. Employer Access:
   - Approve or reject vehicle bookings for employees.
   - Schedule bookings on a daily, weekly, or monthly basis.
   - Provide role-based access depending on the organization's hierarchy.
   - Usage Reports: Access detailed logs of bookings, trips, and costs.

3. Employee Access:
   - Register and book vehicles for official or personal use.
   - View and manage trip details, booking history, and preferences.
   - Ride-sharing feature to optimize resources.

4. Vendor Portal:
   - Add and manage vehicles with availability status.
   - Manage contracts, invoicing, and communications with the Admin.
   - Performance Monitoring: Track SLA compliance and vehicle uptime.

5. Additional Features:
   - Multi-language support to cater to a diverse user base.
   - Secure login with multi-factor authentication.
   - Export functionality for reports in various formats (Excel, PDF).
   - API integration for compatibility with HR and CRM systems.
   - Blog, News, Testimonials, Refer & Earn, and FAQ sections.`
  },
  {
    id: 2,
    name: 'Mobile Application',
    title: 'Designing a Multi-Role Fleet Management Mobile App',
    content: `Develop a cross-platform mobile application (iOS, Android, and Tablets) that offers seamless experiences to all users in the fleet management ecosystem. The mobile app should ensure user convenience, on-the-go management, and real-time updates for Admins, Drivers, Employers, Employees, and Vendors.

Features to Include:
1. Admin Role:
   - Access a mobile-friendly dashboard for real-time fleet monitoring.
   - Receive instant notifications about trip updates, emergencies, or incidents.
   - Manage subcontractors and vendors directly through the app.
   - View business insights and manage financials via intuitive interfaces.

2. Driver Role:
   - Navigation tools for trip routes.
   - Access to training modules for skill development.
   - Real-time notifications for trip assignments and scheduling.
   - In-app messaging to communicate with Admins and Employers.
   - Automatic trip logging, including start/end times, distance, and incidents.

3. Employer Role:
   - Approve employee bookings on-the-go.
   - Receive notifications on trip status and generate usage reports.

4. Employee Role:
   - Book vehicles with options for vehicle type preferences.
   - Share rides with colleagues for cost efficiency.
   - Track trip statuses and receive emergency assistance through the app.

5. Vendor Role:
   - Update vehicle availability and manage ongoing bookings.
   - Get alerts for preventive maintenance or critical repairs.

6. Additional Features:
   - Location-based driver assignment using GPS.
   - Offline functionality for critical features like trip logging and navigation.
   - Eco-Mobility section to promote sustainability.
   - Multilingual interface for a global audience.`
  },
  {
    id: 4,
    name: 'AI/ML Solution',
    title: 'AI-Powered Fleet Optimization and Predictive Analytics',
    content: `Create an AI/ML-powered system to optimize fleet operations, reduce costs, and enhance user experience. The solution should focus on real-time decision-making and predictive capabilities for Admins, Drivers, Employers, and Vendors.

Features to Include:
1. Route Optimization:
   - Use AI to suggest the most efficient routes based on real-time traffic, weather conditions, and fuel efficiency.

2. Predictive Maintenance:
   - Leverage IoT data to monitor vehicle health and predict maintenance needs.
   - Send automated alerts for preventive actions to reduce downtime.

3. Dynamic Driver Assignment:
   - Use machine learning to assign drivers based on proximity, past performance, and availability.

4. Usage and Cost Analytics:
   - Provide detailed analytics to Admins and Employers on fleet usage, costs, and ROI.
   - Predict demand trends and suggest strategies for resource allocation.

5. Driver Performance Analytics:
   - Monitor driver behavior (speed, braking, etc.) and provide actionable insights for training and improvement.

6. Recommendation System:
   - Suggest vehicle preferences for Employees based on past bookings and requirements.
   - Enable Vendors to receive insights into which vehicles are most in demand.

7. Emergency Assistance:
   - Use AI to triage emergencies and recommend nearby service centers or hospitals.

8. Sustainability Insights:
   - Analyze fuel consumption and suggest ways to promote eco-friendly practices.`
  }
];

const ProblemStatements = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8"
      >
        Hack-a-ton 2024: Revolutionizing Fleet Management with Technology
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12 text-lg text-center"
      >
        <p>Welcome to Hack-a-ton 2024, where innovators, developers, and visionaries come together to solve real-world challenges in fleet management. The goal of this hackathon is to build comprehensive solutions that cater to the needs of modern businesses while ensuring operational efficiency, user-centric design, and sustainability.</p>
        <p className="mt-4">Below are the four problem statements categorized by domains: Web, Mobile App and AI/ML. Each problem statement provides a detailed description of the expectations and features required to deliver impactful solutions.</p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-white bg-opacity-10 rounded-lg overflow-hidden"
          >
            <motion.div
              layoutId={`header-${domain.id}`}
              className="p-6 cursor-pointer"
              onClick={() => setExpandedId(expandedId === domain.id ? null : domain.id)}
            >
              <h2 className="text-2xl font-semibold mb-2">Problem Statement {domain.id}: {domain.name}</h2>
              <h3 className="text-xl">{domain.title}</h3>
            </motion.div>
            <AnimatePresence>
              {expandedId === domain.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 pt-0"
                >
                  <p className="whitespace-pre-wrap">{domain.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemStatements;

