'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div 
    id='agentia'
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/5119498.jpg')" }} // Change this to your image path
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm font-semibold uppercase bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full"
        >
          Powered by Panaversity
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold mt-4"
        >
          <span className=" text-transparent drop-shadow-lg bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 to-blue-500 ">Enterprise AI Agents</span>
          <br /> <span  className="text-transparent drop-shadow-lg bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 to-blue-500 " >for the Future</span>
        </motion.h1>
        
        {/* AI Chat Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 flex items-center bg-gray-900 px-4 py-3 rounded-lg shadow-lg w-full max-w-xl"
        >
        
<div className='text-white bg-gray-900 bg-opacity-80 mb-2 flex items-center rounded-lg shadow-lg p-4 sm:p-5 gap-3 sm:gap-4 border border-white w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px]"'>
<span className=" text-3xl">🤖</span>
<TypeAnimation
  sequence={[
    'I can help optimize your workflows with neural networks',
    500,
    'Revolutionize Your Business with AI-Driven Agents',
    500,
    'Let me assist you with advanced data analytics.',
    500,
    'Would you like to explore our AI integration solutions?',
    500,
    'Empower Your Business with Smart Automation Tools',
    500,

  ]}
  style={{ fontSize: '15px' }}
  repeat={Infinity}
/>
</div>
</motion.div>
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-6 flex gap-4"
        >
          <a 
            href="#deploy"
            className=" text-white bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-lg rounded-lg font-semibold shadow-lg hover:opacity-80"
          >
            Deploy Your AI Agent →
          </a>
          <a 
            href="#demo"
            className=" text-white px-6 py-3 text-lg rounded-lg font-semibold shadow-lgbg-transparent border border-purple-600 bg-gradient-to-r from-purple-700 to-blue-500  hover:bg-purple-600 hover:border-white font-semibold"
          >
            Watch Demo
          </a>
        </motion.div>
      </section>
    
    </div>
  
  );
};

export default HomePage;