import React from 'react';

function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <div className="info-section">
        <div className="section-title">Personal Information</div>
        <div className="info-content">
          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Full Name</div>
              <div className="field-value">TCN Bandara</div>
            </div>
          </div>
          
          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Name With Initials</div>
              <div className="field-value">BANDARA T C N</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">NIC</div>
              <div className="field-value">200209700362</div>
            </div>
            <div className="info-field">
              <div className="field-label">Date Of Birth</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Gender</div>
              <div className="field-value">Male</div>
            </div>
            <div className="info-field">
              <div className="field-label">Left / Right Handed</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="section-title">Contact Information</div>
        <div className="info-content">
          <div className="info-row three-columns">
            <div className="info-field">
              <div className="field-label">Country</div>
              <div className="field-value">Not Available</div>
            </div>
            <div className="info-field">
              <div className="field-label">Province</div>
              <div className="field-value">North Central</div>
            </div>
            <div className="info-field">
              <div className="field-label">Destrict</div>
              <div className="field-value">Anuradhapura</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Current Address</div>
              <div className="field-value">583/2,Kudhanelumkulama,Kawarakkulama,Galkulama,Anuradhapura</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Permenатnt Address</div>
              <div className="field-value">583/2,Kudhanelumkulama,Kawarakkulama,Galkulama,Anuradhapura</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Land Line</div>
              <div className="field-value">Not Available</div>
            </div>
            <div className="info-field">
              <div className="field-label">Mobile</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row two-columns">
            <div className="info-field">
              <div className="field-label">Personal Email</div>
              <div className="field-value">cn1120693@gmail.com</div>
            </div>
            <div className="info-field">
              <div className="field-label">SLIIT Email</div>
              <div className="field-value">IT22113122@my.sliit.lk</div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="section-title">Gurdian Information</div>
        <div className="info-content">
          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Name</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>

          <div className="info-row">
            <div className="info-field full-width">
              <div className="field-label">Current Address</div>
              <div className="field-value">583/2,Kudhanelumkulama,Kawarakkulama,Galkulama,Anuradhapura</div>
            </div>
          </div>

          <div className="info-row three-columns">
            <div className="info-field">
              <div className="field-label">Land Line</div>
              <div className="field-value">Not Available</div>
            </div>
            <div className="info-field">
              <div className="field-label">Mobile</div>
              <div className="field-value">Not Available</div>
            </div>
            <div className="info-field">
              <div className="field-label">Email</div>
              <div className="field-value">Not Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
