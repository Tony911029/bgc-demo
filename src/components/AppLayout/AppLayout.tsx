import React from 'react'
import styles from './AppLayout.module.css'
import Navbar from '../NavBar/Navbar'

interface AppLayoutProps {
  children: React.ReactNode
  title?: string
}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {props.title && <div className={styles.title}>{props.title}</div>}
      <main className={styles.mainContent}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        © Blood Glucose Control team
      </footer>
    </div>
  );
}

export default AppLayout