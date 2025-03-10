import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footer" className='md:flex block md:w-full md:mx-36'>
        <div className="shop-links md:px-1 px-12 md:w-[220px]">
          <p className="info-title">Online Shopping</p>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <div className='hidden md:block'>
            <a href="#">Beauty</a>
            <a href="#">Gift Cards</a>
            <a href="#">Myntra Insider</a>
          </div>
          <p className="info-title">Useful Links</p>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>
        <div className="customer-policies md:block hidden">
          <p className="info-title">Customer Policies</p>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Grievance Redressal</a>
        </div>
        <div className="app-download md:px-1 px-12">
          <div className='md:block hidden'>
            <p className="info-title">Experience myntra app on mobile</p>
            <div className="download">
              <div>
                <img src="/google-play-store.webp" alt="" />
              </div>
              <div>
                <img src="/app-store.png" alt="" />
              </div>
            </div>
          </div>
          <p className="info-title">Keep in touch</p>
          <div className="socials">
            <a href="#"><i className="fa-brands fa-square-facebook social"></i></a>
            <a href="#"><i className="fa-brands fa-twitter social"></i></a>
            <a href="#"><i className="fa-brands fa-youtube social"></i></a>
            <a href="#"><i className="fa-brands fa-square-instagram social"></i></a>
          </div>
        </div>
        <div className="myntra-promises md:block hidden">
          <div className="myntra-promise">
            <img src="/myntra-original.png" alt="" />
            <div><b>100% Original</b> guarantee for all products at myntra.com</div>
          </div>
          <div className="myntra-promise">
            <img src="/myntra-return.png" alt="" />
            <div><strong>Return Within 14 days</strong> of reciving your order</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 www.myntra.com. All rights revserved.</p>
      </div>
    </footer>
  );
}

export default Footer
