import React from "react";

const steps = [
  {
    number: "1",
    title: "Share a few details",
    description:
      "Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won’t affect your credit score."
  },
  {
    number: "2",
    title: "See your homebuying budget",
    description:
      "In minutes, we’ll show you exactly how much you can get pre-approved for—so you know your price range before you shop."
  },
  {
    number: "3",
    title: "Get your pre-approval letter",
    description:
      "Download your letter instantly and start touring homes with confidence (and a stronger offer in hand)."
  }
];

export default function PreApprovalSteps() {
  return (
    <div className="bg-[#fdfcf9] py-28 px-44  md:px-12 lg:px-20 max-w-screen">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
        Simple steps to get pre-approved
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
              {step.number}
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
