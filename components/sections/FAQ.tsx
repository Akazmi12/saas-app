'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does the platform work?',
    answer: 'Our platform provides an intuitive interface for team collaboration, project management, and workflow automation. Simply sign up, invite your team, and start streamlining your processes.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 customer support through multiple channels including email, chat, and phone. Our dedicated support team is always ready to help you with any questions or issues.',
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes! We offer seamless integration with popular tools like Slack, Microsoft Teams, Google Workspace, and many more. Our API also allows for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We take security seriously. Our platform uses enterprise-grade encryption, regular security audits, and follows industry best practices to keep your data safe and secure.',
  },
  {
    question: 'Whats included in the free trial?',
    answer: 'Our 14-day free trial includes all features from our Professional plan, allowing you to fully experience the platform before making a decision.',
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}