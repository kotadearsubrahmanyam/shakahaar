import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionPresets";

function CTA() {
  return (
    <Section id="contact" className="bg-maroon text-white">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto py-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Experience Vegetarian Catering,
            <br className="hidden md:block" />
            Crafted with Pure Intent.
          </h2>

          <p className="mt-6 font-bold text-white/80 leading-relaxed">
            Let SHAKAHAAR bring refined vegetarian cuisine
            to your next gathering with elegance and balance.
          </p>

<motion.a
  href="https://chat.whatsapp.com/EJ8J321DJPz8aLUzJo3hqO?mode=gi_t"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }}
  whileTap={{ scale: 0.96 }}
  className="mt-10 text-4xl inline-block bg-gold text-darktext font-semibold px-8 py-3 rounded-3xl shadow-lg"
>
  Book Your Event
</motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}

export default CTA;