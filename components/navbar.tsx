import Search from "./search_bar";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

interface PageData {
  title: string;
  link: string;
}

export default function NavBar() {
  const pages: PageData[] = [{ link: "/profile", title: "Profile" }];
  let activeIndex = -1;

  return (
    <nav
      className={
        "navbar navbar-dark navbar-expand-lg bg-dark " + styles.app_navbar
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand">News App</a>
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
              <NavBarItems items={pages} activeIndex={activeIndex}></NavBarItems>
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
}

function NavBarItem({ title, link, isActive }: NavBarItemData) {
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
      isActive={activeIndex === index}
    ></NavBarItem>
  ))}
  </>;
}
