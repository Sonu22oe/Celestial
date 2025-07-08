// components/StatsSection.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { label: "Projects", target: 120 },
  { label: "Clients", target: 80 },
  { label: "Downloads", target: 3400 },
  { label: "Awards", target: 24 },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1000; // total duration of animation
    const intervalTime = 10;
    const steps = duration / intervalTime;

    const counters = statsData.map((stat, i) => {
      let current = 0;
      const increment = stat.target / steps;

      return setInterval(() => {
        current += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = current >= stat.target ? stat.target : Math.ceil(current);
          return updated;
        });
        if (current >= stat.target) clearInterval(counters[i]);
      }, intervalTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 lora flex flex-col lg:flex-row justify-center items-center  ">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {statsData.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="text-center py-4 bg-transparent rounded-xl "
          >
            <h3 className="lg:text-[5em] text-[4em] mx-5 font-bold text-blue-900">
              {counts[i]}
        </h3>
            <p className="text-2xl text-slate-900 mt-5">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default StatsSection;