import React from "react";

const MortgageQuestionsArea = () => {
  return (
    <section className="section overflow-hidden max-md:px-2  w-full lg:pb-32">
      <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
        <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
          <h2 className=" text-textPrimary leading-heading m-0 p-0  text-[44px] min-[485px]:text-6xl md:text-5xl md:tracking-tight w-full max-w-lg  tracking-tight">
            Got questions?
            <br />
            We've got answers
          </h2>
          <div className="flex gap-1 lg:gap-6 ">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-[12px] min-[480px]:text-base  leading-normal  transition-all ease-in-out duration-200  hover:shadow-secondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-4 min-[480px]:px-6 py-3 w-auto shadow-secondary shadow-[0_0_0_4px_inset]">
              Our products
            </button>
            <button className="inline-flex items-center justify-center border whitespace-nowrap rounded-full text-[12px] min-[480px]:text-base  leading-normal transition-all ease-in-out duration-200  -strokeDivider text-interactiveForegroundInversePrimary hover:shadow-secondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-4 min-[480px]:px-6 py-3 w-auto">
              Calculators
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-[12px] min-[480px]:text-base  leading-normal transition-all ease-in-out duration-200 border-[1px]  text-interactiveForegroundInversePrimary hover:shadow-secondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-4 min-[480px]:px-6 py-3 w-auto">
              Guides &amp; FAQs
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-8">
          <div className="flex gap-8 lg:max-h-[350px]  flex-col lg:flex-row ">
            <a
              href=""
              className="flex rounded-lg w-full lg:max-w-[450px]  gap-6 p-10 flex-col bg-successBackground "
            >
              <div className="flex font-medium flex-col gap-2">
                <h1 className="text-xl md:text-[27px] pr-3 tracking-tighter  leading-heading ">
                  Buying your first home with Better
                </h1>
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                alt="First Home"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-lg object-cover h-[160px] md:h-[130px]"
                style={{ color: "transparent" }}
                src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
              />
            </a>
            <a
              href=""
              className="flex w-full  rounded-lg  gap-6 p-10 flex-col md:flex-row bg-successBackground    "
            >
              <div className="flex font-medium flex-col gap-2">
                <h1 className="text-[27px] tracking-tighter leading-heading ">
                  One Day Mortgage <sup>1</sup>
                </h1>
                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                  Kick your home loan into hyperdrive. Going from locked rate to
                  Commitment Letter takes weeks for traditional lenders. We do
                  it in a single day. Traditional lenders deliver a Commitment
                  Letter in a few weeks.<sup>1</sup>
                </p>
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full h-[150px] md:h-full">
                <img
                  alt="One day mortgage"
                  rel="preconnect"
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-base object-cover h-[100%] rounded-lg"
                  style={{ color: "transparent" }}
                  src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                />
              </div>
            </a>
          </div>
          <div className="flex gap-8 flex-col lg:flex-row-reverse lg:max-h-[330px]  ">
            <a
              href=""
              className="flex rounded-lg w-full lg:max-w-[450px]  gap-6 p-10 flex-col bg-successBackground  "
            >
              <div className="flex font-medium flex-col gap-2">
                <h1 className="text-[27px] pr-3 tracking-tighter leading-heading ">
                  Insurance
                </h1>
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                alt="First Home"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-lg object-cover h-[160px] md:h-[130px]"
                style={{ color: "transparent" }}
                src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
              />
            </a>
            <a
              href=""
              className="flex w-full rounded-lg  gap-6 p-10 flex-col md:flex-row-reverse bg-successBackground    "
            >
              <div className="flex font-medium flex-col gap-2">
                <h1 className="text-[27px] tracking-tighter leading-heading ">
                  BETTER HELOC
                </h1>
                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
                  Introducing One Day HELOC™—your express lane to getting cash
                  from your home with our Home Equity Line of Credit<sup>2</sup>
                  . Access up to 90% of your home equity as cash in as little as
                  7 days.<sup>3</sup>
                </p>
                <div className="group">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="w-full h-[150px] md:h-full">
                <img
                  alt="One day mortgage"
                  rel="preconnect"
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-base object-cover h-[100%] rounded-lg"
                  style={{ color: "transparent" }}
                  src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageQuestionsArea;
