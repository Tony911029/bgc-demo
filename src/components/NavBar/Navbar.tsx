import Link from "next/link";
import styles from "./Navbar.module.css";
import { NavLinks } from "./LinkItems";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          Blood Glucose Control Team - An AI Design Team
        </Link>
        <NavLinks/>
      </div>
    </nav>
  );
};

export default Navbar;
