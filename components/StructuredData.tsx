import { useLocation } from "react-router-dom";
import { PRODUCTS } from "../constants";

interface StructuredDataProps {
  type?: "organization" | "product" | "website" | "breadcrumb";
  productId?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = "website", productId }) => {
  const location = useLocation();
  const baseUrl = "https://sumoualebdaa.com";

  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SMT Engines",
          url: baseUrl,
          logo: `${baseUrl}/logo4.png`,
          description:
            "SMT is a Saudi Arabia–based company providing genuine engine spare parts and reliable maintenance and repair services, delivering quality you can trust since 2014.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeddah",
            addressRegion: "Makkah",
            addressCountry: "SA",
            streetAddress: "Al Eid Complex Car Exhi Al Jawhara",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+966-0532962420",
            contactType: "Customer Service",
            areaServed: "SA",
            availableLanguage: ["en", "ar"],
          },
          sameAs: [
            // Add social media links if available
          ],
        };

      case "product":
        if (productId) {
          const product = PRODUCTS.find((p) => p.id === productId || p.title === productId);
          if (product) {
            return {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.title,
              description: product.desc,
              image: product.image,
              brand: {
                "@type": "Brand",
                name: "SMT Engines",
              },
              category: product.category,
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "SAR",
                url: `${baseUrl}/product-details/${product.title}`,
              },
            };
          }
        }
        return null;

      case "breadcrumb":
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const breadcrumbItems = [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
        ];

        let currentPath = "";
        pathSegments.forEach((segment, index) => {
          currentPath += `/${segment}`;
          breadcrumbItems.push({
            "@type": "ListItem",
            position: index + 2,
            name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
            item: `${baseUrl}${currentPath}`,
          });
        });

        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems,
        };

      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SMT Engines",
          url: baseUrl,
          description:
            "Industrial parts supplier providing genuine engine spare parts, compressors, filters, and engineering solutions.",
        };
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
