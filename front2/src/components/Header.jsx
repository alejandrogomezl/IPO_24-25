import React from "react";
import "../assets/css/header.css";

export default function Header() {
  return (
    <div className="nav-bar-top">
      <div className="profil-notification">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img alt />
            <div className="button" />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img alt="icon-instance-node" />
            <div className="button" />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img alt="icon-instance-node" />
            <div className="button" />

            <div className="notif" />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img alt="icon-instance-node" />
            <div className="button" />
          </div>
        </div>

        <div className="profil" />
      </div>

      <img className="logo" alt="Logo"  />
    </div>
  );
};
