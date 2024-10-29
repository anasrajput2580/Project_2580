import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './FeeTable.css';

const FeeTable = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div className="fee-container">
      <h1 className={`fee-header ${isMobile ? 'fee-header-mobile' : ''}`}>
        YOUR FEE-FREE ADVANTAGE
      </h1>
      <div className="fee-table-container">
        <table className="fee-table">
          <thead>
            <tr>
              <th className="fee-header fee-category">FEE</th>
              <th className="fee-header advisor">ADVISOR</th>
              <th className="fee-header director">DIRECTOR</th>
              <th className="fee-header vp">VP</th>
              <th className="fee-header leader">LEADER</th>
            </tr>
            <tr>
              <td className="empty-header"></td>
              <td className="sub-header">$1k Annual Commission Club</td>
              <td className="sub-header">$10k Annual Commission Club</td>
              <td className="sub-header">$100k Annual Commission Club</td>
              <td className="sub-header">$1M Annual Commission Club</td>
            </tr>
          </thead>
          <tbody>
            {['MEMBERSHIP FEE', 'APPLICATION FEE', 'HIDDEN FEE', 'LICENSE FEE', 'TRAINING FEE', 'SOFTWARE FEE'].map((label, index) => (
              <tr key={index}>
                <td className="row">
                  <div className="icon">
                    <img
                      src={`img/Benefits_Page/APPLICATION_FEE${index + 1}.png`}
                      alt={`${label} Icon`}
                      className={isMobile ? 'icon-img-mobile' : 'icon-img'}
                    />
                  </div>
                  <div className={`label ${isMobile ? 'label-mobile' : ''}`}>{label}</div>
                </td>
                <td>No Fees. Always waived</td>
                <td>No Fees. Always waived</td>
                <td>No Fees. Always waived</td>
                <td>No Fees. Always waived</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeTable;
