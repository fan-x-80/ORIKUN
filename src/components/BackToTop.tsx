import React, { useState, useEffect, useCallback } from 'react';

// Back to Top floating button component
// - Appears after scrolling 300px
// - Smooth fade in/out animation
// - Elegant warm-toned design matching ORIKUN brand
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show/hide button based on scroll position
  const toggleVisibility = useCallback(() => {
    // Show button after scrolling 300px
    const scrollThreshold = 300;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > scrollThreshold);
  }, []);

  // Scroll to top with smooth behavior
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // Listen for scroll events with performance optimization
  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial visibility
    toggleVisibility();
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  // Handle keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <React.Fragment>
      {/*
        Floating Back to Top Button
        - Position: Fixed bottom-right corner
        - z-index: 40 to stay above most content but below modals
        - Fade in/out animation: 300ms ease
      */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleKeyDown}
        aria-label="Back to top"
        title="Back to top"
        className={`
          fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40
          w-12 h-12 md:w-14 md:h-14
          flex items-center justify-center
          rounded-full
          bg-gradient-to-b from-amber-100 to-amber-200
          shadow-lg
          transition-all duration-300 ease-out
          ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }
          ${isHovered
            ? 'shadow-xl scale-110 bg-gradient-to-b from-amber-200 to-amber-300'
            : 'hover:shadow-xl hover:scale-105'
          }
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
        `}
        style={{
          // Subtle warm glow effect
          boxShadow: isHovered
            ? '0 8px 25px -5px rgba(180, 130, 80, 0.4), 0 4px 10px -6px rgba(180, 130, 80, 0.3)'
            : '0 4px 15px -3px rgba(180, 130, 80, 0.3), 0 2px 4px -2px rgba(180, 130, 80, 0.2)',
        }}
      >
        {/* Elegant Arrow Up Icon */}
        <svg
          className={`
            w-5 h-5 md:w-6 md:h-6
            text-amber-800
            transition-transform duration-300 ease-out
            ${isHovered ? '-translate-y-1' : ''}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </React.Fragment>
  );
};

export default BackToTop;