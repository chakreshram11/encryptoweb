// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import CipherProcessor from "../components/CipherProcessor";

// const cipherData = {
//   transform: ["ROT13 Cipher", "Atbash Cipher", "Rail Fence Cipher"],
//   alphabets: ["Letter Frequency Analysis", "Bacon’s Cipher", "Custom Alphabet Encoding"],
//   ciphers: ["Caesar Cipher", "Vigenère Cipher", "XOR Cipher"],
// };

// const CipherToolPage = () => {
//   const { category } = useParams();
//   const tools = cipherData[category] || [];
//   const [selectedTool, setSelectedTool] = useState(tools[0] || "");

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-white mb-6 capitalize">{category.replace("-", " ")}</h1>

//       {/* Sub-tool Dropdown Selection */}
//       <div className="mb-6">
//         <select
//           className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
//           value={selectedTool}
//           onChange={(e) => setSelectedTool(e.target.value)}
//         >
//           {tools.map((tool) => (
//             <option key={tool} value={tool}>
//               {tool}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Cipher Processor */}
//       {selectedTool && <CipherProcessor tool={selectedTool} />}
//     </div>
//   );
// };

// export default CipherToolPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CipherProcessor from "../components/CipherProcessor";

const cipherData = {
  transform: ["ROT Cipher", "Atbash Cipher", "Rail Fence Cipher"],
  alphabets: ["Letter Frequency Analysis", "Bacon’s Cipher", "Custom Alphabet Encoding"],
  ciphers: ["Caesar Cipher", "Vigenère Cipher", "XOR Cipher"],
};

const CipherToolPage = () => {
  const { category } = useParams();
  const tools = cipherData[category] || [];
  const [selectedTool, setSelectedTool] = useState("");

  // Set default tool when category changes
  useEffect(() => {
    setSelectedTool(tools.length > 0 ? tools[0] : "");
  }, [category, tools]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6 capitalize">
        {category.replace("-", " ")}
      </h1>

      {/* Dropdown only if tools exist */}
      {tools.length > 0 ? (
        <>
          <div className="mb-6">
            <select
              className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
            >
              {tools.map((tool) => (
                <option key={tool} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>

          {/* Render the Cipher Processor */}
          {selectedTool && <CipherProcessor tool={selectedTool} />}
        </>
      ) : (
        <p className="text-red-400 text-lg">No tools available for this category.</p>
      )}
    </div>
  );
};

export default CipherToolPage ;
