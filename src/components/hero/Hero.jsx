import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <motion.h1
            initial={{ x: "-2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            Ride In Style
          </motion.h1>
          <p>
            Rent a Vintage at any VintaJoy location across Canada <br />
            and enjoy unlimited kilometers
          </p>
          <button>
            Rent a Vintage Now
            <img src="./arrow.png" alt="arrow" />
          </button>
        </div>
        <motion.div
          className="right"
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <img src="./car1.png" alt="car1" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
