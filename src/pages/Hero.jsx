import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { vector1, vector2, vector3, vector4, techGuy } from "../assets";
import "@mantine/carousel/styles.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scope, animate] = useAnimate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto bg-white `} id="hero" >
      
      <div
        className={`absolute left-0 w-full h-full bg-white flex  overflow-hidden`}
      >
        <div className={`w-48`}>
          <img
            src={vector1}
            alt="vector1"
            className={
              i18n.language == "ar"
                ? ` absolute transform -scale-x-100 left-0 z-30  h-full`
                : `w-1/3 h-full lg:w-auto  absolute right-0 z-30`
            }
          />
          <img
            src={vector2}
            alt="vector1"
            className={
              i18n.language == "ar"
                ? ` absolute transform -scale-x-100 left-0 z-20 h-full`
                : `absolute h-full right-0 z-20 `
            }
          />
          <img
            src={vector3}
            alt="vector1"
            className={
              i18n.language == "ar"
                ? ` absolute transform -scale-x-100 left-0 z-10 h-full`
                : `absolute h-full right-0 z-10 `
            }
          />
          <img
            src={vector4}
            alt="vector1"
            className={
              i18n.language == "ar"
                ? ` absolute transform -scale-x-100 left-0 z-0  h-full`
                : `absolute h-full right-0 z-0 `
            }
          />
        </div>
        <div>
          <motion.img
            initial={{x:100 ,opacity: 0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.5,delay:0,ease: 'anticipate'}}
            src={techGuy}
            alt="technician"
            className={`absolute h-[850px]  -bottom-14  ${i18n.language == "ar"?"left-0":"right-0"} z-50`}
          />
        </div>
        <motion.div 
       
        initial={{x:-100, opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1.5 , delay:0,ease: 'anticipate' }}
        className={`inline-flex flex-col items-start gap-[24px] absolute ${i18n.language == "ar"?"right-28":"left-28"} top-96`}>
          <p className={`relative w-[606px] mt-[-1.00px] ${i18n.language == "ar"?"font-baysan font-light":"[font-family:'DG_Baysan-Light',Helvetica] font-light"} text-[#191b21] text-[48px] tracking-[0] leading-[60px]`}>
            {t("hero.title")}
          </p>
          <div className=" relative w-[632px] h-[128px] mr-[-2.00px]"><img 
              className= {`absolute w-[3px] h-[115px] top-[7px] ${i18n.language == "ar"? 'rigth-0':'left-0'}`}
              alt="Line"
              src="./line-3.svg"
            />
            <p className={`absolute w-[606px] top-0 ${i18n.language == "ar"? 'right-[24px]':'left-[24px]'} ${i18n.language == "ar"?"font-baysan font-light":"[font-family:'DG_Baysan-Light',Helvetica] font-light"} text-gray-dark text-[24px] tracking-[0] leading-[32px]`}>
              {t("hero.description")}
            </p></div>
        </motion.div>
      </div>

      {scrolled ? (
        <></>
      ) : (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 ">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                  opacity: [1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
