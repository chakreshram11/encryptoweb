// import React from "react";
// import { Link } from "react-router-dom";

// const cipherCategories = [
//   {
//     title: "Transform",
//     tools: [
//       "ROT13 Cipher", "Atbash Cipher", "Rail Fence Cipher", "Columnar Transposition Cipher", "Scytale Cipher", "Route Cipher", "Zig-Zag Cipher"
//     ],
//     path: "/transform"
//   },
//   {
//     title: "Alphabets",
//     tools: [
//       "Letter Frequency Analysis", "Bacon’s Cipher", "Custom Alphabet Encoding", "Polygraphic Substitution", "Beaufort Cipher", "Homophonic Substitution Cipher"
//     ],
//     path: "/alphabets"
//   },
//   {
//     title: "Ciphers",
//     tools: [
//       "Caesar Cipher", "Vigenère Cipher", "XOR Cipher", "Affine Cipher", "Playfair Cipher", "Hill Cipher", "Vernam Cipher (One-Time Pad)", "Gronsfeld Cipher", "Beaufort Cipher", "Autokey Cipher", "Running Key Cipher"
//     ],
//     path: "/ciphers"
//   },
//   {
//     title: "Polybius Square Ciphers",
//     tools: ["Standard Polybius Square", "Bifid Cipher", "Trifid Cipher", "ADFGVX Cipher", "ADFGX Cipher"],
//     path: "/polybius-square"
//   },
//   {
//     title: "Encoding",
//     tools: ["Base64 Encoding/Decoding", "URL Encoding/Decoding", "Morse Code Encryption", "ASCII Encoding", "Base32 Encoding", "Base58 Encoding", "Base91 Encoding", "UUEncoding", "Quoted-Printable Encoding", "Punycode Encoding"],
//     path: "/encoding"
//   },
//   {
//     title: "Modern Cryptography",
//     tools: ["AES", "DES", "3DES", "Blowfish", "Twofish", "ChaCha20", "Salsa20", "Camellia Cipher", "Serpent Cipher", "IDEA"],
//     path: "/modern-crypto"
//   },
//   {
//     title: "Data Format",
//     tools: ["Binary to Text Encoding", "Hex to ASCII Encoding", "Base16 Encoding", "EBCDIC to ASCII Conversion", "UTF-8 Encoding"],
//     path: "/data-format"
//   },
//   {
//     title: "Encryption / Encoding",
//     tools: ["One-Time Pad Encryption", "RC4 Cipher", "Feistel Network", "Rabbit Cipher", "CAST-128 Cipher", "CAST-256 Cipher"],
//     path: "/encryption-encoding"
//   },
//   {
//     title: "Public Key Cryptography",
//     tools: ["RSA Encryption", "ECC", "Diffie-Hellman Key Exchange", "ElGamal Encryption", "Paillier Cryptosystem", "Goldwasser-Micali Cryptosystem", "NTRUEncrypt"],
//     path: "/public-key-crypto"
//   }
// ];

// const CipherTools = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center">
//       <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Cipher Tools</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {cipherCategories.map((category, index) => (
//           <Link
//             key={index}
//             to={category.path}
//             className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform"
//           >
//             <h2 className="text-xl font-semibold text-blue-400 mb-2">{category.title}</h2>
//             <ul className="text-gray-400 text-sm">
//               {category.tools.slice(0, 4).map((tool, i) => (
//                 <li key={i}>• {tool}</li>
//               ))}
//               {category.tools.length > 4 && <li className="text-blue-500">...more</li>}
//             </ul>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CipherTools;

import { title } from "framer-motion/client";
import React from "react";
import { useNavigate } from "react-router-dom";

const cipherCategories = [
  { title: "Transform", tools: ["ROT13 Cipher", "Atbash Cipher", "Rail Fence Cipher"], path: "transform" },
  { title: "Alphabets", tools: ["Letter Frequency Analysis", "Bacon’s Cipher", "Custom Alphabet Encoding"], path: "alphabets" },
  { title: "Ciphers", tools: ["Caesar Cipher", "Vigenère Cipher", "XOR Cipher"], path: "ciphers" },
  { title: "Encoding", tools: ["Base64 Encoding/Decoding", "URL Encoding/Decoding", "Morse Code Encryption", "ASCII Encoding", "Base32 Encoding", "Base58 Encoding", "Base91 Encoding", "UUEncoding", "Quoted-Printable Encoding", "Punycode Encoding"], path: "encoding" },

];

const CipherTools = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Cipher Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cipherCategories.map((category) => (
          <div
            key={category.title}
            onClick={() => navigate(`/cipher-tool/${category.path}`)}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-2">{category.title}</h2>
            <ul className="text-gray-400 text-sm">
              {category.tools.slice(0, 3).map((tool, i) => (
                <li key={i}>• {tool}</li>
              ))}
              {category.tools.length > 3 && <li className="text-blue-500">...more</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CipherTools;
