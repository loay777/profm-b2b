import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hocs/sectionWraper";
import { styles } from "../styles";
import { services } from "../constants/index";
import MyStyledText from "../components/ui/text";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, description, icon, color, language,link }) => {
  

  let titleArray = title.split(" ");
  let secondaryColorText = titleArray[titleArray.length - 1];
  let restOfThetext = titleArray.slice(0, -1).join(" ");

  return (
    <Link to={link} >
    <Tilt className=" w-[380px] h-full m-4">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full h-full p-[0px] rounded-[20px]  bg-[transparent]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-${color} hover:shadow-sm shadow-xl ${
            color === "secondary" ? "" : "hover:bg-tertiary"
          } w-full h-full rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-start flex-col`}
        >
          <img
            src={`./src/assets/img/${icon}`}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
         

          <h3
            className={`${
              color === "secondary" ? "text-white" : "text-black"
            } text-[20px] font-bold text-start mb-0 ${language == 'en'?"[font-family:'DG_Baysan-Light',Helvetica]": "font-baysan"}`}
          >
            {restOfThetext + " "}
            <span
              className={`${
                color === "secondary" ? "text-white" : "text-secondary"
              } mb-0 ${language == 'en'?"[font-family:'DG_Baysan-Light',Helvetica]": "font-baysan"}`}
            >
              {secondaryColorText}
            </span>
          </h3>
          <p
            className={`${
              color === "secondary" ? "text-white" : "text-black"
            } text-start   ${language == 'en'?"[font-family:'DG_Baysan-Light',Helvetica]": "font-baysan"}`}
          >
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
    </Link>
  );
};

function Services() {
  const [t, i18n] = useTranslation();
  return (
    <div className="bg-primary ">
      {/* <motion.h1
        variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
        className={`flex justify-center items-center ${styles.sectionHeadText} ${i18n.language == 'en'?"[font-family:'DG_Baysan-Light',Helvetica]": "font-baysan"}`}
      >
        {t(`services.section-title`)}
      </motion.h1> */}
      <motion.h1
          variants={fadeIn("right", "spring", 0 * 0.5, 0.75)} 
        >
         <MyStyledText textType={'h1'} textStyle={` ${styles.sectionHeadText} flex justify-center items-center text-primary  md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] mb-12`} language={i18n.language} text={t(`services.section-title`)} />
        </motion.h1>
      <div className="flex flex-wrap gap-[10px] mb-12">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            index={service.id}
            language={i18n.language}
            title={t(`services.${service.title}.title`)}
            description={t(`services.${service.title}.description`)}
            color={service.cardColor}
            icon={service.imageSrc}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Services, "services");
