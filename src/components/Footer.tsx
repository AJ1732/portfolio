const Footer = () => {
  return (
    <div className="full-width content-grid bg-primary-400">
      <div
        className="full-width relative h-[400px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 px-4 flex h-[400px] w-full items-end justify-start py-8 font-thin">
          <h2 className="text-7xl hover:text-neutral-950 decoration-1 hover:underline">
            Email:{" "}
            <a href="mailto: ejemeniboi@gmail.com"> ejemeniboi@gmail.com </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Footer;
