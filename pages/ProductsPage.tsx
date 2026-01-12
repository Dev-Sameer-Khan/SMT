import React, { useState, useEffect } from "react";
import { useLanguage } from "../App";
import { PRODUCTS } from "../constants";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

// Define subcategories for engine and compressor
const ENGINE_SUBCATEGORIES = [
  { id: "pistons", label: "Pistons" },
  { id: "cylinders", label: "Cylinders" },
  { id: "valves", label: "Valves" },
  { id: "bearings", label: "Bearings" },
  { id: "gaskets", label: "Gaskets" },
];

const COMPRESSOR_SUBCATEGORIES = [
  { id: "screw", label: "Screw Compressors" },
  { id: "piston", label: "Piston Compressors" },
  { id: "vanes", label: "Vane Compressors" },
  { id: "rotary", label: "Rotary Compressors" },
];

const ProductsPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "all";
  const subcategoryParam = searchParams.get("subcategory") || "";
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const [activeSubcategory, setActiveSubcategory] = useState<string>(subcategoryParam);

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const subcategory = searchParams.get("subcategory") || "";
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
  }, [searchParams]);

  // Get subcategories from translations
  const ENGINE_SUBCATEGORIES_TRANSLATED = t.productSubcategories?.engine || ENGINE_SUBCATEGORIES;
  const COMPRESSOR_SUBCATEGORIES_TRANSLATED = t.productSubcategories?.compressor || COMPRESSOR_SUBCATEGORIES;

  const categories = [
    { id: "all", label: t.allComponents },
    { id: "engine", label: t.engineParts, subcategories: ENGINE_SUBCATEGORIES_TRANSLATED },
    { id: "compressor", label: t.compressors, subcategories: COMPRESSOR_SUBCATEGORIES_TRANSLATED },
    { id: "filter", label: t.filters },
    { id: "spare", label: t.spares },
  ];

  // Show subcategories if "engine" or "compressor" category is active
  const currentCategoryObj = categories.find((cat) => cat.id === activeCategory);
  const subcategoriesToShow = currentCategoryObj && currentCategoryObj.subcategories ? currentCategoryObj.subcategories : [];
  
  // Helper function to get category/subcategory label
  const getCategoryLabel = (category: string) => {
    return t.productCategoryLabels?.[category as keyof typeof t.productCategoryLabels] || category.toUpperCase();
  };
  
  const getSubcategoryLabel = (subcategory: string) => {
    return t.subcategoryLabels?.[subcategory as keyof typeof t.subcategoryLabels] || subcategory.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Product filtering logic
  let filteredProducts: typeof PRODUCTS = [];
  if (activeCategory === "all") {
    filteredProducts = PRODUCTS;
  } else if (activeCategory === "engine" || activeCategory === "compressor") {
    // For "engine" or "compressor", show all products under the category, unless subcategory filter is on.
    if (activeSubcategory) {
      // Show only products in the specific subcategory
      filteredProducts = PRODUCTS.filter(
        (p) => p.category === activeCategory && p.subcategory === activeSubcategory
      );
    } else {
      // Show all products of the category, regardless of subcategory
      filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);
    }
  } else {
    // For other categories, filter by category
    filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);
  }

  // Opens WhatsApp with product info
  const handleWhatsAppQuery = (product) => {
    const phoneNumber = "966532962420";
    const message = `Hi, I'm interested in the ${product.title} (${product.specs}). Can I get more technical specs?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      alert("Please allow popups for this site to send a WhatsApp message.");
    }
  };

  return (
    <div className="pt-28 max-[599px]:py-10 bg-white min-h-screen pb-24">
      <section className="py-16 text-black overflow-hidden relative mb-12 border border-b-black/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-blue-500 text-4xl max-[599px]:text-2xl font-bold uppercase mb-2 block">
            {t.catalogTitle}
          </span>
          <h1 className="text-5xl max-[599px]:text-4xl md:text-7xl font-black tracking-tighter mb-8 max-[599px]:mb-2">
            {t.coreInventory}
          </h1>
          <p className="text-black/80 text-lg max-w-2xl font-light italic">
            {t.catalogDesc}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-[599px]:gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h4 className="text-4xl text-black font-bold uppercase t mb-6 border-b border-black/50 pb-2">
                {t.categoriesTitle}
              </h4>
              <div className="space-y-2">
                {/* Top-level categories */}
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveSubcategory(""); // Reset subcategory selection
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
              {/* Subcategory Buttons */}
              {subcategoriesToShow.length > 0 && (
                <div className="space-y-1 mt-6 max-[599px]:mt-3 ml-4 border-l-2 border-blue-200 pl-4">
                  {subcategoriesToShow.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setActiveSubcategory(sub.id);
                        setSearchParams({ category: activeCategory, subcategory: sub.id });
                      }}
                      className={`block w-full rounded text-left px-3 py-2 max-[599px]:py-1 text-xs font-normal uppercase tracking-widest transition-all ${
                        activeSubcategory === sub.id
                          ? "bg-blue-100 text-blue-900 font-bold shadow"
                          : "bg-black/0 text-black hover:bg-blue-50 hover:text-blue-700"
                      }`}
                      style={{ marginBottom: "2px" }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact">
              <div className="p-6 bg-black/5 text-black rounded-md max-[1024px]:hidden mt-6">
                <h4 className="text-lg font-bold uppercase mb-4">
                  {t.cantFindPart}
                </h4>
                <p className="text-black/80 text-sm mb-6">
                  {t.cantFindPartDesc}
                </p>
                <button className="w-full rounded-md py-3 bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600 transition-all duration-300">
                  {t.requestCustomPart}
                </button>
              </div>
            </Link>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group glass bg-black/5 shadow-md border hover:border-blue-500/50 hover:shadow-2xl rounded-md transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-bold uppercase">
                      {getCategoryLabel(product.category)}
                      {product.subcategory
                        ? ` • ${getSubcategoryLabel(product.subcategory)}`
                        : ""}
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
                          {t.viewProduct}{" "}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleWhatsAppQuery(product)}
                        className="w-full py-4 bg-blue-500 text-white text-md font-bold uppercase flex items-center justify-center gap-2 hover:bg-blue-600 rounded-md transition-all group/btn"
                      >
                        {t.inquireNow}{" "}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/contact">
              <div className="p-6 bg-black/5 text-black rounded-md max-[1024px]:block hidden mt-6">
                <h4 className="text-lg font-bold uppercase mb-4">
                  {t.cantFindPart}
                </h4>
                <p className="text-black/80 text-sm mb-6">
                  {t.cantFindPartDesc}
                </p>
                <button className="w-full rounded-md py-3 bg-blue-500 text-white text-sm font-bold uppercase hover:bg-blue-600 transition-all duration-300">
                  {t.requestCustomPart}
                </button>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
