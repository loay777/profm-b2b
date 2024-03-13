import { useEffect, useState } from "react";
import { navigationLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { LuLanguages } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("ar")
      : i18n.changeLanguage("en");
  };

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
    <nav
      className={` w-full flex items-start py-7 fixed top-0 z-[100] ${
        scrolled ? " backdrop-filter backdrop-blur-sm bg-white/80" : "bg-transparent"
      }`}
    >
      <div
        className={`${
          i18n.language == "ar" ? "pr-[108px]" : "pl-[108px]"
        } w-full flex justify-between px-8 items-center max-w-full mx-auto cursor-pointer`}
      >
      <Link to={'/'}>
       <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="absolute w-40 h-40 object-contain m-b"
            
          />
        </div> 
          </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navigationLinks.map((nav) => (
            <motion.li
              whileHover={{ scale:1.1}}
              whileTap={{ scale: 0.9 }}
              key={nav.id}
              animate={{
                color:
                  active === nav.title ? "text-tertiary" : "text-secondary",
              }}
              transition={{ duration: 0.3 }}
              className={`${
                scrolled
                  ? active === nav.title
                    ? "text-[#528699] font-bold"
                    : "text-secondary"
                  : active === nav.title
                  ? "text-tertiary font-bold"
                  : "text-white"
              } text-[18px]  cursor-pointer`} 
              onClick={() => setActive(nav.title)}
            >
              <a className={`${i18n.language == "ar"?"font-baysan font-light":"[font-family:'DG_Baysan-Light',Helvetica]"}`} href={`#${nav.id}`}>{t(nav.title)}</a>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: active === nav.title ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
                className={`h-1 ${scrolled ? "bg-[#528699]":"bg-tertiary"}`}
              ></motion.div>
            </motion.li>
          ))}
          <div className="flex item-center justify-between items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className={`flex pl-2 pr-2 pt-[2px] pb-[2px] ${i18n.language == "ar"?"font-baysan font-light":"[font-family:'DG_Baysan-Light',Helvetica]"} items-center gap-1 rounded-full bg-transparent border-2 ${
                scrolled
                  ? "border-secondary text-secondary"
                  : "border-primary text-primary"
              }`}
              onClick={changeLanguage}
            >
              <LuLanguages size={16} /> {t("Language")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className={`flex pl-2 pr-2 pt-[2px] pb-[2px] rounded-full border-2  ${i18n.language == "ar"?"font-baysan font-light":"[font-family:'DG_Baysan-Light',Helvetica] "} ${
                scrolled
                  ? "border-secondary bg-secondary text-primary"
                  : " border-primary bg-primary text-secondary"
              }`}
            >
              {t("log_in")}
            </motion.button>
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navigationLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
