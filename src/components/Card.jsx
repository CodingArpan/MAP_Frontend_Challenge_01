import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
// Card component
const Card = ({ index, tag, title, image, description, price }) => {
  return (
    <div className="relative w-60 md:w-72 lg:w-80 aspect-[4/5] rounded-lg overflow-hidden flex flex-col justify-center items-center snap-center group shadow-lg">
      <div className="absolute z-20 top-2 right-2 flex flex-row gap-2 p-2">
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-xl shadow-zinc-400 hover:transition-all hover:scale-110 cursor-pointer ">
          <IoShareSocial />
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-xl shadow-zinc-400 hover:transition-all hover:scale-110 cursor-pointer">
          <CiBookmark />
        </div>
      </div>

      <div className="relative w-60 md:w-72 lg:w-80  aspect-[4/5]">
        <div className="absolute -z-10 w-60 md:w-72 lg:w-80  aspect-[4/5] bg-center">
          <img
            className="group-hover:scale-110 transition-all duration-300 ease-in-out w-full  aspect-[4/5] object-cover"
            src={image}
            alt={`samplepic${index}`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 p-5 pt-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        {tag && (
          <p
            className={`text-gray-100 
            ${tag == "Recommended" ? "bg-indigo-600" : ""}
            ${tag == "Trending" ? "bg-rose-600" : ""}
            ${tag == "Ads" ? "bg-slate-200 text-gray-600" : ""}
              px-2 py-0.5 rounded-sm font-medium capitalize text-xs`}
          >
            {tag}
          </p>
        )}
        <p className="text-white text-sm font-bold">{title.slice(0, 25)}...</p>
        <p className="text-white text-xs">{description.slice(0, 60)}...</p>
        <p className="text-white/80 text-sm font-bold flex justify-center items-center">
          <FaIndianRupeeSign />
          <span className="block">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
