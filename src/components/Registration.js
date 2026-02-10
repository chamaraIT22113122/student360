import React from 'react';

function Registration() {
  const registrations = [
    { regYear: '2026', period: 'Jan - June', academicYear: '4', semester: '1', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Information Technology', status: 'Registered', batch: 'Weekend' },
    { regYear: '2025', period: 'July - Dec', academicYear: '3', semester: '2', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Information Technology', status: 'Registered', batch: 'Weekend' },
    { regYear: '2025', period: 'Jan - June', academicYear: '3', semester: '1', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Information Technology', status: 'Registered', batch: 'Weekend' },
    { regYear: '2024', period: 'July - Dec', academicYear: '2', semester: '2', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Software Engineering', status: 'Registered', batch: 'Weekday' },
    { regYear: '2024', period: 'Jan - June', academicYear: '2', semester: '1', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Software Engineering', status: 'Registered', batch: 'Weekday' },
    { regYear: '2023', period: 'July - Dec', academicYear: '1', semester: '2', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Software Engineering', status: 'Registered', batch: 'Weekday' },
    { regYear: '2023', period: 'Jan - June', academicYear: '1', semester: '1', programme: 'Bachelor of Science Honours in Information Technology', specialization: 'Software Engineering', status: 'Registered', batch: 'Weekday' }
  ];

  return (
    <div className="registration-container">
      <div className="registration-actions">
        <button className="action-btn primary">
          <span className="btn-icon">+</span> Submit a New Registration
        </button>
        <button className="action-btn secondary">
          <span className="btn-icon">+</span> Elective Subjects
        </button>
      </div>

      <div className="info-section">
        <div className="section-title">Registration Information</div>
        <div className="registration-table-wrapper">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Registered Year</th>
                <th>Registered Period</th>
                <th>Academic Year</th>
                <th>Academic Semester</th>
                <th>Programme</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Batch</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr key={index}>
                  <td>{reg.regYear}</td>
                  <td>{reg.period}</td>
                  <td>{reg.academicYear}</td>
                  <td>{reg.semester}</td>
                  <td>{reg.programme}</td>
                  <td>{reg.specialization}</td>
                  <td>{reg.status}</td>
                  <td>{reg.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Registration;
