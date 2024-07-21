import Image from "next/image";
import React from "react";

const features = [
  "Powerful online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

function Features() {
  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/Illustration2.webp"
              alt="VPN Illustration"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="text-black-500 self-start list-inside list-disc ml-8">
            {features.map((feature) => (
              <li className="relative circle-check custom-list" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
