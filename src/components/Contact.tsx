export default function ContactForm() {
    return (
      <div id="contact" className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-2 mb-10">
          Ready to transform your business with AI?
        </p>
  
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
  
    
          
  
          {/* Form */}
          <form className="w-full max-w-lg bg-gray-900 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-black text-white rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-black text-white rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-4 w-full p-3 bg-black text-white rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              className="mt-4 w-full p-3 bg-black text-white rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-500 h-32"
            ></textarea>
  
            <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-80">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  