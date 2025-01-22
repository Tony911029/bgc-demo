import AppLayout from '@/components/AppLayout/AppLayout'
import Description from '@/components/Description/Description'
import React from 'react'


const description = 
`
The main goal of the project is to develop efficient machine learning pipelines for automatic meal identification from blood glucose readings in a semi-supervised setting.</br>
</br>
This was chosen to be the first BGC project because we consider this a stage 0 task for a significant majority of diabetes machine learning and artificial intelligence modeling tasks. There are few blood glucose modeling projects that do not directly depend or benefit from improved meal time labelling. The benefit is derived from the fact that the most impactful factors on blood glucose dynamics are insulin and consumption of carbohydrates. However, unlike most open source continuous glucose monitoring (cgm) datasets and research studies, having detailed annotations of meals is unrealistic in real-world settings.</br>
</br>
In order to improve the speed and likelihood of transferring research to practice, we created a semi-supervised change point detection benchmark that can serve as a foundation for many future cgm studies. 
</br>
Some of the foreseeable benefits from this research:</br>
</br>
1. Improved feature engineer for downstream modeling tasks like blood glucose forecasting and causal modeling of blood glucose levels.</br>
2. Improved understanding of prandial (meal-time) blood glucose dynamics.</br>
3. Reduced cognitive burden for PWDs because these methods can be incorporated into streamlining data logging.
`

const mainProjectDeliverables = 
`
1. Publication of an open source simulated semi-supervised change point detection dataset and benchmark. <br>
2. Evaluation of state-of-the-art change point detection algorithms on our benchmark. <br>
3. Evaluation of state-of-the-art change point detection algorithms on a de-identified private cgm time series dataset provided by Gluroo. <br>
`

// TODO: Add github icons
const externalLinks = 
`
<p>
  <a href="https://github.com/Blood-Glucose-Control/bgl-meal-identification/">Github Repository</a>
</p>
`

const MealIdentification = () => {
  return (
    <AppLayout title="Meal Identification">
      <Description title={"Description"} description={description} />
      <Description title={"Main Project Deliverables"} description={mainProjectDeliverables} />
      <Description title={"External Links"} description={externalLinks} />
    </AppLayout>
  )
}

export default MealIdentification