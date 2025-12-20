'use client';

import { StatItemJson, StatJson } from '@/types/web.type';
import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const StatItem: React.FC<StatItemJson> = ({ value, label, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = Number(value);

    const controls = animate(0, numericValue, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest: number) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
        {label}
      </div>
    </div>
  );
};

const CounterStats: React.FC = () => {
  const stats: StatJson[] = [
    { label: 'Years Experience', value: '3', suffix: '+' },
    { label: 'Projects Completed', value: '15', suffix: '+' },
    { label: 'Technologies', value: '15', suffix: '+' },
    { label: 'Passion', value: '100', suffix: '%' },
  ];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl px-6 my-10"
      >
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </motion.div>
    </div>
  );
};

export default CounterStats;
