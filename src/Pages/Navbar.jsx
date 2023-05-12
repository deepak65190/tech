import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/PagesStyles/SingleCard.module.css";

// 1. map all the links instead of separate Link components;
// 2. try NavLinks and add style it;

const links = [
  { path: "/", title: "Home" },
  { path: "/team", title: "Team" },
  
];

function Navbar() {
  

  return (
    <div style={{backgroundColor:"aliceblue"}}>
      <div className={styles.navbar}>
        {links.map((link) => (
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
            key={link.path}
            to={link.path}
            end
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
