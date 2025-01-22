import AppLayout from '@/components/AppLayout/AppLayout'
import React from 'react'
import {partners} from "./partners"
import CustomList from '@/components/CustomList/CustomList';
import styles from "./about.module.css"

const About = () => {
  return (
    <AppLayout title='About Us'>
      <div className={styles.container}>
        <CustomList items={partners} width='100%'/>
      </div>
    </AppLayout>
  )
}

export default About