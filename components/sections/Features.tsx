'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Powerful Integration',
    description: 'Connect with your favorite tools seamlessly and enhance your workflow.',
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized platform.',
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Enterprise Security',
    description: 'Your data is protected with industry-leading security measures.',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Team Collaboration',
    description: 'Work together efficiently with real-time collaboration features.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to manage your business effectively
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}