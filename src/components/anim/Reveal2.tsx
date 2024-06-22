import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"reveal"}
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
