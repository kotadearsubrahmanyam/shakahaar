import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-darktext text-gold">
            Designed for Every Occasion
          </h2>
          <p className="mt-4 text-neutral-600">
            From intimate gatherings to large celebrations,
            our vegetarian catering adapts with precision and grace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-12"
        >

          {/* Service 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.06)",
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className="group cursor-pointer bg-softgray/40 rounded-xl p-8 border border-neutral-100"
          >
            <div className=" text-3xl font-semibold text-darktext mb-3 transition-colors duration-300 group-hover:text-maroon">
              Weddings & Celebrations
            </div>
            <p className="text-neutral-600 font-bold rounded-3xl leading-relaxed transition-colors duration-300 group-hover:text-neutral-700">
              Elegant vegetarian spreads crafted for memorable celebrations,
              delivered with thoughtful execution.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.06)",
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className="group cursor-pointer bg-softgray/40 rounded-xl p-8 border border-neutral-100"
          >
            <div className="text-3xl font-semibold text-darktext mb-3 transition-colors duration-300 group-hover:text-maroon">
              Corporate & Private Events
            </div>
            <p className="text-neutral-600  font-bold  rounded-3xl leading-relaxed transition-colors duration-300 group-hover:text-neutral-700">
              Professional catering solutions that align with modern business
              environments and private gatherings.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.06)",
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className="group cursor-pointer bg-softgray/40 rounded-xl p-8 border border-neutral-100"
          >
            <div className="text-3xl font-semibold  text-darktext mb-3 transition-colors duration-300 group-hover:text-maroon">
              Curated Custom Menus
            </div>
            <p className="text-neutral-600  font-bold rounded-3xl leading-relaxed transition-colors duration-300 group-hover:text-neutral-700">
              Personalized vegetarian menus tailored to dietary preferences,
              themes, and guest experiences.
            </p>
          </motion.div>

        </motion.div>

      </Container>
    </Section>
  );
}

export default Services;