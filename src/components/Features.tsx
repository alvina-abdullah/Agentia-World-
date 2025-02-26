'use client';
import { Brain, Code, Cpu, Globe } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
    const features = [
      { icon: <Brain size={40} />, title: 'Neural Networks', description: 'Advanced neural architectures for complex decision making' },
      { icon: <Cpu size={40} />, title: 'Deep Learning', description: 'Sophisticated deep learning models for pattern recognition' },
      { icon: <Code size={40} />, title: 'Advanced ML', description: 'Cutting-edge machine learning algorithms' },
      { icon: <Globe size={40} />, title: 'Global Scale', description: 'Distributed AI processing across global networks' }
    ];
  
    return (
      <section id="technology" className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Powered by Advanced AI
          </h2>
          <p className="text-gray-400 mt-2">Built on cutting-edge neural architectures</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Features;