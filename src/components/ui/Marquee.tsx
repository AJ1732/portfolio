import { motion } from "framer-motion";

type MarqueeProps = {
  firstTop: React.ReactNode;
  secondTop: React.ReactNode;
  firstBottom?: React.ReactNode;
  secondBottom?: React.ReactNode;
};

const DoubleMarquee: React.FC<MarqueeProps> = ({
  firstTop,
  secondTop,
  firstBottom,
  secondBottom,
}) => {
  return (
    <div className="mx-auto space-y-1">
      <div className="x-gradient flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {firstTop}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {secondTop}
        </motion.div>
      </div>

      <div className="x-gradient flex overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {firstBottom}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {secondBottom}
        </motion.div>
      </div>
    </div>
  );
};
export default DoubleMarquee;
