import React from "react";

const HomePower = ({ quote }) => {
  return (
    <div className="flex flex-col items-center border-y-2 justify-center py-24 sm:py-32 lg:py-44 bg-[#fdfcf9] text-center px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
        {quote ? quote : "Check your homebuying power"}
      </h1>

      {/* Button */}
      <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-colors text-sm sm:text-base">
        See what I qualify for
      </button>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
        ...in as little as 3 minutes — <br className="sm:hidden" />
        no credit impact
      </p>
    </div>
  );
};

export default HomePower;
