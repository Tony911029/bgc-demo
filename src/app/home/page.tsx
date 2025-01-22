"use client";
import AppLayout from "@/components/AppLayout/AppLayout";
import teamLogo from "../assets/glucose_logo.png";
import React from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { projects } from "./projects";
import CustomList from "@/components/CustomList/CustomList";

const Home = () => {
  return (
    <AppLayout>
      <div className={styles.homeContainer}>
        <Image
          src={teamLogo}
          alt="Description of image"
          className={styles.homeImage}
        />
      </div>
      <CustomList items={projects} />
    </AppLayout>
  );
};

export default Home;
