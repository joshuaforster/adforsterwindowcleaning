import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: "What other services do you offer?",
        answer: "In addition to window cleaning, we offer a comprehensive range of services including digger hire, general property maintenance such as gutter fixing, and sorting out patios. Each service is designed to meet the specific needs of both residential and commercial clients.",
    },
    {
        question: "What does 'satisfaction guaranteed' really mean?",
        answer: "Our satisfaction guarantee means that if you're not completely satisfied with the quality of our cleaning services, we will return to make it right at no extra charge. This guarantee is part of our commitment to delivering exceptional service to all our clients.",
    },
    {
        question: "How can I book a cleaning appointment?",
        answer: "Booking a cleaning appointment is easy! You can either call us directly or book through our website. We offer flexible scheduling options to accommodate your busy lifestyle and ensure minimal disruption to your daily routine.",
    },
    {
        question: "Can I hire your services for multiple locations?",
        answer: "Absolutely! Our services are available for multiple locations whether they are residential properties, office buildings, or commercial premises. We can arrange a cleaning schedule that suits all your locations efficiently.",
    },
    {
        question: "Do you offer eco-friendly cleaning options?",
        answer: "Yes, we provide eco-friendly cleaning options. We use environmentally safe products and methods to ensure a clean and healthy environment for your home or office while also protecting the planet.",
    },
    {
        question: "What is included in a standard cleaning service?",
        answer: "Our standard cleaning service includes cleaning the windows, glass, frames, sills, and doors. Additional services can be added based on your specific needs.",
    },
    {
        question: "How does your pricing work?",
        answer: "Our pricing is transparent and based on the type of service, the size of the area to be cleaned, and the frequency of cleaning. We provide free estimates after assessing your specific cleaning needs.",
    },

];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-10">
                            <h3
                                className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                {activeIndex === index ? (
                                    <FaMinus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                                ) : (
                                    <FaPlus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                                )}
                                {faq.question}
                            </h3>
                            {activeIndex === index && <p className="text-gray-500 dark:text-white">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}