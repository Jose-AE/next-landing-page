import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const REVIEWS = [
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
];

const Pricing = () => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trusted by Thousands of Happy Customer{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="flex sm:flex-row flex-col p-10  gap-10">
            {REVIEWS.map((rev, i) => (
              <div className="px-3  flex items-stretch" key={i}>
                <div className="border-2 border-gray-500 hover:border-primary transition-all rounded-lg p-8 flex flex-col">
                  <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                    <div className="flex order-2 xl:order-1">
                      <FaUser className="h-[50px] w-[50px]  p-2" />
                      <div className="flex flex-col ml-5 text-left">
                        <p className="text-lg text-black-600 capitalize">
                          {rev.name}
                        </p>
                        <p className="text-sm text-black-500 capitalize">
                          {rev.city},{rev.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                      <p className="text-sm">{rev.rating}</p>
                      <span className="flex ml-4">
                        <FaStar className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-left">“{rev.testimoni}”.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
