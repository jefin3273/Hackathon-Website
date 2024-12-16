import React, { useState } from 'react';
import '../styles/ParticipantForm.css';

const ParticipantForm = ({ participants, addParticipant, onNext, onPrev }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [idType, setIdType] = useState('');
  const [idProofLink, setIdProofLink] = useState('');
  const [errors, setErrors] = useState({});

  // ID Types for dropdown
  const ID_TYPES = [
    'College/Workspace ID', 
    'Aadhaar Card', 
    'PAN Card', 
    'Voter ID', 
    'Driving License'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Age validation
    const ageNum = parseInt(age);
    if (!age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = 'Please enter a valid age between 18 and 100';
    }

    // Mobile validation (basic format check)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // ID Type validation
    if (!idType) {
      newErrors.idType = 'ID Type is required';
    }

    // ID Proof Link validation
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!idProofLink.trim()) {
      newErrors.idProofLink = 'ID Proof Link is required';
    } else if (!urlRegex.test(idProofLink)) {
      newErrors.idProofLink = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newParticipant = { 
        name: name.trim(), 
        age: parseInt(age), 
        mobileNumber: mobile, 
        email: email.trim(), 
        idType,
        idProofLink: idProofLink.trim()
      };

      // Check if participant already exists
      const isDuplicate = participants.some(
        p => p.email === newParticipant.email || p.mobileNumber === newParticipant.mobileNumber
      );

      if (isDuplicate) {
        alert('A participant with this email or mobile number already exists');
        return;
      }

      // Check max participants limit
      if (participants.length >= 5) {
        alert('Maximum 5 participants allowed');
        return;
      }

      addParticipant(newParticipant);
      
      // Reset form
      setName('');
      setAge('');
      setMobile('');
      setEmail('');
      setIdType('');
      setIdProofLink('');
      setErrors({});
    }
  };

  return (
    <div className="participant-form">
      <h2>Participant Information</h2>
      <p>Participants: {participants.length} / 5</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="idType">ID Type</label>
          <select
            id="idType"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option value="">Select ID Type</option>
            {ID_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.idType && <p className="error">{errors.idType}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="idProofLink">ID Proof Link</label>
          <input
            type="text"
            id="idProofLink"
            placeholder="Paste the link to your ID proof"
            value={idProofLink}
            onChange={(e) => setIdProofLink(e.target.value)}
          />
          {errors.idProofLink && <p className="error">{errors.idProofLink}</p>}
          <small>Please ensure the link is publicly accessible</small>
        </div>
        <button type="submit" className="btn-add">Add Participant</button>
      </form>
      
      {participants.length >= 2 && participants.length <= 5 && (
        <button onClick={onNext} className="btn-next">Next</button>
      )}
      {participants.length < 2 && (
        <p className="warning">Please add at least 2 participants.</p>
      )}
      {participants.length > 5 && (
        <p className="warning">Maximum 5 participants allowed.</p>
      )}
      <button onClick={onPrev} className="btn-prev">Previous</button>
      
      <div className="participant-list">
        <h3>Added Participants</h3>
        {participants.map((participant, index) => (
          <div key={index} className="participant-item">
            <p><strong>Name:</strong> {participant.name}</p>
            <p><strong>Age:</strong> {participant.age}</p>
            <p><strong>Email:</strong> {participant.email}</p>
            <p><strong>ID Type:</strong> {participant.idType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantForm;