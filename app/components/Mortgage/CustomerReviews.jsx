import React from "react";

export default function CustomerReviews() {
  return (
    <div className="bg-[#fdfcf9] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Card - Customers Count */}
        <div className="bg-[#9AD5AB] rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              1400+ customers
            </h2>
            <p className="text-gray-800 text-base">
              provide us 5 stars in{" "}
              <span className="text-green-700 font-semibold">★ Trustpilot</span>
            </p>
          </div>
          <button className="mt-8 bg-green-800 text-white font-semibold px-6 py-4 rounded-md hover:bg-green-900 transition w-fit">
            Tell us about your experience
          </button>
        </div>

        {/* Right Card - Review */}
        <div className="bg-green-50 rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-3">05/12/2025</p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Better offered the best rate
            </h3>
            <p className="text-gray-700 mb-6">
              Better Mortgage offered the best rate. Other companies finally
              agreed to match the Better rate, but I stuck with Better Mortgage
              since they offered it first. I would definitely recommend Better.
            </p>
            <a
              href="#"
              className="text-green-700 font-semibold hover:underline inline-flex items-center"
            >
              See in Trustpilot →
            </a>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8 text-gray-600">
            <button className="p-2 rounded-full hover:bg-gray-200 transition">
              ←
            </button>
            <span className="text-sm">1/5</span>
            <button className="p-2 rounded-full hover:bg-gray-200 transition">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
