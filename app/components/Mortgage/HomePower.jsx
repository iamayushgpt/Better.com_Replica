import React from 'react'

const HomePower = ({quote}) => {
  return (
    <div className="flex flex-col items-center border-y-2 justify-center py-44 bg-[#fdfcf9] text-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
        {quote?quote:"Check your homebuying power"}
      </h1>

      {/* Button */}
      <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-md transition-colors">
        See what I qualify for
      </button>

      {/* Subtext */}
      <p className="text-sm text-gray-600 mt-4">
        ...in as little as 3 minutes — <br className="sm:hidden" />
        no credit impact
      </p>
    </div>
  )
}

export default HomePower
