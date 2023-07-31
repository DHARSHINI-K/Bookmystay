import React, { useRef, useState } from "react";
import "./About.css";
// import Stats from "./Stats";
// import Testimonials from "./Testimonials";

// import video from "../../assets/images/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/about_pic.jpeg";
import about2Img from "../../assets/about2_pic.jpeg";
import video from "../../assets/video.mp4";
// import aboutImg from "../../assets/images/about_pic.jpeg";
// import about2Img from "../../assets/images/about2_pic.jpeg";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import AboutCard from "./AboutCard";

import AnimatedFade from "../AnimatedTextWord";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    vidRef.current.play();
  };
  const pauseVideo = () => {
    setToggleVideo(!toggleVideo);
    vidRef.current.pause();
  };
  return (
    // about container
    <div className="aboutContainer">
      <div className="container">
        <div className="about-content">
          <div className="about-employee ">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="about-title"
            >
              <motion.h3 variants={textAnimate} className="text-center">
                "Our services and wonders of Prague"
              </motion.h3>
              <motion.p variants={textAnimate} className="employee-detail">
              "Welcome to our haven of elegance and charm. With a passion for exceptional service, we invite you to experience the epitome of comfort and luxury. From our thoughtfully designed accommodations to our attentive staff, every detail is crafted to ensure your stay is nothing short of extraordinary. Whether you're here for leisure or business, immerse yourself in a world of indulgence, where cherished memories are made. Discover the perfect blend of sophistication and relaxation at our hotel, where you'll find your home away from home."
              </motion.p>
            </motion.div>

            <motion.div variants={textAnimate} className="about-video">
              <video className="about-video" autoPlay loop ref={vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button type="button" className="vidPlayBtn ">
                {/* {toggleVideo ? (
                  <FaPause
                    className="text-brown"
                    size={28}
                    onClick={pauseVideo}
                  />
                ) : (
                  <FaPlay
                    className="text-brown"
                    size={28}
                    onClick={playVideo}
                  />
                )} */}

                {toggleVideo ? (
                  <FontAwesomeIcon
                    icon={faPauseCircle}
                    className="text-brown"
                    size={100}
                    onClick={pauseVideo}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="text-brown"
                    size={100}
                    onClick={playVideo}
                  />
                )}
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="about-grid about-reverse "
          >
            <motion.div variants={imageAnimate} className="about-img">
              <img src={aboutImg} />
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="about-title bg-yellow"
            >
              <motion.h3 variants={textAnimate} className="text-large">
                We offer Great choice
                <br /> for a relaxing vacation
              </motion.h3>
              <motion.p variants={textAnimate} className="text mx-auto">
              Indulge in the ultimate relaxation at our resort, where we take pride in offering a superb choice for an unforgettable vacation. Whether you seek a tranquil escape from the hustle and bustle of everyday life or an adventure-filled getaway, our resort caters to every desire. Surrounded by breathtaking natural beauty and complemented by luxurious amenities, you'll find yourself immersed in serenity and comfort. Lounge by the sparkling pool, unwind with a pampering spa treatment, or embark on thrilling excursions - the possibilities for a truly rejuvenating experience are endless. With our dedication to impeccable service, your relaxing vacation is not just a choice but a promise we deliver on, leaving you with cherished memories to last a lifetime. Welcome to the blissful paradise that awaits you at our resort.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="about-grid "
          >
            <div className="about-title bg-yellow mr-50">
              <motion.h3 variants={textAnimate} className="text-large">
                Luxurious 5-star sleeping experience
                <br /> at a very affordable 1-star price.
              </motion.h3>
              <motion.p variants={textAnimate} className="text mx-auto">
              Welcome to our exclusive hotel, where we offer a luxurious 5-star sleeping experience at an incredibly affordable 1-star price. We believe that everyone deserves to indulge in opulence without breaking the bank. From our plush, cloud-like beds to the carefully curated amenities, we ensure that your stay with us transcends expectations, elevating your comfort and well-being to the highest level. Our attentive staff is dedicated to providing personalized service, catering to your every need, making you feel like a VIP throughout your stay. Embrace the lavishness of a 5-star experience, relish in the attention to detail, and savor the blissful slumber that awaits you - all at a price that makes your dreams a reality. Treat yourself to the best without compromise, and discover a hidden gem that promises an unforgettable stay without the extravagant cost. Welcome to a new world of affordable luxury.





Regenerate response

              </motion.p>
            </div>
            <motion.div variants={imageAnimate} className="about-img">
              <img src={about2Img} />
            </motion.div>
          </motion.div>
        </div>
        {/* <div className="timeline"> */}
          {/* <Timeline /> */}
        {/* </div> */}
        <div className="testimonials">
          <AnimatedFade>
            <Testimonials />
          </AnimatedFade>
        </div>
        <div className="team-member bg-yellow">
          <h4 className="team-title"> Our Team</h4>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="team"
          >
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>John Doe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Jenifer Doe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Maria Joe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Mark Joe</h4>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="about-card">
          <AboutCard />
        </div>
      </div>
    </div>

    //  history
  );
};

export default About;
