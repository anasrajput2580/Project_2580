import React from 'react';
import './GrowthPhaseSection.css';

const GrowthPhaseSection = () => {
  return (
    <><div className="growth-phase-section">
          <div className="growth-content">
              <img src="/img/Program_Page/growth_phase.png" alt="Excited Woman" className="growth-image" />
              <div className="growth-text-content">
                  <h2 className="growth-heading">Starting Point: Learn and Prepare</h2>
                  <p className="growth-paragraph">
                      Begin your journey with comprehensive training and access to essential tools.
                  </p>
              </div>
          </div>
      </div><div className="statement-section">
              <div className="statement-text">

                  <h2>First Milestone: Apply Your Skills</h2>
                  <p>Put your knowledge into action by taking on initial tasks such as ​​spotting deals or managing simple campaigns.</p>
              </div>
          </div>
          <div className="growth-phase-section2">
          <div className="growth-content2">
          <div className="growth-text-content2">
                  <h2 className="growth-heading2">Growth Phase: Expand and Lead</h2>
                  <p className="growth-paragraph2">
                  Take on bigger challenges, from ​closing deals to leading teams, as ​you grow and expand your ​influence.
                  </p>
              </div>
              <img src="/img/Program_Page/growth_phase2.png" alt="Excited Man" className="growth-image2" />
              
          </div>
      </div>
      <div className="statement-section">
              <div className="statement-text">

                  <h2>Mastery: Achieve and Earn</h2>
                  <p>Reach the program's highest level—maximize earnings, unlock ​​top rewards, and become a key player in our network.</p>
              </div>
          </div>
          </>
  );
};

export default GrowthPhaseSection;
