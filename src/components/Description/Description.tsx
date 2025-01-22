import React from 'react'
import styles from './Description.module.css'
interface DescriptionProps {
    title: string;
    description: string;
}

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default Description;
