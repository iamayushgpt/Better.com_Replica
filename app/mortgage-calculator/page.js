"use client";
import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const mortgageCalculator = () => {
  const [closePopup, setclosePopup] = useState(true);

  useEffect(() => {
    if (!closePopup) {
      document.body.style.overflow = "hidden"; // Prevent body scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore body scroll when modal is closed
    }
  }, [closePopup]);

  return (
    <div className={`${!closePopup ? "bg-[#B2B1AF]" : ""}`}>
      <div
        className={`fixed top-0 z-50 w-full ${
          !closePopup ? "bg-[#B2B1AF]" : "opacity-100"
        } `}
      >
        <Header
          mortgagePageColor={"bg-[#B2B1AF]"}
          closePopup={closePopup}
          headerBgWhite={true}
        />
      </div>

      {/* <section className="bg-successBackground py-16">
        <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <div className="flex·flex-col·justify-between·gap-x-lg">
            <div className="flex-1">
              <h1 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter">
                Mortgage calculator
              </h1>
              <p className="font-normal leading-body m-0 p-0 text-left text-base my-lg pb-base text-textSecondary lg:max-w-3xl">
                Our mortgage calculator includes key factors like homeowners
                association fees, property taxes, and private mortgage insurance
                (PMI). Get the whole picture and calculate your total monthly
                payment.
              </p>
              <div className="mb-lg flex w-full items-end gap-base">
                <div className="grow">
                  <div className="w-full max-w-[300px]">
                    <label
                      className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-[15px] md:text-base"
                      for="home-price"
                    >
                      Home price
                    </label>
                    <div className="z-0 relative w-full text-lg md:text-[40px]">
                      <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl lg:h-4xl">
                        <div
                          aria-hidden="true"
                          data-testid="input-icon-box"
                          className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 text-xl lg:text-3xl w-lg h-lg flex items-center justify-center lg:top-[30px] left-xs"
                        >
                          $
                        </div>
                        <input
                          data-qa="home-price"
                          name="home-price"
                          type="tel"
                          data-labelalign="top"
                          id="input-home-price"
                          autocapitalize="off"
                          autocorrect="off"
                          aria-invalid="false"
                          className="text-left relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border pl-[32px] text-xl lg:text-3xl"
                          value="1,066,600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow">
                  <div className="w-full max-w-[300px]">
                    <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-[15px] md:text-base">
                      Monthly payment
                    </p>
                    <p
                      className="leading-body m-0 p-0 text-left my-lg flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl"
                      data-qa="monthly-payment"
                    >
                      $6,991/mo
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <a
                    className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-secondary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                    href="/preapproval/nxt-purchase"
                  >
                    Get pre-approved
                  </a>
                </div>
              </div>
              <div className="relative mx-lg mt-8 mb-lg">
                <input
                  type="range"
                  min="50000"
                  max="3000000"
                  step="100"
                  className="bg-textPrimary [&amp;::-webkit-slider-thumb]:bg-textPrimary rounded-base w-full cursor-pointer appearance-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;::-moz-range-thumb]:h-2.5 [&amp;::-moz-range-thumb]:w-2.5 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:border-4 [&amp;::-moz-range-thumb]:transition-all [&amp;::-moz-range-thumb]:duration-150 [&amp;::-moz-range-thumb]:ease-in-out [&amp;::-moz-range-track]:h-2 [&amp;::-moz-range-track]:w-full [&amp;::-moz-range-track]:rounded-full [&amp;::-moz-range-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:duration-150 [&amp;::-webkit-slider-thumb]:ease-in-out [&amp;::-webkit-slider-thumb]:dark:bg-neutral-700"
                  id="min-and-max-range-slider-usage"
                  style={{backgroundImage: "linear-gradient(to right, rgb(41, 43, 41) 34.461%, rgb(200, 201, 198) 34.461%, rgb(200, 201, 198) 100%);"}}
                  value="1066600"
                />
              </div>
              <div className="mt-xl hidden md:block">
                <div className="gap-x-5xl gap-y-px lg:flex">
                  <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                    <div className="flex-1">
                      <div className="z-0 relative">
                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                          <label
                            for="input-1"
                            id="1-label"
                            className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                          >
                            ZIP code
                          </label>
                          <input
                            maxlength="5"
                            type="tel"
                            data-labelalign="top"
                            id="input-1"
                            autocapitalize="off"
                            autocorrect="off"
                            className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                            value="250002"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <div className="w-9/12 ">
                        <div className="z-0 relative [&amp;>div:first-of-type]:rounded-r-none">
                          <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                            <label
                              for="input-downpayment"
                              id="downpayment-label"
                              className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                            >
                              Down payment
                            </label>
                            <div
                              aria-hidden="true"
                              data-testid="input-icon-box"
                              className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] left-xs"
                            >
                              $
                            </div>
                            <input
                              data-qa="downpayment"
                              name="downpayment"
                              type="tel"
                              data-labelalign="top"
                              id="input-downpayment"
                              autocapitalize="off"
                              autocorrect="off"
                              aria-invalid="false"
                              className="text-left px-sm pb-none pl-[32px] pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                              value="60,000"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-3/12 min-w-3xl">
                        <div className="z-0 relative flex [&amp;>div:first-of-type]:rounded-l-none [&amp;>div:first-of-type]:border-l-0">
                          <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                            <div
                              aria-hidden="true"
                              data-testid="input-icon-box"
                              className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center right-xs"
                            >
                              %
                            </div>
                            <input
                              data-qa="down-payment-ratio"
                              data-labelalign="top"
                              id="input-2"
                              autocapitalize="off"
                              autocorrect="off"
                              className="text-left px-sm pb-none relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                              value="20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                    <div className="flex-1">
                      <div className="z-0 relative">
                        <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                          <label
                            for="input-3"
                            id="3-label"
                            className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                          >
                            Interest rate
                          </label>
                          <div
                            aria-hidden="true"
                            data-testid="input-icon-box"
                            className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] right-xs"
                          >
                            %
                          </div>
                          <input
                            data-labelalign="top"
                            id="input-3"
                            autocapitalize="off"
                            autocorrect="off"
                            className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                            value="6.500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative w-full">
                        <label
                          className="leading-body m-0 p-0 text-left text-interactiveForegroundMuted absolute left-base origin-top-left transition-all duration-300 ease-in-out z-1 top-[7px] text-xs font-normal"
                          for="4"
                        >
                          Length of loan
                        </label>
                        <select
                          id="4"
                          className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-backgroundTertiary outline-none rounded-base border border-solid border-strokeBorder px-base w-full h-3xl p-2xs pb-none pt-base duration-300 ease-in-out z-0 focus:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] focus:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_3px_inset] hover:shadow-accentBorderSecondary flex-1"
                        >
                          <option value="30" label="30 years">
                            30 years
                          </option>
                          <option value="20" label="20 years">
                            20 years
                          </option>
                          <option value="15" label="15 years">
                            15 years
                          </option>
                        </select>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-xs"
                        >
                          <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden">
                <div style={{display:"flex",flexDirection:"column",marginBottom:"10px",rowGap:"10px"}}>
                  <a
                    className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-secondary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                    href="/preapproval/nxt-purchase"
                  >
                    Get pre-approved
                  </a>
                </div>
                <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-secondary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-secondary px-xl h-3xl mt-lg flex w-full items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus "
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>{" "}
                  Add details
                </button>
                <div
                  className="p-base bg-backgroundPrimary px-lg shadow-lg fixed left-0 top-[70px] w-full z-[10000] invisible opacity-0"
                  data-qa="mobile-header"
                  style={{transition:"opacity $$motion.easing.universal $$motion.timing.T3 0s, visibility 0s $$motion.timing.T4"}}
                >
                  <div className="grid grid-cols-2 gap-xl">
                    <div>
                      <p className="leading-body m-0 p-0 text-left text-textSecondary text-[15px] mb-xs font-bold">
                        Home price
                      </p>
                      <p
                        className="leading-body m-0 p-0 text-base rounded-base bg-interactiveForegroundSecondary py-xs text-center font-bold text-textInversePrimary"
                        data-qa="mobile-header-home-price"
                      >
                        $1,066,600
                      </p>
                    </div>
                    <div>
                      <p className="leading-body m-0 p-0 text-left text-textSecondary text-[15px] mb-xs font-bold">
                        Monthly payment
                      </p>
                      <p
                        className="leading-body m-0 p-0 text-left text-textSecondary text-base pt-xs font-bold"
                        data-qa="mobile-header-monthly-payment"
                      >
                        $6,991/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className={` py-10`}>
        <section
          id="seo-section-wrapper"
          className="gap-x-lg [&>p]:text-textSecondary py-16 md:flex-row [&>h2]:mb-12 [&>h2]:font-medium [&>h3]:my-lg [&>p]:my-sm m-auto max-w-screen-2xl justify-between px-6 md:px-8"
        >
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How does a mortgage calculator help me?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left  text-[18px]">
            When deciding how much house you can afford, one of the most
            important pieces to determine is whether a home will fit into your
            monthly budget. A mortgage calculator helps you understand the
            monthly cost of a home. And ours will allow you to enter different
            down payments and interest rates to help determine what is
            affordable for you.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How much monthly mortgage payment can I afford?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Lenders determine how much you can afford on a monthly housing
            payment by calculating your{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/what-is-a-good-debt-to-income-ratio/"
            >
              debt-to-income ratio (DTI)
            </a>
            . The maximum DTI you can have in order to qualify for most mortgage
            loans is often between 45-50%, with your anticipated housing costs
            included.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Your DTI is the balance between your income and your debt. It helps
            lenders understand how safe or risky it is for them to approve your
            loan. A DTI ratio represents how much of your gross monthly income
            is spoken for by creditors, and how much of it is left over to you
            as disposable income. It’s most commonly written as a percentage.
            For example, if you pay half your monthly income in debt payments,
            you would have a DTI of 50%.
          </p>
          <div className="flex flex-col items-center">
            <div>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-6">
                Formula for calculating your debt-to-income (DTI) ratio:
              </p>
              <img
                alt="Mortgage calculator | Debt to income ratio (DTI) formula"
                loading="lazy"
                width="780"
                height="153"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg"
              />
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-6">
                Here’s an example of what calculating your DTI might look like:
              </p>
              <img
                alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
                loading="lazy"
                width="780"
                height="525"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg"
              />
            </div>
          </div>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How to calculate monthly mortgage payments?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Your monthly mortgage payment includes loan principal and interest,
            property taxes, homeowners insurance, and mortgage insurance (PMI),
            if applicable. While not typically included in your mortgage
            payment, homeowners also pay monthly utilities and sometimes pay
            homeowners association (HOA) fees, so it’s a good idea to factor
            these into your monthly budget. This mortgage calculator factors in
            all these typical monthly costs so you can really crunch the
            numbers.
          </p>
          <h3 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            Formula for calculating monthly mortgage payments
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            The easiest way to calculate your mortgage payment is to use a
            calculator, but for the curious or mathematically inclined, here’s
            the formula for calculating principal and interest yourself:
          </p>
          <div className="flex flex-col items-center">
            <div>
              <img
                alt="Mortgage calculator | Monthly mortgage payment formula"
                loading="lazy"
                width="780"
                height="126"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
              />
              <div>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-2">
                  Where:
                </p>
                <ul className="ml-xl text-[18px] list-disc">
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px] my-2">
                      <b>M</b> is monthly mortgage payments
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px] my-sm">
                      <b>P</b> is the principal loan amount (the amount you
                      borrow)
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px] my-sm">
                      <b>r</b> is the monthly interest rate
                      <br />
                      (annual interest rate divided by 12 and expressed as a
                      decimal)
                      <br />
                      <small>
                        For example:
                        <br />
                        if the annual interest rate is <b>5%</b>,<br /> the
                        monthly rate would be <b>0.05/12</b> = .00417, or{" "}
                        <b>.417%</b>
                      </small>
                    </p>
                  </li>
                  <li>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary my-sm">
                      <span className="text-[18px]">
                        <b>n</b> is the total number of payments in months{" "}
                      </span>
                      <br />
                      <small>
                        For example:
                        <br />
                        for a 30-year loan, n = 30×12 = <b>360</b> months
                      </small>
                    </p>
                  </li>
                </ul>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px] my-sm">
                  Here’s a simple example:
                </p>
                <img
                  alt="Mortgage calculator | Monthly mortgage payment formula example"
                  loading="lazy"
                  width="780"
                  height="221"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"
                />
              </div>
            </div>
          </div>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            This formula assumes a fixed-rate mortgage, where the interest rate
            remains constant throughout the loan term. And remember, you’ll
            still need to add on taxes, insurance, utilities, and HOA fees if
            applicable.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h3 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            How to use this mortgage calculator?
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Play around with different home prices, locations,{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary text-[18px]"
              href="/faq/loan-process/down-payment-definition/"
            >
              down payments
            </a>
            , interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that’s less than 20% of the home price,{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/what-is-pmi-or-private-mortgage-insurance/"
            >
              private mortgage insurance (PMI)
            </a>{" "}
            costs will be added to your monthly mortgage payment. As the costs
            of utilities can vary from county to county, we’ve included a
            utilities estimate that you can break down by service. If you’re
            thinking about buying a condo or into a community with a Homeowners
            Association (HOA), you can add HOA fees.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            The only amounts we haven’t included are the money you’ll need to
            save for annual home maintenance/repairs or the costs of home
            improvements. To see how much home you can afford including these
            costs, take a look at the{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/how-much-house-can-I-afford/"
            >
              Better home affordability calculator
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Fun fact:{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/how-to-calculate-property-tax-on-a-house/"
            >
              Property tax rates
            </a>{" "}
            are extremely localized, so two homes of roughly the same size and
            quality on either side of a municipal border could have very
            different tax rates. Buying in an area with a lower property tax
            rate may make it easier for you to afford a higher-priced home.
          </p>
          <h3 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            Do you know your property tax rate?
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            While exact property tax rates vary by county, it can be helpful to
            look at taxes on the state level to get an idea for taxes in your
            state. Here’s a helpful chart from{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state"
            >
              Forbes
            </a>{" "}
            breaking down the Census Bureau’s 2021 American Community Survey
            5-year estimate:
          </p>
          <div
            className={`my-[5rem] ${
              closePopup ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div
              className={`relative ${
                closePopup ? "pointer-events-auto" : "pointer-events-none"
              } pointer group w-full h-full overflow-scroll`}
              tabIndex="0"
            >
              <table
                className={`min-w-full ${
                  closePopup ? "pointer-events-auto" : "pointer-events-none"
                } border border-successAccent table-auto clip-inset-round`}
              >
                <thead className="">
                  <tr>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-[15px] text-center text-white font-bold">
                        State
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-[15px] text-center text-white font-bold">
                        Median Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-[15px] text-center text-white font-bold">
                        Mean Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-[15px] text-center text-white font-bold">
                        Median Home Value
                      </p>
                    </th>
                    <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p className="leading-body m-0 p-0 text-[15px]text-center text-white font-bold">
                        Median Property Taxes Paid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        AL
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.41%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.40%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $157,100
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $646
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        AK
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        1.23%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        1.04%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $282,800
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $3,464
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        AZ
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.63%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $265,600
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $1,648
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        AR
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        0.64%
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $142,100
                      </p>
                    </td>
                    <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p className="font-normal leading-body m-0 p-0 text-[15px] text-center text-textSecondary">
                        $878
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="hidden md:group-hover:block absolute w-full h-full bg-black opacity-25 top-0 left-0"></div>
              <button
                className="rounded-lg leading-body px-7 py-4 text-base text-center font-semibold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] bg-accentSecondary hover:bg-[#d9e4d8] focus:bg-accentSecondary focus:shadow-secondary active:bg-accentSecondary px-xl h-3xl w-auto hidden  md:group-hover:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 absolute"
                onClick={() => {
                  setclosePopup(false);
                }}
              >
                See all states
              </button>

              {/* Hover display info secion  */}

              <div
                data-state="open"
                className={`gap-4 opacity-100 ${
                  closePopup ? "hidden" : "block "
                } p-2 md:p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-9 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] inset-0 rounded-t-[35px] md:rounded-lg top-20 max-h-[90%] bg-white md:max-w-lg md:max-h-[80%] translate-x-[-50%] md:translate-y-[-50%] fixed left-[50%] md:top-[50%] z-50 grid w-full max-w-5xl overflow-scroll md:h-[80%] `}
                tabIndex="-1"
                style={{ pointerEvents: "auto;" }}
              >
                <div className="overflow-scroll">
                  <h4 className="font-bold relative z-20 text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-3xl md:text-4xl md:tracking-tight mb-12 mt-14 md:mt-3xl">
                    Property tax rates
                  </h4>
                  <table className="min-w-full border border-successAccent table-auto clip-inset-round">
                    <thead className="">
                      <tr>
                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                          <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                            State
                          </p>
                        </th>
                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                          <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                            Median Effective Property Tax Rate
                          </p>
                        </th>
                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                          <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                            Mean Effective Property Tax Rate
                          </p>
                        </th>
                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                          <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                            Median Home Value
                          </p>
                        </th>
                        <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                          <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                            Median Property Taxes Paid
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            AL
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.41%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.40%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $157,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $646
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            AK
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.23%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.04%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $282,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,464
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            AZ
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.62%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.63%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $265,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,648
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            AR
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.62%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.64%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $142,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $878
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            CA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.75%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.75%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $573,200
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $4,279
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            CO
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.51%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.55%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $397,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,017
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            CT
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.15%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.79%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $286,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $6,153
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            DE
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.58%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.61%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $269,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,570
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            DC
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.62%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $635,900
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,641
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            FL
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.86%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.91%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $248,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,143
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            GA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.90%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.92%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $206,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,850
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            HI
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.29%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.32%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $662,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,893
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            ID
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.63%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.67%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $266,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,682
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            IL
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.23%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.08%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $212,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $4,744
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            IN
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.83%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.84%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $158,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,308
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            IA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.52%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $160,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,522
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            KS
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.43%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.34%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $164,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,355
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            KY
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.85%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.83%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $155,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,320
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            LA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.56%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $174,000
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $983
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            ME
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.28%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.24%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $212,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,722
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MD
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.07%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.05%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $338,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,633
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.20%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.14%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $424,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $5,091
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MI
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.48%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.38%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $172,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,551
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MN
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.11%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.11%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $250,200
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,767
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MS
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.79%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.67%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $133,000
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,052
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MO
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.98%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.01%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $171,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,676
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            MT
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.83%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.74%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $263,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,189
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NE
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.68%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.63%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $174,100
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,916
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NV
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.55%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.59%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $315,900
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,736
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NH
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.09%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.93%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $288,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $6,036
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NJ
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.47%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            2.24%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $355,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $8,797
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NM
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.80%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.67%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $184,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,470
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NY
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.73%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.40%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $340,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $5,884
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            NC
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.80%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.82%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $197,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,583
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            ND
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.00%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.98%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $209,900
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,092
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            OH
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.53%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.59%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $159,900
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,447
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            OK
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.90%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.89%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $150,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,351
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            OR
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.93%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.93%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $362,200
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,352
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            PA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.53%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.49%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $197,300
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,022
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            RI
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.53%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.40%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $292,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $4,483
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            SC
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.56%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $181,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,024
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            SD
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.24%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.17%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $187,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,331
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            TN
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.66%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.67%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $193,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,270
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            TX
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.74%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.68%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $202,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,520
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            UT
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.58%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $339,700
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,967
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            VT
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.90%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.83%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $240,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $4,570
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            VA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.82%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.88%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $295,500
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $2,420
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            WA
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.94%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.87%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $397,600
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,752
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            WV
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.59%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.57%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $128,800
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $756
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            WI
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.73%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            1.61%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $200,400
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $3,472
                          </p>
                        </td>
                      </tr>
                      <tr className="even:bg-successBackground">
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            WY
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.61%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            0.56%
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $237,900
                          </p>
                        </td>
                        <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                          <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                            $1,442
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  type="button"
                  onClick={() => {
                    setclosePopup(true);
                  }}
                  className="absolute rounded-sm bg-white w-full flex justify-end"
                >
                  <button className="inline-block rounded-base  leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary py-4 px-base h-2xl w-auto">
                    <div className="align-center flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x h-6 w-6"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span className="sr-only">Close</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              className="leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-secondary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-secondary py-8 px-xl h-3xl block md:hidden mt-base w-full rounded-lg"
              onClick={() => setclosePopup(false)}
            >
              See all states
            </button>
          </div>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-medium text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How is Better’s mortgage calculator different?
          </h2>
          <h3 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            This mortgage calculator shows your payments with taxes and
            insurance
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            The property taxes you contribute are used to finance the services
            provided by your local government to the community. These services
            encompass schools, libraries, roads, parks, water treatment, police,
            and fire departments. Even after your mortgage has been fully paid,
            you will still need to pay property taxes. If you neglect your
            property taxes, you run the risk of losing your home to your local
            tax authority.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Your lender will usually require you to have homeowners insurance
            while you're settling your mortgage. This is a common practice among
            lenders because they understand that nobody wants to continue paying
            a mortgage on a home that's been damaged or destroyed.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Here's an interesting fact: Once you fully own your home, the choice
            to maintain homeowners insurance is entirely up to you. However, to
            ensure your home is protected against damages caused by fires,
            lightning strikes, and natural disasters that are common in your
            area, it is highly recommended to keep it. Therefore, always factor
            in these costs when using a Mortgage Calculator.
          </p>
          <h3 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            This mortgage calculator shows your mortgage costs with PMI
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            PMI, an abbreviation for private mortgage insurance, aids potential
            homeowners in qualifying for a mortgage without the necessity of a
            20% down payment. By opting for a lower down payment and choosing a
            mortgage with PMI, you can purchase a home sooner, begin accruing
            equity, and keep cash available for future needs. This can all be
            calculated using this Mortgage Calculator.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Choosing a mortgage with PMI is a popular option:{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="https://cdn.nar.realtor/sites/default/files/documents/2021-07-realtors-confidence-index-08-23-2021.pdf"
            >
              71% of first-time homebuyers
            </a>{" "}
            had a down payment of less than 20% in July 2021.{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="https://fortune.com/2021/08/31/down-payment-on-a-house-how-much-money-to-put-down"
            >
              In 2020, the median down payment for first-time homebuyers was
              just 7%, and it hasn’t risen above 10% since 1989.
            </a>
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            PMI is automatically removed from conventional mortgages once your
            home equity reaches 22%. Alternatively, you can request the removal
            of PMI once you've accumulated at least 20% home equity.
          </p>
          <h3 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-3xl">
            This mortgage calculator includes HOA fees
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Homeowners association (“HOA”) fees are typically charged directly
            by a homeowners association, but as HOA fees come part and parcel
            with condos, townhomes, and planned housing developments, they’re an
            essential factor to consider when calculating your mortgage costs.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            Homes that share structural elements, such as roofs and walls, or
            community amenities like landscaping, pools, or BBQ areas, often
            require homeowners to pay HOA fees for the maintenance of these
            shared features. It's important to factor in these costs during your
            budget planning stage, especially considering that HOA fees
            typically increase annually. HOAs may also charge additional fees
            known as ‘special assessments’ to cover unexpected expenses from
            time to time.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-semibold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-3xl md:tracking-tight">
            How to reduce your monthly mortgage payments?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[18px]">
            The lower the purchase price of the home, the lower your loan amount
            will be. But if the seller is less than willing to cut you a deal,
            you have other options.
          </p>
          <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Extend the length of your mortgage
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The more time you have to pay off the mortgage, the less each
            monthly mortgage payment will be. (In lender-speak, ‘extending the
            length of your mortgage’ is known as ‘increasing your loan term’.)
            This is why people often choose a 30-year fixed rate mortgage over
            one with a 15- or 20-year term.
          </p>
          <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Increase your down payment
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The smaller the amount of your mortgage, the smaller your monthly
            mortgage payments will be. If you’re able to put at least 20% of the
            home price towards your{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/how-much-should-you-put-down-on-a-house/"
            >
              down payment
            </a>
            , you’ll be able to avoid PMI (private mortgage insurance). Even if
            you can’t afford a complete 20% down payment, boosting your down
            payment will help you get PMI removed sooner. In fact, boosting your
            down payment by 5% can lower your monthly PMI fees.
          </p>
          <h3 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl">
            Get a lower interest rate
          </h3>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Increasing your down payment can be one way to help you qualify for
            a lower interest rate. The amount of your down payment compared to
            the total amount of the loan is called your{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/3-most-important-numbers-mortgage-application/"
            >
              loan-to-value ratio (LTV)
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Depending on your loan amount, a lower LTV may increase the
            likelihood of you being offered a low interest rate. If you intend
            on keeping your home for a while, you could consider buying{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/points-credits-and-how-to-decide-if-theyre-right-for-you/"
            >
              points
            </a>{" "}
            to reduce your interest rate. Buying points essentially means you
            agree to pay more upfront costs in exchange for a lower monthly
            payment.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you think you may sell or refinance the home in the first 5-10
            years of the mortgage, you could consider an{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/so-youre-considering-an-adjustable-rate-mortgage/"
            >
              adjustable-rate mortgage (ARM)
            </a>
            . An ARM offers a lower fixed interest rate for a set introductory
            period—typically 5, 7, or 10 years. Once the set introductory period
            ends, the interest rate adjusts (interest rate may increase after
            consummation). The introductory interest rate for ARMs is typically
            lower than the interest rate for a conventional fixed-rate mortgage
            which could make it a great way to save on interest if you know you
            won’t keep the mortgage for long.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you’re not planning on buying a home for a while, improving your
            credit score is a tried and true way of increasing your chances of
            qualifying for a lower interest rate. By reducing your{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/3-most-important-numbers-mortgage-application/"
            >
              debt-to-income ratio (DTI)
            </a>
            , lenders will see that you comfortably afford your mortgage and may
            be more willing to offer a lower interest rate.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            How much home can I afford?
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Once again, the easiest way to do this is with a calculator! To know
            if a home is in your budget, try out our{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/how-much-house-can-I-afford/"
            >
              home affordability calculator
            </a>
            . This calculator will take a few inputs from you, like income and
            savings, and let you know the maximum amount of home you can afford.
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
            Next steps to buying a house
          </h2>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            There are{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/steps-to-buying-a-house/"
            >
              8 steps to buying a house
            </a>{" "}
            and by using this calculator you’ve completed step 2 (calculating
            your home affordability) and maybe even step 1 (getting your
            finances in order).
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            The next step is getting pre-approved. A mortgage pre-approval with
            Better Mortgage takes as little as 3-minutes and doesn’t impact your
            credit score. It’s a free, no-commitment way to see how much home
            you can buy, the mortgages you qualify for, and the range of
            interest rates you’ll be offered.
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            If you’re ready to buy a home now, our{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/content/the-definitive-home-buying-checklist/"
            >
              definitive home buying checklist
            </a>{" "}
            can walk you through everything you need to know to get the home you
            want. With your Better Mortgage pre-approval letter in hand, you’ll
            be able to show sellers and real estate agents that you mean
            business—giving you an edge over homebuyers that don’t have this
            kind of proof that they’re financially ready to purchase. And by
            working with an agent from Better Real Estate and funding with
            Better Mortgage, you’ll save $2,000 on closing costs, and save up to
            $8,200 on average over the life of your loan.**
          </p>
          <hr className="my-12 border-t border-strokeDivider" />
          <section>
            <div>
              <h2 className="font-thin text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-4xl md:tracking-tight">
                More resources
              </h2>
              <div className="flex flex-col justify-between gap-14 pt-[36px] md:flex-row">
                <div className="rounded-lg px-10 py-6 border border-strokeDivider flex-1">
                  <img
                    alt="Get pre-approved to see how much you can borrow"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
                  />
                  <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-[20px] text-interactiveForegroundSecondary">
                    <span>Get pre-approved to see how much you can borrow</span>
                  </p>
                  <a
                    className="focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary block mt-6 font-bold no-underline hover:underline"
                    href="/preapproval/nxt-purchase?utm_source=website&amp;utm_medium=webpage&amp;utm_campaign=calculator&amp;utm_content=mortgage-calculator"
                  >
                    Get started →
                  </a>
                  <p className="font-normal leading-body m-0 p-0 text-left text-[14px] text-textSecondary">
                    Won’t impact your credit
                  </p>
                </div>
                <div className="rounded-lg px-10 py-6 border border-strokeDivider flex-1">
                  <img
                    alt="See today’s rates in your area"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
                  />
                  <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-[20px] text-interactiveForegroundSecondary">
                    <span>See today’s rates in your area</span>
                  </p>
                  <a
                    className="focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary block mb-xs mt-6 font-bold no-underline hover:underline"
                    href="/mortgage-rates"
                  >
                    See rates →
                  </a>
                </div>
                <div className="rounded-lg px-10 py-6 border border-strokeDivider flex-1">
                  <img
                    alt="Find out your max homebuying budget"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
                  />
                  <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-[20px] text-interactiveForegroundSecondary">
                    <span>Find out your max homebuying budget</span>
                  </p>
                  <a
                    className="focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary block mb-xs mt-6 font-bold no-underline hover:underline"
                    href="/how-much-house-can-i-afford"
                  >
                    Try our mortgage calculator →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="pb-lg m-auto max-w-screen-2xl justify-between px-6 md:px-10">
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[13px]">
            *See{" "}
            <a
              className="font-normal underline focus:outline-secondary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-secondary"
              href="/faq/rates/whats-the-fine-print-better-real-estate/"
            >
              Better Real Estate discount terms and conditions
            </a>
            .
          </p>
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-[13px]">
            **The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
            fixed-rate mortgage product with Better Mortgage’s own offered rate
            for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
            based on conventional, conforming fully-amortizing home purchase
            loans for borrowers with a loan-to-value of 80 percent and with
            excellent credit. Better Mortgage’s offered rate is based on pricing
            output for a 30-year fixed-rate mortgage product with a 30-day lock
            period for a single-family, owner-occupied residential property and
            a borrower with excellent (760 FICO) credit and a loan-to-value
            ratio of 80 percent. Individual savings could vary based on current
            market rates, property type, loan amount, loan-to-value, credit
            score, debt-to-income ratio and other variables.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default mortgageCalculator;
