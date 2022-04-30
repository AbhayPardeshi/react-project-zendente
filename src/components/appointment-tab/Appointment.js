import React from "react";
import "./appointment.css";

export const Appointment = () => {
  return (
    <>
      <article class="appointment-details grid-col-span-7">
        <div class="appointement-history">
          <div class="tab active-tab">
            <a href="#">Upcoming Appointments</a>
          </div>
          <div class="tab">
            <a href="#">Past Appointments</a>
          </div>
          <div class="tab">
            <a href="#">Medical Records</a>
          </div>
        </div>

        <div class="treatment-details">
          <div class="treatment-details-header">
            <p>Root Canal Treatment</p>
            <div class="dropdown-btn-div">
              <span>Show Previous Treatment</span>
              <button>
                <i class="fa-solid fa-caret-up"></i>
              </button>
            </div>
          </div>
          <div class="treatment-details-body">
            <div class="treatment">
              <div>
                <p id="treatment-bold"> 26 Nov '19</p>
                <p id="treatment-gray">09:00 - 10:00</p>
              </div>
              <div>
                <p id="treatment-gray">Treatment</p>
                <p id="treatment-bold">Open Access</p>
              </div>
              <div>
                <p id="treatment-gray">Dentist</p>
                <p id="treatment-bold">Dr. Adam H.</p>
              </div>
              <div>
                <p id="treatment-gray">Nurse</p>
                <p id="treatment-bold">Jessica Mila</p>
              </div>
              <div id="treatment-short-note">
                <p>
                  <img src="./images/icons8-note-64.png" />
                  Note
                </p>
              </div>
            </div>

            <div class="treatment treatment-two">
              <div>
                <p id="treatment-bold"> 12 Dec '19</p>
                <p id="treatment-gray">09:00 - 10:00</p>
              </div>
              <div>
                <p id="treatment-gray">Treatment</p>
                <p id="treatment-bold">Root Canal Prep</p>
              </div>
              <div>
                <p id="treatment-gray">Dentist</p>
                <p id="treatment-bold">Dr. Adam H.</p>
              </div>
              <div>
                <p id="treatment-gray">Nurse</p>
                <p id="treatment-bold">Jessica Mila</p>
              </div>
              <div id="treatment-short-note">
                <p>
                  <img src="./images/icons8-note-64.png" />
                  Note
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
