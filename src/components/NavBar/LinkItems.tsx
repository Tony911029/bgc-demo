"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavLink {
  path: string;
  text: string;
}

const links: NavLink[] = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/faq",
    text: "FAQ",
  },
];

export const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      {links.map((link: NavLink) => {
        return (
          <Link key={link.path} href={link.path} className={styles.navLink}>
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};
