import { fetchFaqs } from "@/lib/queries/faqs-queries";
import { AccordionItem } from "./accordion-item";
import { ErrorText } from "../texts/error-text";

type FAQSection = {
  _id: string;
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const AccordionItems = async () => {
  const faqSections = await fetchFaqs();

  if (faqSections === "error")
    return <ErrorText className="text-center">Network Error!</ErrorText>;

  if (!faqSections || !Array.isArray(faqSections) || faqSections.length === 0)
    return (
      <ErrorText className="text-center">
        No Frequently Asked Questions!
      </ErrorText>
    );

  // const { faqs = [] } = faqSections[0] as FAQSection;

  const faqSection: FAQSection = faqSections[0];
  const faqs = faqSection?.faqs ?? [];

  return (
    <section className="rounded-[12px] p-7 justify-between bg-primary-600 mx-auto grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-[38px] md:text-[48px] font-bold mb-4 leading-[120%] text-neutral-100 font-satoshi">
          Your Questions Answered{" "}
        </h2>
        <p className="text-neutral-100 text-sm font-satoshi">
          Have questions about our fitness festival? We have the answers!
          Discover all you need to know about earning points, tracking your
          progress, and redeeming exciting rewards in our loyalty program.
        </p>
      </div>
      <div>
        {faqs.map(
          (faq: { question: string; answer: string }, index: number) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          )
        )}
      </div>
    </section>
  );
};
