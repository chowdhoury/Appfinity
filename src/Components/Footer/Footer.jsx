import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-[#000000] text-[#FFF] p-15">
        <aside>
          <img className="h-[40px] ml-4" src={logo} alt="" />
          <p>
            Appfinity
            <br />
            Your Gateway to the App Universe.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">APPS & GAMES</h6>
          <a className="link link-hover">Featured</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Top Charts</a>
          <a className="link link-hover">New Releases</a>
          <a className="link link-hover">Updates</a>
        </nav>
        <nav>
          <h6 className="footer-title">COMPANY & SUPPORT</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Help & FAQ</a>
          <a className="link link-hover">Developer Program</a>
          <a className="link link-hover">Tools & SDKs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">License Agreements</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;