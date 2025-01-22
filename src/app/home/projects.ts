import cmIcon from "../assets/cm.jpg"
import nocturnalIcon from "../assets/nf.jpg"
import rlIcon from "../assets/rl.jpg"
import t1dIcon from "../assets/none.jpg"
import miIcon from "../assets/mi.jpg"
import {item} from "@/components/CustomList/CustomList"

export const projects: item[] = [
    {
        title: "Meal Identification",
        path: "/projects/meal-identification",
        image: miIcon,
        description: "The main goal of the project is to develop efficient machine learning pipelines for automatic meal identification from blood glucose readings in a semi-supervised setting."
    },
    {
        title: "Probabilistic Forecasting of Nocturnal Hypoglycemia",
        path: "/projects/nocturnal-hypogly-forecast",
        image: nocturnalIcon,
        description: "The main goal is to develop a probabilistic forecasting approach for predicting ranges of nocturnal blood glucose levels to help reduce diabetes-related anxiety about nighttime hypoglycemia while working within the constraints of limited diabetes datasets."
    },
    {
        title: "Blood Glucose Causal Modeling",
        path: "/projects/causal-glucose",
        image: cmIcon,
        description: "The main goal is to develop an interactive system that models how alternative insulin timing and dosage decisions would have affected blood glucose levels, allowing users to explore \"what-if\" scenarios to better understand the cause-and-effect relationships in diabetes management."
    },
    {
        title: "Reinforcement Learning Insulin Pump",
        path: "/projects/rl-insulin-pump",
        image: rlIcon,
        description: "The main goal is to develop a reinforcement learning-based automated insulin delivery system that can make real-time insulin dosing decisions to maintain optimal blood glucose levels, validated through FDA-approved simulators before deployment in actual insulin pumps."
    },
    {
        title: "T1D Change Point Detection Benchmark",
        path: "/projects/t1d-cpd-benchmark",
        image: t1dIcon,
        description: "The main goal is to create an open-source benchmark dataset and evaluation framework for algorithms that detect meal-related changes in continuous glucose monitor data, specifically focusing on semi-supervised methods for identifying when Type 1 diabetics."
    },
]