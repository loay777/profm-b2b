import React from "react";

function MyStyledText({textType, textStyle, language, text }) {
  if (textType == "p") {
    return (
      <p
        className={`${
          language == "en"
            ? "[font-family:'DG_Baysan-Light',Helvetica]"
            : "font-baysan"
        }  ${textStyle}`}
      >
        {text}
      </p>
    );
  }else if (textType == "h1"){
    return (
        <h1
          className={`${
            language == "en"
              ? "font-bold [font-family:'DG_Baysan-Light',Helvetica]"
              : "font-baysan"
          } ${textStyle}`}
        >
          {text}
        </h1>
      );
  }else if (textType == "h2"){
    return (
        <h2
          className={`${
            language == "en"
              ? "[font-family:'DG_Baysan-Light',Helvetica]"
              : "font-baysan"
          } ${textStyle}`}
        >
          {text}
        </h2>
      );
  }else if (textType == "h3"){
    return (
        <h3
          className={`${
            language == "en"
              ? "[font-family:'DG_Baysan-Light',Helvetica]"
              : "font-baysan"
          } ${textStyle}`}
        >
          {text}
        </h3>
      );
  }
}

export default MyStyledText;
