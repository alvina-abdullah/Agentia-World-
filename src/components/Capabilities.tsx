"use client";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Code, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    icon: <Brain size={32} className="text-white" />,
  },
  {
    title: "Multi-Modal Intelligence",
    description:
      "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    icon: <MessageSquare size={32} className="text-white" />,
  },
  {
    title: "Cognitive Integration",
    description:
      "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    icon: <Code size={32} className="text-white" />,
  },
  {
    title: "Ethical AI Framework",
    description:
      "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    icon: <ShieldCheck size={32} className="text-white" />,
  },
];

export default function Capabilities() {
  return (
    <div id="agents" className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white py-16 px-8 text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        Neural Capabilities
      </h2>
      <p className="text-gray-400 mt-2 mb-10">
        Powered by next-generation artificial intelligence
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-gray-900 to-black shadow-xl rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex flex-col items-center gap-4 ">
              <div className=" p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
