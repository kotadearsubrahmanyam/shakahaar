import { motion } from "framer-motion";
import Section from "./components/layout/Section";
import Container from "./components/layout/Container";
import { fadeUp } from "./utils/motionPresets";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Services from "./sections/Services";
import Health from "./sections/Health";
import Testimonials from "./sections/customer_review";
import QRCode from "./sections/QRCode";
import CTA from "./sections/CTA";
function App() {
  return (
    <div className="min-h-screen bg-softgray pt-16">
  <Navbar />
  <Hero />
  <Features />
  <Services />
  <Health />
  <Testimonials />
  <QRCode />
  <CTA />
</div>
  );
}

export default App;