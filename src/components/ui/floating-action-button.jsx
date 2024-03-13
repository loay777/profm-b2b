import { useState } from "react";
import { motion } from "framer-motion";

function FloatingActionBtn() {
  const [actionBtn1Position, SetActionBtn1Position] = useState(2);
  const [actionBtn2Position, SetActionBtn2Position] = useState(2);

  const onHoverStart = () => {
    SetActionBtn1Position(-70);
    SetActionBtn2Position(-140);
  };
  const onHoverEnd = () => {
    SetActionBtn1Position(2);
    SetActionBtn2Position(2);
  };
  const onClick = () => {
    if (actionBtn1Position >= 2) {
      SetActionBtn1Position(-70);
      SetActionBtn2Position(-140);
 
    } else {
      SetActionBtn1Position(2);
      SetActionBtn2Position(2);
      
    }
  };
  return (
    <div className="relative " onMouseEnter={onHoverStart}>
      <motion.button
        id="main button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className=" bg-white hover:bg-tertiary text-white font-bold p-4 rounded-full shadow-xl relative z-10"
        // onHoverStart={onHoverStart}
        // onHoverEnd={onHoverEnd}
        onClick={onClick}
      >
        <img src="/src/assets/img/fab-main-icon.svg" alt="icon" />
      </motion.button>
      <motion.button
        id="whatsapp button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: actionBtn1Position }}
        transition={{ type: "spring", stiffness: 200 }}
        className={` z-5 bg-green-500 p-3 rounded-full absolute left-[12px]`}
      >
        <img
          src="/src/assets/img/whatsapp.png"
          alt="messanger"
          className="w-7 h-7"
        />
      </motion.button>
      <motion.button
        id="facebook button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: actionBtn2Position }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        className={` z-5 bg-gradient-to-b from-[#00B2FF] to-[#006AFF]  p-3 rounded-full absolute left-[12px]`}
      >
        <img
          src="/src/assets/img/messanger.png"
          alt="messanger"
          className="w-7 h-7"
        />
      </motion.button>
    
    </div>
  );
}

export default FloatingActionBtn;
