'use client';

import { useState, useRef } from 'react';

import Image from 'next/image';

// Css
import styles from './page.module.css';
import Link from 'next/link';

// Animations
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from 'react-snowfall';

const selections = [
  {
    name: 'About',
    value: 'about',
  },
  // {
  //   name: 'Projects',
  //   value: 'projects',
  // },
  {
    name: 'History',
    value: 'history',
  },
  {
    name: 'Contact',
    value: 'contact',
  },
];

export default function Page() {
  const [selected, setSelected] = useState(selections[0].value);
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-x-hidden bg-gradient-to-tr from-secondary to-primary"
      onMouseMove={(e) => {
        if (mainRef.current) {
          const el = mainRef.current;
          if (
            isMobileAndTouchscreen(true, true) ||
            isMobileAndTouchscreen(true, false)
          ) {
            el.animate(
              [
                {
                  transform: `translate(0px, 0px)`,
                },
              ],
              {
                duration: 1000,
                fill: 'forwards',
              }
            );
          } else if (!isMobileAndTouchscreen(true, false)) {
            el.animate(
              [
                {
                  transform: `translate(${(e.clientX - window.innerWidth / 2) * 0.05}px, ${(e.clientY - window.innerHeight / 2) * 0.05}px)`,
                },
              ],
              {
                duration: 1000,
                fill: 'forwards',
              }
            );
          }
        }
      }}
    >
      <Snowfall />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        className="pointer-events-none absolute left-0 top-0 z-40 h-full w-full bg-secondary"
      />
      <div className="pointer-events-auto absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black text-center opacity-100 sm:pointer-events-none sm:opacity-0">
        <h1 className="text-3xl">
          Please make sure your phone is in landscape mode
        </h1>
      </div>
      <div
        ref={mainRef}
        className={`${styles.main} h-full max-h-[36rem] w-full max-w-[66rem] drop-shadow-xl`}
      >
        <Box>
          <Image
            src="/me.jpg"
            alt="my picture"
            height={200}
            width={200}
            className="h-full w-full object-cover"
            priority
          />
        </Box>

        <Box>
          <div className="flex h-full w-full flex-col justify-evenly px-8">
            <h1 className="flex items-center text-2xl font-semibold md:text-4xl">
              Hey, I&apos;m Rayane Benamre,
            </h1>

            <h1 className="flex items-center text-2xl font-semibold md:text-4xl">
              A full stack web developer.
            </h1>
          </div>
        </Box>

        <Box>
          <div className="flex h-full w-full flex-col justify-evenly px-6">
            {selections.map((s, i) => (
              <h2
                key={i}
                className={`cursor-pointer select-none text-2xl underline decoration-transparent decoration-0 underline-offset-0 transition-all hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-4 ${
                  s.value === selected
                    ? 'underline decoration-white decoration-2 underline-offset-2'
                    : ''
                }`}
                onClick={() => setSelected(s.value)}
              >
                {s.name}
              </h2>
            ))}
          </div>
        </Box>

        <Box>
          <AnimatePresence>
            {(() => {
              switch (selected) {
                case 'about':
                  return (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full justify-center px-8 py-6 lg:flex lg:flex-col"
                    >
                      <h2 className="mb-4 text-2xl font-medium underline">
                        Introduction
                      </h2>
                      <p className="text-xl leading-relaxed">
                        Hey! I&apos;m Rayane Benamre, a full stack web developer
                        based in Morocco who loves building awesome web
                        applications. I have experience with the MERN stack,
                        Next.js, Svelte, and a bunch of other cool technologies.
                        Excited to meet you!
                      </p>
                    </motion.div>
                  );
                // case 'projects':
                //   return (
                //     <motion.div
                //       key="projects"
                //       initial={{ opacity: 0 }}
                //       animate={{ opacity: 1 }}
                //       exit={{ opacity: 0 }}
                //       className="flex h-full w-full flex-col justify-center px-8 py-6"
                //     >
                //       <h2 className="mb-4 text-2xl font-medium underline">
                //         Projects
                //       </h2>
                //       <div className="grid grid-cols-3 items-center gap-4">
                //         <Project name="Project 1" link="/" imgSrc="/me.jpg" />
                //         <Project name="Project 2" link="/" imgSrc="/me.jpg" />
                //         <Project name="Project 3" link="/" imgSrc="/me.jpg" />
                //       </div>
                //     </motion.div>
                //   );
                case 'history':
                  return (
                    <motion.div
                      key="history"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full w-full px-8 py-6"
                    >
                      <h2 className="mb-4 text-2xl font-medium underline">
                        History
                      </h2>
                      <Job
                        title="Inquisition"
                        from="Apr 2024"
                        to="Present"
                        tasks={[
                          'Worked with the team on building the landing page',
                          'Currently working on developing the platform',
                        ]}
                      />
                      <Job
                        title="Devtranet"
                        from="Feb 2024"
                        to="Apr 2024"
                        tasks={[
                          'Worked on improving the performance of the website',
                          'Worked with the team on implementing dark mode functionality',
                          'Worked on implementing page metadata around the website',
                          'Fixed various issues around the website',
                          'Implemented client-side notification functionality alongside the team',
                          "Migrated the website from NextJS' Pages Router to the App Router",
                        ]}
                      />
                      <Job
                        title="TechOptimum"
                        from="Jul 2023"
                        to="October 2023"
                        tasks={[
                          'Worked as a volunteer software engineer, eventually promoted as a software engineering director',
                          "Migrated the website from NextJS' Pages Router to the App Router",
                          'Fixed various issues around the website',
                          'Led the development of an internal tool',
                        ]}
                      />
                    </motion.div>
                  );
                case 'contact':
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key="contact"
                      className="h-full w-full flex-col items-center justify-center px-8 py-6 lg:flex"
                    >
                      <h2 className="mb-8 text-center text-3xl font-medium underline">
                        Where you can find me
                      </h2>
                      <div className="inline-flex w-full flex-wrap justify-center gap-2">
                        <Social
                          link="https://x.com/toastdevv"
                          name="X"
                          img="/twitter-x.svg"
                        />
                        <Social
                          link="https://mastodon.social/@rayaneb"
                          name="Mastodon"
                          img="/mastodon.svg"
                        />
                        <Social
                          link="https://www.freelancer.com/u/toastdevv"
                          name="Freelancer"
                          img="/freelancer.svg"
                        />
                        <Social
                          link="https://stackoverflow.com/users/19302208/rayane-benamre"
                          name="StackOverflow"
                          img="/stackoverflow.svg"
                        />
                      </div>
                    </motion.div>
                  );
                default:
                  return <></>;
              }
            })()}
          </AnimatePresence>
        </Box>
      </div>
    </div>
  );
}

