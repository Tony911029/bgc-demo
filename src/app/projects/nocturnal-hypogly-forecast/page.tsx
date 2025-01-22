import AppLayout from '@/components/AppLayout/AppLayout'
import Description from '@/components/Description/Description'
import React from 'react'

const description = 
`
<p>
Fear of nocturnal hypoglycemic events continues to be one of the most significant contributors to diabetes distress.
Developing improved nocturnal hypoglycemic forecasting techniques would likely improve diabetes distress
<a href="https://doi.org/10.1177/19322968241267886">(D. Ehrmann et al., 2024)</a>, 
but even short 2-hour blood glucose level (BGL) forecasting remains challenging
<a href="https://www.nature.com/articles/s41598-024-70277-x">(H. Nemat et al., 2024)</a>.
</P>
</br
<p>
Forecasting BGL over an 8-hour time window does not seem feasible with SOTA techniques, likely due to the limited scale of most BGL time series datasets.
The most popular open-source T1D dataset, OhioT1DM, only contains 12 patients over eight weeks
<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7881904/">(C. Marling, 2020)</a>
Our student volunteer-based WAT.ai Blood Glucose Control Design Team, in partnership with Gluroo, aims to reframe the forecasting problem into a big data <span class="italic">probabilistic</span> forecasting problem.
</p>
</br>
<p>
Probabilistic forecasting is about producing low and high scenarios, quantifying their uncertainty, and delivering expected ranges of variation
<a class="citation" href="https://www.annualreviews.org/content/journals/10.1146/annurev-statistics-062713-085831">(T. Gneiting et al., 2014</a>,
<a class="citation" href="https://www.sktime.net/en/stable/examples/01b_forecasting_proba.html">F. Kiraly et al., 2022)</a>.
</p>
`

const methods = 
`
Our research will consider months of data from thousands of de-identified Gluroo patients. With skTime (<a href="https://zenodo.org/records/14337818">F. Kiraly, 2024</a>) we will evaluate various interval, quantile, variational, and distributional forecasting techniques to maximize the sharpness of our predictive distributions (<a href="https://www.annualreviews.org/content/journals/10.1146/annurev-statistics-062713-085831">T. Gneiting et al., 2014</a>, <a href="https://www.sktime.net/en/stable/examples/01b_forecasting_proba.html">F. Kiraly et al., 2022</a>).
We will contrast our forecasts over various categories, including age groups, gender, years with diabetes, and weekend vs. weekday forecasting.
`

const externalLinks = 
`
<p>
  <a href="https://github.com/Blood-Glucose-Control/nocturnal-hypo-gly-prob-forecast/">Github Repository</a>
</p>
`

const HypoGlyForecast = () => {
  return (
    <AppLayout title="Nocturnal Hypoglycemia Forecast">
      <Description title={"Description"} description={description} />
      <Description title={"Methods"} description={methods} />
      <Description title={"External Links"} description={externalLinks} />
    </AppLayout>
  )
}

export default HypoGlyForecast