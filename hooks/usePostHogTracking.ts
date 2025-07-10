import { useEffect } from 'react';
import posthog from '../instrumentation-client';

export const usePostHogTracking = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Track page views
    posthog.capture('page_viewed', {
      page: window.location.pathname,
      title: document.title,
      referrer: document.referrer
    });

    // Track section interactions
    const trackSectionView = (sectionName: string) => {
      posthog.capture('section_viewed', {
        section: sectionName,
        page: window.location.pathname
      });
    };

    // Intersection Observer to track when sections come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            trackSectionView(sectionId);
          }
        }
      });
    }, { threshold: 0.5 });

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Function to track button clicks
  const trackButtonClick = (buttonName: string, properties?: Record<string, any>) => {
    if (typeof window === 'undefined') return;
    
    posthog.capture('button_clicked', {
      button_name: buttonName,
      page: window.location.pathname,
      ...properties
    });
  };

  // Function to track link clicks
  const trackLinkClick = (linkName: string, linkUrl: string, properties?: Record<string, any>) => {
    if (typeof window === 'undefined') return;
    
    posthog.capture('link_clicked', {
      link_name: linkName,
      link_url: linkUrl,
      page: window.location.pathname,
      ...properties
    });
  };

  // Function to track portfolio project views
  const trackProjectView = (projectName: string, projectCategory: string) => {
    if (typeof window === 'undefined') return;
    
    posthog.capture('project_viewed', {
      project_name: projectName,
      project_category: projectCategory,
      page: window.location.pathname
    });
  };

  return {
    trackButtonClick,
    trackLinkClick,
    trackProjectView
  };
}; 