import React, { useState } from "react";
import { Copyright } from 'lucide-react';
import Modal from "../Modal/Modal";
import "./footer.css";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const developedBy = () => {
    window.open("https://triniteus.com/", "_blank");
  };

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-section">
          <p className="hackathon-info">
            <strong>Hack-a-ton 2024:</strong> Join us for a 5-day international hackathon showcasing innovative solutions and corporate-level projects. Team size: 2-5 members. Registration ends on <strong>27st December 2024, 11:59 PM</strong>.
            Prize Pool: <strong>₹1,00,000+</strong>. <a href="../events">Register now!</a>
          </p>
        </div>
        <div className="footer-section">
          <p className="contact-info">
            For inquiries, contact us at: <a href="mailto:hack_a_ton@triniteus.com">hack_a_ton@triniteus.com</a>
          </p>
        </div>
        <div className="footer-section">
          <p className="copyright">
            Copyrights
            <Copyright className="copyright-icon" />
            2024-2025 - All Rights Reserved.
          </p>
          <p className="developed-by">
            Developed & Maintained by{" "}
            <span onClick={developedBy} className="developer-link">Triniteus</span>
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="privacy-policy-link"
          >
            Privacy Policy
          </button>
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="privacy-policy-content">
          <h2>Privacy Policy</h2>
          <p><em>Effective Date: 01 January 2025</em></p>

          <p>Welcome to Triniteus Hackathon! We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://triniteushackathon.vercel.app/). By using our site, you agree to the collection and use of your information in accordance with this policy.</p>

          <h3>1. Information We Collect</h3>
          <p>We may collect the following categories of information when you interact with our website:</p>

          <h4>1.1 Personal Information:</h4>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Organization/Institution details</li>
            <li>Any other information you provide through registration or communication</li>
          </ul>

          <h4>1.2 Non-Personal Information:</h4>
          <ul>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Date and time of access</li>
            <li>Pages visited and time spent</li>
            <li>Cookies and tracking technologies</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We use the collected data for various purposes, including but not limited to:</p>
          <ul>
            <li>Managing and processing your registration for the hackathon</li>
            <li>Sending important updates and event notifications</li>
            <li>Providing technical support and responding to inquiries</li>
            <li>Analyzing website traffic and improving user experience</li>
            <li>Preventing fraudulent or unauthorized activities</li>
            <li>Ensuring compliance with legal obligations</li>
          </ul>

          <h3>3. Sharing Your Information</h3>
          <p>We do not sell, trade, or rent your personal data to third parties. However, we may share your information under the following circumstances:</p>
          <ul>
            <li><strong>With event partners and sponsors:</strong> To facilitate event-related services and benefits</li>
            <li><strong>With service providers:</strong> For technical support, data analysis, and operational purposes</li>
            <li><strong>For legal purposes:</strong> To comply with legal obligations, enforce our policies, or protect our rights</li>
            <li><strong>In case of business transfers:</strong> If our business undergoes a merger, acquisition, or asset sale</li>
          </ul>

          <h3>4. Payment Gateway</h3>
          <p>We use third-party payment gateways to facilitate secure payment processing for registration and other transactions. When you make a payment on our website:</p>
          <ul>
            <li>Your payment details, such as credit/debit card information, are processed securely through the third-party gateway.</li>
            <li>We do not store or have access to your full payment details.</li>
            <li>The payment gateway providers adhere to industry-standard security measures such as encryption and PCI-DSS compliance.</li>
            <li>Any disputes or issues related to payments should be addressed directly with the payment provider.</li>
            <li>Your transaction history may be retained for record-keeping, tax compliance, and fraud prevention purposes.</li>
          </ul>

          <h3>5. Cookies and Tracking Technologies</h3>
          <p>We use cookies and similar tracking technologies to enhance user experience and collect data about website usage. Cookies are small files stored on your device that help us recognize your preferences. You can manage or disable cookies through your browser settings, but please note that certain features of the site may not function properly if cookies are disabled.</p>

          <h3>6. Data Security</h3>
          <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Security practices include:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure access controls</li>
            <li>Regular security audits and assessments</li>
            <li>Limiting access to personal information to authorized personnel only</li>
          </ul>

          <h3>7. Your Rights</h3>
          <p>Depending on your jurisdiction, you may have certain rights regarding your personal data, such as:</p>
          <ul>
            <li>The right to access, update, or delete your information</li>
            <li>The right to withdraw consent for data processing</li>
            <li>The right to object to data processing in specific circumstances</li>
            <li>The right to data portability</li>
          </ul>
          <p>To exercise your rights, please contact us at <em>privacypolicy@triniteus.com</em>.</p>

          <h3>8. Third-Party Links</h3>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal data.</p>

          <h3>9. Retention of Data</h3>
          <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When no longer needed, we securely delete or anonymize your information.</p>

          <h3>10. Children's Privacy</h3>
          <p>Our website is not intended for individuals under the age of 13. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected such data, we will take steps to delete it.</p>

          <h3>11. International Data Transfers</h3>
          <p>If you are accessing our website from outside your country, please note that your data may be transferred and processed in a different jurisdiction with different data protection laws. By using our site, you consent to such transfers.</p>

          <h3>12. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We encourage you to review this page periodically. The "Effective Date" at the top indicates when this policy was last revised.</p>

          <h3>13. Contact Us</h3>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at:</p>
          <p><em>Email:</em> privacypolicy@triniteus.com</p>

          <p>Thank you for trusting Triniteus Hackathon with your personal data.</p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Footer;
