import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // install: npm i lucide-react

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I calculate my mortgage payment?",
      answer:
        "To calculate it manually, you can use this formula: M = P × [ i × (1 + i)^n ] ÷ [(1 + i)^n − 1]. In this equation, M is your monthly payment, P is the loan amount, i is the monthly interest rate (annual rate ÷ 12), and n is the total number of payments over the life of the loan. While helpful to know, most people prefer an online calculator that also factors in property taxes, homeowners insurance, HOA fees, and PMI.",
    },
    {
      question: "Are mortgages compounded monthly?",
      answer:
        "Yes. In the U.S., fixed-rate mortgages are structured with monthly amortization, meaning interest is compounded monthly. Each payment reduces both principal and interest. Payments may also include property taxes and insurance, collected in escrow accounts.",
    },
    {
      question: "What do closing costs typically cost?",
      answer:
        "Closing costs usually range from 2% to 5% of the loan amount. These may include fees for appraisals, title insurance, lender fees, taxes, and more.",
    },
    {
      question: "What is the 2% rule for mortgage payoff?",
      answer:
        "The 2% rule is a guideline suggesting you should refinance if the interest rate is 2% lower than your current rate. This helps ensure savings outweigh refinancing costs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-44 mx-auto flex flex-col lg:flex-row py-12 sm:py-16 lg:py-20 bg-[#FFFDFA] gap-6 lg:gap-0">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[50%] font-semibold mb-4 lg:mb-6">
        Mortgage Calculator FAQs
      </h2>

      <div className="space-y-3 sm:space-y-4 mt-0 lg:mt-4 w-full lg:w-[70%]">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-3 sm:pb-4">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-start sm:items-center text-left gap-4"
            >
              <span className="text-base sm:text-lg lg:text-2xl font-medium text-gray-800 leading-tight">
                {faq.question}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0 mt-1 sm:mt-0" />
              ) : (
                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0 mt-1 sm:mt-0" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx ? "max-h-96 mt-2 sm:mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
