import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
import { Carousel } from '@mantine/carousel';
import { styles } from "../styles";
import '@mantine/carousel/styles.css';

// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-tl from-primary to-tertiary to-tertiary`}>

       
      <div
        className={`absolute inset-0 top-[100px]  w-full `}
      >
        <img
          src='/src/assets/Home.jpeg'
          alt='Description of your image'
          className='w-full max-h-full opacity-80 '
        />
     
      </div>

    

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
