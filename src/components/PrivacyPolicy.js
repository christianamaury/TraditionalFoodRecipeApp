import React from "react";
import "./footer.css"
import {Footer} from "./Footer";
import './privacy.css';
import '../App.css';
import reference1 from '../Images/reference1.jpg';

export const PrivacyPolicy = () => {

  return (
    <>
    <div className="privacyMain">
          <h1> Privacy Policy Agreement&nbsp; 📜 </h1>
          <h2> We don't collect any "Personal Data"</h2>
          <p> If the information isn't collected, it can't be stoln, demanded, leaked or abused.</p>
          <p> Protecting your personal data is the best way to safeguard your online privacy. </p>
          <h2> How we define "Personal Data" </h2>
          <p> Our definition of personal data is based on the privacy laws and regulations of the EU, including the General</p>
          <p> Data Protection Regulation (GDPR). These are widely regarded as the strongest privacy protections in the world. </p>
        <p>We consider any information about you or your behavior that can be traced back to you as personal data.</p>
          <h2> Information we don't collect </h2>
          <h3> So let's be perfectly clear: </h3>
          <h2> We don't record your IP address </h2>
          <h2> We don't serve any tracking or identifyng cookies </h2>
          <p>  This is about "good" and "bad" cookies. Cookies are small pieces of data that are sent to your hard drive </p>
          <p> by websites you visit. "Bad" cookies have unique elements that can track all kinds of personal information. </p>
        <p> We don't serve any of those. "Starpage" uses just one "good" cookie called "preferences" in order to remember </p>
        <p> the search preferences you choose. It's completely anonymous and expires after not visiting "Starpage" for 90 days. ✅  </p>
        <img className="privacyLogoReference" src={reference1} alt="reference1"/>
    </div>
  </>
  )
}
