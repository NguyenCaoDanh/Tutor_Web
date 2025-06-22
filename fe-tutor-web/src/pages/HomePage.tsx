// src/pages/HomePage.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/FeaturesSection';
import SubjectsSection from '../components/HomePage/SubjectsSection';
import TutorsSection from '../components/HomePage/TutorsSection';
import ProcessSection from '../components/HomePage/ProcessSection';
import CTASection from '../components/HomePage/CTASection';
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-white">
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <TutorsSection />
      <ProcessSection />
      <CTASection />

    </div>
  );
}
