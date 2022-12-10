import Search from "./search_bar";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import React from "react";

interface PageData {
  title: string;
  link: string;
}

interface NavBarData {
    index: number;
}

export default function NavBar({index}: NavBarData) {
    const pages: PageData[] = [{ link: "/profile", title: "Profile" }];

  return (
    <nav
      className={
        "navbar navbar-dark navbar-expand-lg bg-dark " + styles.app_navbar
      }
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">ChainNews</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavBarItems items={pages} activeIndex={index}></NavBarItems>
          </ul>
          <Search></Search>
        </div>
      </div>
    </nav>
  );
}

interface NavBarItemData {
  title: string;
  link: string;
  isActive: boolean;
  index: number;
}

function NavBarItem({ title, link, isActive, index }: NavBarItemData) {
  return (
    <li className="nav-item">
      <Link href={link} className={isActive ? "nav-link active" : "nav-link"}>
        {title}
      </Link>
    </li>
  );
}

interface NavBarItemsData {
  items: PageData[];
  activeIndex: number;
}

function NavBarItems({ items, activeIndex }: NavBarItemsData) {
  return <>
  {items.map((item, index) => (
    <NavBarItem
      title={item.title}
      link={item.link}
      index={index}
      isActive={activeIndex === index}
    ></NavBarItem>
  ))}
  </>;
}
