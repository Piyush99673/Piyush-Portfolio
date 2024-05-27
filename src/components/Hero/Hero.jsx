import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Piyush</h1>
        <p className={styles.description}>
          I'm a full-stack developer with around 1 years of experience using
          React and NodeJS. I have recently graduated from BITS Pilani KK Birla
          Goa campus. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:upadhyaypiyush1234@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
