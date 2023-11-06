"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter()

  // search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


      if (manufacturer.trim() === "" && model.trim() === "") {
        return  alert('please fill the form')
      }
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    };

    const updateSearchParams=(model:string, manufacturer:string)=>{
      const searchParams = new URLSearchParams(window.location.search)

      if(model){
        searchParams.set('model', model)
      }
      else{
        searchParams.delete('model')
      } 

      if(manufacturer){
        searchParams.set('manufacturer', manufacturer)
      }
      else{
        searchParams.delete('manufacturer')
      }
      const pathName = `${window.location.pathname}?${searchParams.toString()}`
 
      router.push(pathName)

    }


  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src={"/magnifying-glass.svg"}
        alt="search icon"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden absolute right-2" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className=" w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden absolute right-2" />
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  );
};

export default SearchBar;
