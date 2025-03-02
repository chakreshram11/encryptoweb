// import React, { useState } from "react";

// // Function to handle encryption and decryption
// const encryptDecrypt = (text, tool, mode, shift = 13) => {
//   if (!text) return "";

//   switch (tool) {
//     case "ROT Cipher":
//       return text.replace(/[a-zA-Z]/g, (c) =>
//         String.fromCharCode(
//           ((c.charCodeAt(0) - (c >= "a" ? 97 : 65) + (mode === "encrypt" ? shift : 26 - shift)) % 26) +
//             (c >= "a" ? 97 : 65)
//         )
//       );

//     case "Atbash Cipher":
//       return text.replace(/[a-zA-Z]/g, (c) =>
//         String.fromCharCode(
//           (c <= "Z" ? 90 : 122) - (c.charCodeAt(0) - (c <= "Z" ? 65 : 97))
//         )
//       );

//     case "Rail Fence Cipher":
//       return mode === "encrypt"
//         ? text.split("").reverse().join("") // Placeholder
//         : text.split("").reverse().join("");

//     case "Caesar Cipher":
//       return text.replace(/[a-zA-Z]/g, (c) =>
//         String.fromCharCode(
//           ((c.charCodeAt(0) - (c >= "a" ? 97 : 65) + (mode === "encrypt" ? shift : 26 - shift)) % 26) +
//             (c >= "a" ? 97 : 65)
//         )
//       );

//     default:
//       return "Encryption not implemented for this cipher";
//   }
// };

// const CipherProcessor = ({ tool }) => {
//   const [inputText, setInputText] = useState("");
//   const [outputText, setOutputText] = useState("");
//   const [shiftKey, setShiftKey] = useState(13); // Default ROT13

//   return (
//     <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-semibold text-blue-400 mb-2">{tool}</h2>

//       {/* Shift Key Input for ROT Cipher */}
//       {tool === "ROT Cipher" && (
//         <div className="mb-3">
//           <label className="block text-gray-400 mb-1">Shift Key:</label>
//           <input
//             type="number"
//             className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
//             value={shiftKey}
//             onChange={(e) => setShiftKey(Number(e.target.value))}
//             min="1"
//             max="25"
//           />
//         </div>
//       )}

//       {/* Encrypt */}
//       <textarea
//         className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
//         rows="3"
//         placeholder="Enter text..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       ></textarea>
//       <button
//         className="w-full bg-green-500 hover:bg-green-600 py-2 rounded text-white mb-3"
//         onClick={() => setOutputText(encryptDecrypt(inputText, tool, "encrypt", shiftKey))}
//       >
//         Encrypt
//       </button>

//       {/* Decrypt */}
//       <textarea
//         className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
//         rows="3"
//         placeholder="Decrypted text..."
//         value={outputText}
//         readOnly
//       ></textarea>
//       <button
//         className="w-full bg-red-500 hover:bg-red-600 py-2 rounded text-white"
//         onClick={() => setOutputText(encryptDecrypt(inputText, tool, "decrypt", shiftKey))}
//       >
//         Decrypt
//       </button>
//     </div>
//   );
// };

// export default CipherProcessor;


import React, { useState } from "react";

// Function to handle encryption and decryption
const encryptDecrypt = (text, tool, mode, shift = 13) => {
  if (!text) return "";

  switch (tool) {
    case "ROT Cipher":
      return text.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode(
          ((c.charCodeAt(0) - (c >= "a" ? 97 : 65) + (mode === "encrypt" ? shift : 26 - shift)) % 26) +
            (c >= "a" ? 97 : 65)
        )
      );

    case "Atbash Cipher":
      return text.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode(
          (c <= "Z" ? 90 : 122) - (c.charCodeAt(0) - (c <= "Z" ? 65 : 97))
        )
      );

    case "Rail Fence Cipher":
      return mode === "encrypt"
        ? text.split(" ").reverse().join(" ") // Placeholder logic
        : text.split(" ").reverse().join(" ");

    case "Caesar Cipher":
      return text.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode(
          ((c.charCodeAt(0) - (c >= "a" ? 97 : 65) + (mode === "encrypt" ? shift : 26 - shift)) % 26) +
            (c >= "a" ? 97 : 65)
        )
      );

    default:
      return "Encryption not implemented for this cipher";
  }
};

const CipherProcessor = ({ tool }) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [shiftKey, setShiftKey] = useState(13); // Default ROT13

  return (
    <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-blue-400 mb-2">{tool}</h2>

      {/* Shift Key Input for ROT Cipher */}
      {tool === "ROT Cipher" && (
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Shift Key:</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            value={shiftKey}
            onChange={(e) => setShiftKey(Number(e.target.value))}
            min="1"
            max="25"
          />
        </div>
      )}

      {/* Input Text */}
      <textarea
        className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
        rows="3"
        placeholder="Enter text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      {/* Buttons side by side */}
      <div className="flex gap-4 mb-3">
        <button
          className="flex-1 bg-green-500 hover:bg-green-600 py-2 rounded text-white"
          onClick={() => setOutputText(encryptDecrypt(inputText, tool, "encrypt", shiftKey))}
        >
          Encrypt
        </button>

        <button
          className="flex-1 bg-red-500 hover:bg-red-600 py-2 rounded text-white"
          onClick={() => setOutputText(encryptDecrypt(inputText, tool, "decrypt", shiftKey))}
        >
          Decrypt
        </button>
      </div>

      {/* Output Text */}
      <textarea
        className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
        rows="3"
        placeholder="Decrypted text..."
        value={outputText}
        readOnly
      ></textarea>
    </div>
  );
};

export default CipherProcessor;
