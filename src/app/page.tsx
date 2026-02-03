"use client";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Products from "@/components/home/Products";
import Community from "@/components/home/Community";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Products />
      <Community />
      <About />
    </main>
  );
}
