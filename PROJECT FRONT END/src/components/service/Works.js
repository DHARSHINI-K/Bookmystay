import React, { useContext } from "react";
import "./Works.css";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import boy from "../../assets/boy.png";
import glassesimoji from "../../assets/glassesimoji.png";
import thumbup from "../../assets/heartemoji.png";
import crown from "../../assets/crown.png";

import { motion } from "framer-motion";

const Works = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="works-section" id="Intro">
      {/* left name side */}
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",

          repeatDelay: 1,
          duration: 1,
        }}
        className="i-left"
      >
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Our Awesome</span>
          <span>Services</span>
          <span>
          Welcome to our exquisite hotel, where every moment is tailored to perfection. Embrace the epitome of luxury with our world-class services, designed to exceed your every expectation. From the moment you arrive, our attentive staff is dedicated to ensuring your stay is nothing short of extraordinary. Indulge in delectable dining experiences at our signature restaurant, relax and rejuvenate at our serene spa, or bask in the sun by our shimmering pool. For the business traveler, our state-of-the-art facilities and personalized assistance cater to your professional needs. Whether you seek relaxation, adventure, or simply a tranquil escape, our comprehensive range of services promises an unforgettable stay. Embrace the art of hospitality as we curate cherished memories for you at every turn. Welcome to a world where exceptional services create a journey like no other.
          </span>
        </div>

        {/* <button className="button i-button">Contact Us</button> */}
      </motion.div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <div className="floatingDiv">
            <img src={crown} alt="" />
            <span>Best service</span>
          </div>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <div className="floatingDiv">
            <img src={thumbup} alt="" />
            <span>Easy payment</span>
          </div>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Works;
