import React from 'react';
import './BenefitsLevel.css'; // Custom CSS file for styles

const BenefitsLevel = () => {
  return (
    <div className="benefits-container">
      <h1 className="benefits-header">Enjoy the Benefits of Each Level</h1>
      <table className="benefits-table">
        <thead>
          <tr>
            <th className="benefits-header benefits-category">Benefits</th>
            <th className="benefits-header advisor">ADVISOR</th>
            <th className="benefits-header director">DIRECTOR</th>
            <th className="benefits-header vp">VP</th>
            <th className="benefits-header leader">LEADER</th>
          </tr>
          <tr>
            <td className='empty-header'></td>
            <td className="benefits-sub-header">$1k Annual Commission Club</td>
            <td className="benefits-sub-header">$10k Annual Commission Club</td>
            <td className="benefits-sub-header">$100k Annual Commission Club</td>
            <td className="benefits-sub-header">$1M Annual Commission Club</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/earning.png" alt="Earning Icon" />
          </div>
           <div className="label-benefits">EARNING</div>
          </div>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/gas_card.png" alt="Gas Card Icon" />
          </div>
           <div className="label-benefits">GAS CARD</div>
          </div>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/hotel_stay.png" alt="Hotel Stay Icon" />
          </div>
           <div className="label-benefits">HOTEL STAY</div>
          </div>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/fine_dining.png" alt="Fine Dining Icon" />
          </div>
           <div className="label-benefits">FINE DINING</div>
          </div>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
            <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/kabazz_card.png" alt="Kabazz Card Icon" />
          </div>
           <div className="label-benefits">KABAZZ CARD</div>
          </div>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/events.png" alt="Events Icon" />
          </div>
           <div className="label-benefits">EVENTS</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/resort.png" alt="Resort Icon" />
          </div>
           <div className="label-benefits">ROSORT</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/cruise_trips.png" alt="cruise Icon" />
          </div>
           <div className="label-benefits">CRUISE TRIPS</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/international_trips.png" alt="trips Icon" />
          </div>
           <div className="label-benefits">INTERNATIONAL TRIPS</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/luxury_car.png" alt="Car Icon" />
          </div>
           <div className="label-benefits">LUXURY CAR</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
            <td className="tick-cell">✔</td>
          </tr>
          <tr>
          <div className="row-benefits">
          <div className="icon-benefits">
            <img src="img/Benefits_Page/luxury_houseb.png" alt="house Icon" />
          </div>
           <div className="label-benefits">LUXURY HOUSE</div>
          </div>
            <td className="dash-cell">----</td>
            <td className="dash-cell">----</td>
            <td className="dash-cell">----</td>
            <td className="tick-cell">✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BenefitsLevel;
