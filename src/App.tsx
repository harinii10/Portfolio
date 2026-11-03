import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProjectModal } from './components/ProjectModal';
import { PlaceholderModal } from './components/PlaceholderModal';
import type { Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [placeholderState, setPlaceholderState] = useState<{
    isOpen: boolean;
    type: 'github' | 'linkedin' | 'demo' | 'repo';
    title?: string;
  }>({
    isOpen: false,
    type: 'github',
  });

  const handleOpenPlaceholder = (
    type: 'github' | 'linkedin' | 'demo' | 'repo',
    title?: string
  ) => {
    setPlaceholderState({
      isOpen: true,
      type,
      title,
    });
  };

  const handleClosePlaceholder = () => {
    setPlaceholderState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0B0B0F] text-slate-100 dark:bg-[#0B0B0F] dark:text-slate-100 light:bg-[#F8FAFC] light:text-slate-900 selection:bg-[#9B5CFF]/30 selection:text-white transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar onOpenPlaceholder={handleOpenPlaceholder} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenPlaceholder={handleOpenPlaceholder} />
          <About />
          <Skills />
          <Projects
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenPlaceholder={handleOpenPlaceholder}
          />
          <Experience />
          <Education />
          <Contact onOpenPlaceholder={handleOpenPlaceholder} />
        </main>

        {/* Footer */}
        <Footer onOpenPlaceholder={handleOpenPlaceholder} />

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          onOpenPlaceholder={handleOpenPlaceholder}
        />

        <PlaceholderModal
          isOpen={placeholderState.isOpen}
          onClose={handleClosePlaceholder}
          type={placeholderState.type}
          title={placeholderState.title}
        />

        {/* Floating Back To Top */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
