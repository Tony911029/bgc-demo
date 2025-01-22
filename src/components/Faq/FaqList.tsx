import React from "react";
import { useState } from "react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { faqData, Section, Faq } from "./faq";
import styles from "./fqa.module.css";

const FAQList = () => {
  const [value, setValue] = useState(["item"]);

  const groupedFaqs = faqData.reduce(
    (acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push(item);
      return acc;
    },
    {} as Record<Section, Faq[]>
  );

  return (
    <div className={styles.container}>
      <div>
        {Object.entries(groupedFaqs).map(([section, faqs]) => (
          <div key={section}>
            <div className={styles.section}>{section}</div>
            <AccordionRoot
              value={value}
              onValueChange={(e) => setValue(e.value)}
              className={styles.accordion}
            >
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.question}
                  className={styles.item}
                >
                  <AccordionItemTrigger className={styles.trigger}>
                    {item.question}
                  </AccordionItemTrigger>
                  <AccordionItemContent className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQList;
