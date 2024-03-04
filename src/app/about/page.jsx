import Image from "next/image";
import React from "react";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutPage;
