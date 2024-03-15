import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import SectionWraper from "../../hocs/sectionWraper";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
function Stats() {
  const [counterOn, setCounterOn] = useState(false);
  const[t,i18n] =useTranslation();

  return (
    <section className=" w-full h-[200px] bg-[#e9f3f5] flex ">
      <div className="container flex justify-center items-center gap-[150px]">
        <div className="flex-col justify-center content-center [font-family:'DG_Baysan-Semibold',Helvetica] font-normal text-secondary text-[48px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
              +{counterOn&&<CountUp start={0} duration={4} end={20}/>}K <br />{" "}
              <span className=" flex gap-1 justify-end items-center  items-center[font-family:'DG_Baysan-Light',Helvetica] font-light text-[grey] text-[32px]  leading-[normal] ">
                <img alt="group" src="./group.svg"/>
                {t("stats.Clients")}
              </span>{" "}
            </ScrollTrigger>
          
        </div>
        <img alt="Line" src="./line-2.svg" />
        <div className=" [font-family:'DG_Baysan-Semibold',Helvetica] font-normal text-secondary text-[48px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
              +{counterOn&&<CountUp start={0} duration={4} end={15}/>}K <br />{" "}
              <span className=" gap-1 flex  items-center[font-family:'DG_Baysan-Light',Helvetica] font-light text-[grey] text-[32px]  leading-[normal] ">
                <img alt="star" src="./star.svg" />
                {t("stats.Ratings")}
              </span>{" "}
            </ScrollTrigger>
        
        </div>
        <img alt="Line" src="./line-2.svg" />
        <div className="[font-family:'DG_Baysan-Semibold',Helvetica] font-normal text-secondary text-[48px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
         
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
              +{counterOn&&<CountUp start={0} duration={4} end={90}/>}K <br />{" "}
              <span className=" gap-1 flex  items-center[font-family:'DG_Baysan-Light',Helvetica] font-light text-[grey] text-[32px]  leading-[normal] ">
                <img alt="check" src="./check.svg" />
                {t("stats.Transaction")}
              </span>{" "}
            </ScrollTrigger>
        
        </div>
      </div>
    </section>
  );
}

export default Stats;
