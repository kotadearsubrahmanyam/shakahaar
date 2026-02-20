import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { useRef, useState } from "react";

function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      text: "The presentation was elegant, and every dish felt balanced and thoughtfully prepared. Our guests truly appreciated the refined vegetarian spread.",
      name: "Ananya R."
    },
    {
      text: "Professional execution with calm coordination. The catering aligned perfectly with our corporate event expectations.",
      name: "Rohan K."
    },
    {
      text: "A healthy yet indulgent vegetarian experience. You can feel the quality and intention in every detail.",
      name: "Meera S."
    }
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: "smooth"
    });
  };

  return (
    <Section id="testimonials" className="bg-white">
      <Container>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-darktext">
            Customer Reviews
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Genuine experiences shared by our clients.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full snap-center px-4"
            >
              <div className="bg-softgray/40 rounded-2xl p-10 border border-neutral-200 max-w-3xl mx-auto text-center shadow-sm">
                <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                  “{review.text}”
                </p>
                <div className="text-lg font-semibold text-darktext">
                  — {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-maroon scale-125"
                  : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}

export default Testimonials;