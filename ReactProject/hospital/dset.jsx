import React, { useState } from 'react';
import './dset.css'; 
const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Oviya',
    email: 'oviya14@gmail.com',
    password: '',
  });

  const [editMode, setEditMode] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="profile-section">
        <h2>Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!editMode}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!editMode}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              disabled={!editMode}
              placeholder="Enter new password"
            />
          </div>

          {editMode ? (
            <div className="form-actions">
              <button type="submit" className="save-btn">Save Changes</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="edit-btn"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
