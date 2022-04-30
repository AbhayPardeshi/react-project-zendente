import React from "react";
import { Header } from "../header/Header";
import { Navbar } from "../navigation/Navbar";
import { Patient } from "../patient-details/Patient";
import "./layout.css";

export const Layout = () => {
  return (
    <>
      <div className="container">
        <section className="nav-fixed-wrapper">
          <Navbar />
        </section>
        <section className="wrapper-two section-two">
          <Header />
          <Patient />
        </section>
      </div>
    </>
  );
};
