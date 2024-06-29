import { twMerge } from "tailwind-merge";
import { Link, NavLink } from "react-router-dom";
import Reveal from "./anim/Reveal";
import ShinyButton from "./anim/ShinyButton";
import cv from "../assets/OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER.pdf";

const links = ["projects"];

const socials = [
  {
    id: 1,
    iconClass: "fa-brands fa-github",
    link: "https://github.com/AJ1732/",
  },
  {
    id: 2,
    iconClass: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/osezeleiboi/",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex size-full flex-col items-center justify-start bg-black pb-8 pt-12">
      <Link to="/">
        <Reveal>
          <h2 className="flex size-10 items-center justify-center rounded bg-zinc-900 font-poppins text-xl font-bold text-primary-500">
            1 <span className="text-white">7</span>
          </h2>
        </Reveal>
      </Link>

      <nav className="mt-48 flex w-96 rotate-90 items-center justify-between">
        <ul className="grid grid-cols-[repeat(2,_6rem)] text-center text-xl *:flex *:h-[4.5rem] *:items-center *:justify-center *:border-t *:font-bebas *:tracking-widest *:transition-all *:duration-500 *:md:h-[5rem]">
          {links.map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                twMerge(
                  isActive
                    ? "border-primary-400 bg-zinc-950 text-primary-500"
                    : "border-transparent text-zinc-500",
                  `block transition-all duration-300 hover:border-primary-500 hover:bg-zinc-950 hover:text-primary-500`,
                )
              }
            >
              <li>
                <Reveal>{item}</Reveal>
              </li>
            </NavLink>
          ))}
        </ul>

        <ul className="mx-4 text-center text-xl *:flex *:h-[4.5rem] *:items-center *:justify-center *:font-bebas *:tracking-widest *:transition-all *:duration-500 *:sm:h-[5rem]">
          <li>
            <a href={cv} download role="button">
              <ShinyButton className="text-neutral-900">Resume</ShinyButton>
            </a>
          </li>
        </ul>

        <ul className="flex-center ml-auto h-full">
          {socials.map(({ id, iconClass, link }) => (
            <li
              key={id}
              className="flex-center -col-start-1 h-full w-[4.5rem] -rotate-90 border-r border-transparent text-zinc-500 hover:border-primary-500 hover:bg-zinc-950 hover:text-primary-500 md:w-[5rem]"
            >
              <a href={link} target="_blank">
                <Reveal>
                  <span className="gap-2">
                    <i className={`${iconClass} text-2xl`}></i>
                  </span>
                </Reveal>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
