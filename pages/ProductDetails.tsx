import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS, TESTIMONIALS } from "../constants";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Settings,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Shield,
  Target,
  Users,
  Star,
  Quote,
} from "lucide-react";
import ErrorPage from "./ErorrPage";
import ProductImageViewer from "../components/ProductImageViewer";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Find product by title (id parameter is the product title)
  const product = PRODUCTS.find(
    (p) => p.title.toLowerCase() === decodeURIComponent(id || "").toLowerCase()
  );

  // If product not found, show error page
  if (!product) {
    return <ErrorPage />;
  }

  // Get products from same category (excluding current product)
  const sameCategoryProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  // Get recommended products (top products from different categories)
  const recommendedProducts = PRODUCTS.filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const handleWhatsAppQuery = (productItem?: typeof product) => {
    const phoneNumber = "966532962420";
    const targetProduct = productItem || product;
    const message = `Hi, I'm interested in the ${targetProduct.title} (${targetProduct.specs}). Can I get more technical specifications and pricing information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      alert("Please allow popups for this site to send a WhatsApp message.");
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      engine: "ENGINE PARTS",
      compressor: "COMPRESSORS",
      filter: "FILTERS",
      spare: "SPARES",
    };
    return labels[category] || category.toUpperCase();
  };

  // Generate multiple product images (variations for demo)
  // In production, you would have an array of actual product images in your data
  const generateProductImages = (baseImage: string): string[] => {
    const images = [baseImage];
    
    // Add variations using different image parameters for better demo experience
    // In production, replace this with actual product images from your database
    try {
      const url = new URL(baseImage);
      const existingParams = url.search;
      // Create 3 additional variations with different sizes
      images.push(`${url.origin}${url.pathname}?w=800&h=600${existingParams ? "&" + existingParams.substring(1) : ""}`);
      images.push(`${url.origin}${url.pathname}?w=600&h=800${existingParams ? "&" + existingParams.substring(1) : ""}`);
      images.push(`${url.origin}${url.pathname}?w=1000&h=1000${existingParams ? "&" + existingParams.substring(1) : ""}`);
    } catch {
      // If URL parsing fails, use the same image multiple times
      // In production, you would have actual different images
      for (let i = 0; i < 3; i++) {
        images.push(baseImage);
      }
    }
    
    return images;
  };

  const productImages = generateProductImages(product.image);

  // Product-specific FAQ
  const productFAQs = [
    {
      q: `What are the key specifications of ${product.title}?`,
      a: `${product.title} features ${product.specs}. It is designed for ${product.desc.toLowerCase()} and is suitable for industrial and marine applications requiring high performance and reliability.`,
    },
    {
      q: `Is ${product.title} compatible with existing systems?`,
      a: `Yes, ${product.title} is designed to meet industry-standard specifications. Our engineering team can provide detailed compatibility information and technical documentation to ensure proper integration with your existing systems.`,
    },
    {
      q: `What warranty coverage is available for ${product.title}?`,
      a: `All premium components supplied by SMT carry a standard 12-month operational warranty, matching OEM standards. Extended warranty options may be available for bulk purchases.`,
    },
    {
      q: `How quickly can I receive ${product.title}?`,
      a: `Stocked items are dispatched within 6 hours of order confirmation. International freight typically takes 3-5 business days via our premium logistics partners. Express shipping options are available for urgent requirements.`,
    },
    {
      q: `Can I get technical support for ${product.title}?`,
      a: `Yes, our engineering team provides 24/7 technical support for all products. We offer installation guidance, troubleshooting assistance, and detailed technical documentation. Contact us via WhatsApp or our contact form for immediate support.`,
    },
  ];

  // Why Choose Us features
  const whyChooseUsFeatures = [
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      text: "Comprehensive warranty on all industrial components. All premium parts carry a standard 12-month operational warranty matching OEM standards.",
    },
    {
      icon: Target,
      title: "Precision Quality",
      text: "Rigorous 12-point component verification ensures every part meets our strict quality standards. ISO 9001:2015 certified quality management.",
    },
    {
      icon: Users,
      title: "Expert Support",
      text: "Senior engineers available 24/7 for technical troubleshooting, part identification, and engineering consultation. We provide complete technical documentation.",
    },
    {
      icon: Package,
      title: "Global Logistics",
      text: "Strategic global warehouse synchronization ensures fast delivery worldwide. Stocked items dispatched within 6 hours, international shipping in 3-5 business days.",
    },
  ];

  return (
    <div className="pt-28 max-[599px]:pt-16 bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-16 text-black overflow-hidden relative mb-12 border-b border-black/20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6 font-semibold uppercase text-sm tracking-wide transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest">
              {getCategoryLabel(product.category)}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            {product.title}
          </h1>
          <p className="text-2xl text-blue-500 font-semibold mb-4">{product.specs}</p>
          <p className="text-black/70 text-lg max-w-3xl font-light leading-relaxed">
            {product.desc}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Viewer */}
          <ProductImageViewer images={productImages} productTitle={product.title} />

          {/* Product Details */}
          <div className="space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-black/5 border border-black/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                    Category
                  </span>
                </div>
                <p className="text-lg font-bold text-black">
                  {getCategoryLabel(product.category)}
                </p>
              </div>

              <div className="p-6 bg-black/5 border border-black/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                    Specifications
                  </span>
                </div>
                <p className="text-lg font-bold text-blue-500">{product.specs}</p>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 bg-black/5 border border-black/10 rounded-lg">
              <h3 className="text-2xl text-black font-black uppercase mb-4 tracking-tight">
                Product Description
              </h3>
              <p className="text-black/80 leading-relaxed text-lg">{product.desc}</p>
            </div>

            {/* Product Features */}
            <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <h3 className="text-2xl text-black font-black uppercase mb-6 tracking-tight">
                Product Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    Premium quality materials and manufacturing standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    Certified for industrial and marine applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    Available for immediate inquiry and technical consultation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    Expert engineering support and documentation available
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    ISO 9001:2015 certified quality management system
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-black/80 leading-relaxed">
                    12-month operational warranty matching OEM standards
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleWhatsAppQuery()}
                className="w-full py-5 bg-blue-500 text-white text-lg font-bold uppercase flex items-center justify-center gap-3 hover:bg-blue-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
              >
                Contact via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <Link to="/contact" className="block">
                <button className="w-full py-5 bg-white text-blue-500 border-2 border-blue-500 text-lg font-bold uppercase flex items-center justify-center gap-3 hover:bg-blue-50 rounded-lg transition-all duration-300 group/btn">
                  Request Technical Quote
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/products" className="block">
                <button className="w-full py-4 bg-black/5 text-black border border-black/10 text-md font-semibold uppercase flex items-center justify-center gap-2 hover:bg-black/10 rounded-lg transition-all duration-300">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16 mb-16 border-y border-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4">
                Engineering Excellence You Can Trust
              </h2>
              <p className="text-black/70 text-lg max-w-3xl mx-auto leading-relaxed">
                Our commitment to quality, expertise, and customer support sets us apart as your
                trusted industrial parts supplier.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUsFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="p-8 bg-black/5 border border-black/10 hover:border-blue-500/50 hover:shadow-2xl rounded-lg transition-all duration-500 group"
                >
                  <feature.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tight text-black">
                    {feature.title}
                  </h3>
                  <p className="text-black/80 text-sm leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More from This Category Section */}
        {sameCategoryProducts.length > 0 && (
          <section className="py-16 mb-16 border-y border-black/20">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
                    MORE FROM THIS CATEGORY
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
                    Explore {getCategoryLabel(product.category)}
                  </h2>
                </div>
                <Link
                  to={`/products?category=${product.category}`}
                  className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold uppercase text-sm tracking-wide transition-colors group"
                >
                  View All {getCategoryLabel(product.category)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sameCategoryProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-black/5 shadow-md border hover:border-blue-500/50 hover:shadow-2xl rounded-lg transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-xs font-bold uppercase">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-black font-bold uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-blue-500 mb-3">{item.specs}</p>
                      <p className="text-md text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Link to={`/product-details/${item.title}`} className="w-full">
                          <button className="w-full py-3 bg-white text-blue-500 border border-blue-500 text-sm font-bold uppercase flex items-center justify-center gap-2 rounded-md transition-all group/btn hover:bg-blue-50">
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleWhatsAppQuery(item)}
                          className="w-full py-3 bg-blue-500 text-white text-sm font-bold uppercase flex items-center justify-center gap-2 hover:bg-blue-600 rounded-md transition-all group/btn"
                        >
                          Inquire Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center md:hidden">
                <Link
                  to={`/products?category=${product.category}`}
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold uppercase text-sm tracking-wide transition-colors group"
                >
                  View All {getCategoryLabel(product.category)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Our Recommendations Section */}
        {recommendedProducts.length > 0 && (
          <section className="py-16 mb-16 border-y border-black/20">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
                    OUR RECOMMENDATIONS
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
                    You Might Also Like
                  </h2>
                </div>
                <Link
                  to="/products"
                  className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold uppercase text-sm tracking-wide transition-colors group"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {recommendedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-black/5 shadow-md border hover:border-blue-500/50 hover:shadow-2xl rounded-lg transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <span className="absolute top-3 left-3 px-2 py-1 bg-black text-white text-xs font-bold uppercase">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg text-black font-bold uppercase mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-md text-blue-500 mb-3 line-clamp-1">{item.specs}</p>
                      <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link to={`/product-details/${item.title}`} className="w-full">
                          <button className="w-full py-2.5 bg-white text-blue-500 border border-blue-500 text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-md transition-all group/btn hover:bg-blue-50">
                            View Product
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center md:hidden">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold uppercase text-sm tracking-wide transition-colors group"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="py-16 mb-16 border-y border-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
                CLIENT REVIEWS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4">
                What Our Clients Say
              </h2>
              <p className="text-black/70 text-lg max-w-3xl mx-auto leading-relaxed">
                Verified testimonials from industrial professionals who trust our products and
                services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-8 bg-black/5 border border-black/10 hover:border-blue-500/50 hover:shadow-2xl rounded-lg transition-all duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-blue-500/50 group-hover:text-blue-500 transition-colors duration-500 mb-4" />
                    <p className="text-black/80 text-base leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/10">
                    <h4 className="text-black font-bold uppercase tracking-widest text-sm mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-blue-500 text-xs font-semibold uppercase tracking-widest mb-2">
                      {testimonial.position}
                    </p>
                    <div className="flex justify-between items-center text-black/50 text-xs font-mono uppercase tracking-widest">
                      <span>{testimonial.company}</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 mb-16 border-y border-black/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-blue-500 text-4xl font-bold uppercase mb-4 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-4">
                Product Information & Support
              </h2>
              <p className="text-black/70 text-lg max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about {product.title} and our services.
              </p>
            </div>
            <div className="divide-y divide-black/20">
              {productFAQs.map((faq, i) => (
                <details key={i} className="group py-6" open={openFaq === i}>
                  <summary
                    className="list-none cursor-pointer text-black/80 flex justify-between items-center font-bold uppercase tracking-wide text-sm md:text-base group-hover:text-blue-500 transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenFaq(openFaq === i ? null : i);
                    }}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-black/60 flex-shrink-0 transition-all duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </summary>
                  {openFaq === i && (
                    <div className="mt-4 text-black/70 text-base leading-relaxed max-w-3xl">
                      {faq.a}
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <div className="mt-16 p-8 bg-black/5 border border-black/10 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-black font-black uppercase mb-2 tracking-tight">
                Need More Information?
              </h3>
              <p className="text-black/70 leading-relaxed">
                Our engineering team is available to provide detailed technical specifications,
                compatibility information, and custom solutions. Contact us directly via WhatsApp
                or use our inquiry form for comprehensive support.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600 rounded-md transition-all">
                Contact Form
              </button>
            </Link>
            <button
              onClick={() => handleWhatsAppQuery()}
              className="px-6 py-3 bg-green-500 text-white text-sm font-bold uppercase hover:bg-green-600 rounded-md transition-all"
            >
              WhatsApp Direct
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
