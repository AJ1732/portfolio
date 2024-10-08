import { twMerge } from "tailwind-merge";
import { Link, NavLink } from "react-router-dom";
import Reveal from "./anim/Reveal";
import ShinyButton from "./anim/ShinyButton";
import cv from "../assets/OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER_RESUME.pdf";

const links = ["projects"];

const socials = [
  {
    id: 1,
    iconClass: "fa-brands fa-github",
    link: "https://github.com/AJ1732/",
    label: "Osezele Iboi's Github Profile",
  },
  {
    id: 2,
    iconClass: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/osezeleiboi/",
    label: "Osezele Iboi's LinkedIn Profile",
  },
  {
    id: 3,
    iconClass: "fa-brands fa-upwork",
    link: "https://www.upwork.com/freelancers/~01a8f190b376ee33f0?mp_source=share",
    label: "Osezele Iboi's Upwork Profile",
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
        <ul className="grid grid-cols-[repeat(2,_6rem)] text-center text-xl">
          {links.map((item) => (
            <li className="group flex items-center justify-center font-bebas tracking-widest transition-all duration-500 hover:border-primary-500 hover:bg-zinc-950">
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  twMerge(
                    `flex h-[4.5rem] w-full items-center justify-center border-t border-transparent transition-all duration-300 hover:border-primary-500 group-hover:text-primary-500 md:h-[5rem]`,
                    isActive
                      ? "border-primary-500 bg-zinc-950 text-primary-500"
                      : "text-zinc-500",
                  )
                }
              >
                <Reveal>{item}</Reveal>
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="mx-4 text-center text-xl *:flex *:h-[4.5rem] *:items-center *:justify-center *:font-bebas *:tracking-widest *:transition-all *:duration-500 *:sm:h-[5rem]">
          <li>
            <a
              href={cv}
              download="OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER.pdf"
              role="button"
            >
              <ShinyButton className="text-neutral-900">Resume</ShinyButton>
            </a>
          </li>
        </ul>

        <ul className="flex-center ml-auto h-full">
          {socials.map(({ id, iconClass, link, label }) => (
            <li
              key={id}
              className="flex-center -col-start-1 h-full w-[4.5rem] -rotate-90 border-r border-transparent text-zinc-500 hover:border-primary-500 hover:bg-zinc-950 hover:text-primary-500 md:w-[5rem]"
            >
              <a href={link} target="_blank" aria-label={label}>
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
