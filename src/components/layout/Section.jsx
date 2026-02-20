function Section({ children, className = "", id }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;