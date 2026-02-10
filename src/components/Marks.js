import React from 'react';

function Marks() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/IT22113122_StudentPerformanceProfile.pdf';
    link.download = 'IT22113122_StudentPerformanceProfile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const marksData = [
    {
      year: 1,
      semester: 1,
      gpa: 2.3,
      subjects: [
        { code: 'IT1010', name: 'Introduction to Programming', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT1020', name: 'Introduction to Computer Systems', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT1030', name: 'Mathematics for Computing', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT1040', name: 'Communication Skills', credits: 3, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' }
      ]
    },
    {
      year: 1,
      semester: 2,
      gpa: 2.4,
      subjects: [
        { code: 'IT1050', name: 'Object Oriented Concepts', credits: 2, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT1060', name: 'Software Process Modeling', credits: 3, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' },
        { code: 'IT1080', name: 'English for Academic Purposes', credits: 3, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT1090', name: 'Information Systems & Data Modeling', credits: 4, ca: '-', attempt: 2, grade: 'B+', period: 'Not Available' },
        { code: 'IT1100', name: 'Internet & Web Technologies', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' }
      ]
    },
    {
      year: 2,
      semester: 1,
      gpa: 1.85,
      subjects: [
        { code: 'IT2020', name: 'Software Engineering', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT2030', name: 'Object Oriented Programming', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT2040', name: 'Database Management Systems', credits: 4, ca: '-', attempt: 1, grade: 'B+', period: 'Not Available' },
        { code: 'IT2050', name: 'Computer Networks', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT2060', name: 'Operating Systems and System Administration', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' }
      ]
    },
    {
      year: 2,
      semester: 2,
      gpa: 2.18,
      subjects: [
        { code: 'IT2010', name: 'Mobile Application Development', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT2070', name: 'Data Structures & Algorithms', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT2080', name: 'IT Project', credits: 4, ca: '-', attempt: 1, grade: 'B+', period: 'Not Available' },
        { code: 'IT2090', name: 'Professional Skills', credits: 2, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT2100', name: 'Employability Skills Development - Seminar', credits: 1, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' },
        { code: 'IT2110', name: 'Probability & Statistics', credits: 3, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' }
      ]
    },
    {
      year: 3,
      semester: 1,
      gpa: 2.43,
      subjects: [
        { code: 'IT3010', name: 'Network Design and Management', credits: 4, ca: '-', attempt: 1, grade: 'B', period: 'Not Available' },
        { code: 'IT3020', name: 'Database Systems', credits: 4, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' },
        { code: 'IT3030', name: 'Programming Applications and Frameworks', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT3040', name: 'IT Project Management', credits: 4, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' },
        { code: 'IT3050', name: 'Employability Skills Development - Seminar', credits: 1, ca: '-', attempt: 1, grade: 'B+', period: 'Not Available' }
      ]
    },
    {
      year: 3,
      semester: 2,
      gpa: 2.14,
      subjects: [
        { code: 'IT3060', name: 'Human Computer Interaction', credits: 4, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' },
        { code: 'IT3070', name: 'Information Assurance & Security', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT3080', name: 'Business Management for IT', credits: 4, ca: '-', attempt: 1, grade: 'C', period: 'Not Available' },
        { code: 'IT3090', name: 'IT Project Management', credits: 3, ca: '-', attempt: 1, grade: 'C+', period: 'Not Available' }
      ]
    }
  ];

  return (
    <div className="marks-container">
      <div className="marks-header">
        <button className="download-btn" onClick={handleDownload}>
          <span className="download-icon">⬇</span> Download Result Sheet
        </button>
      </div>

      {marksData.map((semester, index) => (
        <div key={index} className="marks-semester-section">
          <div className="semester-header">
            Year {semester.year} | Semester {semester.semester} | Semester GPA: {semester.gpa}
          </div>
          
          <div className="marks-table-wrapper">
            <table className="marks-table">
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject</th>
                  <th>Credits</th>
                  <th>CA %</th>
                  <th>Attempt</th>
                  <th>Grade</th>
                  <th>Period</th>
                </tr>
              </thead>
              <tbody>
                {semester.subjects.map((subject, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="dropdown-arrow">▼</span> {subject.code}
                    </td>
                    <td>{subject.name}</td>
                    <td>{subject.credits}</td>
                    <td>{subject.ca}</td>
                    <td>{subject.attempt}</td>
                    <td>{subject.grade}</td>
                    <td>{subject.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marks;
