import React from 'react';

function Exams() {
  const examData = [
    {
      year: 3,
      semester: 2,
      general: [
        { code: 'IT3060 - Final', name: 'Human Computer Interaction', location: 'G1103', datetime: '10th Nov 2025 12:00 PM to 14:00 PM', seat: '30', session: 'Session 1' },
        { code: 'IT3070 - Final', name: 'Information Assurance & Security', location: 'B403', datetime: '14th Nov 2025 14:00 PM to 16:00 PM', seat: '34', session: 'Session 2' },
        { code: 'IT3080 - Final', name: 'Data Science & Analytics', location: 'F305', datetime: '16th Nov 2025 12:00 PM to 14:00 PM', seat: '9', session: 'Session 2' },
        { code: 'IT3090 - Final', name: 'Business Management for IT', location: 'A405', datetime: '18th Nov 2025 15:00 PM to 17:00 PM', seat: '37', session: 'Session 2' }
      ],
      midterm: [
        { code: 'IT3070 - Midterm', name: 'Information Assurance & Security', location: 'B403', datetime: '16th Sep 2025 12:45 PM to 13:45 PM', seat: '29', session: 'Session 2' },
        { code: 'IT3080 - Midterm', name: 'Data Science & Analytics', location: 'B403', datetime: '18th Sep 2025 12:45 PM to 13:45 PM', seat: '53', session: 'Session 2' },
        { code: 'IT3090 - Midterm', name: 'Business Management for IT', location: 'B403', datetime: '20th Sep 2025 12:45 PM to 13:45 PM', seat: '27', session: 'Session 2' }
      ]
    },
    {
      year: 2,
      semester: 1,
      general: [
        { code: 'IT2020 - Final', name: 'Software Engineering', location: 'B502', datetime: '28th May 2024 09:00 AM to 12:00 PM', seat: '63', session: 'Session 1' },
        { code: 'IT2040 - Final', name: 'Database Management Systems', location: 'B502', datetime: '2th Jun 2024 09:00 AM to 11:00 AM', seat: '65', session: 'Session 1' },
        { code: 'IT2020 - Final', name: 'Software Engineering', location: 'B502', datetime: '4th Nov 2025 14:00 PM to 17:00 PM', seat: '71', session: 'Session 1' },
        { code: 'IT2040 - Final', name: 'Database Management Systems', location: 'A405', datetime: '11th Nov 2025 15:00 PM to 17:00 PM', seat: '10', session: 'Session 1' }
      ],
      midterm: [
        { code: 'IT2040 - Midterm', name: 'Database Management Systems', location: '4th Floor - B 403', datetime: '26th Mar 2024 13:30 PM to 14:30 PM', seat: '54', session: 'Session 1' },
        { code: 'IT2020 - Midterm', name: 'Software Engineering', location: 'B402', datetime: '28th Mar 2024 15:30 PM to 16:30 PM', seat: '54', session: 'Session 2' }
      ]
    }
  ];

  return (
    <div className="exams-container">
      {examData.map((yearData, index) => (
        <div key={index} className="exam-year-section">
          <div className="year-header">Year {yearData.year} | Semester {yearData.semester}</div>
          
          <div className="exam-section-content">
            <div className="exam-type-title">Genaral Examination</div>
            <div className="exam-table-wrapper">
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Location</th>
                    <th>Date and Time</th>
                    <th>Seat No</th>
                    <th>Session No</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.general.map((exam, idx) => (
                    <tr key={idx}>
                      <td>{exam.code}</td>
                      <td>{exam.name}</td>
                      <td>{exam.location}</td>
                      <td>{exam.datetime}</td>
                      <td>{exam.seat}</td>
                      <td>{exam.session}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="exam-type-title">Mid-Term Examination</div>
            <div className="exam-table-wrapper">
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Location</th>
                    <th>Date and Time</th>
                    <th>Seat No</th>
                    <th>Session No</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.midterm.map((exam, idx) => (
                    <tr key={idx}>
                      <td>{exam.code}</td>
                      <td>{exam.name}</td>
                      <td>{exam.location}</td>
                      <td>{exam.datetime}</td>
                      <td>{exam.seat}</td>
                      <td>{exam.session}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Exams;
