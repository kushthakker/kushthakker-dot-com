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

export default function Home() {
  const [ffLayer, setFfLayer] = useState(0);
  const [y, setY] = useState(0);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);
  const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);
  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 0.3,
  };

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls1, inView1, controls2, inView2, controls3, inView3]);

  // console.log(`scrollYProgress`, scrollYProgress);
  scrollYProgress.onChange((x) => {
    setFfLayer(x > 0.4 ? -1 : 0);
  });

  scrollY.onChange((y) => {
    setY(y);
  });

  console.log(y);
  // use swr

  // const { data, error } = useSWR(url, fetch);

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Fragment>
      <div
        className={`flex w-screen h-screen justify-center items-center text-blue`}
      >
        <motion.h1
          className={`font-heading text-6xl`}
          style={{
            // scale: scaleAnim,
            y: y <= 450 ? 220 : -230,
            position: y >= 450 ? "fixed" : "relative",
          }}
        >
          Hey, I'm Kush Thakker
        </motion.h1>
      </div>
      <motion.div
        ref={ref1}
        animate={controls1}
        initial="hidden"
        transition={transition}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={y >= 800 ? { display: "none" } : null}
      >
        <h2 className="font-heading text-4xl flex justify-center items-center mt-96 mb-96">
          About me
        </h2>
        <p></p>
      </motion.div>
      <motion.div
        ref={ref2}
        animate={controls2}
        initial="hidden"
        transition={transition}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={y >= 900 ? { display: "none" } : null}
      >
        <h1 className="font-heading text-4xl flex justify-center items-center mt-96 mb-96">
          My Skills
        </h1>
      </motion.div>
      <motion.div
        ref={ref3}
        animate={controls3}
        initial="hidden"
        transition={transition}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={y >= 1200 ? { display: "none" } : null}
      >
        <h1 className="font-heading text-4xl flex justify-center items-center mt-96">
          Projects
        </h1>
      </motion.div>
    </Fragment>
  );
}
