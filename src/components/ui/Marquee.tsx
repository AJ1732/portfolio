import { motion } from "framer-motion";

type MarqueeProps = {
  topFirst: React.ReactNode;
  topSecond?: React.ReactNode;
  middleFirst: React.ReactNode;
  middleSecond?: React.ReactNode;
  bottomFirst?: React.ReactNode;
  bottomSecond?: React.ReactNode;
};

const DoubleMarquee: React.FC<MarqueeProps> = ({
  topFirst,
  topSecond,
  middleFirst,
  middleSecond,
  bottomFirst,
  bottomSecond
}) => {
  return (
    <div className="mx-auto space-y-1">
      <div className="x-gradient flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {topFirst}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {topSecond}
        </motion.div>
      </div>

      <div className="x-gradient flex overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {middleFirst}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {middleSecond}
        </motion.div>
      </div>

      <div className="x-gradient flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {bottomFirst}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 *:mr-1"
        >
          {bottomSecond}
        </motion.div>
      </div>
    </div>
  );
};
export default DoubleMarquee;
