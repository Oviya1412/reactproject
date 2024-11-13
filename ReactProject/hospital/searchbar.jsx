import React, { useState, useRef, useEffect } from 'react';
import './searchbar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ patients = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const inputRef = useRef(null);
  
  const filteredPatients = patients.filter((patient) =>
    patient.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      
    };
  }, []);

  return (
    <div className="search-bar-container" ref={inputRef}>
      <input
        type="text"
        placeholder="Search Patients"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        className="search-bar"
      />
      {showDropdown && filteredPatients.length > 0 && (
        <ul className="search-results">
          {filteredPatients.map((patient, index) => (
            <li key={index}>{patient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
