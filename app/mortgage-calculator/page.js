"use client";
import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RelatedArticles from "../components/Mortgage/RelatedArticles";
import FAQSection from "../components/Mortgage/FAQSection";
import MortgageRateTrends from "../components/Mortgage/MortgageRateTrends";
import MortgageCalculator from "../components/Mortgage/MortgageCalculator";
import FAQAccordion from "../components/Mortgage/FAQAccordion";
import PreApprovalSteps from "../components/Mortgage/PreApprovalSteps";
import CustomerReviews from "../components/Mortgage/CustomerReviews";
import HomePower from "../components/Mortgage/HomePower";
import ExpertOpinions from "../components/Mortgage/ExpertOpinions";
const mortgageCalculator = () => {
  const [closePopup, setclosePopup] = useState(true);

  useEffect(() => {
    if (!closePopup) {
      document.body.style.overflow = "hidden"; // Prevent body scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore body scroll when modal is closed
    }
  }, [closePopup]);

  const resources = [
    {
      title: "Affordability calculator",
      description:
        "See how much home you can comfortably afford before you start shopping.",
      link: "Calculate my budget →",
    },
    {
      title: "Rent vs. buy calculator",
      description:
        "Wondering if it’s time to buy? Compare the real costs side by side.",
      link: "Compare my costs →",
    },
    {
      title: "HELOC payment calculator",
      description:
        "Know what getting cash from your home could cost before you decide.",
      link: "Estimate my payments →",
    },
    {
      title: "Mortgage rates",
      description:
        "Stay on top of rates so you can lock in the right one at the right time.",
      link: "See today’s rates →",
    },
    {
      title: "HELOC rates",
      description:
        "Compare the latest HELOC rates and understand your options.",
      link: "See today’s rates →",
    },
    {
      title: "Refinance rates",
      description:
        "Check current refi rates to see if lowering your payment is within reach.",
      link: "See today’s rates →",
    },
  ];

  return (
    <div
      className={`${
        !closePopup ? "bg-[#B2B1AF]" : ""
      } py-20 sm:py-32 px-2 sm:px-4 bg-white`}
    >
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
      <MortgageCalculator />
      <PreApprovalSteps />
      <HomePower />

      <FAQAccordion />
      <CustomerReviews />
      <HomePower quote={`Get your custom quote`} />
      <ExpertOpinions />
      <MortgageRateTrends />

      <FAQSection />
      <section className="bg-[#FFFDFA] mx-auto px-4 sm:px-8 md:px-16 lg:px-40 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl flex flex-col sm:flex-row font-semibold mb-6 sm:mb-8">
          More resources:{" "}
          <span className="text-gray-900 sm:ml-2">Rates & Calculators</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {item.description}
              </p>
              <a
                href="#"
                className="text-green-700 font-medium hover:underline text-sm sm:text-base"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </section>
      <RelatedArticles />
      <HomePower />

      <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-36 font-sans text-xs sm:text-sm py-12 sm:py-20">
        <p className="text-center leading-relaxed">
          Mortgage Calculator is for estimation purposes only. Real payments
          will vary and may include (but are not limited to) the following fees:
          home insurance, HOA payments, taxes, regional fees, etc. All
          calculations assume eligibility for the selected loan. This is not a
          commitment to lend.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default mortgageCalculator;
