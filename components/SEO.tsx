import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../App";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "/logo2.png",
  type = "website",
  noindex = false,
}) => {
  const location = useLocation();
  const { lang } = useLanguage();
  const baseUrl = "https://smtengines.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    const fullTitle = title
      ? `${title} | SMT Engines`
      : "SMT Engines - Industrial Parts & Engineering Solutions";
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag("description", description);
    }
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    if (description) {
      updateMetaTag("og:description", description, true);
    }
    updateMetaTag("og:image", `${baseUrl}${image}`, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "SMT Engines", true);
    updateMetaTag("og:locale", lang === "ar" ? "ar_SA" : "en_US", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    if (description) {
      updateMetaTag("twitter:description", description);
    }
    updateMetaTag("twitter:image", `${baseUrl}${image}`);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Hreflang tags for multilingual support
    const hreflangEn = document.querySelector("link[rel='alternate'][hreflang='en']") as HTMLLinkElement;
    const hreflangAr = document.querySelector("link[rel='alternate'][hreflang='ar']") as HTMLLinkElement;
    
    if (!hreflangEn) {
      const linkEn = document.createElement("link");
      linkEn.setAttribute("rel", "alternate");
      linkEn.setAttribute("hreflang", "en");
      linkEn.setAttribute("href", currentUrl);
      document.head.appendChild(linkEn);
    } else {
      hreflangEn.setAttribute("href", currentUrl);
    }

    if (!hreflangAr) {
      const linkAr = document.createElement("link");
      linkAr.setAttribute("rel", "alternate");
      linkAr.setAttribute("hreflang", "ar");
      linkAr.setAttribute("href", currentUrl);
      document.head.appendChild(linkAr);
    } else {
      hreflangAr.setAttribute("href", currentUrl);
    }

    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
  }, [title, description, keywords, image, type, noindex, currentUrl, lang]);

  return null;
};

export default SEO;
