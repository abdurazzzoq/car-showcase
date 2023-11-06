import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className="flex justify-between max-w-[1440px] mx-auto items-center sm:px-16 px-6 py-4">
        
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain "
          />
        </Link>

        <CustomButton
          title="Sign In"
          buttonType="submit"
          customStyle="text-primary-blue rounded-full bg-white min-w-[130px] xl:border-none outline-none border-blue-500 border-2"
        />
      </nav>
    </header>
  );
};

export default Navbar;
