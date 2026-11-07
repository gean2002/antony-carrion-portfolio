/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndServices } from './components/AboutAndServices';
import { ProjectsSection } from './components/ProjectsSection';
import { AllProjectsPage } from './components/AllProjectsPage';
import { ProcessSection } from './components/ProcessSection';
import { TechAndCtaSection } from './components/TechAndCtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactsSection } from './components/ContactsSection';
import { ParticleBackground } from './components/ParticleBackground';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CyberGlowCursor } from './components/CyberGlowCursor';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';
import { ScrollEffects } from './components/ScrollEffects';
import { LegalModal, LegalTab } from './components/LegalModal';
import { Analytics } from '@vercel/analytics/react';
import { Service, Project } from './data/portfolioData';
import { getSoundEnabled, setSoundEnabled } from './utils/audio';
import { ConsentState, getStoredConsent } from './utils/consent';

export default function App() {
  const [soundEnabled, setSound] = useState<boolean>(getSoundEnabled());
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string | undefined>(undefined);
  const [legalTab, setLegalTab] = useState<LegalTab | null>(null);
  const [forceCookiePrefs, setForceCookiePrefs] = useState<boolean>(false);
  const [consent, setConsent] = useState<ConsentState | null>(() => getStoredConsent());
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      if (p === '/portfolio' || p === '/progetti') return 'portfolio';
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase();
      if (p === '/portfolio' || p === '/progetti') {
        setCurrentPage('portfolio');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'portfolio', targetSection?: string) => {
    if (page === 'portfolio') {
      window.history.pushState({}, '', '/portfolio');
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
      if (targetSection) {
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSound(next);
    setSoundEnabled(next);
  };

  const handleSelectService = (service: Service) => {
    setSelectedServiceForBrief(service.title);
    setIsContactModalOpen(true);
  };

  const handleOpenContact = (serviceTitle?: string) => {
    setSelectedServiceForBrief(serviceTitle);
    setIsContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 selection:bg-red-600 selection:text-white font-body">
      {/* Subtle Atmospheric Digital Particle & Embers Canvas */}
      <ParticleBackground />

      {/* Cyberpunk ambient laser glow cursor on desktop */}
      <CyberGlowCursor />

      {/* Scroll progress bar + scroll-reveal fallbacks */}
      <ScrollEffects />

      {/* Top Navigation Bar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {currentPage === 'portfolio' ? (
        <AllProjectsPage
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={() => handleOpenContact()}
          onBackToHome={() => navigateTo('home')}
        />
      ) : (
        /* Main Single Long Scroll Webpage Canvas */
        <main className="relative z-10 flex flex-col">
          {/* 1. HERO SECTION */}
          <HeroSection onOpenContact={() => handleOpenContact()} />

          {/* 2. ABOUT & SERVICES (CHI SONO / SERVIZI) */}
          <AboutAndServices
            onOpenAboutModal={() => setIsAboutModalOpen(true)}
            onSelectService={handleSelectService}
          />

          {/* 3. PROJECTS (PORTFOLIO - 3 in primo piano) */}
          <ProjectsSection
            onSelectProject={(project) => setSelectedProject(project)}
            onViewAllProjects={() => navigateTo('portfolio')}
            onOpenContact={() => handleOpenContact()}
          />

          {/* 4. WORK PROCESS (FASI DI LAVORO) */}
          <ProcessSection />

          {/* 5. TECHNOLOGIES & CALL TO ACTION (TECNOLOGIE & CTA) */}
          <TechAndCtaSection onOpenContact={() => handleOpenContact()} />

          {/* 6. FAQ (DOMANDE FREQUENTI & RISPOSTE CHIARE) */}
          <FaqSection />

          {/* 7. CONTACTS (CONTATTI & LAPTOP MOCKUP) */}
          <ContactsSection
            onOpenContactModal={() => handleOpenContact()}
            onOpenLegal={(tab) => setLegalTab(tab)}
            onOpenCookiePreferences={() => setForceCookiePrefs(true)}
          />
        </main>
      )}

      {/* MODALS */}
      {/* Project Case Study / Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          handleOpenContact(title);
        }}
      />

      {/* Discuss Project & Brief Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialService={selectedServiceForBrief}
        onOpenPrivacy={() => setLegalTab('privacy')}
      />

      {/* Extended About Antony Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onDiscussProject={() => {
          setIsAboutModalOpen(false);
          handleOpenContact();
        }}
      />

      {/* Privacy & Cookie Policy Modal */}
      <LegalModal
        tab={legalTab}
        onChangeTab={setLegalTab}
        onClose={() => setLegalTab(null)}
      />

      {/* GDPR / ePrivacy Cookie Consent Banner */}
      <CookieBanner
        forceOpen={forceCookiePrefs}
        onForceOpenHandled={() => setForceCookiePrefs(false)}
        onConsentChange={setConsent}
        onOpenPolicy={() => setLegalTab('cookies')}
      />

      {/* Floating WhatsApp Action Button (Pallino) */}
      <WhatsAppButton />

      {/* Vercel Web Analytics — loaded ONLY when the user grants analytics consent */}
      {consent?.analytics && <Analytics />}
    </div>
  );
}
