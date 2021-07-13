import React from "react";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="footer-left">
          <div className="identity">
            <div className="bg-logo">
              <img src={logo}></img>
            </div>
            <div className="logo-text">
              <p className="omega">OMEGA</p>
              <p className="gaming">GAMING</p>
            </div>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget.
          </p>
        </div>
        <div className="footer-right">
            <div className="link-list">
                <a className="main-link">Wingard</a>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>
                <a className="link">Nec non.</a>
                <a className="link">Ipsum.</a>
                <a className="link">Aliquam.</a>
            </div>
            <div className="link-list">
                <a className="main-link">diumle</a>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>
                <a className="link">Nec non.</a>
                <a className="link">Ipsum.</a>
                <a className="link">Aliquam.</a>
            </div>
            <div className="link-list">
                <a className="main-link">Viosa</a>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>
                <a className="link">Nec non.</a>
                <a className="link">Ipsum.</a>
                <a className="link">Aliquam.</a>
            </div>
            <div className="link-list">
                <a className="main-link">Ideticona</a>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>
                <a className="link">Nec non.</a>
                <a className="link">Ipsum.</a>
                <a className="link">Aliquam.</a>
            </div>
            <div className="link-list">
                <a className="main-link">Dolorisa</a>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>
                <a className="link">Nec non.</a>
                <a className="link">Ipsum.</a>
                <a className="link">Aliquam.</a>
            </div>
        </div>
      </div>
    </div>
  );
}
