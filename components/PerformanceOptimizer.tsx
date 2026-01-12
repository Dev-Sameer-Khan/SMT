import { useEffect } from "react";

/**
 * Performance optimizer component that runs performance optimizations
 */
const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = "/logo2.png";
    document.head.appendChild(preloadLink);

    // Add resource hints for external domains
    const dnsPrefetchDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com",
      "https://wa.me",
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Scroll optimizations can be added here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizeScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", optimizeScroll);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
