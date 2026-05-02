"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <HiOutlineSparkles className="w-4 h-4" />
              Your Personal Library
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find Your <span className="text-primary">Next Read</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Explore thousands of books across every genre. Borrow instantly,
              read at your pace, and discover stories that inspire.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/all-books">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group flex items-center py-2 font-semibold cursor-pointer ">
                  Browse Now
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-foreground">12K+</p>
                <p className="text-sm text-muted-foreground">Books</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="border-x-2 px-8 border-slate-200">
                <p className="text-2xl font-bold text-foreground">5K+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
                  alt="Books"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-64 rounded-xl overflow-hidden shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80"
                  alt="Reading"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