function isMobileAndTouchscreen(mobile: boolean, touchscreen: boolean) {
  const isTouchScreen =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobile = window.matchMedia('(max-width: 1000px)').matches;

  return (touchscreen ? isTouchScreen : true) && (mobile ? isMobile : true);
}

function Social({
  link,
  name,
  img,
}: {
  link: string;
  name: string;
  img: string;
}) {
  return (
    <Link
      rel="me noopener noreferrer"
      href={link}
      target="_blank"
      className="flex aspect-square flex-col items-center justify-center gap-2 p-2 transition hover:scale-105"
    >
      <Image
        src={img}
        alt={name}
        height={76}
        width={76}
        className="aspect-square object-contain"
      />
      <h3 className="text-xl">{name}</h3>
    </Link>
  );
}

function Job({
  title,
  from,
  to,
  tasks,
}: {
  title: string;
  from: string;
  to: string;
  tasks: string[];
}) {
  return (
    <>
      <h3 className="mb-2 mt-4 text-xl leading-relaxed">
        {title} • ({from} - {to})
      </h3>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className="ml-4">
            - {task}
          </li>
        ))}
      </ul>
    </>
  );
}

function Project({
  name,
  link,
  imgSrc,
}: {
  name: string;
  link: string;
  imgSrc: string;
}) {
  return (
    <Link
      href={link}
      className="relative aspect-video w-full border-4 border-secondary bg-white"
    >
      <Image
        src={imgSrc}
        height={100}
        width={200}
        alt={name}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gray-500/70">
        <h2 className="text-xl">{name}</h2>
      </div>
    </Link>
  );
}

function Box({ children }: { children?: React.ReactNode }) {
  return (
    <div className="overflow-y-auto overflow-x-hidden border-4 border-secondary bg-bg">
      {children}
    </div>
  );
}
