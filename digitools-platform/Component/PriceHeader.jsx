import React from 'react';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 me-2 inline-block text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PriceHeader = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700">Starter</h3>
            <p className="text-gray-400 text-sm mt-1">
              Perfect for getting started
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-600 text-left">
              <li className="flex items-center"><CheckIcon />Access to 10 free tools</li>
              <li className="flex items-center"><CheckIcon />Basic templates</li>
              <li className="flex items-center"><CheckIcon />Community support</li>
              <li className="flex items-center"><CheckIcon />1 project per month</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-[#5537f7] text-white font-semibold mt-auto hover:bg-purple-700 transition">
              Get Started Free
            </button>
          </div>
          <div className="relative rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-purple-600 to-indigo-600 scale-105">
            
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full text-gray-800">
              Most Popular
            </span>

            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm opacity-80 mt-1">
              Best for professionals
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="opacity-80">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-left">
              <li className="flex items-center"><CheckIcon />Access to all premium tools</li>
              <li className="flex items-center"><CheckIcon />Unlimited templates</li>
              <li className="flex items-center"><CheckIcon />Priority support</li>
              <li className="flex items-center"><CheckIcon />Unlimited projects</li>
              <li className="flex items-center"><CheckIcon />Cloud sync</li>
              <li className="flex items-center"><CheckIcon />Advanced analytics</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-white text-[#5536f6] font-semibold hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Enterprise
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              For teams and businesses
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-600 text-left">
              <li className="flex items-center"><CheckIcon />Everything in Pro</li>
              <li className="flex items-center"><CheckIcon />Team collaboration</li>
              <li className="flex items-center"><CheckIcon />Custom integrations</li>
              <li className="flex items-center"><CheckIcon />Dedicated support</li>
              <li className="flex items-center"><CheckIcon />SLA guarantee</li>
              <li className="flex items-center"><CheckIcon />Custom branding</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-[#5537f7] text-white font-semibold hover:bg-purple-700 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceHeader;