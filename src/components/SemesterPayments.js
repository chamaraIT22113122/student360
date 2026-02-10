import React from 'react';

function SemesterPayments() {
  const payments = [
    { type: 'Semester', year: 2, semester: 1, amount: '220375', bank: 'BOC', branch: 'Anuradhapura', date: 'Not Available', status: 'Complete' },
    { type: 'Semester', year: 1, semester: 1, amount: '215000', bank: 'Not Available', branch: 'Not Available', date: 'Not Available', status: 'Complete' },
    { type: 'Semester', year: 1, semester: 2, amount: '220375', bank: 'Not Available', branch: 'Not Available', date: 'Not Available', status: 'Complete' },
    { type: 'Semester', year: 2, semester: 2, amount: '220375', bank: 'BOC - SLIIT A/C', branch: 'Anuradhapura', date: '2024/1/31', status: 'Complete' },
    { type: 'Semester', year: 3, semester: 1, amount: '220375', bank: 'BOC', branch: 'Anuradhapura', date: '2025/1/15', status: 'Complete' },
    { type: 'Semester', year: 3, semester: 2, amount: '220375', bank: 'BOC - SLIIT A/C', branch: 'Anuradhapure', date: '2025/7/14', status: 'Complete' },
    { type: 'Semester', year: 4, semester: 1, amount: '220375', bank: 'BOC - SLIIT A/C', branch: 'Anuradhapura', date: '2026/1/14', status: 'Complete' }
  ];

  return (
    <div className="semester-payments-container">
      <div className="info-section">
        <div className="section-title">Payment Information</div>
        <div className="payment-table-wrapper">
          <table className="payment-table">
            <thead>
              <tr>
                <th>Payment Type</th>
                <th>Academic Year</th>
                <th>Academic Semester</th>
                <th>Deposited Amount</th>
                <th>Bank</th>
                <th>Branch</th>
                <th>Payment Date</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.type}</td>
                  <td>{payment.year}</td>
                  <td>{payment.semester}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.bank}</td>
                  <td>{payment.branch}</td>
                  <td>{payment.date}</td>
                  <td className="status-complete">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SemesterPayments;
