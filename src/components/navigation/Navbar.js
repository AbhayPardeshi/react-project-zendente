import "./navbar.css";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <section class="section-one">
        <div class="section1-headerDiv">
          <div class="section1-header-sub-div">
            <div>
              <img
                id="main-logo"
                src="./images/logo-small.jpg"
                alt="main-logo"
              />
            </div>
            <div class="hero-heading-div">
              <span id="hero-heading">Zendenta</span>
              <br />
              <span>cabut gigi tanpa sakit</span>
            </div>
          </div>
          <span>
            <i class="navigation-bars fas fa-bars"></i>
          </span>
        </div>
        <aside class="main-navigation">
          <div class="navigation">
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons far fa-clock"></i>
                <span>Overview</span>
              </a>
            </div>
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons far fa-calendar-alt"></i>
                <span>Calender</span>
              </a>
            </div>
            <div class="nav-items active-nav">
              <a href="#">
                <i class="nav-icons far fa-user"></i>
                <span>Patient List</span>
              </a>
            </div>
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons fal fa-comment"></i>
                <span>Messages</span>
              </a>
            </div>
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons fas fa-sliders-h"></i>
                <span>Payment Information</span>
              </a>
            </div>
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons fas fa-sliders-h"></i>
                <span>Setting</span>
              </a>
            </div>
          </div>
          <div class="nav-footer">
            <div class="nav-items">
              <a href="#">
                <i class="nav-icons fas fa-info-circle"></i>
                <span>Help</span>
              </a>
            </div>

            <div class="nav-doc-details">
              <img
                id="doctor-image"
                src="./images/doc-img.png"
                alt="doctor-img"
              />
              <p>
                <span id="sectionOne-doctor-name">Drg. Adam H.</span>
                <br />
                <span>Dentist</span>
              </p>
              <span>
                <button class="dropdown-btn">
                  <i class="fas fa-caret-down"></i>
                </button>
              </span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
