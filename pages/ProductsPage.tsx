
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { PRODUCTS } from '../constants';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setActiveCategory(category);
  }, [searchParams]);

  const categories = [
    { id: 'all', label: 'ALL COMPONENTS' },
    { id: 'engine', label: 'ENGINE PARTS' },
    { id: 'compressor', label: 'COMPRESSORS' },
    { id: 'filter', label: 'FILTERS' },
    { id: 'spare', label: 'SPARES' }
  ];

  const filteblueProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 max-[599px]:py-16 bg-[#0A0A0A] min-h-screen pb-24">
      <section className="py-16 bg-[#0A0A0A] text-white overflow-hidden relative mb-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">CATALOG</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">CORE INVENTORY</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light italic">
            Browse our technical specifications. If you don't find a specific part number, please use the direct inquiry form.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white pb-2">CATEGORIES</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (cat.id === 'all') {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat.id });
                      }
                    }}
                    className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat.id 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-black text-white hover:bg-gray-100 hover:text-black'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-black text-white rounded-sm max-[1024px]:hidden">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">CAN'T FIND A PART?</h4>
              <p className="text-white/50 text-[10px] leading-relaxed mb-6">Our database includes 100,000+ unlisted part numbers. Contact engineering support.</p>
              <button className="w-full py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                REQUEST CUSTOM PART
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteblueProducts.map((product) => (
                <div key={product.id} className="group glass rounded overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold uppercase tracking-tight">{product.title}</h3>
                    </div>
                    <p className="text-xs font-mono text-blue-500 mb-4 inline-block py-1 rounded-sm">
                      {product.specs}
                    </p>
                    <p className="text-sm text-gray-500 mb-8 h-10 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                    <button className="w-full py-4 border border-white/50 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition-all group/btn">
                      TECHNICAL SPECS <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-black text-white rounded-sm hidden max-[1024px]:block">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">CAN'T FIND A PART?</h4>
              <p className="text-white/50 text-[10px] leading-relaxed mb-6">Our database includes 100,000+ unlisted part numbers. Contact engineering support.</p>
              <button className="w-full py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                REQUEST CUSTOM PART
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
