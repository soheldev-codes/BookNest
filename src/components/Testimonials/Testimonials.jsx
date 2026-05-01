"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Avid Reader",
    text: "BookNest transformed my reading life. The borrowing process is seamless and the collection is incredible.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Tech Enthusiast",
    text: "Finally found a platform with an excellent tech book collection. The recommendations are always spot on.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    text: "As a student, BookNest has been a lifesaver. Affordable access to textbooks and unlimited fiction reads.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            What readers say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Loved by Thousands
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary/20 text-2xl mb-4" />

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {t.text}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, j) => (
                    <FaStar
                      key={j}
                      className={`text-sm ${
                        j < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <Image
                  width={300}
                  height={300}
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
