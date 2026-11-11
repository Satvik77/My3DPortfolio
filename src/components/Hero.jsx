import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <div>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className='text-[#915EFF]'>Satvik Sharma</span>
  </h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    Technical Product Builder & Solutions Engineer <br className='sm:block hidden' />
    shipping 0-to-1 AI products, PRDs & scalable automations ($2M+ ROI).
  </p>
  <div className='mt-5 flex flex-wrap gap-4 relative z-10'>
    <a
      href='/https://drive.google.com/file/d/1thuUodif-ub-5WNcsOJ0HQ1K1EK1A6lT/view?usp=sharing'
      download='APM-Satvik_Sharma.pdf'
      className='bg-[#915EFF] hover:bg-[#7c4dff] text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition duration-300'
    >
      Download CV
    </a>
    <a
      href='https://www.linkedin.com/in/satvik-sharma-7561b81b5/' 
      target='_blank'
      rel='noreferrer'
      className='bg-tertiary hover:bg-black-100 text-white font-semibold py-2.5 px-6 rounded-xl border border-[#915EFF] transition duration-300'
    >
      LinkedIn
    </a>
  </div>
</div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
