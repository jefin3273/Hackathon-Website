import React from 'react';
import '../styles/GroupInfo.css';

const GroupInfo = ({ groupName, setGroupName, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      onNext();
    }
  };

  return (
    <div className="group-info">
      <h2>Group Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupName">Group Name</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-next">Next</button>
      </form>
    </div>
  );
};

export default GroupInfo;

