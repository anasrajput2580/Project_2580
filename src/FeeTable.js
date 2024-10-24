import React from 'react';
import './FeeTable.css'; // Custom CSS file for styles

const FeeTable = () => {
  return (
    <div className="fee-container">
      <h1 className="fee-header">YOUR FEE-FREE ADVANTAGE</h1>
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
            <td className='empty-header'></td>
            <td className="sub-header">$1k Annual Commission Club</td>
            <td className="sub-header">$10k Annual Commission Club</td>
            <td className="sub-header">$100k Annual Commission Club</td>
            <td className="sub-header">$1M Annual Commission Club</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE1.png" alt="Free Icon" />
          </div>
          <div className="label">MEMBERSHIP FEE</div>
        </div>
      
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE2.png" alt="Application Icon" />
          </div>
          <div className="label">APPLICATION FEE</div>
        </div>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE3.png" alt="Hidden Icon" />
          </div>
          <div className="label">HIDDEN FEE</div>
        </div>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE5.png" alt="Application Icon" />
          </div>
          <div className="label">LICENSE FEE</div>
        </div>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE6.png" alt="Application Icon" />
          </div>
          <div className="label">TRAINING FEE</div>
          </div>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
          <tr>
          <div className="row">
          <div className="icon">
            <img src="img/Benefits_Page/APPLICATION_FEE4.png" alt="Software Icon" />
          </div>
          <div className="label"> Software FEE</div>
        </div>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
            <td>No Fees. Always waived</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;
