"use client";

import { CustomButtonProps } from "@/interface";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  handleClick,
  customStyle,
  title,
  buttonType,
  textStyle,rightIcon
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={buttonType || "button"}
      onClick={handleClick}
      className={`py-3 px-6 outline-none ${customStyle}`}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
