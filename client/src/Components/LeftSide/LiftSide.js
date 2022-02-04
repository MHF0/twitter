import React from "react";
import "../Home/home.css";
import { FaHome } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdTravelExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function LiftSide() {
  return (
    <div className="left">
      <div className="side-bar">
        <a className="menue-item">
          <span>
            <img
              className="logo"
              width="30%"
              src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
              alt=""
            />
          </span>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <FaHome size={30} className="icon" />
          </span>
          <h3>Home</h3>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <MdTravelExplore size={30} className="icon" />
          </span>
          <h3>Explore</h3>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <IoMdNotificationsOutline size={30} className="icon" />
          </span>
          <h3>Notifications</h3>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <BsEnvelope size={30} className="icon" />
          </span>
          <h3>Message</h3>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <GoSearch size={30} className="icon" />
          </span>
          <h3>Settings</h3>
        </a>
        <a className="menue-item">
          <span>
            {" "}
            <GoSearch size={30} className="icon" />
          </span>
          <h3>Settings</h3>
        </a>

        <div className="btn2">
          <button> Tweet</button>
        </div>
      </div>
    </div>
  );
}
