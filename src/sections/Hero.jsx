import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionPresets";

function Hero() {
  return (
    <Section
      id="home"
      className="pt-40 md:pt-44 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-maroon/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-semibold text-darktext leading-tight">
              Pure Vegetarian.
              <br />
              Pure Intent.
            </h1>

            <p className="text-xl md:text-2xl font-medium text-neutral-700 max-w-xl leading-relaxed">
              Elegant vegetarian catering crafted with clarity, balance,
              and uncompromised quality.
            </p>

            <a
              href="#services"
              className="inline-block bg-gold text-black text-bold px-6 py-3 rounded-3xl text-3xl hover:opacity-100 transition-all"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.25 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/5">
              <img
                src="/images/hero.webp"
                alt="Vegetarian catering"
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
            </div>

            <a
              href="https://chat.whatsapp.com/YOUR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-maroon text-white text-3xl px-10 py-4 rounded-3xl  font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Your Event
            </a>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}

export default Hero;