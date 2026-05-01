"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { FaMicrochip } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";

const categories = [
  {
    name: "Story",
    description: "Fiction, fantasy, romance, and thrilling tales",
    icon: FiBookOpen,
    color: "bg-pink-100 text-pink-500",
    borderColor: "border-pink-200",
    count: "500+ Books",
  },
  {
    name: "Tech",
    description: "Programming, AI, web development, and more",
    icon: FaMicrochip,
    color: "bg-blue-100 text-blue-500",
    borderColor: "border-blue-200",
    count: "350+ Books",
  },
  {
    name: "Science",
    description: "Physics, biology, astronomy, and discoveries",
    icon: GiChemicalDrop,
    color: "bg-green-100 text-green-500",
    borderColor: "border-green-200",
    count: "420+ Books",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            Explore genres
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Popular Categories
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  href={`/books?category=${cat.name}`}
                  className={`group block rounded-2xl border ${cat.borderColor} p-8 hover:shadow-lg transition-all duration-300 bg-base-100`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {cat.description}
                  </p>
                  <span className="text-xs font-semibold text-primary">
                    {cat.count}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
