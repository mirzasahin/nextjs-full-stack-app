import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/pixmar.png" alt="" width={120} height={120}/>
      </Link>

      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
