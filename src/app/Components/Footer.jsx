import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaGooglePlusG, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="py-5 mx-auto" style={{ maxWidth: '90%' }}>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Hobbycue</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our services</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Work with us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h5>How do I</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Signup</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Add a listing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Claim listing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Post a query</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Add a blog post</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Other queries</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Quick links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Listings</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog Posts</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shop/Store</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Community</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Social media</h5>
            <ul className='d-flex list-unstyled gap-3'>
              <li><FaFacebookF /></li>
              <li><FaTwitter /></li>
              <li><FaInstagram /></li>
              <li><FaPinterest /></li>
              <li><FaGooglePlusG /></li>
              <li><FaYoutube /></li>
              <li><FaTelegramPlane /></li>
              <li><IoMdMail /></li>
            </ul>
            <div><p className='mt-3 fw-bold'>Invite friends</p></div>
            <div className="d-flex flex-column flex-sm-row w-100 ">
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-primary mt-2 mt-sm-0 ms-sm-2">Invite</button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center pt-5 border-top">
          <p>© purple Cues private limited</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

