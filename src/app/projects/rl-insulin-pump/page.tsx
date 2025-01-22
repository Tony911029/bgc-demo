import React from 'react'
import AppLayout from '@/components/AppLayout/AppLayout'
import Description from '@/components/Description/Description'

const description = 'The main goal is to develop a reinforcement learning-based automated insulin delivery system that can make real-time insulin dosing decisions to maintain optimal blood glucose levels, validated through FDA-approved simulators before deployment in actual insulin pumps.'
const methods = 'Coming Soon!'
const externalLinks = 
`
<p>
  <a href="https://github.com/Blood-Glucose-Control/rl-insulin-pump/">Github Repository</a>
</p>
`

const RLPump = () => {
  return (
    <AppLayout title="Reinforcement Learning Insulin Pump">
      <Description title={"Description"} description={description} />
      <Description title={"Methods"} description={methods} />
      <Description title={"External Links"} description={externalLinks} />
    </AppLayout>
  )
}

export default RLPump