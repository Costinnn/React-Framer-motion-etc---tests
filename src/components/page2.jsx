import { Link } from "react-router-dom";
import "./page2.style.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,

    transition: {
      duration: 2,
    },
  },
  onView: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 2,
    },
  },
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      delay: 5,
    },
  },
};

const PageTwo = () => {
  return (
    <div>
      <h1>Page2</h1>
      <div className="p2-box1">
        {/* BOX 1 */}
        <motion.div
          animate={{
            scale: [1, 1.5, 2, 1.5, 1],
            rotate: [0, 180, 360, 180, 0],
            borderRadius: ["10%", "30%", "50%", "30%", "10%"],
          }}
          transition={{ repeat: Infinity, duration: 5, repeatDelay: 7 }}
          className="box1"
        >
          box1
        </motion.div>

        {/* BOX 2 */}

        <motion.div
          animate={{
            rotate: [0, 0, 0, 0, 360, 360, 360, 360, 0],
            scale: [1, 1, 1, 1, 1.5, 1.2, 1, 1.2, 1],
            y: [0, -15, 15, 0, 0, 0, 0, 0, 0],
            x: [0, 0, 0, 0, 0, 10, 0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            delay: 3,
            duration: 3.5,
            repeatDelay: 5,
          }}
          className="box2"
        >
          box2&#8594;
        </motion.div>
      </div>
      <div className="p2-box2">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="onView"
          animate="animate"
          viewport={{ once: true }}
          className="box1"
        ></motion.div>
      </div>

      <Link to="/">Go to homepage</Link>
      <br />
      <Link to="/page3">Go to page3</Link>
    </div>
  );
};

export default PageTwo;
