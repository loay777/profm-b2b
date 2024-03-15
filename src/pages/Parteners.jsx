import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React from "react";
import { partners } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import MyStyledText from "../components/ui/text";
import { useTranslation } from "react-i18next";



export const Partners = () => {
  const [t, i18n] = useTranslation();
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
];
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="m-10 "
  >
      <span className="hash-span" id={"sucess_partners"}>
        &nbsp;
      </span>
    <motion.h1
          variants={fadeIn("right", "spring", 0 * 0.5, 1)} 
        >
         <MyStyledText textType={'h1'} textStyle={` flex justify-center items-center text-secondary  md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] mb-6`} language={i18n.language} text={t("success partners")} />
        </motion.h1>
    <div className={'bg-primary w-full mr-10'}>
        <div className=''>
         <Slide autoplay={true} canSwipe={true} easing="ease" infinite={true}  slidesToShow={4}  duration={1500} responsive={responsiveSettings}> 
            {partners.map((partner, index) => (
              <Tilt key={index} className='flex justify-center items-center  lg:w-80 lg:h-80 bg-white shadow-xl p-4 m-8 rounded-lg '>
                <img className='h-auto w-auto inline max-w-full max-h-full' src={`./src/assets/partners/${partner.imageSrc}`} alt={partner.alter} />
              </Tilt>
            ))}
          </Slide>  
            
        </div>
    </div>
    </motion.section>
  )
    
};
