import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import fucker from "../assets/img/fucker.svg";
import heart from "../assets/img/heart.svg";
import notify from "../assets/img/notify.svg";
import setting from "../assets/img/setting.svg";
import search from "../assets/img/search.svg";
import "../assets/css/header.css";

export default function Header() {
  return (
    <div className="nav-bar-top">
      <div className="profil-notification">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Link to="/profile">
              <img className="icon-instance-node" alt="Profile" src={fucker} />
            </Link>
            <Link to="/profile">
              <div className="button" />
            </Link>
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Link to="/favorites">
              <img className="icon-instance-node" alt="Favorites" src={heart} />
            </Link>
            <Link to="/favorites">
              <div className="button" />
            </Link>
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Link to="/notifications">
              <img className="icon-instance-node" alt="Notifications" src={notify} />
            </Link>
            <Link to="/notifications">
              <div className="button" />
            </Link>
            <div className="notif" />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Link to="/settings">
              <img className="icon-instance-node" alt="Settings" src={setting} />
            </Link>
            <Link to="/settings">
              <div className="button" />
            </Link>
          </div>
        </div>

        <div className="profil" />
      </div>

      <Link to="/">
        <img className="logo" alt="Logo" src={logo} />
      </Link>

      <div className="search">
        <div className="overlap">
          <input
            type="text"
            className="text-wrapper"
            placeholder="Search something here"
          />
          <Link to="/search">
            <img className="icon-instance-node" alt="Search" src={search} />
          </Link>
        </div>
      </div>
    </div>
  );
}
