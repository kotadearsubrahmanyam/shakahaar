import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionPresets";

function QRCode() {
  return (
    <Section className="bg-softgray/40">
      <Container>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-darktext">
            Prefer Scanning?
          </h3>

          <p className="text-neutral-600 text-lg max-w-xl">
            Scan the QR code to instantly join our WhatsApp group and connect with us.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-neutral-200">
            <img
              src="/images/whatsapp-qr.jpeg"
              alt="Scan to Join WhatsApp"
              className="w-40 h-40 md:w-48 md:h-48 object-contain"
            />
          </div>

        </motion.div>

      </Container>
    </Section>
  );
}

export default QRCode;