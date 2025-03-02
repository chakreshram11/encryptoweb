import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import CipherTools from "./screens/CipherTools";
import LinuxTools from "./screens/LinuxTools";
import CipherToolPage from "./screens/CipherToolPage";

function App() {
  return (
    <Router>
      <Header />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cipher-tool/:category" element={<CipherToolPage />} />
        <Route path="/ciphertools" element={<CipherTools/>} />
        <Route path="/linuxtools" element={<LinuxTools/>} />
      </Routes>
    </div>
      <Footer />
    </Router>
  );
}

export default App;
