import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const GetStarted = () => {
  const steps = [
    {
      number: "01",
      icon: <img src={userIcon} alt="User Icon" className="w-10 h-10" />,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      number: "02",
      icon: <img src={packageIcon} alt="Package Icon" className="w-10 h-10" />,
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      number: "03",
      icon: <img src={rocketIcon} alt="Rocket Icon" className="w-10 h-10" />,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section className="text-center py-20 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-9/12 mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white rounded-2xl p-10 shadow-xs hover:-translate-y-2 transition-transform"
          >
            <div className="absolute top-4 right-4 bg-[#5537f7] text-white text-xs px-3 py-1 rounded-full">
              {step.number}
            </div>
            <div className="w-16 h-16 mx-auto mb-5 bg-purple-100 text-[#5537f7] flex items-center justify-center rounded-full">
              {step.icon}
            </div>
            <h3 className="text-lg mb-2 font-semibold">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;