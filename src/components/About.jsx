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
       <b> Welcome to my SDE Fresher Portfolio !</b><br />
       <br />
Hello! I'm Satvik Sharma, an aspiring Software Development Engineer (SDE) with a passion for coding and problem-solving. This portfolio is a brief glimpse into my skills, projects, and achievements as I step into the exciting world of software development.

Throughout my academic journey, I've honed my proficiency in HTML, CSS, JavaScript, C++, Python, Java, DSA, Oops, DBMS(MySQL) . <br />I love exploring web development, machine learning and have completed several projects that showcase my ability to design and implement innovative solutions.

As a quick learner and an enthusiastic team player, I'm eager to contribute my skills and embrace new challenges. This portfolio represents a snapshot of my potential and determination to make a meaningful impact in the tech industry.

Thank you for visiting my portfolio, and I'm looking forward to new opportunities to grow and thrive as an SDE.
<br /><br />
<i>Satvik Sharma</i><br />
<b>SDE Fresher | Aspiring Technologist</b>

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