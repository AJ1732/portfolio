import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Container = ({ id, children, className }: Props) => {
  return (
    <section
      id={id}
      className={twMerge(
        "flex size-full min-h-[calc(100dvh-6rem)] scroll-mt-24 flex-col items-center justify-start gap-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
export default Container;
