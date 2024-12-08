"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Shield, Users } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const features = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Powerful Integration",
    description:
      "Connect with your favorite tools seamlessly and enhance your workflow.",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized platform.",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Enterprise Security",
    description:
      "Your data is protected with industry-leading security measures.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Team Collaboration",
    description:
      "Work together efficiently with real-time collaboration features.",
  },
];

export default function Features() {
  const featureRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(featureRef.current, { x: 0, opacity: 1 });

    ScrollTrigger.create({
      trigger: ".feature-container",
      animation: tl,
      start: "start start",
      end: "bottom start",
      scrub: 1,
      pin: true,
    });
  }, []);

  return (
    <section className="py-20 bg-secondary/50 h-[100vh] feature-container">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to manage your business
            effectively
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-1 border-red"
          style={{ transform: "translateX(100%)", opacity: 0 }}
          ref={featureRef}
        >
          {features.map((feature, index) => (
            <div
              className="bg-background p-6 rounded-xl border border-border"
              key={index}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
