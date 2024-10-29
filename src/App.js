import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Banner from './banner';
import StatementSection from './StatementSection';
import TreasureHintSection from './TreasureHintSection';
import PathToMembership from './PathToMembership';
import SignUpSection from './SignUpSection';
import Footer from './Footer';
import Story from './story';
import GrowthPhaseSection from './GrowthPhaseSection';
import CelebrateSuccess from './CelebrateSuccess';
import BehindProgram from './BehindProgram';
import FeeTable from './FeeTable';
import ExclusivePerks from './ExclusivePerks';
import TieredCommission from './TieredCommission';
import VipPrivileges from './VipPrivileges';
import BenefitsBehindProgram from './BenefitsBehindProgram';
import BenefitsLevel from './BenefitsLevel';

import ZeroCost from './ZeroCost';
import InclusiveOppurtunity from './InclusiveOppurtunity';
import OurMembersResources from './OurMembersResources';
import StorySection from './StorySection';
import OurPurpose from './OurPurpose';
import PartnerWithUs from './PartnerWithUs';
import ValuesSection from './ValuesSection';
import StayUpdated from './StayUpdated';
import ContactUs from './ContactUs';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import SecondBanner from './SecondBanner';
function HomePage() {
  return (
    <>
      <Banner 
       videoSrc="/img/Home_Page/Home_Banner_Adjustments.mp4" 
       title="Discover, Connect, Earn" 
       subtitle="Earn Money with Every Sale" />
      <StatementSection />
      <TreasureHintSection />
      <PathToMembership />
      <SignUpSection />
      <Footer />
    </>
  );
}

function ProgramPage() {
  return (
    <>
     <Banner 
       videoSrc="/img/Program_Page/Program_Banner_Adjustments.mp4" 
       title="More Than A Program, A Partnership" 
       subtitle="Earn Money by Taking the First Step Toward Success" />
      <Story 
       heading="Create your story"
       description="This is more than just a program—it's a path to personal and financial growth."      
      />
      <GrowthPhaseSection />
      <CelebrateSuccess />
      <BehindProgram
      quote= "This program has been incredibly rewarding. The opportunities and support it offers are exceptional, empowering partners to succeed. It’s not just about success; it’s about building lasting relationships and growth. Anyone who joins will find themselves on a path full of potential."
      imgSource="/img/Program_Page/BehindProgram.png"
      author = "Virginia J."
      />
      <Footer />
    </>
  );
}
function BenefitsPage() {
  return (
    <>
    <Banner 
       videoSrc="/img/Benefits_Page/Benefits_Banner_Adjustment.mp4" 
       title="Unlock Boundless Earnings" 
       subtitle="Expand Network and Increase Earnings Where Every Client Counts" />
     <Story 
       heading="Experience Exclusive Benefits with Us"
       description="We're the only company offering such incredible benefits to our ​members. Whether it's luxury cars, exclusive vacations, or zero fees ​across the board, we've created a one-of-a-kind program designed to ​reward you like no other."      
      />
      <FeeTable />
      <BenefitsLevel/>
      <ExclusivePerks />
      <TieredCommission />
      <VipPrivileges/>
      <BenefitsBehindProgram/>
      <SignUpSection/>
    <Footer/>
    </>
        );


}
function MembershipPage() {
  return (
    <>
    <Banner 
       videoSrc="/img/Membership_Page/Membership_Banner.mp4" 
       title="Partner with the Best" 
       subtitle="Unlock Premium Rewards and Maximize Your Earnings" />
     <Story 
       heading="Why Partner with Us?"
       description="Earn Money by Collaborating with Us — Maximize Your Revenue Potential"      
      />
      <ZeroCost/>
      <InclusiveOppurtunity/>
      <OurMembersResources/>
      <BehindProgram
      quote= "The program goes beyond offering opportunities and fostering ​growth. We strive to create a supportive, family-like ​environment where everyone shares a common goal: success. ​Our dedication is in being a steadfast partner, providing ​unwavering support to achieve our shared aspirations."
      imgSource="/img/Membership_Page/Membership_3.png"
      author = "Cherie R."
      />
      <PartnerWithUs/>
    <Footer/>
    </>
        );
}
function AboutPage() {
  return (
    <>
    <Banner 
       videoSrc="/img/About_Us_Page/About_Us_Banner_Adjustments.mp4" 
       title="Built on Purpose, Inspired by Vision" 
       subtitle="Commitment Beyond Words, Your Earning Is Our Priority" />
     <Story 
       description="Opportunity isn’t something you wait for—you make it happen."      
      />
      <StorySection/>
      <OurPurpose/>
      <ValuesSection/>
      <StayUpdated/>
    <Footer/>
    </>
        );
}
function ContactUsPage() {
  return (
    <>
     <SecondBanner 
       imgSrc="./img/Contact_Us_Page/Contact_Us.png"
       title="Let's Create Opportunities Together!" 
       subtitle="Connect with Us to Explore How We Can Support Your Success" />
    <ContactUs/> 
    </>
        );
}
function LegalNoticePage() {
  return (
    <>
     <SecondBanner 
       imgSrc="./img/Legal_Notice/banner.png"
       title="Connect, Discover, Earn" 
       subtitle="Help Businesses Save & Earn Commissions with Every Referral" />
       <LegalNotice/>
    <Footer/>
    </>
        );
}
function PrivacyPolicyPage() {
  return (
    <>
     <SecondBanner 
       imgSrc="./img/Privacy_Policy/banner.png"
       title="Privacy Policy of Treasure Hint" />
       <PrivacyPolicy/>
    <Footer/>
    </>
        );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />}  />
        <Route path="/benefits" element={<BenefitsPage/>}/>
        <Route path="/membership" element={<MembershipPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact-us" element={<ContactUsPage/>}/>
        <Route path="/legal-notice" element={<LegalNoticePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;