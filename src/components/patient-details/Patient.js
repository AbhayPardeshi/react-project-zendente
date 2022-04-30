import React from "react";
import { Appointment } from "../appointment-tab/Appointment";
import "./patient.css";

export const Patient = () => {
  return (
    <>
      <div class="patient-section">
        <article class="patient-id grid-col-span-2">
          <img
            id="patient-image"
            src="./images/patient-img.png"
            alt="patient-photo"
          />
          <p id="patient-name">Diane Cooper</p>
          <p id="patient-email">diane.cooper@example.com</p>
          <div class="appointment-history">
            <span id="past-appointement">
              15
              <br />
              <p id="app-history-details">Past</p>
            </span>
            <span id="upcoming-appointement">
              2<br />
              <p id="app-history-details">Upcoming</p>
            </span>
          </div>
          <br />

          <button class="messageBtn">Send Message</button>
        </article>
        <article class="patient-details grid-col-span-5">
          <div class="detail-div">
            <p id="detail-header">Gender</p>
            <p>Female</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">Birthday</p>
            <p>Feb 24th,1997</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">Phone Number</p>
            <p>(239) 555-0108</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">Street Address</p>
            <p>Jl. Diponegoro No.21</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">City</p>
            <p>Cilacap</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">ZIP Code</p>
            <p>655849</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">Member Status</p>
            <p>Active Member</p>
          </div>
          <div class="detail-div">
            <p id="detail-header">Registration Date</p>
            <p> Feb 24th,1997</p>
          </div>
        </article>

        <article class="doctor-notes grid-col-span-4">
          <div class="notes-heading">
            <p id="notes-main-heading">Notes</p>
            <a id="sellAll-button" href=" #">
              <p id="sell-allBtn">See all</p>
            </a>
          </div>
          <div class="notes">
            <div>
              <p>- This patient is lorem ipsum dolor sit amet</p>
              <p>- lorem ipsum dolor sit amet</p>
              <p>- has alergic history with Cataflam</p>
            </div>
            <div class="btn-holder">
              <button id="save-btn">Save Note</button>
            </div>
          </div>
          <div class="doctor-name-2">
            <p>Lorem ipsum dolor sit amet</p>
            <p class="doc-date-info">
              <img
                class="person-img"
                src="./images/icons8-person-96.png"
                alt="person"
              />
              <span>Drg. Mege Nanade</span>
              <span id="date">20 Nov '19</span>
            </p>
          </div>
        </article>

        <Appointment />

        <article class="documents grid-col-span-4">
          <div class="document-heading-div">
            <p id="document-heading">Files/Documents</p>
            <p id="doc-add-section">
              <a href="#">
                <img src="./images/icons8-note-64.png" alt="add-files" />
                Add Files
              </a>
            </p>
          </div>

          <section>
            <div class="checkup-row">
              <p>
                <img src="./images/icons8-file-24.png" alt="img" />
                <span>Check Up Result.pdf</span>
              </p>

              <p>123kb</p>
            </div>
            <div class="checkup-row">
              <p>
                <img src="./images/icons8-file-24.png" alt="img" />
                <span> Dental X-Ray Result 2.pdf</span>
              </p>

              <p>
                <img src="./images/icons8-delete-100.png" alt="delete" />
                <img src="./images/icons8-download-26.png" alt="download" />
              </p>
            </div>
            <div class="checkup-row">
              <p>
                <img src="./images/icons8-file-24.png" alt="img" />
                <span>Medical Prescriptions.pdf</span>
              </p>

              <p>87kb</p>
            </div>
            <div class="checkup-row">
              <p>
                <img src="./images/icons8-file-24.png" alt="img" />
                <span>Dental X-Ray Result.pdf</span>
              </p>

              <p>
                <img src="./images/icons8-delete-100.png" alt="delete" />
                <img src="./images/icons8-download-26.png" alt="download" />
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};
