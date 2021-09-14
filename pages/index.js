import Head from "next/head";
// import Image from "next/image";
// import useSWR from "swr";
// import fetch from "../libs/fetch";
import { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
  useMotionValue,
  useSpring,
  motionValue,
} from "framer-motion";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  const [y, setY] = useState(0);

  const { scrollY, scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 0.3,
  };

  scrollY.onChange((y) => {
    setY(y);
  });

  console.log(y);

  return (
    <div className="grid grid-flow-row">
      <div
        className={`flex w-screen h-screen justify-center items-center text-blue`}
      >
        <motion.h1
          className={`font-heading text-6xl`}
          style={{
            scale: scaleAnim,
            y: y <= 450 ? 220 : -230,
            position: y >= 450 ? "fixed" : "relative",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: y >= 2200 ? 0 : 1,
            transition: { delay: 1.2, ...transition },
          }}
        >
          Hey, I'm Kush Thakker
        </motion.h1>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: y >= 200 ? 0 : 1,
            y: -130,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <div className="flex justify-center items-center max-w-full">
            Scroll to see more
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 270 }}
          animate={{
            opacity: y >= 740 ? 0 : 1,
            y: 250,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <div className="flex justify-center items-center max-w-full">
            <p className="text-4xl w-1/2 font-body">
              I'm a front-end developer based in Ahmedabad, India. I grew up in
              Ahmedabad graduating with a degree in computer-science. I have a
              passion for design and web-development. I spend my free time
              watching football, formula 1 and designing things.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 480 }}
          animate={{
            opacity: y >= 1470 ? 0 : 1,
            y: 460,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <h1 className="font-heading text-4xl flex justify-center items-center mt-96 mb-96">
            My Skills
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 680 }}
          animate={{
            opacity: y >= 2180 ? 0 : 1,
            y: 660,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <h1 className="font-heading text-4xl flex justify-center items-center mt-96">
            Projects
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 780 }}
          animate={{
            opacity: 1,
            y: 760,
            transition: { delay: 1.2, ...transition },
          }}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="font-heading text-4xl flex justify-center items-center mt-96 tracking-wider mb-96">
            <RoughNotation
              type="box"
              show={y >= 2570 ? true : false}
              color="yellow"
            >
              I am open for work.
            </RoughNotation>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
