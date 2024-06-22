import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Spliting Text Function
function splitText(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match: any[] | null;

  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

const Reveal2 = ({ children, duration = 0.5 }) => {
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInVIew) {
      mainControls.start("reveal");
    }
  }, [isInVIew]);

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={mainControls}
      transition={{
        staggerChildren: 0.02,
        // delayChildren: 0.5
      }}
    >
      {splitText(children).map((char, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0 },
            reveal: { opacity: 1 },
          }}
          transition={{ duration: duration, ease: "easeInOut" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default Reveal2;
