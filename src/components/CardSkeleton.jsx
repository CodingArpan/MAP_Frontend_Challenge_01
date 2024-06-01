import React from "react";
// Skeleton loader for the card component
const CardSkeleton = () => {
  return (
    <div className="relative animate-pulse w-64 h-96 rounded-lg overflow-hidden flex flex-col justify-center items-center snap-center group bg-gray-300">
      <div className="absolute z-20 top-2 right-2 flex flex-row gap-2 p-2">
        <div className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center  "></div>
        <div className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center "></div>
      </div>

      <div className="relative w-full max-w-80 h-96">
        <div className="absolute -z-10 w-80 h-96 bg-center"></div>
      </div>
      <div className="relative w-full p-5 pt-10  space-y-2">
        

        <p className="bg-gray-400 w-full h-4 text-sm font-bold"></p>
        <p className="bg-gray-400 w-full h-8 text-xs"></p>
        <p className="bg-gray-400 w-full h-4 text-sm font-bold flex justify-center items-center">
          <span className="block "></span>
        </p>
      </div>
    </div>
  );
};

export default CardSkeleton;
