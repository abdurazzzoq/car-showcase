"use client";

import { manufacturers } from "@/constants";
import { searchProps } from "@/interface";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchManufacturer = ({ manufacturer, setManufacturer }: searchProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((data) =>
          data
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className={
              " w-full h-[48px] rounded-r-full max-sm:rounded-full text-sm pl-12 p-4 bg-light-white cursor-pointer outline-none"
            }
            placeholder="Volswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave=" transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } `
                  }
                  >
                  {({selected, active})=>(
                    <>
                    <span className={` block truncate ${selected? 'font-medium': 'font-normal'}`}>
                      {item}
                    </span>
                    {selected?(
                      <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? 'text-white': 'text-blue-500'}`}>

                      </span>
                    ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
