import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div class="section-two-header">
        <div class="doctor-name">
          <img src="./images/icons8-person-96.png" alt="person" />
          <span id="doc-name-span">Diane Cooper</span>
        </div>
        <div class="searchBar">
          <span class="search-logo" href="#">
            <input class="search-text" type="text" placeholder="Search" />
            <i class=" fas fa-search fa-md" width="20px"></i>
          </span>

          <a href="#">
            <img class="sub-plus-btn" src="./images/plus-btn.png" alt="plus" />
          </a>
          <a href="#">
            <img
              class="notify-btn"
              src="./images/notification.png"
              alt="notification"
            />
          </a>
        </div>
      </div>
      <div class="row breadcrumb-div">
        <div>
          <ul class="breadcrumb-navigation">
            <li>
              <a href="#">Patient List</a>
            </li>
            <li>Diane Cooper</li>
          </ul>
        </div>
        <div>
          <span class="printButton">
            <a href="#">
              <img src="#" alt="print-button" />
            </a>
          </span>
          <span class="editButton">
            <a href="#">
              <img src="#" alt="edit-button" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
