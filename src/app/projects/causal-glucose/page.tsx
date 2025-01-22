import AppLayout from '@/components/AppLayout/AppLayout'
import React from 'react'
import Description from '@/components/Description/Description'

const description = 
`
<p>
This section focuses on building causal models to model how different insulin timing and dosage decisions affect blood glucose levels as counterfcatuals to the observed blood glucose evolution over time. </br>
The goal is to understand counterfactuals in order to build intuition with an interactive method - "What if insulin was taken at a different time?" or "What if the dose was different?"
</P>
`

const methods = 'Coming Soon!'
const externalLinks = 
`
<p>
  <a href="https://github.com/Blood-Glucose-Control/causal_modeling/">Github Repository</a>
</p>
`

const CausalGlucose = () => {
  return (
    <AppLayout title="Causal Glucose">
      <Description title={"Description"} description={description} />
      <Description title={"Methodology"} description={methods} />
      <Description title={"External Links"} description={externalLinks} />
    </AppLayout>
  )
}

export default CausalGlucose