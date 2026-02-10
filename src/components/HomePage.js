import React, { useState, useRef, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AcademicInfo from './AcademicInfo';
import CurrentStatus from './CurrentStatus';
import SemesterPayments from './SemesterPayments';
import Registration from './Registration';
import Marks from './Marks';
import Exams from './Exams';
import './HomePage.css';

function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeRegTab, setActiveRegTab] = useState('pro-rata');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="home-container">
      <header className="top-header">
        <div className="header-wrapper">
          <img 
            src="/asset/SLIIT-UNI-LOGO.png" 
            alt="SLIIT Logo" 
            className="header-logo"
          />
          <h1 className="page-title">Student Profile</h1>
          <div className="header-actions">
            <a href="https://support.sliit.lk/" target="_blank" rel="noopener noreferrer" className="support-btn">Support</a>
            <div className="user-profile" ref={dropdownRef}>
              <div className="user-profile-trigger" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="user-avatar">
                  <div className="avatar-circle">👤</div>
                </div>
                <div className="user-info">
                  <span className="welcome-text">Welcome!</span>
                  <span className="user-name">BANDARA T C N</span>
                </div>
              </div>
              
              {showDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="dropdown-avatar-circle">👤</div>
                    <div className="dropdown-info">
                      <span className="dropdown-welcome">Welcome!</span>
                      <span className="dropdown-name">BANDARA T C N</span>
                    </div>
                  </div>
                  <button className="signout-btn" onClick={handleLogout}>
                    <span className="signout-icon">⏻</span> SignOut
                  </button>
                  <a href="#privacy" className="privacy-link-dropdown">Privacy & Policy</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="profile-section">
        <div className="profile-left">
          <div className="profile-photo">
            <img src="/asset/pp image.jpg" alt="Profile" className="profile-img"/>
          </div>
          <div className="profile-details">
            <div className="student-id">IT22113122</div>
            <div className="student-name">BANDARA T C N</div>
            <div className="degree-info">Bachelor of Science Honours in Software Engineer</div>
            <div className="specialization">Specialized in Software Engineer</div>
          </div>
        </div>
        <div className="profile-right">
          <div className="info-item">0702481691</div>
          <div className="info-item">Weekend</div>
          <div className="info-item">Malabe Campus</div>
          <div className="info-item">SLIIT</div>
        </div>
      </div>

      <nav className="main-nav">
        <button 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          🏠 Home
        </button>
        <button 
          className={`nav-item ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Info
        </button>
        <button 
          className={`nav-item ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          Academic Info
        </button>
        <button 
          className={`nav-item ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          Current Status
        </button>
        <button 
          className={`nav-item ${activeTab === 'payments' ? 'active' : ''}`}
          onClick={() => setActiveTab('payments')}
        >
          Semester Payments
        </button>
        <button 
          className={`nav-item ${activeTab === 'registration' ? 'active' : ''}`}
          onClick={() => setActiveTab('registration')}
        >
          Registration
        </button>
        <button 
          className={`nav-item ${activeTab === 'marks' ? 'active' : ''}`}
          onClick={() => setActiveTab('marks')}
        >
          Marks
        </button>
        <button 
          className={`nav-item ${activeTab === 'exams' ? 'active' : ''}`}
          onClick={() => setActiveTab('exams')}
        >
          Exams
        </button>
      </nav>

      <div className="content-area">
        {activeTab === 'home' && (
          <>
            <div className="notification-banner">
              <span className="banner-icon">⚠️</span>
              Current Calendar Period Registration Details Only
            </div>

        <div className="info-card">
          <div className="info-grid">
            <div className="grid-item">
              <div className="grid-label">Intake</div>
              <div className="grid-value">2023 - Regular Intake</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Faculty</div>
              <div className="grid-value">Faculty of Computing</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Institute</div>
              <div className="grid-value">SLIIT</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Year</div>
              <div className="grid-value">4</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Semester</div>
              <div className="grid-value">1</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Campus</div>
              <div className="grid-value">Malabe Campus</div>
            </div>
            <div className="grid-item">
              <div className="grid-label">Batch</div>
              <div className="grid-value">Weekend</div>
            </div>
          </div>
        </div>

        <div className="registration-section">
          <div className="reg-tabs">
            <button 
              className={`reg-tab ${activeRegTab === 'repeat' ? 'active' : ''}`}
              onClick={() => setActiveRegTab('repeat')}
            >
              My Repeat Registrations
            </button>
            <button 
              className={`reg-tab ${activeRegTab === 'pro-rata' ? 'active' : ''}`}
              onClick={() => setActiveRegTab('pro-rata')}
            >
              My Pro-rata Registrations
            </button>
          </div>

          <table className="reg-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Semester</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Campus</th>
                <th>Institute</th>
                <th>Batch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="no-data">
                  {activeRegTab === 'repeat' 
                    ? 'No Repeat registrations for the current calendar period'
                    : 'No Pro-Rata registrations for the current calendar period'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="modules-section">
          <div className="section-header">My Current Registered Modules</div>
          <table className="modules-table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Subject Code</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT4020</td>
                <td>Modern Topics in IT</td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>IT4070</td>
                <td>Preparation for the Professional World</td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>IT4100</td>
                <td>Software Quality Assurance</td>
                <td>Regular</td>
              </tr>
            </tbody>
          </table>
        </div>
          </>
        )}

        {activeTab === 'personal' && <PersonalInfo />}
        {activeTab === 'academic' && <AcademicInfo />}
        {activeTab === 'status' && <CurrentStatus />}
        {activeTab === 'payments' && <SemesterPayments />}
        {activeTab === 'registration' && <Registration />}
        {activeTab === 'marks' && <Marks />}
        {activeTab === 'exams' && <Exams />}
      </div>
    </div>
  );
}

export default HomePage;
