import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
// import useSWR from "swr";
// import fetch from "../libs/fetch";
// import ReactRough, { Rectangle } from "react-rough";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  motion,
  useTransform,
  useViewportScroll,
  useAnimation,
  useMotionValue,
  useSpring,
  motionValue,
} from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ManageMode from "../components/ManageMode.js";

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

export default function Home() {
  const { getTheme, theme } = ManageMode();
  const [y, setY] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const dimensions = useWindowDimensions();
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const yRange = useTransform(scrollYProgress, [0, 1.3], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 120 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
    delay: 0.3,
  };

  scrollY.onChange((y) => {
    setY(y);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Kush Thakker</title>
        <meta name="description" content="Kush Thakker's personal website" />
        <meta
          name="keywords"
          content="kush, thakker, personal, website, kush thakker"
        />
        <meta property="og:title" content="Kush Thakker" key="title" />
        <meta
          property="og:description"
          content="Kush Thakker's personal website"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/x1ykPjY/main-preview.png"
        />
        <meta property="og:url" content="https://kushthakker.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Kush Thakker | Front-end Web Developer"
        />
        <meta
          property="twitter:description"
          content="Hey, I'm a front-end developer. Checkout my website to learn more about me and my work."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/x1ykPjY/main-preview.png"
        />
        <meta property="twitter:url" content="https://kushthakker.com" />
      </Head>
      <div className="fixed top-52 left-12 w-12 sm:block hidden">
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke={getTheme === "dark" ? "white" : "black"}
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke={getTheme === "dark" ? "white" : "black"}
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
      <div className="grid grid-flow-row sm:max-w-11/12 max-w-screen-sm box-border">
        <div
          className={`flex w-screen h-screen justify-center items-center text-blue font-heading sm:text-6xl text-3xl relative -top-16`}
        >
          <motion.div
            style={{
              scale: scaleAnim,
              y: y <= 450 ? 220 : -230,
              position:
                dimensions.width > 600
                  ? y >= 455
                    ? "fixed"
                    : "relative"
                  : "relative",
              zIndex: "50",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: y >= 4400 ? 0 : 1,
              transition: { delay: 0.5, ...transition },
            }}
          >
            Hey, I'm Kush Thakker
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            animate={{
              opacity: y >= 10 ? 0 : 1,
              y: -140,
              transition: { delay: 0.2, ...transition },
            }}
          >
            <div className="flex place-items-center w-screen flex-col mx-auto">
              <div>Scroll to see more</div>
              <div className="animate-bounce mt-1">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 270 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 900 : 955) ? 0 : 1,
              y: 250,
              transition: { delay: 0.3, ...transition },
            }}
          >
            <div className="flex justify-center items-center sm:max-w-full max-w-screen-sm mx-auto">
              <p className="sm:text-4xl text-3xl sm:w-3/5 w-full font-new px-8 text-center leading-10">
                I'm a front-end developer. I grew up in Ahmedabad, graduating
                with a degree in Computer Science. I have a strong passion for
                design and web development. I spend my free time watching
                football, formula 1, and designing random stuff.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 410 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 1494 : 1790) ? 0 : 1,
              y: 400,
              transition: { delay: 0.3, ...transition },
            }}
          >
            <div className="flex justify-center items-center sm:mt-60 mt-40 mb-60 w-screen">
              <h1 className="font-heading text-4xl">My Skills</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 390 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 1850 : 2055) ? 0 : 1,
              y: 380,
              transition: { delay: 0.3, ...transition },
            }}
          >
            <div className="mt-16 w-screen text-center">
              <RoughNotationGroup
                show={
                  y >= (dimensions.width > 600 ? 1620 : 1830) ? true : false
                }
              >
                <div className="grid grid-cols-3 gap-3 h-96 sm:w-2/3 w-full mx-auto justify-center content-center px-5">
                  <div>
                    <div className="grid col-span-1 col-start-1">
                      <div className="grid grid-flow-row gap-8 text-2xl items-center justify-self-center">
                        <h1 className="font-body text-4xl mb-8">Languages</h1>
                        <RoughNotation type="circle" order="3">
                          <h3>HTML</h3>
                        </RoughNotation>
                        <RoughNotation type="box" order="2">
                          <h3>CSS</h3>
                        </RoughNotation>
                        <RoughNotation type="underline" order="1">
                          <h3>Javascript</h3>
                        </RoughNotation>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid col-span-1 col-start-2">
                      <div className="grid grid-flow-row gap-8 text-2xl justify-self-center">
                        <h1 className="font-body text-4xl mb-8">Library</h1>
                        <RoughNotation type="underline" order="1">
                          <h3>React</h3>
                        </RoughNotation>
                        <RoughNotation type="underline" order="1">
                          <h3>Redux</h3>
                        </RoughNotation>
                        <RoughNotation type="box" order="2">
                          <h3>Tailwind css</h3>
                        </RoughNotation>
                        <RoughNotation type="underline" order="1">
                          <h3>React Query</h3>
                        </RoughNotation>
                        <RoughNotation type="underline" order="1">
                          <h3>Framer Motion</h3>
                        </RoughNotation>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid col-span-1 col-start-3">
                      <div className="grid grid-flow-row gap-8 text-2xl justify-self-center">
                        <h1 className="font-body text-4xl mb-8">Framework</h1>
                        <RoughNotation type="underline" order="1">
                          <h3>Next Js</h3>
                        </RoughNotation>
                      </div>
                    </div>
                  </div>
                </div>
              </RoughNotationGroup>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 640 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 2420 : 2715) ? 0 : 1,
              y: 630,
              transition: { delay: 0.3, ...transition },
            }}
          >
            <h1 className="font-heading text-4xl flex justify-center items-center mt-50">
              Projects
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 840 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 2800 : 3030) ? 0 : 1,
              y: 850,
              transition: transition,
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-lg max-h-lg justify-center mt-50 mx-auto">
              <div className="w-full flex justify-between items-center px-4">
                <div>01/03</div>
                <div className="text-xs uppercase w-40 text-right">
                  React, Chakra UI, Redux, Magic Link
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src="/img/gamify.png"
                  width="700"
                  height="500"
                  alt="gamify"
                  layout="responsive"
                />
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl px-8">
                <div className="flex justify-start w-full items-center">
                  <a target="_blank" href="https://gamify-phi.vercel.app/">
                    Gamify
                  </a>
                </div>
                <a target="_blank" href="https://gamify-dev.vercel.app/">
                  <div className="flex justify-end w-full items-center -rotate-45 relative top-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 990 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 3500 : 3635) ? 0 : 1,
              y: 1000,
              transition: transition,
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-lg max-h-lg justify-center mt-50 mx-auto">
              <div className="w-full flex justify-between items-center px-4">
                <div>02/03</div>
                <div className="text-xs uppercase w-40 text-right">
                  Vanila JS
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src="/img/forkify.png"
                  width="700"
                  height="500"
                  alt="forkify"
                  layout="responsive"
                />
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl px-8">
                <div className="flex justify-start w-full items-center ">
                  <a target="_blank" href="https://kushsforkify.netlify.app/">
                    Forkify
                  </a>
                </div>
                <a target="_blank" href="https://kushsforkify.netlify.app/">
                  <div className="flex justify-end w-full items-center -rotate-45 relative top-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 1100 }}
            animate={{
              opacity: y >= (dimensions.width > 600 ? 4190 : 4225) ? 0 : 1,
              y: 1150,
              transition: transition,
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-lg max-h-lg justify-center mt-50 mx-auto">
              <div className="w-full flex justify-between items-center px-4">
                <div>03/03</div>
                <div className="text-xs uppercase w-40 text-right">
                  Vanila JS, Mapbox Api
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src="/img/mapty.png"
                  width="700"
                  height="500"
                  alt="mapty"
                  layout="responsive"
                />
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl px-8">
                <div className="flex justify-start w-full items-center">
                  <a target="_blank" href="https://maptybykush.netlify.app/">
                    Mapty
                  </a>
                </div>
                <a target="_blank" href="https://maptybykush.netlify.app/">
                  <div className="flex justify-end w-full items-center -rotate-45 relative top-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 890 }}
            animate={{
              opacity: 1,
              y: 1100,
              transition: { delay: 1, ...transition },
            }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="font-heading text-4xl flex justify-center items-center mt-60 tracking-wider mb-96 text-blue-600 relative">
              <RoughNotation
                type="highlight"
                show={y >= 4420 ? true : false}
                color="yellow"
              >
                I am open for work.
              </RoughNotation>
            </h1>
          </motion.div>
        </div>
      </div>
      <motion.button
        onClick={() => scrollToTop()}
        className={`sm:fixed sm:top-52 hidden sm:right-12 w-16 border border-black dark:border-white px-4 py-2 sm:flex flex-col rounded justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-4`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: y >= 300 ? 1 : 0,
          transition: transition,
        }}
      >
        <div>scroll</div>
        <div>to</div>
        <div>top</div>
      </motion.button>
    </>
  );
}
