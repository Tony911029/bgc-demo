"use client";
import AppLayout from "@/components/AppLayout/AppLayout";
import React from "react";
import FAQList from "@/components/Faq/FaqList";

const FAQ = () => {
  return (
    <AppLayout title="Frequently Asked Questions">
      <div>
        The following questions were summarized and condensed using ChatGPT from
        the source of over 60 questions from our trial application period.
      </div>
      <div>
        The answers are based on the personal experience of one or two T1Ds and
        are not medical advice.
      </div>
      <div>
        If you're interested in a management practice discussed below, please
        consult a medical professional before changing your lifestyle.
      </div>
      <FAQList />
    </AppLayout>
  );
};

export default FAQ;
