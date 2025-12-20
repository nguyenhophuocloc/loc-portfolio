'use client';
import { listCertificate, listGroupCertificate } from '@/types/mockData';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import CertificateCard from './CertificateCard';

const Certificate = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [certificates, setCertificates] = useState(
    listCertificate.filter((item) => item.type === 1)
  );

  const handleSelected = (value: number) => {
    setSelectedGroup(value);
    if (value === 0) {
      setCertificates(listCertificate);
    } else {
      setCertificates(listCertificate.filter((item) => item.type === value));
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [certificates]);

  return (
    <section className="py-24 relative" id="certificate">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header căn trái đồng bộ */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-zinc-500 mt-2">
            Continuous learning and professional growth.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900/50 border border-white/5 rounded-2xl w-fit mb-12">
          {listGroupCertificate.map(({ name, value }) => (
            <button
              key={value}
              onClick={() => handleSelected(value)}
              className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                selectedGroup === value
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {selectedGroup === value && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl shadow-inner"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((item, key) => (
            <CertificateCard key={key} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
