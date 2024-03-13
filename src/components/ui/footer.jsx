import React from "react";
import { useTranslation } from "react-i18next";
import { navigationLinks, socialMedia, contacts } from "../../constants";
import { motion } from "framer-motion";

function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div className="bg-gradient-to-l from-[#57AAA9] to-[#356A7E] w-full h-400 h-[400px]  px-12 py-20 z-[500]">
      <div className="w-full flex justify-between items-center "> {/* logo / navigation / social media links */}
        <img src={"/src/assets/img/3-1-3.png"} alt="ProFM logo" />
         <div className="flex flex-row after:mx-20"> {/* navigationLinks */}
          {navigationLinks.map((nav) => (
            <a key={nav.id}
              className={`mx-2 text-white text-[18px] cursor-pointer${
                i18n.language == "ar"
                  ? "font-baysan font-light"
                  : "[font-family:'DG_Baysan-Light',Helvetica]"
              }`}
              href={`#${nav.id}`}
            >
              {t(nav.title)}
            </a>
          ))}
        </div>
        <div className="flex flex-row">
          {socialMedia.map((media) => (
            <a
              key={media.id}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/src/assets/img/${media.icon}`}
                alt={media.alter}
                className="w-6 h-6 mx-2"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-white mt-24 mb-8"></div>{/* line */}
      <div className="w-full flex justify-between items-center ">{/*  copyright / contacts */}
        <p className="text-sm text-white">
          {t("copyright")}
        </p>
        <div className="flex flex-row">
          {contacts.map((contact) => (
            <a
            key={contact.id}
              className={`flex flex-row mx-2 text-white  `}
              href={`#${contact.link}`}
            >
              <img
                src={`/src/assets/img/${contact.icon}`}
                alt={contact.alter}
                className={`w-6 h-6 ${i18n.language=="ar"? "ml-2" : "mr-2"}`}
              />
             <p> {i18n.language=="ar"? t(contact.arText) : t(contact.text)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
