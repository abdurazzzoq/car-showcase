import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 flex flex-col text-black-100 mt-5 ">
      <div className="flex max-width w-full max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex justify-start flex-col items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="footer-logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className=" text-base text-gray-700">
            CarHub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        


        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className="text-gray-500 scroll-smooth"
                >{link.title}</Link>
              ))}
            </div>
          ))}
        </div>
        </div>

        <div className="flex max-width w-full justify-between items-center sm:px-16 px-3 py-4 border-gray-300 border-t flex-wrap mt-10 ">
<p> &copy;  CarHub 2023. All rights reserved  </p>

          <div className=" flex sm:justify-end justify-center sm:gap-10 gap-5">
            <Link href={'/'} className="text-gray-500">Privacy policy</Link>
            <Link href={'/'} className="text-gray-500">Terms of use</Link>

          </div>
        </div>
       
    </footer>
  );
};

export default Footer;
