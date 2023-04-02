import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to know Us</h3>
          <p>About Us</p>
          <p>Why Pestkart</p>
          <p>New Arrivals</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Our Policies</h3>
          <p>Privacy policy</p>
          <p>Shipping delivery</p>
          <p>FAQs</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./Pestkart.png" />
        <p>
          Copyright 2023 @apestkart.com &nbsp;&nbsp;&nbsp;&nbsp; All rights reserved &nbsp;&nbsp;&nbsp;&nbsp; Terms of Use Seller &nbsp;&nbsp;&nbsp;&nbsp;
          Terms and Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
