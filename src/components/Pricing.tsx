'use client';

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$499",
    duration: "/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
    buttonStyle: "border border-gray-500 hover:bg-gray-800",
  },
  {
    name: "Professional",
    price: "$999",
    duration: "/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
    highlight: true,
    buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
  },
  {
    name: "Enterprise",
    price: "$Custom",
    duration: "",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
    buttonStyle: "border border-gray-500 hover:bg-gray-800",
  },
];

export default function PricingSection() {
  return (
    <div id="pricing" className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        Choose Your Plan
      </h2>
      <p className="text-gray-400 mt-2 mb-10">
        Scale your AI capabilities with our flexible pricing
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 border border-gray-800 shadow-lg ${
              plan.highlight ? "bg-gradient-to-b from-purple-900 to-black border-purple-500" : "bg-gray-900"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-2">
              {plan.price} <span className="text-lg font-normal text-gray-400">{plan.duration}</span>
            </p>
            <ul className="mt-6 mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle size={18} className="text-purple-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-md font-medium transition ${plan.buttonStyle}`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
