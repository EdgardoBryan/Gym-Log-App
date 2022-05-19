import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar nav-bar">
      <div className="top-bar-left nav-bar" >
        <ul className="menu nav-bar">
          <li className="menu-text nav-bar">App</li>
          <li className="nav-bar">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right nav-bar">
        <ul className="menu nav-bar">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
