import React from "react";
import "../../App.css"; 
import AmazonLogo from "../../assets/Amazonlogo.png"
import { useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate=useNavigate();

    function handleGotoHome(){
      navigate("./")
    }
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#" className="back-to-top">Back to top</a>
      </div>

      <div className="footer-middle">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Cares</a></li>
            <li><a href="#">Gift a Smile</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Sell under Amazon Accelerator</a></li>
            <li><a href="#">Amazon Global Selling</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfilment by Amazon</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li><a href="#">Amazon Pay</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Amazon App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <a href="#">
            <img src={AmazonLogo} alt="Amazon Logo" style={{height:"150px",width:"200px" , marginRight:"150px"}} onClick={()=>handleGotoHome()} />
          </a>
        </div>
        <div className="footer-countries">
          <ul>
            <li><a href="#">Australia</a></li>
            <li><a href="#">Brazil</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">China</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Germany</a></li>
            <li><a href="#">Italy</a></li>
            <li><a href="#">Japan</a></li>
            <li><a href="#">Mexico</a></li>
            <li><a href="#">Netherlands</a></li>
            <li><a href="#">Singapore</a></li>
            <li><a href="#">Spain</a></li>
            <li><a href="#">United Kingdom</a></li>
            <li><a href="#">United States</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>&copy; {new Date().getFullYear()} Your Amazon Clone - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
