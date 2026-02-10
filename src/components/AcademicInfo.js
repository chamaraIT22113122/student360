import React from 'react';

function AcademicInfo() {
  return (
    <div className="academic-info-container">
      <div className="info-section">
        <div className="section-title">Advance Level Information</div>
        <div className="info-content">
          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">School</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Stream</div>
              <div className="field-value">Engineering Technology</div>
            </div>
            <div className="info-field">
              <div className="field-label">No of Passed Subjects</div>
              <div className="field-value">3</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Passed Attemps</div>
              <div className="field-value">Not Available</div>
            </div>
            <div className="info-field">
              <div className="field-label">Medium</div>
              <div className="field-value">English</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Index Number</div>
              <div className="field-value">7097123</div>
            </div>
            <div className="info-field">
              <div className="field-label">Z - Score</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">AL Status</div>
              <div className="field-value">Completed</div>
            </div>
            <div className="info-field">
              <div className="field-label">AL Curriculum</div>
              <div className="field-value">Local</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Result:</div>
              <div className="field-value">Engineering Technology S</div>
              <div className="field-value">Science for Technology S</div>
              <div className="field-value">ICT S</div>
              <div className="field-value">Not Available Not Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="section-title">Ordinary Level Information</div>
        <div className="info-content">
          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Result:</div>
              <div className="field-value">O/L Curriculum : Not Available</div>
              <div className="field-value">Mathematics : Not Available</div>
              <div className="field-value">English : Not Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicInfo;
