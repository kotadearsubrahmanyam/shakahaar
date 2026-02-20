import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionPresets";

function Health() {
  return (
    <Section id="health">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-black/5"
          >
            <img
              src="/images/hero2.webp"
              alt="Healthy vegetarian ingredients"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-darktext leading-tight">
              Rooted in Health & Balance
            </h2>

            <p className="text-neutral-600 leading-relaxed">
              Every dish is crafted with mindful ingredient selection,
              nutritional balance, and refined preparation techniques.
              We believe vegetarian cuisine should nourish both body and mind.
            </p>

            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gold"></span>
                Fresh, thoughtfully sourced produce
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gold"></span>
                Balanced flavors without excess oil or heaviness
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-gold"></span>
                Hygienic preparation and modern kitchen standards
              </li>
            </ul>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}

export default Health;