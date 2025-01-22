export enum Section {
    BGM = "Blood Glucose Monitoring and Fluctuations",
    INSULIN = "Insulin Management",
    DIET = "Diet and Nutrition",
    LIFE = "Lifestyle and External Factors",
    CHALLENGE = "Challenges in T1D Management",
    FUTURE = "Broader Context and Future Directions",
    TECH = "Technology and Predictive Modeling",
    DATA = "Data Quality and Analysis"
}


export interface Faq {
    id: number,
    section: Section,
    question: string,
    answer: string 
}


// TODO: Add links and bullet points (maybe use markdown?)
export const faqData: Faq[] = [
    {
        id: 1,
        section: Section.BGM,
        question: "What are the main factors that cause extreme fluctuations in blood glucose levels for T1D patients?",
        answer: "The 1A and 1B factors that cause extreme fluctuations are insulin and carbohydrate intake. The secondary factors are protein, fat, fibre, and exercise. Many other things impact blood sugar levels, though; see DiaTribe's 42 Factors That Affect Blood Glucose?! A Surprising Update "
    },
    {
        id: 2,
        section: Section.BGM,
        question: "How do continuous glucose monitor (CGM) readings differ from fingerstick data, and how can these discrepancies be minimized?",
        answer: "There is a lot of information about this question on the National Institute of Health's page on Continuous Glucose Monitoring. The quick answer is that they are usually quite close, but because CGMs are measuring your interstitial fluid, so there is a delay. The CGM lags what your actual current blood sugar is, and the fingerprick measures your blood sugar, so there is no delay. If your blood sugar changes rapidly, it can be quite far off sometimes, but only briefly (~20 minutes is the longest delay, but the technology is improving and closing that gap). If you want to understand the in-depth technical differences, then you need to start reading about MARD: Benefits and Limitations of MARD as a Performance Parameter for Continuous Glucose Monitoring in the Interstitial Space"
    },
    {
        id: 3,
        section: Section.BGM,
        question: "How does the rate of blood glucose change impact hypoglycemia or hyperglycemia management, and are there thresholds for intervention?",
        answer: "The faster your blood sugar changes, the harder it is to control because we're trying to keep it in such a tight window. We want to avoid the roller coasters and have calm and slow ups and downs, ideally. When your blood glucose is moving fast, the challenge is that you do need to intervene, but you are much more likely to over/underestimate how much the intervention could be. For hypoglycemia, the intervention is eating sugar to prevent the low; that's the most important because hypoglycemia presents the most immediate danger. You typically consume the most widely available rapidly absorbing sugar dextrose. If my hypo is from activity or basal drift, I only take sugar once I'm below 3.9 mmol/L. If my hypo is coming from a meal because I took too much rapid-acting insulin, then I will take sugar even if I'm in the 3.9-5.5 mmol/L range if it is dropping quickly. You learn some intuition around this as you get better at managing."
    },
    {
        id: 4,
        section: Section.BGM,
        question: "How can hourly trends or patterns in blood glucose levels be used to optimize insulin dosing and dietary planning?",
        answer: "The more habitual you are, the easier it is to manage your blood glucose. People have different insulin sensitivity at different times of the day, and learning how your body responds to insulin at these different times can have considerable benefits in the quality of your management and how much you can stay in range. It's very challenging for many people to do this, though, and we need to remember that sometimes, being too focused on this can have worse effects if it increases the likelihood of diabetes distress."
    },
    {
        id: 5,
        section: Section.BGM,
        question: "What does glucose variability indicate about long-term health outcomes, and how can it be managed effectively?",
        answer: "There is still lot of research to be done in terms of understanding how glycemic variability (beyond time in range) increases the likelihood of the most common adverse diabetic health events like diabetic retinopathy (blindness), kidney disease, and neuropathy. My current understanding is that glycemic variability strongly correlates with time in range, so how much of the adverse health outcomes are caused by the rapid changes versus just being out of range? I don't think the causal effects have been fully teased out yet but with the wide spread adoption of CGMs, I think we're going to get a lot more answers to those type of questions in the coming years."
    },
    {
        id: 6,
        section: Section.INSULIN,
        question: "What is the difference between basal and bolus insulin, and how are they used together for optimal blood glucose control?",
        answer: "Basal insulin is the long-lasting insulin you typically take once daily. It lasts anywhere from 24 to 48 hours (depending on the type) and is utilized in your body at a constant rate. So, if you take 24 units of basal insulin daily with a 24-hour kind, your body can expect to use 1 unit/hour. This insulin is meant to keep you level and makes your bolus insulin easier to use/more effective. Bolus insulin Bolus means a large single dose of medicine. So, in the context of insulin, it's a large, fast-acting dose of insulin that your body will absorb quite rapidly. Most bolus insulins today will start to peak in absorption around 40 to 60 minutes after your dose and be entirely processed by your body in 5 hours. Typically, bolus insulin is used for meal time. The amount of bolus insulin you take depends on your insulin sensitivity and the number of carbs you are about to consume."
    },
    {
        id: 7,
        section: Section.INSULIN,
        question: "How does insulin sensitivity vary throughout the day, and what are the implications for dosing strategies?",
        answer: "Everyone is different, for some people it can vary a lot, some people it is not noticeable. You need to try to learn this with your diabetes educator or endocrinologist. Most people tend to use insulin dosing tables, and they can adjust their insulin sensitivity factor for different times of the day to figure out the correct insulin dosing."
    },
    {
        id: 7.5,
        section: Section.INSULIN,
        question: "What strategies are most effective for timing insulin doses in relation to meals and activities?",
        answer: "The best strategy is the one that works for you and your lifestyle and goals because everyone has a unique set of circumstances. I have almost 100% TIR, which is unrealistic or impossible for many T1Ds. My (Christopher's) strategy right now is:"
    },
    {
        id: 8,
        section: Section.INSULIN,
        question: "Are there established guidelines or tools to fine-tune insulin dosages based on individual factors?",
        answer: "There are many; the best resource for learning about everything is with your diabetes educator or books like Think Like a Pancreas. The number one game changer for me was starting to track all of my meals, which is very challenging if you aren't using an app like Gluroo (full disclosure: I am a consultant for Gluroo, but the app has been fantastic for me, it improved my TIR even though my honeymoon phase is ending, and I'd use it even if I were fired tomorrow! :p)."
    },
    {
        id: 9,
        section: Section.DIET,
        question: "How do glycemic index, food weight, and macronutrient composition affect blood glucose levels?",
        answer: "These all significantly impact how the food will change your blood glucose levels!"
    },     
    {
        id: 10,
        section: Section.DIET,
        question: "What are the best foods for managing hypoglycemia, hyperglycemia, or maintaining stable blood glucose levels?",
        answer: "Generally, eating moderate amounts of carbohydrates with high levels of fibre is the best strategy for managing blood sugar levels. Moderate amounts of carbohydrates mean it's less likely that you're way out of range if your carb estimate is a bit off. Smaller carb amounts translate to smaller error amounts. High fibre helps because it smooths out the blood glucose curve and slows down the rapid absorption of carbohydrates."
    },      
    {
        id: 11,
        section: Section.DIET,
        question: "How can meal timing and macronutrient composition influence insulin dosing and glucose spikes?",
        answer: "This is a tricky thing to learn, especially if you're not a \"numbers person,\" but it can significantly improve your TIR around mealtime. This is one of the projects we're working on with the Blood Glucose Control AI Design team. We hope to make these insights accessible to people with our causal modelling project. We love the interactive diabetes educational tool InsuLearn for demonstrating how bolus timing impacts blood glucose levels."
    },      
    {
        id: 12,
        section: Section.DIET,
        question: "Are there plans to incorporate the full nutrient profile of meals (e.g., fats, protein, fiber) into diabetes management tools?",
        answer: "Yes! This is the way things are moving the challenge, though diabetics already need to track too many things in their day-to-day lives, so part of what Gluroo is trying to do is make this tracking as easy as possible by automating some of the logging around mealtime with their AI tools."
    },
    {
        id: 13,
        section: Section.LIFE,
        question: "How do stress, sleep, and exercise affect blood glucose levels in T1D management?",
        answer: "Exercise is the most significant thing impacting blood glucose levels outside of diet and insulin. Stress and sleep also have a significant impact. They may be two sides of the same coin. Unsurprisingly, poor stress and sleep management make it more challenging to keep your numbers in range."
    },      
    {
        id: 14,
        section: Section.LIFE,
        question: "How does alcohol consumption impact glucose levels, and what strategies can help manage these changes?",
        answer: "Alcohol is one of the most dangerous things a T1D patient can consume if they do not do so in moderation. Nocturnal hypoglycemia is the leading cause of death for T1Ds below the age of 40. This is because of the effects that alcohol can have on your liver by stopping it from secreting glucose into your bloodstream while sleeping. This is one of the AI models the Blood Glucose Control team is trying to develop: probabilistic forecasting for nocturnal hypoglycemia. You need to be very careful if you're having more than, say, two alcoholic beverages in a day. Every person is different though even one drink may be too many for those sensitive to these effects."
    },      
    {
        id: 15,
        section: Section.LIFE,
        question: "Are there trends in blood glucose fluctuations related to seasonal, lifestyle, or environmental factors?",
        answer: "Yes! We recommend reading: 42 Factors That Affect Blood Glucose?! A Surprising Update."
    },      
    {
        id: 16,
        section: Section.CHALLENGE,
        question: "What are the biggest pain points for people with T1D in managing their condition?",
        answer: "Other than the literal points of pain caused by injecting ourselves with lifesaving medication 3-4x a day? To be honest, the needles aren't even the worst part, and it will be different for everyone. In no particular order, the burden/worry it causes my loved ones, the worry about developing other conditions that result in disability or early death, lowered life expectancy. Regarding lifestyle, I can never eat what I want when I want. I can't have late-night snacks with carbs in them because I'll need to take insulin, and then I risk going hypo when I'm sleeping. I'm not too fond of the blood tests every six months, and I still feel like I'm going to faint from them sometimes. When going out to eat with people, especially in a busy restaurant, it's challenging to pre-bolus appropriately because if there's a delay in the food, I'll risk going hypo. It's also hard to estimate how many carbs will be in the meal until you see it! CGMs that stop working early are annoying, too."
    },      
    {
        id: 17,
        section: Section.CHALLENGE,
        question: "What misconceptions about T1D do non-diabetics commonly have?",
        answer: "That we got T1D from eating too much sugar; it has nothing to do with how much sugar you ate; it is an autoimmune condition caused by your immune system attacking insulin-producing cells in your pancreas. Also, people think we can never eat carbs again or should never eat carbs again. In fact, I eat way more candy now than I ever did because I use it to prevent hypoglycemia. And if you're eating too few carbs, you increase the risk of a life-threatening condition, diabetic ketoacidosis, so it's generally not recommended to go zero-carb with T1D. It's possible to go low-carb but there's still no evidence to suggest that it's actually beneficial for T1D patients, it makes your life more challenging."
    },   
    {
        id: 18,
        section: Section.CHALLENGE,
        question: "How does T1D affect day-to-day life, and what extra considerations must be made?",
        answer: "T1D is like the creepy stalker from Every Breath You Take - The Police! It feels like I never go more than 15-20 minutes without thinking about it. You think about it when you wake up, before you go to sleep, every meal, every snack, every bit of exercise, you always need to have sugar on you, you can't forget your insulin at home or you aren't eating that day, you need to make sure you sugar isn't low when you drive or else you get charge with a DUI, it dictates your decision making for nearly every aspect of your life."
    },         
    {
        id: 19,
        section: Section.FUTURE,
        question: "How do cultural, socioeconomic, and genetic factors influence diabetes management?",
        answer: "This is a significant concern along many facets of the disease. An adequate discussion on this topic could not occur in an FAQ like this, so I'll list some resources. In most cases, regarding socioeconomic factors, it is what you would expect with our public healthcare systems failing to provide an equal standard of care for members of all groups of the socioeconomic ladder. Genetic factors are more likely to occur in people with a family history of the disease."
    },
    {
        id: 20,
        section: Section.FUTURE,
        question: "Are there regional differences (e.g., North America vs. Europe/Asia) in diabetes prevalence or management strategies?",
        answer: "In terms of prevalence, T1D occurs equally across the globe. T2D has become prevalent in almost every society that is becoming wealthier because wealthier societies tend to lead to increased rates of T2D risk factors like:"
    },
    {
        id: 21,
        section: Section.FUTURE,
        question: "What does the future of T1D management look like (e.g., artificial pancreas, advanced monitoring systems)?",
        answer: "We all hope for the cure! But it has become a meme in diabetes culture that the cure is always five years away because it has been five years away for the last 70 years. I think the work we're doing here with the Blood Glucose Control AI Design team could lay the foundation for a closed-loop artificial pancreas that leads to 100% TIR for all T1Ds. That would be my dream accomplishment! There are also smart insulins that could effectively be a cure. I think \"smart insulins\" are the most promising in the near term, an insulin that becomes more active as blood sugar rises but then reduces activity as blood sugar falls. I imagine just giving myself one injection per week and wearing a non-invasive glucose-monitoring watch,or a painless minimally-invasive microneedle patch would essentially be a \"technological cure\" compared to what we deal with now it would feel like a cure."
    },
    {
        id: 22,
        section: Section.TECH,
        question: "How reliable are automated insulin dosing systems, and what improvements are being made?",
        answer: "I'm not an expert on this one, but I think they make management much more accessible for people who are struggling with the older Multiple Daily Injection (MDI) method. It's easier for children. They are quite reliable but still come with their own unique set of issues. One of the nicest things about them is that you don't experience hyperglycemia at night as often because if you're drifting out of range they can automatically start secreting small doses of insulin when you're sleeping."
    },
    {
        id: 23,
        section: Section.TECH,
        question: "Can models predict blood glucose levels based on glycemic index, food weight, and other factors?",
        answer: "Yes they can! Unfortunately, there's still plenty of room for improvement, and that's something the Blood Glucose Control AI Design Team is looking to improve on."
    },
    {
        id: 24,
        section: Section.TECH,
        question: "How can historical data and real-time monitoring be used to create alerts or recommendations for better diabetes management?",
        answer: "Historical data is one of the most important ways to improve your TIR around mealtime. This is because you can go back and see what you did last time you had a similar meal. How much insulin did I take? What was the outcome? Having a great logger like Gluroo makes this process much simpler because you can search for your past meals. Gluroo already has a real-time alerting system where you or your loved ones will get an automated phone call when you're experiencing hypoglycemia during sleep. We can also work on ways of predicting when hypoglycemic events are happening earlier so that we can warn and alter PWDs earlier."
    },
    {
        id: 25,
        section: Section.TECH,
        question: "What advancements are being made in visualizing connections between insulin, food, and glucose trends?",
        answer: "One of my favourite examples is the one done by UC San Diego's Diabetes Design Initiative called InsuLearn. I'm sure this is an active area of research but it is not my area of expertise. Of course all of the diabetes management apps are looking for ways to improve on this."
    },
    {
        id: 26,
        section: Section.DATA,
        question: "How should missing or inconsistent data (e.g., skipped meals, missing BGL readings) be addressed?",
        answer: "In the real world this is just something we must accept. We're never going to have perfect data and we need to use the existing machine learning techniques to deal with this (or invent new ones). Semi-supervised learning seems to be the way we must go for this project. We also need to accept we won't get 100% perfect models because we don't have 100% perfect data. We need to do the best we can do with what we have."
    },      
    {
        id: 27,
        section: Section.DATA,
        question: "How can duplicate or unclear entries in data logs be handled for more accurate analysis?",
        answer: "Duplicate data should probably be removed before training with a data cleaning procedure. However, the efficacy of data cleaning should be evaluated as a hyperparameter setting. If the data cleaning technique is hurting model performance, then we should remove it."
    },     
    {
        id: 28,
        section: Section.DATA,
        question: "What additional data could improve diabetes management systems, and how diverse is the current dataset?",
        answer: "The most significant thing is having improved exercise tracking and alcohol tracking for the reasons mentioned above. Because this is an open-source project and diversity information leads to personal identification risks, the Blood Glucose Control AI Design Team will not have access to data beyond age and sex for our current studies. It is essential to consider this in future work with broader, well-funded studies, but unfortunately, we do not have the capabilities to measure it at this time."
    },
];