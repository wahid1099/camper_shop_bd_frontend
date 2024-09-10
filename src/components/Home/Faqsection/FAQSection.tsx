import { useState } from "react";
import "aos/dist/aos.css";
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of camping gear do you offer?",
      answer:
        "We offer a diverse selection of camping gear, including tents, sleeping bags, cooking equipment, backpacks, and outdoor apparel. Our products are designed to enhance your camping experience and ensure comfort and safety in the wilderness.",
    },
    {
      question: "How long does shipping take for camping gear?",
      answer:
        "Shipping typically takes 5-7 business days. For remote camping locations or special orders, it may take an additional 2-3 days. Expedited shipping options are available at checkout for quicker delivery.",
    },
    {
      question: "Do you offer international shipping for camping gear?",
      answer:
        "Yes, we provide international shipping for our camping gear! Shipping costs and delivery times vary based on the destination. You’ll see the shipping details and costs at checkout before finalizing your order.",
    },
    {
      question: "What is your return policy for camping products?",
      answer:
        "We accept returns within 30 days of purchase for camping products that are unused and in their original condition. Please contact our customer support to start a return process, and include all original packaging and accessories.",
    },
    {
      question: "Can I track my camping gear order?",
      answer:
        'Absolutely! Once your order is dispatched, you will receive an email with tracking details. You can also track your order status anytime in the "My Orders" section of our website.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100" data-aos="flip-right">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left text-xl font-semibold text-gray-800 p-4 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
