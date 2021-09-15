import Head from "next/head";
import Image from "next/image";
// import useSWR from "swr";
// import fetch from "../libs/fetch";
// import ReactRough, { Rectangle } from "react-rough";
import { useState, useEffect, useRef } from "react";
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

export default function Home() {
  const [y, setY] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const { scrollY, scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const yRange = useTransform(scrollYProgress, [0, 1.22], [0, 1]);
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

  console.log(y);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed top-52 left-12 w-12">
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
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
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
      <div className="grid grid-flow-row">
        <div
          className={`flex w-screen h-screen justify-center items-center text-blue`}
        >
          <motion.div
            className={`font-heading text-6xl`}
            style={{
              scale: scaleAnim,
              y: y <= 450 ? 220 : -230,
              position: y >= 455 ? "fixed" : "relative",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: y >= 4540 ? 0 : 1,
              transition: { delay: 1.2, ...transition },
            }}
          >
            Hey, I'm Kush Thakker
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -110 }}
            animate={{
              opacity: y >= 10 ? 0 : 1,
              y: -120,
              transition: { delay: 1, ...transition },
            }}
          >
            <div className="flex justify-center items-center max-w-full flex-col">
              <div>Scroll to see more</div>
              <div className="animate-bounce mt-1">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 270 }}
            animate={{
              opacity: y >= 860 ? 0 : 1,
              y: 250,
              transition: { delay: 1, ...transition },
            }}
          >
            <div className="flex justify-center items-center max-w-full">
              <p className="text-4xl w-1/2 font-body">
                I'm a front-end developer based in Ahmedabad. I grew up in this
                town, graduating with a degree in Computer Science. I have a
                passion for design and web development. I spend my free time
                watching football, formula 1, and designing things.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 480 }}
            animate={{
              opacity: y >= 1494 ? 0 : 1,
              y: 460,
              transition: { delay: 1.2, ...transition },
            }}
          >
            <div className="flex justify-center items-center mt-60 mb-96 w-screen">
              <h1 className="font-heading text-4xl">My Skills</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 390 }}
            animate={{
              opacity: y >= 1885 ? 0 : 1,
              y: 380,
              transition: { delay: 1.2, ...transition },
            }}
          >
            <div className="mt-16 w-screen text-center">
              <RoughNotationGroup show={y >= 1680 ? true : false}>
                <div className="grid grid-cols-3 gap-3 h-96 w-2/3 mx-auto justify-center content-center">
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
              opacity: y >= 2494 ? 0 : 1,
              y: 630,
              transition: { delay: 1, ...transition },
            }}
          >
            <h1 className="font-heading text-4xl flex justify-center items-center mt-50">
              Projects
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 840 }}
            animate={{
              opacity: y >= 2820 ? 0 : 1,
              y: 850,
              transition: { delay: 0.5, ...transition },
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-sm max-h-lg justify-center mt-50 mx-auto">
              <div>01/03</div>
              <div className="mt-4">
                <a target="_blank" href="https://gamify-dev.vercel.app/">
                  <Image
                    src="https://source.unsplash.com/random"
                    width="200"
                    height="200"
                    alt="ramdom"
                    layout="responsive"
                  />
                </a>
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl">
                <div className="flex justify-start w-full items-center">
                  <a target="_blank" href="https://gamify-dev.vercel.app/">
                    Gamify
                  </a>
                </div>
                <div className="flex justify-end w-full items-center -rotate-45 relative top-14 left-4">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 980 }}
            animate={{
              opacity: y >= 3490 ? 0 : 1,
              y: 990,
              transition: { delay: 0.5, ...transition },
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-sm max-h-lg justify-center mt-50 mx-auto">
              <div>02/03</div>
              <div className="mt-4">
                <a target="_blank" href="https://gamify-dev.vercel.app/">
                  <Image
                    src="https://source.unsplash.com/random"
                    width="200"
                    height="200"
                    alt="ramdom"
                    layout="responsive"
                  />
                </a>
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl">
                <div className="flex justify-start w-full items-center">
                  <a target="_blank" href="https://gamify-dev.vercel.app/">
                    Forkify
                  </a>
                </div>
                <div className="flex justify-end w-full items-center -rotate-45 relative top-14 left-4">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 1130 }}
            animate={{
              opacity: y >= 4175 ? 0 : 1,
              y: 1120,
              transition: { delay: 0.5, ...transition },
              width: "content-fit",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col my-4 max-w-sm max-h-lg justify-center mt-50 mx-auto">
              <div>03/03</div>
              <div className="mt-4">
                <a target="_blank" href="https://gamify-dev.vercel.app/">
                  <Image
                    src="https://source.unsplash.com/random"
                    width="200"
                    height="200"
                    alt="ramdom"
                    layout="responsive"
                  />
                </a>
              </div>
              <div className="flex border-dashed border-t-2 border-b-2 border-black dark:border-white p-4 mt-14 uppercase text-body text-xl">
                <div className="flex justify-start w-full items-center">
                  <a target="_blank" href="https://gamify-dev.vercel.app/">
                    Mapty
                  </a>
                </div>
                <div className="flex justify-end w-full items-center -rotate-45 relative top-14 left-4">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 890 }}
            animate={{
              opacity: 1,
              y: 900,
              transition: { delay: 1, ...transition },
            }}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="font-heading text-4xl flex justify-center items-center mt-96 tracking-wider mb-96 text-blue-600">
              <RoughNotation
                type="highlight"
                show={y >= 4650 ? true : false}
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
        className={`fixed top-52 right-12 w-16 border px-4 py-2 flex flex-col rounded justify-center items-center`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: y >= 300 ? 1 : 0,
          transition: { delay: 1.2, ...transition },
        }}
      >
        <div>scroll</div>
        <div>to</div>
        <div>top</div>
      </motion.button>
    </>
  );
}
