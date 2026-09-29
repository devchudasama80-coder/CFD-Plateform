import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar";
import Traders from "./components/traders";
import Partners from "./components/partners";
import Challenges from "./components/challenges";
import Embedded from "./components/embedded";
import Careers from "./components/careers";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Traders />} />
          <Route path="/traders" element={<Traders />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;