import React, { useState, useEffect } from "react";
import { useLanguage } from "../App";
import { PRODUCTS } from "../constants";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActiveCategory(category);
  }, [searchParams]);

  const categories = [
    { id: "all", label: "ALL COMPONENTS" },
    { id: "engine", label: "ENGINE PARTS" },
    { id: "compressor", label: "COMPRESSORS" },
    { id: "filter", label: "FILTERS" },
    { id: "spare", label: "SPARES" },
  ];

  const filteblueProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  // This function opens WhatsApp with a pre-filled message for the given product.
  const handleWhatsAppQuery = (product) => {
    // Phone number should not include spaces or a leading +, just the country code and number
    const phoneNumber = "966532962420"; // Corrected: removed space
    const message = `Hi, I'm interested in the ${product.title} (${product.specs}). Can I get more technical specs?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new browser tab/window
    const newWindow = window.open(whatsappUrl, "_blank");

    // If popup blocked, alert the user. Optionally remove the alert line.
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert("Please allow popups for this site to send a WhatsApp message.");
    }

    // For debug/testing purposes, you may log.
    // alert("running"); // Commented out or remove if not needed
  };

  return (
    <div className="pt-28 max-[599px]:py-16 bg-white min-h-screen pb-24">
      <section className="py-16 text-black overflow-hidden relative mb-12 border border-b-black/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-blue-500 text-4xl font-bold uppercase mb-2 block">
            CATALOG
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            CORE INVENTORY
          </h1>
          <p className="text-black/80 text-lg max-w-2xl font-light italic">
            Browse our technical specifications. If you don't find a specific
            part number, please use the direct inquiry form.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h4 className="text-4xl text-black font-bold uppercase t mb-6 border-b border-black/50 pb-2">
                CATEGORIES
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (cat.id === "all") {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat.id });
                      }
                    }}
                    className={`w-full rounded text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat.id
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-black/5 text-black border border-white/5 hover:border-blue-500 hover:text-blue-500"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
                <Link to="/contact">
            <div className="p-6 bg-black/5 text-black rounded-md max-[1024px]:hidden mt-6">
              <h4 className="text-lg font-bold uppercase mb-4">
                CAN'T FIND A PART?
              </h4>
              <p className="text-black/80 text-sm mb-6">
                Our database includes 100,000+ unlisted part numbers. Contact
                engineering support.
              </p>
              <button className="w-full rounded-md py-3 bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600 transition-all duration-300">
                REQUEST CUSTOM PART
              </button>
            </div>
                </Link>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteblueProducts.map((product) => (
                <div
                  key={product.id}
                  className="group glass bg-black/5 shadow-md border hover:border-blue-500/50 hover:shadow-2xl rounded-md transition-all duration-500 rounded overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-bold uppercase">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl text-black font-bold uppercase ">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-lg text-blue-500 inline-block py-1 rounded-sm">
                      {product.specs}
                    </p>
                    <p className="text-md text-gray-500 mb-8 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <Link className="w-full" to={`/product-details/${product.title}`}>
                    <button
                      className="w-full py-4 bg-white text-blue-500 border border-blue-500 text-md font-bold uppercase flex items-center justify-center gap-2 rounded-md transition-all group/btn"
                      >
                      View Product{" "}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      </Link>
                    <button
                      onClick={() => handleWhatsAppQuery(product)}
                      className="w-full py-4 bg-blue-500 text-white text-md font-bold uppercase flex items-center justify-center gap-2 hover:bg-blue-600 rounded-md transition-all group/btn"
                    >
                      Inquire Now{" "}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/contact">
          <div className="p-6 bg-black text-black rounded-sm hidden max-[1024px]:block">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">
              CAN'T FIND A PART?
            </h4>
            <p className="text-black/50 text-[10px] leading-relaxed mb-6">
              Our database includes 100,000+ unlisted part numbers. Contact
              engineering support.
            </p>
            <button className="w-full py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              REQUEST CUSTOM PART
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
