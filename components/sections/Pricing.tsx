"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "5GB storage",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export default function Pricing() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".pricing-card-0", { x: 0, opacity: 1 }, 0)
      .to(".pricing-card-1", { y: 0, opacity: 1 }, 0)
      .to(".pricing-card-2", { x: 0, opacity: 1 }, 0);

    ScrollTrigger.create({
      trigger: ".pricing-container",
      animation: tl,
      start: "start start",
      end: "bottom start",
      scrub: 1,
      pin: true,
    });
  }, []);
  return (
    <section className="py-20 bg-secondary/50 pricing-container">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your teams needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card-${index}`}
              style={{
                transform: `${
                  index === 0
                    ? "translateX(-100%)"
                    : index === 1
                    ? "translateY(100%)"
                    : "translateX(100%)"
                }`,
                opacity: 0,
              }}
            >
              <Card
                className={`relative h-[480px] ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <div className="text-2xl font-bold">{plan.name}</div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                  </CardTitle>
                  <p className="text-muted-foreground truncate ...">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="">
                  <ul className="space-y-4 h-[260px]">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="h-full flex justify-center items-end">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
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
