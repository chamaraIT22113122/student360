import React from 'react';

function CurrentStatus() {
  return (
    <div className="current-status-container">
      <div className="info-section">
        <div className="section-title">Student Status Information</div>
        <div className="info-content">
          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Cumulative Grade Points</div>
              <div className="field-value">151.6</div>
            </div>
            <div className="info-field">
              <div className="field-label">Cumulative Credits</div>
              <div className="field-value">101</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Cumulative Grade Point Average</div>
              <div className="field-value">2.3</div>
            </div>
            <div className="info-field">
              <div className="field-label">Weighted Grade Point Average</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Specialization</div>
              <div className="field-value">Software Engineer</div>
            </div>
            <div className="info-field">
              <div className="field-label">Batch</div>
              <div className="field-value">Weekend</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Repeat/IC Subjects Count</div>
              <div className="field-value">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentStatus;
