import {item} from "@/components/CustomList/CustomList"
import pizzaIcon from "../assets/pizza-icon.png"
import wataiIcon from "../assets/bgl_main.png"

export const partners: item[] = [
    {
        title: "Blood Glucose Control AI Design Team (BGC)",
        path: "https://github.com/Blood-Glucose-Control",
        description: `
        Diabetes requires a unique way of living. For most, to successfully manage the disease and avoid its long-term adverse effects, you must have detailed fitness and nutrition tracking, not unlike professional athletes or bodybuilders, but with the added complication of knowing how and when to administer insulin. Some can get away without detailed monitoring if they are highly habitual. For most, that’s an undesirable restriction, but where a Person with Diabetes (PWD) falls on that scale is a trade-off that depends on the individual. </br>
        <br/>
        At Gluroo, they aim to alleviate PWD's cognitive burden by making fitness, nutrition, and insulin tracking as streamlined as possible. With good tracking and monitoring, the PWD may learn minor behavioural modifications that improve their BG control. Learning these modifications on your own can take months or years of experimentation and often requires waiting months for long meetings with diabetic care professionals to evaluate what changes are necessary. For this project, our aim is to develop tools for improving short-term prandial (meal-time) / postprandial outcomes by providing counterfactuals to PWDs and their diabetic care practitioners. </br>
        </br>
        <strong>Improved short-term decisions -> Improved long-term disease outcomes</strong> </br>
        </br>
        Many things impact a ‘relatively successful’ prandial BG behaviour, the main behavioural ones to focus on tend to be insulin dosing quantity, insulin dosing timing, basal insulin requirements, physical activity (in preceding hours and immediately postprandial), quantity of carbohydrates consumed, glycemic index of carbohydrates consumed, alcohol consumed with meal (slows absorption of carbs), amount of fat and protein consumed with meal (slows absorption of carbs but creates a delayed glucose spike). </br>
        </br>
        If we can provide counterfactuals that improve PWD’s postprandial BG characteristics, we will have made thousands to millions of people’s lives significantly easier and more enjoyable, we will be increasing their freedom to enjoy a wider variety of foods safely, and potentially extending their years living a happy and healthy life.`,
        image: wataiIcon
    },
    {
        title: "WAT.ai",
        path: "https://watai.ca/",
        description: "BGC was formed through WAT.ai. WAT.ai is a student-run Artificial Intelligence (AI) Organization at the University of Waterloo and the undergraduate student body of the Waterloo AI Institute and member of the Sedra Student Design Centre (SSDC). Our goal is to establish an environment to enable the continued growth of AI talent and suitable access to opportunities within the Waterloo community. We provide opportunities for undergraduate and graduate students to engage in impactful projects through collaboration with companies and internal research.",
        image: pizzaIcon
    },
    {
        title: "Gluroo Imaginations Inc",
        path: "https://gluroo.com/",
        description: "Gluroo is our industry partner. Gluroo aims to simplify diabetes management by streamlining the tracking of fitness, nutrition, and insulin use for People with Diabetes (PWD). This project focuses on improving short-term prandial (during meal-time) and postprandial blood glucose level outcomes for people with Type 1 Diabetes (T1D). This complex disease affects nearly 10 million people worldwide. We aim to leverage semi-supervised learning to identify unlabelled meals in time-series blood glucose data, develop meal-scoring functions, and explore causal machine-learning techniques to suggest optimal treatments for user profiles. We aim to provide actionable insights to PWDs and their care practitioners, enhancing health outcomes and quality of life.",
        image: pizzaIcon
    },
    {
        title: "sktime",
        path: "https://www.sktime.net/en/stable/",
        description: "sktime is a library for time series analysis in Python. It provides a unified interface for multiple time series learning tasks. Currently, this includes forecasting, time series classification, clustering, anomaly/changepoint detection, and other tasks. It comes with time series algorithms and scikit-learn compatible tools to build, tune, and validate time series models.",
        image: pizzaIcon
    },
]