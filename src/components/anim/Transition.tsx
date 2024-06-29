import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed inset-0 z-[100] h-dvh w-full origin-left bg-primary-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed inset-0 z-[100] h-dvh w-full origin-right bg-primary-500"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
// [0.22, 1, 0.36, 1]
