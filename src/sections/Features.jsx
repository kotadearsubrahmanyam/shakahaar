import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/motionPresets";

function Features() {
  return (
    <Section id="features">
      <Container>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darktext">
            Crafted with Clarity
          </h2>
          <p className="mt-4 text-xl text-neutral-700">
            A refined vegetarian catering experience designed with balance,
            intention, and uncompromised quality.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {/* Card 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -12,
              scale: 1.05,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-neutral-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Pure Ingredients</h3>
            <p className="text-neutral-600 text-1xl text-bold ">
              Carefully selected vegetarian ingredients sourced with integrity.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -12,
              scale: 1.05,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-neutral-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Balanced Nutrition</h3>
            <p className="text-neutral-600">
              Flavor and nourishment in perfect harmony.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -12,
              scale: 1.05,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-neutral-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Event Precision</h3>
            <p className="text-neutral-600">
              Timely execution with refined presentation.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -12,
              scale: 1.05,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-neutral-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Modern Experience</h3>
            <p className="text-neutral-600">
              Seamless coordination and elegant service.
            </p>
          </motion.div>

        </motion.div>

      </Container>
    </Section>
  );
}

export default Features;