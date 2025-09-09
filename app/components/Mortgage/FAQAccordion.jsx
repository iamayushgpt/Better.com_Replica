import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react for icons

const faqs = [
  {
    question:
      "How to find your payments with a mortgage calculator for home loans",
    answer:
      "A mortgage calculator for home loans can show your true monthly housing costs before you commit to a home loan.",
  },
  {
    question: "What you can do with this home payment calculator",
    answer:
      "Home shoppers balance numbers: home prices, loan sizes, down payments, interest rates, property taxes, insurance, and so on.",
  },
  {
    question: "What does a mortgage payment include?",
    answer:
      "A mortgage payment typically includes principal, interest, property taxes, homeowners insurance, and sometimes HOA fees.",
  },
  {
    question: "Mortgage payment formula",
    answer:
      "M = P[r(1+r)^n] / [(1+r)^n – 1], where M is monthly payment, P is principal, r is monthly interest rate, and n is number of payments.",
  },
  {
    question: "How to lower monthly mortgage payments",
    answer:
      "Increase down payment, extend loan term, refinance at a lower rate, or reduce other housing expenses.",
  },
  {
    question: "Types of mortgage loans",
    answer:
      "Fixed-rate mortgages, adjustable-rate mortgages (ARM), FHA loans, VA loans, USDA loans, and jumbo loans.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-44 flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-3 sm:mb-4">
          Mortgage Calculator with PMI & Taxes
        </h1>
        <p className="text-center w-full sm:w-4/5 md:w-2/3 flex flex-col text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 space-y-2 sm:space-y-0">
          A mortgage calculator for home loans can show your true monthly
          housing costs before you commit to a home loan.
          <span>
            {" "}
            Home shoppers balance a lot of numbers: home prices, loan sizes,
            down payments, interest rates, property tax rates, mortgage
            insurance premiums, and so on.
          </span>
          <span>
            {" "}
            A mortgage payment calculator shows how these variables come
            together to shape a home's monthly payment.
          </span>
          <span>
            {" "}
            These tools are invaluable for comparing loan scenarios — and Better
            makes it easy by doing the heavy lifting for you. With access to an
            extensive network of investors, Better essentially “shops the
            market” on your behalf to find competitive rates, saving you the
            time and stress of lender-hunting. In fact, The Wall Street Journal
            named Better the Best Lender for Affordability in 2024.
          </span>
        </p>
      </div>
      <div className="w-full">
        <div className="divide-y divide-gray-200 border-t border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="py-3 sm:py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between py-3 sm:py-4 items-center text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
