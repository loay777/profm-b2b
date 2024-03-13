import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import MyStyledText from "../components/ui/text";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const [t, i18n] = useTranslation();
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="m-10 "
    >
      <span className="hash-span" id={"contact"}>
        &nbsp;
      </span>

      <img
        className={` max-w-[830px]  absolute z-[0] ${i18n.language =="ar"?"transform -scale-x-100 right-0":"left-0"} `}
        src="/src/assets/img/contact.png"
        alt="contact us background"
      />

      <div className=" z-10 flex justify-center items-center w-full gap-20 ">
        <span className=" z-10 w-[641px]"> 
          <div className="flex flex-row justify-center items-center gap-3"> {/*Contact us -> */}
            <motion.h1 variants={i18n.language=="ar"? fadeIn("left", "spring", 1, 1):fadeIn("right", "spring", 1, 1)}>
              <MyStyledText
                textType={"h1"}
                textStyle={`z-10 flex justify-center items-center text-secondary  md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] mb-6`}
                language={i18n.language}
                text={t("contact.Contact us")}
              />
            </motion.h1>
            <div className={i18n.language== 'ar'?"transform -scale-x-100":""}>
            <motion.img 
              variants={fadeIn("right", "spring", 0.7, 1.5)} 
              src="/src/assets/img/frame-9.png" 
              alt="arrow right" 
              className={`w-[60%] mb-3 `} 
            />
            </div>
          </div>
          <motion.h1  variants={fadeIn("right", "spring", 1, 1.5)}> {/*call to action*/}
            <p
              className={`z-10 text-center ${
                i18n.language == "ar"
                  ? "font-baysan font-light"
                  : "[font-family:'DG_Baysan-Light',Helvetica] font-light"
              } text-gray text-[32px] tracking-[0] leading-[32px]`}
            >
              {t("contact.call for action1")}
              <br />{" "}
              <span
                className={` text-secondary ${
                  i18n.language == "ar"
                    ? "font-baysan font-light"
                    : "[font-family:'DG_Baysan-Light',Helvetica] font-light"
                }  text-[32px]`}
              >
                {i18n.language=="ar"?"8871 781 50 966+" :"+966 50 781 8871"}
              </span>{" "}
              {t("contact.call for action2")}
            </p>
          </motion.h1>
        </span>
        <motion.div 
          variants={fadeIn("up", "spring", 0.8 , 1.5)}
          className=" z-10 p-[20px, 40px, 20px, 40px] flex flex-col bg-secondary rounded-lg w-[700px] p-6 mt-8"
        >{/*Contact from */}
          <div className="flex flex-row mb-4 gap-4 w-full">
            <div className={`flex flex-col relative w-full`}>
              <label className="text-white mb-2" htmlFor="firstName">
                {t("contact.First Name")}
              </label>
              <div className="relative w-full">
                <img
                  src="/src/assets/img/person-icon.png"
                  alt="Person Icon"
                  className={`h-5 w-5 absolute ${ i18n.language == "ar"
                  ?"right-3":"left-3"} top-2`}
                />
                <input
                  type="text"
                  id="firstName"
                  className={`w-full ml-1 rounded-lg p-2 bg-primary text-black ${i18n.language=='ar'?'pr-8':'pl-8'}`}
                />
              </div>
            </div>
            <div className={`flex flex-col relative w-full`}>
              <label className="text-white mb-2" htmlFor="lastName">
                {t("contact.Last Name")}
              </label>
              <div className="relative w-full">
                <img
                  src="/src/assets/img/person-icon.png"
                  alt="Person Icon"
                  className={`h-5 w-5 absolute ${ i18n.language == "ar"
                  ?"right-3":"left-3"} top-2`}
                />
                <input
                  type="text"
                  id="lastName"
                  className={`w-full ml-1 rounded-lg p-2 bg-primary text-black ${i18n.language=='ar'?'pr-8':'pl-8'}`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row mb-4 gap-4 w-full">
            <div className="flex flex-col relative w-full">
              <label className="text-white mb-2" htmlFor="email">
                {t("contact.Email")}
              </label>
              <div className="relative">
                <img
                  src="/src/assets/img/email-icon.png"
                  alt="Email Icon"
                  className={`h-5 w-5 absolute ${ i18n.language == "ar"
                  ?"right-3":"left-3"} top-2`}
                />
                <input
                  type="email"
                  id="email"
                  className={`w-full ml-1 rounded-lg p-2 bg-primary text-black ${i18n.language=='ar'?'pr-8':'pl-8'}`}
                />
              </div>
            </div>
            <div className="flex flex-col relative w-full">
              <label className="text-white mb-2 w-full" htmlFor="phoneNumber">
                {t("contact.Phone Number")}
              </label>
              <div className="relative">
                <img
                  src="/src/assets/img/phone-icon.png"
                  alt="Phone Icon"
                  className={`h-5 w-5 absolute ${ i18n.language == "ar"
                  ?"right-3":"left-3"} top-2`}
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  className={`w-full ml-1 rounded-lg p-2 bg-primary text-black ${i18n.language=='ar'?'pr-8':'pl-8'}`}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2" htmlFor="topic">
              {t("contact.Choose Topic")}
            </label>
            <select
              id="topic"
              className="rounded-lg p-2 bg-primary text-gray-500 "

            >
              <option value="" disabled selected>
                {t("contact.Select One")}
              </option>
              <option value="topic1">{t("contact.Topic 1")}</option>
              <option value="topic2">{t("contact.Topic 2")}</option>
              <option value="topic3">{t("contact.Topic 3")}</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2" htmlFor="message">
              {t("contact.Message")}
            </label>
            <textarea
              id="message"
              rows="8"
              className="rounded-lg p-2 bg-primary text-black"
            ></textarea>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="terms" className="" />
            <label className="text-white" htmlFor="terms">
              {t("contact.I accept the terms")}
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-white rounded-full py-2 px-4 text-secondary">
              {t("contact.Submit")}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactUs;

