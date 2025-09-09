export default function MortgageRateTrends() {
  return (
    <section className="bg-[#fdfcfb] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
          Historical mortgage rate trends
        </h2>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="relative">
            <select className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base">
              <option>All (average)</option>
              <option>California</option>
              <option>New York</option>
              <option>Texas</option>
            </select>
          </div>
          <div className="relative">
            <select className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base">
              <option>All (average)</option>
              <option>30-year fixed</option>
              <option>15-year fixed</option>
              <option>5/1 ARM</option>
            </select>
          </div>
        </div>

        {/* Chart (SVG provided by you) */}
        <div className="overflow-x-auto">
          <svg
  role="application"
  tabIndex="0"
  className="recharts-surface"
  width="1200"
  height="320"
  viewBox="0 0 1200 320"
  style={{ width: "100%", height: "100%" }}
  xmlns="http://www.w3.org/2000/svg"
>
  <title></title>
  <desc></desc>
  <defs>
    <clipPath id="recharts1-clip">
      <rect x="65" y="5" height="256" width="1130"></rect>
    </clipPath>
  </defs>

  {/* X Axis */}
  <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
    <line
      stroke="#666"
      height="30"
      orientation="bottom"
      x="65"
      y="261"
      width="1130"
      className="recharts-cartesian-axis-line"
      fill="none"
      x1="65"
      y1="261"
      x2="1195"
      y2="261"
    ></line>
    <g className="recharts-cartesian-axis-ticks">
      {/* Example tick */}
      <g className="recharts-layer recharts-cartesian-axis-tick">
        <line
          stroke="#666"
          height="30"
          orientation="bottom"
          x="65"
          y="261"
          width="1130"
          className="recharts-cartesian-axis-tick-line"
          fill="none"
          x1="65"
          y1="267"
          x2="65"
          y2="261"
        ></line>
        <text
          stroke="none"
          height="30"
          orientation="bottom"
          width="1130"
          x="65"
          y="269"
          className="recharts-text recharts-cartesian-axis-tick-value"
          textAnchor="middle"
          fill="#666"
        >
          <tspan x="65" dy="0.71em">
            Sep
          </tspan>
        </text>
      </g>

      {/* keep all other ticks here (Oct, Nov, Dec, etc.) with same fixes */}
    </g>
  </g>

  {/* Y Axis */}
  <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
    <line
      stroke="#666"
      orientation="left"
      width="60"
      x="5"
      y="5"
      height="256"
      className="recharts-cartesian-axis-line"
      fill="none"
      x1="65"
      y1="5"
      x2="65"
      y2="261"
    ></line>
    {/* ticks same as above with textAnchor + strokeWidth fixes */}
  </g>

  {/* Line Path */}
  <g className="recharts-layer recharts-line">
    <path
      stroke="#1EE07F"
      strokeWidth="3"
      fill="none"
      height="256"
      width="1130"
      className="recharts-curve recharts-line-curve"
      strokeDasharray="1181.9163818359375px 0px"
      d="M65,191.88C99.242,199.56,133.485,207.24,167.727,207.24C201.97,207.24,236.212,138.12,270.455,138.12C304.697,138.12,338.939,156.04,373.182,156.04C407.424,156.04,441.667,127.027,475.909,127.027C510.152,127.027,544.394,139.827,578.636,147.507C612.879,155.187,647.121,173.107,681.364,173.107C715.606,173.107,749.848,132.147,784.091,132.147C818.333,132.147,852.576,144.947,886.818,144.947C921.061,144.947,955.303,138.973,989.545,138.973C1023.788,138.973,1058.03,164.573,1092.273,164.573C1126.515,164.573,1160.758,164.147,1195,163.72"
    ></path>

    {/* Dots */}
    <g className="recharts-layer recharts-line-dots">
      <circle
        r="3"
        stroke="#1EE07F"
        strokeWidth="3"
        fill="#fff"
        cx="65"
        cy="191.88"
        className="recharts-dot recharts-line-dot"
      ></circle>
      {/* Repeat for all other dots with strokeWidth + className fixes */}
    </g>
  </g>
</svg>

        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              defaultChecked
              className="form-checkbox text-green-500"
            />
            <span className="text-green-600 font-medium">Purchase</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="form-checkbox" />
            <span>Refinance</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="form-checkbox text-purple-500" />
            <span className="text-purple-600 font-medium">Other</span>
          </label>
        </div>
      </div>
    </section>
  );
}
