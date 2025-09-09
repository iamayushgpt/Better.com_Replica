import React from "react";

export default function ExpertOpinions() {
  const experts = [
    {
      id: 1,
      question: "Should I wait for a better market?",
      answer:
        "If you’re buying a home, focus on what works for your budget and lifestyle right now instead of waiting for the ‘perfect’ market. There are program...",
      name: "River Robertson",
      role: "Loan Consultant",
      nmls: "#1698258",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      question: "Is it true rates will drop?",
      answer:
        "We’ve been hearing that for 3+ years, and many buyers have missed out on their dream home waiting for that ‘magic moment.’ Nobody has a...",
      name: "David Schultz",
      role: "Loan Consultant",
      nmls: "#1952787",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      question: "How should buyers handle scary market headlines?",
      answer:
        "Often, the media headlines are inaccurate and sensationalized. Connect with a licensed loan officer who can help you sort through the noise and give...",
      name: "Libby Owens",
      role: "Senior Loan Consultant",
      nmls: "#2089666",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div className="bg-[#faf9f7] py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-44">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900">
            Expert opinions
          </h2>
          <span className="text-gray-500 text-xs sm:text-sm">1/1</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-[#edf7f1] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {expert.question}
                </h3>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {expert.answer}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {expert.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {expert.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    NMLS {expert.nmls}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
