import AppLayout from '@/components/AppLayout/AppLayout'
import React from 'react'
import Description from '@/components/Description/Description'

const description = 
`
An open source benchmark for semi-supervised change point detection of type 1 diabetic meals from continuous glucose monitor time series data. </br>
Originally created to present to PyData Global 2024 in association with sktime and skchange.
`


// TODO: Add github icons
const externalLinks =
`
<p>
  <a href="https://github.com/Blood-Glucose-Control/t1d-change-point-detection-benchmark/">Github Repository</a> </br>
  <a href="https://huggingface.co/datasets/Blood-Glucose-Control/t1d-cpd-benchmark-datasets/">Hugging Face Datasets</a> </br>
  <a href="https://pypi.org/project/t1d-cpd-benchmark/">Pypi Package</a>
</p>
`

const T1DBenchmark = () => {
  return (
    <AppLayout title="T1D Change Point Detection Benchmark">
      <Description title={"Description"} description={description} />
      <Description title={"External Links"} description={externalLinks} />
    </AppLayout>
  )
}

export default T1DBenchmark