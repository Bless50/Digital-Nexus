import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
    {
        question: "How long does it take to build my website?",
        answer: "For our Starter package, we deliver in just 2 days. The Growth package takes about 5 days, and Professional projects take 7-10 days. We value speed because we know you want to get back to business."
    },
    {
        question: "Why do I need a website if I have a Facebook page?",
        answer: "Facebook is rented land. Algorithms change, and posts get lost. A website is a permanent digital asset that builds higher trust. It validates that you are a legitimate professional business, not just a hobbyist."
    },
    {
        question: "What do I need to provide?",
        answer: "We make it simple. Just provide your business logo (if you have one), photos of your work, a list of your services, and your contact details. We handle the writing and design."
    },
    {
        question: "Are hosting and domain name included in the package price?",
        answer: "No, our package prices cover only the design and development of your website. Hosting (15,000 - 25,000 XAF/year) and domain registration (10,000 - 15,000 XAF/year) are separate add-on services. We help you set these up in your own name so you maintain full ownership of your online presence."
    },
    {
        question: "What about monthly maintenance?",
        answer: "Monthly maintenance is an optional add-on service (10,000 - 25,000 XAF/month) that includes content updates, security patches, backups, and technical support. This is recommended for businesses that want to keep their website fresh and running smoothly without worrying about technical details."
    },
    {
        question: "What are the payment terms?",
        answer: "We require a 60% deposit to begin work and secure your slot on our calendar. The remaining 40% is due only when the website is finished and you are happy."
    }
];

export default function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 relative z-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
                            <button
                                className="w-full flex justify-between items-center p-5 hover:bg-white/5 transition-colors text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-medium text-slate-200">{faq.question}</span>
                                {openFaqIndex === index ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                            </button>
                            {openFaqIndex === index && (
                                <div className="p-5 bg-black/20 text-slate-400 border-t border-white/5">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
