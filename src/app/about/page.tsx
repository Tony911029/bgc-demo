import AppLayout from '@/components/AppLayout/AppLayout'
import React from 'react'
import {partners} from "./partners"
import CustomList from '@/components/CustomList/CustomList';
import styles from "./about.module.css"
import { Separator } from "@chakra-ui/react"

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