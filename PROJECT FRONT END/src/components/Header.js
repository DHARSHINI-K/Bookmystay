import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../Data";
import { motion } from "framer-motion";
import img1 from "../assets/5-stars.png";

const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={img1} />
          </Link>
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li
                whileHover={{ scale: 1.2, originX: 0, color: "#aa8353" }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
              >
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={() => setNavList(!navList)}
          >
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
