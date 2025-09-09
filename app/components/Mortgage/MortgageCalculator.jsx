import React, { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanYears, setLoanYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("201206");

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Extra fees
  const [propertyTax, setPropertyTax] = useState(400);
  const [insurance, setInsurance] = useState(200);
  const [hoa, setHoa] = useState(150);
  const [utilities, setUtilities] = useState(0);

  // Utilities breakdown
  const [waterSewer, setWaterSewer] = useState(50);
  const [gas, setGas] = useState(80);
  const [internet, setInternet] = useState(70);
  const [includeUtilities, setIncludeUtilities] = useState(true);
  const [showUtilitiesBreakdown, setShowUtilitiesBreakdown] = useState(true);

  useEffect(() => {
    calculatePayment();
  }, [homePrice, downPayment, loanYears, interestRate]);

  useEffect(() => {
    // Update utilities total when breakdown changes
    const totalUtilities = waterSewer + gas + internet;
    setUtilities(totalUtilities);
  }, [waterSewer, gas, internet]);

  const handleDownPaymentChange = (value) => {
    const numValue = parseInt(value.replace(/,/g, "")) || 0;
    setDownPayment(numValue);
    const newPercent = Math.round((numValue / homePrice) * 100);
    setDownPaymentPercent(newPercent);
  };

  const handleDownPaymentPercentChange = (percent) => {
    const numPercent = Math.max(0, Math.min(100, percent));
    setDownPaymentPercent(numPercent);
    const newDownPayment = Math.round((homePrice * numPercent) / 100);
    setDownPayment(newDownPayment);
  };

  const handleHomePriceChange = (value) => {
    const numValue = parseInt(value.replace(/,/g, "")) || 0;
    setHomePrice(numValue);
    // Update down payment to maintain the same percentage
    const newDownPayment = Math.round((numValue * downPaymentPercent) / 100);
    setDownPayment(newDownPayment);
  };

  const calculatePayment = () => {
    const P = homePrice - downPayment; // Principal (loan amount)
    const r = interestRate / 100 / 12; // Monthly interest rate
    const n = loanYears * 12; // Number of payments

    if (r === 0) {
      setMonthlyPayment(P / n);
      return;
    }

    // Standard mortgage payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(M);
  };

  const totalPayment =
    monthlyPayment +
    propertyTax +
    insurance +
    hoa +
    (includeUtilities ? utilities : 0);

  // Calculate percentages for the chart
  const principalPercentage =
    totalPayment > 0 ? (monthlyPayment / totalPayment) * 100 : 100;
  const propertyTaxPercentage =
    totalPayment > 0 ? (propertyTax / totalPayment) * 100 : 0;
  const insurancePercentage =
    totalPayment > 0 ? (insurance / totalPayment) * 100 : 0;
  const hoaPercentage = totalPayment > 0 ? (hoa / totalPayment) * 100 : 0;
  const utilitiesPercentage =
    totalPayment > 0 && includeUtilities ? (utilities / totalPayment) * 100 : 0;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Estimate link copied!");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US").format(Math.round(value));
  };

  const sliderValue = homePrice;
  const sliderMin = 50000;
  const sliderMax = 3000000;
  const sliderPercentage =
    ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100;

  return (
    <div className="bg-[#f0f7f1] min-h-screen py-8 sm:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-14">
        <div className="flex flex-col justify-between gap-x-lg">
          <div className="flex-1">
            <h1 className="text-[#292b29] leading-tight m-0 p-0 w-auto text-xl sm:text-2xl md:text-5xl tracking-tight md:tracking-tighter max-w-[500px] text-balance mb-6 sm:mb-8">
              Estimate your monthly mortgage payments
            </h1>

            <div className="bg-white rounded-lg border border-gray-400 px-4 sm:px-6 py-6 sm:py-8 lg:p-8 my-6 sm:my-8 lg:my-14 flex flex-col lg:flex-row lg:justify-between gap-x-8">
              <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-flow-row-dense gap-4 flex-1">
                {/* Home Price */}
                <div className="z-0 relative lg:col-span-3">
                  <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] ease-in-out duration-300 h-16 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                    <label
                      htmlFor="input-homePrice"
                      className="absolute left-4 top-1 text-xs font-normal text-[#565d5a]"
                    >
                      Home price
                    </label>
                    <div className="absolute left-2 top-6 font-bold text-[#292b29] flex items-center justify-center">
                      $
                    </div>
                    <input
                      id="input-homePrice"
                      type="text"
                      className="text-left pl-6 pt-4 pb-1 relative outline-none border-none text-base font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                      value={formatCurrency(homePrice)}
                      onChange={(e) => handleHomePriceChange(e.target.value)}
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div className="flex flex-1 lg:col-span-3 gap-0">
                  <div className="w-2/3">
                    <div className="p-2 relative rounded-l-lg bg-inherit w-full border border-solid border-[#c8c9c6] border-r-0 ease-in-out duration-300 h-16 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                      <label
                        htmlFor="input-downpayment"
                        className="absolute left-4 top-1 text-xs font-normal text-[#565d5a]"
                      >
                        Down payment
                      </label>
                      <div className="absolute left-2 top-6 font-bold text-[#292b29] flex items-center justify-center">
                        $
                      </div>
                      <input
                        id="input-downpayment"
                        type="text"
                        className="text-left pl-6 pt-4 pb-1 relative outline-none border-none text-base font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                        value={formatCurrency(downPayment)}
                        onChange={(e) =>
                          handleDownPaymentChange(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="p-2 relative rounded-r-lg bg-inherit w-full border border-solid border-[#c8c9c6] ease-in-out duration-300 h-16 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                      <div className="absolute right-2 top-6 font-bold text-[#292b29] flex items-center justify-center">
                        %
                      </div>
                      <input
                        type="number"
                        className="text-center pt-4 pb-1 pr-6 relative outline-none border-none text-base font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                        value={downPaymentPercent}
                        onChange={(e) =>
                          handleDownPaymentPercentChange(
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Length of Loan */}
                <div className="relative w-full lg:col-span-3">
                  <label className="absolute left-4 top-1 text-xs font-normal text-[#565d5a] z-10">
                    Length of loan
                  </label>
                  <select
                    className="appearance-none bg-white outline-none rounded-lg border border-solid border-[#c8c9c6] px-4 w-full h-16 pt-4 pb-1 text-base font-bold text-[#292b29] focus:shadow-[0_0_0_3px_#004733] focus:border-[#004733]"
                    value={loanYears}
                    onChange={(e) => setLoanYears(parseInt(e.target.value))}
                  >
                    <option value="30">30 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                  </select>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-2"
                  >
                    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#292b29"></path>
                  </svg>
                </div>

                {/* Interest Rate */}
                <div className="z-0 relative lg:col-span-2">
                  <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] ease-in-out duration-300 h-16 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                    <label
                      htmlFor="input-interest"
                      className="absolute left-4 top-1 text-xs font-normal text-[#565d5a]"
                    >
                      Interest rate
                    </label>
                    <div className="absolute right-2 top-6 font-bold text-[#292b29] flex items-center justify-center">
                      %
                    </div>
                    <input
                      id="input-interest"
                      type="number"
                      step="0.001"
                      className="text-left pl-4 pt-4 pb-1 pr-6 relative outline-none border-none text-base font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value))
                      }
                    />
                  </div>
                </div>

                {/* ZIP Code */}
                <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] ease-in-out duration-300 h-16 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                  <label
                    htmlFor="input-zip"
                    className="absolute left-4 top-1 text-xs font-normal text-[#565d5a]"
                  >
                    ZIP code
                  </label>
                  <input
                    id="input-zip"
                    type="text"
                    maxLength="5"
                    className="text-left pl-4 pt-4 pb-1 relative outline-none border-none text-base font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>

                {/* Slider */}
                <div className="relative mt-8 mb-4 lg:col-span-6 lg:mt-6">
                  <input
                    type="range"
                    min={sliderMin}
                    max={sliderMax}
                    step="1000"
                    className="w-full h-2 bg-[#c8c9c6] rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #292b29 ${sliderPercentage}%, #c8c9c6 ${sliderPercentage}%)`,
                    }}
                    value={homePrice}
                    onChange={(e) => handleHomePriceChange(e.target.value)}
                  />
                </div>
              </div>

              {/* Monthly Payment Display */}
              <div className="w-full lg:max-w-[225px] mt-6 lg:mt-0 lg:ml-8">
                <p className="text-[#292b29] font-bold text-base mb-4">
                  Monthly payment
                </p>
                <div className="text-xl sm:text-2xl font-bold text-[#292b29] mb-6">
                  ${formatCurrency(monthlyPayment)}/mo
                </div>
                <button className="bg-[#017848] hover:bg-[#004733] text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-colors w-full lg:min-w-[220px] h-12 sm:h-16 flex items-center justify-center">
                  Get pre-approved
                </button>
              </div>
            </div>

            {/* Monthly Payment Breakdown */}
            <div className="flex flex-col px-2 sm:px-4 lg:px-18 lg:gap-x-[250px] md:gap-x-8">
                <h4 className="text-[#292b29] text-base md:text-xl mb-4">
                  Monthly payment breakdown
                </h4>
              <div className="flex-1">

                {/* Colored Progress Bar Chart */}
                <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
                  <div className="flex h-8 sm:h-12 w-full bg-gray-200 rounded-full overflow-hidden">
                        {/* Principal & Interest */}
                        <div
                          className="bg-[#292b29] flex items-center justify-center text-white text-xs font-bold h-full rounded-full"
                          style={{ 
                            width: `${principalPercentage}%`,
                            minWidth: principalPercentage > 0 ? '8px' : '0px'
                          }}
                        >
                          {principalPercentage > 15 &&
                            <span className="hidden sm:inline">{Math.round(principalPercentage)}%</span>}
                        </div>

                        {/* Property Taxes */}
                        {propertyTaxPercentage > 0 && (
                          <div
                            className="bg-[#2563eb] flex items-center justify-center text-white text-xs font-bold h-full rounded-full"
                            style={{ 
                              width: `${propertyTaxPercentage}%`,
                              minWidth: propertyTaxPercentage > 0 ? '8px' : '0px'
                            }}
                          >
                            {propertyTaxPercentage > 8 &&
                              <span className="hidden sm:inline">{Math.round(propertyTaxPercentage)}%</span>}
                          </div>
                        )}

                        {/* Insurance */}
                        {insurancePercentage > 0 && (
                          <div
                            className="bg-[#7c3aed] flex items-center justify-center text-white text-xs font-bold h-full rounded-full"
                            style={{ 
                              width: `${insurancePercentage}%`,
                              minWidth: insurancePercentage > 0 ? '8px' : '0px'
                            }}
                          >
                            {insurancePercentage > 8 &&
                              <span className="hidden sm:inline">{Math.round(insurancePercentage)}%</span>}
                          </div>
                        )}

                        {/* HOA */}
                        {hoaPercentage > 0 && (
                          <div
                            className="bg-[#ffd566] flex items-center justify-center text-white text-xs font-bold h-full rounded-full"
                            style={{ 
                              width: `${hoaPercentage}%`,
                              minWidth: hoaPercentage > 0 ? '8px' : '0px'
                            }}
                          >
                            {hoaPercentage > 8 && `${Math.round(hoaPercentage)}%`}
                          </div>
                        )}

                        {/* Utilities */}
                        {utilitiesPercentage > 0 && (
                          <div
                            className="bg-[#ef4444] flex items-center justify-center text-white text-xs font-bold h-full rounded-full"
                            style={{ 
                              width: `${utilitiesPercentage}%`,
                              minWidth: utilitiesPercentage > 0 ? '8px' : '0px'
                            }}
                          >
                            {utilitiesPercentage > 8 &&
                              `${Math.round(utilitiesPercentage)}%`}
                          </div>
                        )}
                      </div>
                    </div>
                <p className="text-2xl font-bold text-[#292b29] mb-8">
                  ${formatCurrency(totalPayment)}/mo
                </p>
                <div className="flex justify-between items-center h-16 mb-4">
                  <div className="flex items-center w-1/2">
                    <div className="rounded-sm h-4 w-1 mr-2 bg-[#017848]"></div>
                    <p className="text-[#292b29] text-base">
                      Principal & interest
                    </p>
                  </div>
                  <p className="text-[#565d5a] font-bold text-base w-1/2 sm:w-40 text-right">
                    ${formatCurrency(monthlyPayment)}
                  </p>
                </div>

                {/* Property Taxes */}
                <div className="flex justify-between items-center h-16 mb-4">
                  <div className="flex items-center w-1/2">
                    <div className="rounded-sm h-4 w-1 mr-2 bg-[#2563eb]"></div>
                    <label className="text-[#292b29] text-base">
                      Property taxes
                    </label>
                  </div>
                  <div className="w-1/2 sm:w-40">
                    <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-12 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                      <div className="absolute left-2 top-3 font-bold text-[#292b29]">
                        $
                      </div>
                      <input
                        type="number"
                        className="text-right pl-6 pr-2 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                        value={propertyTax}
                        onChange={(e) =>
                          setPropertyTax(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Homeowners Insurance */}
                <div className="flex justify-between items-center h-16 mb-4">
                  <div className="flex items-center w-1/2">
                    <div className="rounded-sm h-4 w-1 mr-2 bg-[#7c3aed]"></div>
                    <label className="text-[#292b29] text-base">
                      Homeowners insurance
                    </label>
                  </div>
                  <div className="w-1/2 sm:w-40">
                    <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-12 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                      <div className="absolute left-2 top-3 font-bold text-[#292b29]">
                        $
                      </div>
                      <input
                        type="number"
                        className="text-right pl-6 pr-2 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                        value={insurance}
                        onChange={(e) =>
                          setInsurance(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* HOA Fees */}
                <div className="flex justify-between items-center h-16 mb-4">
                  <div className="flex items-center w-1/2">
                    <div className="rounded-sm h-4 w-1 mr-2 bg-[#ffd566]"></div>
                    <label className="text-[#292b29] text-base">HOA fees</label>
                  </div>
                  <div className="w-1/2 sm:w-40">
                    <div className="p-2 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-12 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                      <div className="absolute left-2 top-3 font-bold text-[#292b29]">
                        $
                      </div>
                      <input
                        type="number"
                        className="text-right pl-6 pr-2 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                        value={hoa}
                        onChange={(e) => setHoa(parseInt(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </div>

                {/* Utilities */}
                <div className="mb-6">
                  <div className="flex justify-between items-center h-16 mb-4">
                    <button
                      onClick={() =>
                        setShowUtilitiesBreakdown(!showUtilitiesBreakdown)
                      }
                      className="flex items-center w-1/2 text-left"
                    >
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#ef4444]"></div>
                      <p className="text-[#292b29] text-base">Utilities</p>
                      <svg
                        className={`ml-2 h-4 w-4 transform transition-transform ${
                          showUtilitiesBreakdown ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <p className="text-[#292b29] font-bold text-base w-36 text-left">
                      ${utilities}/mo
                    </p>
                  </div>

                  {/* Utilities Breakdown */}
                  {showUtilitiesBreakdown && (
                    <div className="ml-6 space-y-4 mb-4">
                      {/* Water/Sewer */}
                      <div className="flex justify-between items-center h-12">
                        <p className="text-[#292b29] text-sm">Water/Sewer</p>
                        <div className="w-32">
                          <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-10 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                            <div className="absolute left-1 top-2 font-bold text-[#292b29] text-sm">
                              $
                            </div>
                            <input
                              type="number"
                              className="text-right pl-4 pr-1 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                              value={waterSewer}
                              onChange={(e) =>
                                setWaterSewer(parseInt(e.target.value) || 0)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Gas */}
                      <div className="flex justify-between items-center h-12">
                        <p className="text-[#292b29] text-sm">Gas</p>
                        <div className="w-32">
                          <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-10 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                            <div className="absolute left-1 top-2 font-bold text-[#292b29] text-sm">
                              $
                            </div>
                            <input
                              type="number"
                              className="text-right pl-4 pr-1 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                              value={gas}
                              onChange={(e) =>
                                setGas(parseInt(e.target.value) || 0)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Internet */}
                      <div className="flex justify-between items-center h-12">
                        <p className="text-[#292b29] text-sm">Internet</p>
                        <div className="w-32">
                          <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-[#c8c9c6] h-10 focus-within:shadow-[0_0_0_3px_#004733] focus-within:border-[#004733]">
                            <div className="absolute left-1 top-2 font-bold text-[#292b29] text-sm">
                              $
                            </div>
                            <input
                              type="number"
                              className="text-right pl-4 pr-1 pt-1 relative outline-none border-none text-sm font-bold w-full h-full box-border bg-inherit text-[#292b29]"
                              value={internet}
                              onChange={(e) =>
                                setInternet(parseInt(e.target.value) || 0)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Include utilities checkbox */}
                      <div className="flex items-center mt-4">
                        <input
                          type="checkbox"
                          id="include-utilities"
                          checked={includeUtilities}
                          onChange={(e) =>
                            setIncludeUtilities(e.target.checked)
                          }
                          className="w-4 h-4 text-[#017848] bg-gray-100 border-gray-300 rounded focus:ring-[#017848] focus:ring-2"
                        />
                        <label
                          htmlFor="include-utilities"
                          className="ml-2 text-sm text-[#292b29]"
                        >
                          Include utilities in payment
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* Copy Link Button */}
                <button
                  onClick={copyLink}
                  className=" bg-[#DFE0DC] hover:bg-[#d1e8d1] font-bold px-4 py-2 rounded-lg transition-colors text-base h-10"
                >
                  Copy estimate link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
