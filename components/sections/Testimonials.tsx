"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";

const testimonials = [
  {
    quote:
      "This platform has transformed how our team works together. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The best investment we've made for our company's productivity. Highly recommended!",
    author: "Michael Chen",
    role: "Product Manager at InnovateLabs",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Outstanding support team and feature set. It's exactly what we needed to scale our operations.",
    author: "Emily Rodriguez",
    role: "CEO at GrowthStack",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".card-1", { y: 0, opacity: 1 })
      .to(".card-0", { y: 0, opacity: 1, duration: 1 })
      .to(".card-2", { y: 0, opacity: 1, duration: 2 });

    ScrollTrigger.create({
      trigger: ".partners-container",
      animation: tl,
      start: "start start",
      end: "bottom start",
      scrub: 1,
      pin: true,
    });
  }, []);

  return (
    <section className="py-20 partners-container">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-${index}`}
              style={{ transform: "translateY(100%)", opacity: 0 }}
            >
              <Card className="h-[100%]">
                <CardContent className="p-6 h-[100%] flex flex-col justify-between items-start">
                  <p className="text-lg mb-6">{`"${testimonial.quote}"`}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
