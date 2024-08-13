const Footer = () => {
  return (
    <div className="full-width content-grid bg-primary-400">
      <div
        className="full-width relative h-[400px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 flex h-[400px] w-full items-end justify-start px-4 py-8 font-thin">
          <h2 className="text-[clamp(1.2rem,7vw,6.5rem)]">
            Email:{" "}
            <a
              href="mailto: ejemeniboi@gmail.com"
              className="decoration-1 transition-all duration-300 hover:text-blue-950 hover:underline"
            >
              ejemeniboi@gmail.com{" "}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Footer;
