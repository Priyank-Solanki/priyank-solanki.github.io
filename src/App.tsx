import { useEffect, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ErrorBoundary } from './components/error-boundary';
import { LoadingScreen } from './components/loading-screen';
import { AccessibilityProvider } from './components/accessibility-utils';
import { ThemeProvider } from './components/theme-provider';
import { SEOHead } from './components/seo-head';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { Footer } from './components/footer';
import { BackToTop } from './components/back-to-top';

// Lazy load heavy components to improve initial load time
const AboutSection = lazy(() => import('./components/about-section').then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import('./components/skills-section').then(module => ({ default: module.SkillsSection })));
const ExperienceSection = lazy(() => import('./components/experience-section').then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import('./components/projects-section').then(module => ({ default: module.ProjectsSection })));
const TestimonialsSection = lazy(() => import('./components/testimonials-section').then(module => ({ default: module.TestimonialsSection })));
const EducationSection = lazy(() => import('./components/education-section').then(module => ({ default: module.EducationSection })));
const ContactSection = lazy(() => import('./components/contact-section').then(module => ({ default: module.ContactSection })));

// Simple loading component for lazy sections
function SectionLoading() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Extended loading time for better user experience
    const loadingTimer = setTimeout(() => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error('Loading error:', error);
        setHasError(true);
        setIsLoading(false);
      }
    }, 5000); // Extended to 5 seconds for longer loading experience

    // Optimized smooth scrolling with error handling
    const handleSmoothScroll = (e: Event) => {
      try {
        const target = e.target as HTMLAnchorElement;
        if (target?.hash && target.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(target.hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }
      } catch (error) {
        console.warn('Smooth scroll error:', error);
      }
    };

    // Add event listener with improved error handling
    try {
      document.addEventListener('click', handleSmoothScroll, { 
        passive: false,
        capture: false 
      });
    } catch (error) {
      console.warn('Event listener error:', error);
    }

    // Cleanup function with error handling
    return () => {
      try {
        clearTimeout(loadingTimer);
        document.removeEventListener('click', handleSmoothScroll);
      } catch (error) {
        console.warn('Cleanup error:', error);
      }
    };
  }, []);

  // Simple error fallback
  if (hasError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Something went wrong</h1>
          <p className="text-muted-foreground mb-6">Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  // Simplified page transition
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AccessibilityProvider>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <motion.div 
                key="app"
                className="min-h-screen bg-background antialiased"
                variants={pageVariants}
                initial="initial"
                animate="animate"
              >
                <SEOHead />
                
                <Header />
                
                <main className="relative" id="main-content">
                  {/* Simplified background decorations */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute -top-40 -right-40 w-60 h-60 bg-gradient-to-br from-blue-400/4 to-purple-400/4 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-green-400/4 to-blue-400/4 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute -bottom-40 right-1/3 w-60 h-60 bg-gradient-to-br from-purple-400/4 to-pink-400/4 rounded-full blur-2xl opacity-50"></div>
                  </div>

                  {/* Content sections with performance optimizations */}
                  <div className="relative z-10">
                    {/* Hero loads immediately */}
                    <HeroSection />
                    
                    {/* Other sections load lazily */}
                    <Suspense fallback={<SectionLoading />}>
                      <AboutSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <SkillsSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <ExperienceSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <ProjectsSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <TestimonialsSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <EducationSection />
                    </Suspense>
                    
                    <Suspense fallback={<SectionLoading />}>
                      <ContactSection />
                    </Suspense>
                  </div>
                </main>
                
                <Footer />
                <BackToTop />
              </motion.div>
            )}
          </AnimatePresence>
        </AccessibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}