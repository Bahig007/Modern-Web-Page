import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
    return (<div className='footer section__padding'>
        <div className="footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
        <div className="footer-button">
      <p>Request Early Access</p>
    </div>
    <div className="footer-links">
        <div className="footer-links-logo">
            <img src={gpt3Logo} alt="" />
            <p>Crechterwoord K12 182 Dr Alknjkcb, <br /> All Rights Reserved Ahmed Bahig</p>
        </div>

        <div className="footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      <div className="footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      <div className="footer-links-div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>01023768165</p>
        <p>ahmedbahig.mahmoud@gmail.com</p>
      </div>
      

    </div>
    <div className="footer-copyright">
      <p>@2022 BIGO. All rights reserved Ahmed Bahig.</p>
    </div>
    </div> 
    
    
    );
}
 
export default Footer;