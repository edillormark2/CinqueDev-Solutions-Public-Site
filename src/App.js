import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";

import "./App.css";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurSoftwares from "./pages/OurSoftwares";
import CustomSoftwarePlan from "./pages/CustomSoftwarePlan";
import ScheduleConsultation from "./pages/ScheduleConsultation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col min-h-full">
          <div className="fixed bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <DesktopNavbar />
          </div>
          <main className="flex-grow bg-gray-100 dark:bg-main-dark-bg mt-12 sm:mt-12">
            <ToastContainer className="toast-container" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/custom-software-plan"
                element={<CustomSoftwarePlan />}
              />
              <Route
                path="/services/ready-softwares"
                element={<OurSoftwares />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/schedule-a-free-consultation"
                element={<ScheduleConsultation />}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
