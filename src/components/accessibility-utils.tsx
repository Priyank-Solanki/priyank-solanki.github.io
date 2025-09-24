import { useEffect } from 'react';

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return;

    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID to main element
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.id = 'main-content';
      mainElement.setAttribute('tabindex', '-1');
    }

    // Keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key to close mobile menu or modals
      if (e.key === 'Escape') {
        const closeButton = document.querySelector('[aria-label="Close menu"]') as HTMLButtonElement;
        closeButton?.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return <>{children}</>;
}

// Screen reader only class utility
export const srOnly = "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0";