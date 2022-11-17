import React from "react";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div>
      <section className="container">
        <div className="flex justify-between p-3 self-center">
          <div>
            <img src={Logo} alt="" />
            <span>Links4u</span>
          </div>
          <div className="">
            <span>© 2022 Links4U. All rights reserved.</span>
          </div>
          <div>
            <footer>
              <ul className="flex flex-wrap gap-5 self-center">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Price</a>
                </li>
                <li>
                  <a href="">Contact US</a>
                </li>
                <li>
                  <a href="">Sign In</a>
                </li>
                <li>
                  <a href="">Sign Up</a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
