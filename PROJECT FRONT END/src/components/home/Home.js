import React from "react";
import About from "../about/About";
import "../home/Home.css";
import Featured from "./featured/Featured";
// import FeaturedProperties from "./featuredProperties/FeaturedProperties";
import Hero from "./hero/Hero";
import PropertyList from "./propertyList/PropertyList";

import AnimatedFade from "../AnimatedTextWord";
import { motion, Variants } from "framer-motion";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="homeContainer">
        <Featured />
        <h2 className="homeTitle">Browser by Propery type</h2>
        <PropertyList />
        {/* <h2 className="homeTitle">Place guests love</h2> */}
        {/* <FeaturedProperties /> */}

        <div className="cloud">
          <div className="container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="content"
            >
              <motion.h3 variants={textAnimate}>Excellent Services</motion.h3>
              <motion.p variants={textAnimate}>
              "Welcome to a world of unparalleled hospitality and enchanting experiences. Our hotel is more than just a place to rest; it's a destination in itself, where dreams come to life and cherished memories are made. Immerse yourself in a realm of luxury, where every aspect of your stay is curated with utmost care and attention. From the grandeur of our elegantly appointed rooms to the bespoke services provided by our dedicated staff, every moment spent here is a celebration of indulgence. Explore the local culture and sights, knowing that our oasis of comfort awaits your return. Unwind in style at our world-class amenities, savor delectable cuisine, and revel in the blissful ambiance that surrounds you. Your journey to extraordinary begins the moment you step into our welcoming embrace. Welcome to a hotel experience beyond compare."






              </motion.p>
              <div>
                {/* <button>Learn More</button> */}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="data">
          <div className="container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="content"
            >
              <motion.h3 variants={textAnimate}>
                Excellent Customer Service
              </motion.h3>
              <motion.p variants={textAnimate}>
              "Experience unparalleled luxury and personalized attention at our exquisite hotel. Our commitment to exceptional service ensures your stay is nothing short of extraordinary. From the moment you step through our doors, you'll be immersed in a world of comfort and indulgence. Indulge in sumptuous dining, unwind in our elegant spa, and allow our dedicated staff to cater to your every need. Whether you're here for business or leisure, our hotel offers a seamless blend of opulence and convenience. Discover a haven of tranquility where every detail is meticulously crafted to exceed your expectations. Welcome to a truly unforgettable hotel experience."





              </motion.p>
              <div>
                {/* <button>Learn More</button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
