'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const partners = [
  {
    name: 'Slack',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
  },
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80',
  },
  {
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80',
  },
  {
    name: 'Dropbox',
    logo: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
  },
];

export default function Partners() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with your favorite tools and platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 flex items-center justify-center h-32">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}