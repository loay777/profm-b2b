import React from "react";
import { fadeIn,zoomIn, staggerContainer } from "../utils/motion";
import SectionWrapper from "../hocs/sectionWraper";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
import MyStyledText  from "../components/ui/text";

function Management() {
  const [t, i18n] = useTranslation();
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="hash-span" id={"managers"}>
        &nbsp;
      </span>
      <div className="h-[100vh] bg-secondary px-28 py-10">
        <motion.h1
          variants={fadeIn("right", "spring", 0 * 0.5, 1)} 
        >
         <MyStyledText textType={'h1'} textStyle={` flex justify-center items-center text-primary  md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] mb-6`} language={i18n.language} text={t(`management.section-title`)} />
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center">
          <motion.div variants={fadeIn("left","spring", 0.5,1.5)} className="flex flex-col items-center justify-center w-[80%]">
            <img
              className=" w-80 lg:w-[100%]"
              src="./src/assets/img/management-card.svg"
              alt="Management Image"
            />
            <MyStyledText textType={'h2'} textStyle={`flex justify-center items-center text-primary md:text-[37px] sm:text-[30px] xs:text-[20px] text-[10px] font-bold m-0`} language={i18n.language} text={t('management.manager1-name')}/>
            <MyStyledText textType={'h3'} textStyle={`flex justify-center items-center text-primary md:text-[30px] sm:text-[20px] xs:text-[10px] text-[10px] m-0 font-light`} language={i18n.language} text={t('management.manager1-position')}/>
            <MyStyledText textType={'p'} textStyle={`flex justify-center items-center text-center text-primary md:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] font-light  m-2 `} language={i18n.language} text={t('management.manager1-quote')}/>
            
          </motion.div>
          <motion.div variants={fadeIn("up","spring", 1.5,1.5)} className="flex flex-col items-center justify-center w-[80%] mt-14">
            <img
              className=" w-80 lg:w-[100%]"
              src="./src/assets/img/manager2.png"
              alt="Management Image"
            />
            <MyStyledText textType={'h2'} textStyle={`flex justify-center items-center text-primary md:text-[37px] sm:text-[30px] xs:text-[20px] text-[10px] font-bold m-0`} language={i18n.language} text={t('management.manager2-name')}/>
            <MyStyledText textType={'h3'} textStyle={`flex justify-center items-center text-primary md:text-[30px] sm:text-[20px] xs:text-[10px] text-[10px] font-light m-0`} language={i18n.language} text={t('management.manager2-position')}/>
            <MyStyledText textType={'p'} textStyle={`flex justify-center items-center  text-center text-primary md:text-[20px] sm:text-[15px] xs:text-[15px] text-[15px] font-light  m-2 `} language={i18n.language} text={t('management.manager2-quote')}/>
            
          </motion.div>
          <motion.div variants={fadeIn("right","spring", 1,1.5)} className="flex flex-col items-center justify-center w-[80%]">
            <img
              className=" w-80 lg:w-[100%]"
              src="./src/assets/img/manager3.svg"
              alt="Management Image"
            />
            <MyStyledText textType={'h2'} textStyle={`flex justify-center items-center text-primary md:text-[37px] sm:text-[30px] xs:text-[20px] text-[10px] font-bold m-0`} language={i18n.language} text={t('management.manager3-name')}/>
            <MyStyledText textType={'h3'} textStyle={`flex justify-center items-center  font-thin text-primary md:text-[30px] sm:text-[20px] xs:text-[10px] text-[10px] font-light m-0`} language={i18n.language} text={t('management.manager3-position')}/>
            <MyStyledText textType={'p'} textStyle={`flex text-center justify-center items-center text-primary md:text-[20px] sm:text-[15px] xs:text-[15px] text-[125px] font-light  m-2 `} language={i18n.language} text={t('management.manager3-quote')}/>
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Management;
