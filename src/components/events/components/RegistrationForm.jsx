import React, { useState } from 'react';
import { Pool } from '@neondatabase/serverless';
import GroupInfo from './GroupInfo';
import ParticipantForm from './ParticipantForm';
import PaymentGateway from './PaymentGateway';
import SuccessPage from './SuccessPage';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [groupName, setGroupName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  // Configure Neon DB connection
  const pool = new Pool({
    connectionString: import.meta.env.VITE_NEON_DATABASE_URL,
    ssl: true
  });

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePaymentComplete = async () => {
    // Validate participants before submission
    const isValidParticipants = participants.every(participant => 
      participant.name && 
      participant.age && 
      participant.mobileNumber && 
      participant.email
    );

    if (!isValidParticipants) {
      alert('Please ensure all participant details are complete');
      return;
    }

    try {
      // Start a transaction
      const client = await pool.connect();

      try {
        // Insert group registration
        const groupResult = await client.query(
          'INSERT INTO group_registrations (group_name, total_participants, payment_status) VALUES ($1, $2, $3) RETURNING id',
          [groupName, participants.length, true]
        );

        const groupRegistrationId = groupResult.rows[0].id;

        // Insert participants with default values for optional fields
        for (const participant of participants) {
          await client.query(
            'INSERT INTO participants (group_registration_id, name, age, mobile_number, email, id_proof_url) VALUES ($1, $2, $3, $4, $5, $6)',
            [
              groupRegistrationId, 
              participant.name || '', 
              participant.age || 0, 
              participant.mobileNumber || 'N/A', 
              participant.email || 'no-email@example.com', 
              participant.idProofUrl || null
            ]
          );
        }

        // Commit the transaction
        await client.query('COMMIT');
        
        setIsPaymentComplete(true);
        console.log('Registration successful');
      } catch (error) {
        // Rollback the transaction on error
        await client.query('ROLLBACK');
        console.error('Registration failed', error);
        alert('Registration failed. Please check your details and try again.');
      } finally {
        // Release the client back to the pool
        client.release();
      }
    } catch (error) {
      console.error('Database connection error', error);
      alert('Unable to connect to the database. Please try again later.');
    }
  };

  return (
    <div className="registration-form">
      {step === 1 && (
        <GroupInfo
          groupName={groupName}
          setGroupName={setGroupName}
          onNext={handleNextStep}
        />
      )}
      {step === 2 && (
        <ParticipantForm
          participants={participants}
          addParticipant={addParticipant}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}
      {step === 3 && (
        <PaymentGateway
          onComplete={handlePaymentComplete}
          onPrev={handlePrevStep}
        />
      )}
      {isPaymentComplete && <SuccessPage />}
    </div>
  );
};

export default RegistrationForm;