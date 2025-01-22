import { StaticImageData } from "next/image";
import React from "react";
import styles from "./CustomList.module.css";
import Link from "next/link";
import Image from "next/image";

export interface item {
  title: string;
  path: string;
  description: string;
  image?: StaticImageData;
}

interface CustomListProps {
  items: item[];
  width?: string
}

const CustomList = ({ items, width="100%" }: CustomListProps) => {
  return (
    <div style={{width}}>
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <Link href={item.path} key={item.title}>
            <li className={styles.item}>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.description}
                />
              )}
              <div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
    </div>
  );
};

export default CustomList;
