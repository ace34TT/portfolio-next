"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

interface NavLinkProps {
  children: ReactElement;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const child = React.Children.only(children);

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: `transition-colors duration-200 ${
          isActive
            ? "text-complementary "
            : "text-white hover:text-complementary"
        }`,
        "aria-current": isActive ? "page" : null,
      })}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <header
      className={
        "fixed top-0 left-0 h-20 w-screen flex justify-end items-center px-5 md:px-20 2xl:px-40 bg-gradient-to-b from-primary to-transparent z-50"
      }
    >
      <nav>
        <ul className={"flex gap-x-20 font-bold uppercase"}>
          <li>
            <NavLink href="/public">
              <span className="uppercase">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="/about">
              <span className="uppercase">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact">
              <span className="uppercase">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
