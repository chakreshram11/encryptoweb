import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">Welcome to ENCRYPTOWEB</h1>
      <p className="text-base md:text-lg text-gray-300 mb-6 text-center px-4 md:px-0">
        Explore various encryption and Linux tools to enhance security and efficiency.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Cipher Tools Card */}
        <Link to="/ciphertools" className="group block bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-blue-400">Cipher Tools</h2>
          <p className="text-gray-400 text-sm md:text-base">Encrypt, decrypt, and analyze ciphers with our powerful tools.</p>
        </Link>
        
        {/* Linux Tools Card */}
        <Link to="/linuxtools" className="group block bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-green-400">Linux Tools</h2>
          <p className="text-gray-400 text-sm md:text-base">Essential Linux tools for system administration and security.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
