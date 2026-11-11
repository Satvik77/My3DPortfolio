import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  Entrepreneurial Technical Product Builder and Solutions Engineer with 3+ years of experience
  guiding products from conception to launch across 18 Alphabet/Google lines of business (gTech,
  YouTube, gCloud, and Developer Support). Proven track record translating ambiguous user problems
  into prototype-backed PRDs, data-informed roadmaps, and 0-to-1 production tools utilizing
  Applied AI (Gemini API, LLMs/SLMs, Agentic Workflows, MCP), Python, JavaScript, and
  BigQuery/GoogleSQL. Delivered 50+ scaled solutions driving $2M+ in validated business value,
  coached 200+ regional team members through technical AI enablement workshops, and bridged
  Engineering, UX, Sales, and Operations to deliver user-centric enterprise platforms. Holds a
  B.Tech in Computer Science & Engineering (CGPA: 8.55/10) from Rajasthan Technical University, Kota,
  alongside verified Google Cloud and IIT Madras NPTEL credentials in Deep Learning & DBMS.
</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
