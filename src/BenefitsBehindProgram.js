import React from 'react';
import './BenefitsBehindProgram.css'; // Import the CSS file

const BenefitsBehindProgram = () => {
  return (
    <div className="program-section">
    
      <div className="bprogram-content">
        <h2 className="program-title">Behind the Program</h2>
        <h3 className="program-subtitle">Insights From Those Who Know</h3>
        <p className="program-quote">
        “I’m excited about the benefits, especially with successful ​clients. The flexibility is great—no strict hours, making it open to ​everyone. For someone like a stay-at-home mom, it’s a no-risk ​opportunity with valuable experience to gain"
        </p>
        <p className="program-author">Ricah P.</p>
      </div>
      <div className="program-image">
        <img src="/img/Benefits_Page/Benefits_1.png" alt="Woman pointing finger" />
      </div>

    </div>
  );
};

export default BenefitsBehindProgram;
