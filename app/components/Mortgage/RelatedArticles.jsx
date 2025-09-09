// RelatedArticles.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "How to qualify for a mortgage? Learn key requirements",
    description:
      "Learn how to qualify for a mortgage by understanding key factors, loan types, and tips. Compare options and explore…",
    link: "#",
  },
  {
    title: "Second mortgage vs. refinance: Your best option",
    description:
      "Weighing a second mortgage versus refinance? Learn the main differences, pros and cons, and how to choose the…",
    link: "#",
  },
  {
    title: "How do HELOC payments work? Tips, periods, and penalties",
    description:
      "Learn how HELOC payments work, including the draw and repayment periods, unexpected fees to avoid, an…",
    link: "#",
  },
  {
    title: "What is PMI and how can you avoid it?",
    description:
      "Private Mortgage Insurance can increase your monthly payment. Learn when it applies and strategies to remove it.",
    link: "#",
  },
  {
    title: "First-time homebuyer tips",
    description:
      "Buying your first home? Discover practical tips for budgeting, finding the right property, and applying for a loan.",
    link: "#",
  },
  {
    title: "Should you refinance in 2025?",
    description:
      "Rates are changing. Understand the pros and cons of refinancing your mortgage in today’s market.",
    link: "#",
  },
  {
    title: "Understanding closing costs",
    description:
      "Closing costs often surprise buyers. Learn what’s included and how to negotiate or reduce these expenses.",
    link: "#",
  },
  {
    title: "Fixed vs. adjustable-rate mortgages",
    description:
      "Which is better for you? Explore the differences between fixed and adjustable-rate mortgages before you decide.",
    link: "#",
  },
  {
    title: "Steps to improve your credit score",
    description:
      "A higher credit score means better mortgage options. Here’s how to boost your score effectively.",
    link: "#",
  },
];

export default function RelatedArticles() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(articles.length / 3);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f6faf7] py-12 px-6 text-center overflow-hidden">
      {/* Heading */}

      {/* Controls */}
      <div className="flex items-center justify-between px-56  gap-4 mb-6">
        <div className="text-3xl  font-semibold text-gray-900">
          <span>Related articles</span>
        </div>
        <div className="flex items-center ">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full flex justify-center items-center hover:bg-gray-200 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-600">
            {page + 1}/{totalPages}
          </span>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className="flex flex-none w-full justify-center gap-6 px-2"
            >
              {articles.slice(i * 3, i * 3 + 3).map((article, j) => (
                <div
                  key={j}
                  className="w-80  border border-gray-300 rounded-xl shadow-sm p-6 text-left"
                >
                  <h3 className="text-lg   font-semibold text-gray-600 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    className="text-green-700 font-medium flex items-center gap-1 hover:underline"
                  >
                    Read now →
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-md transition-colors">
          Visit our learning center
        </button>
      </div>
    </div>
  );
}
