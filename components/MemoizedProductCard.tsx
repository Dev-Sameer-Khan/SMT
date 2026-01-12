import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "../types";
import LazyImage from "./LazyImage";

interface ProductCardProps {
  product: Product;
  getCategoryLabel: (category: string) => string;
  getSubcategoryLabel: (subcategory: string) => string;
  handleWhatsAppQuery: (product: Product) => void;
  viewProduct: string;
  inquireNow: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  getCategoryLabel,
  getSubcategoryLabel,
  handleWhatsAppQuery,
  viewProduct,
  inquireNow,
}) => {
  return (
    <div className="group glass bg-black/5 shadow-md border hover:border-blue-500/50 hover:shadow-2xl rounded-md transition-all duration-500 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <LazyImage
          src={product.image}
          alt={`${product.title} - ${product.specs}`}
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
          <h3 className="text-xl text-black font-bold uppercase">
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
            <button className="w-full py-4 bg-white text-blue-500 border border-blue-500 text-md font-bold uppercase flex items-center justify-center gap-2 rounded-md transition-all group/btn">
              {viewProduct}{" "}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button
            onClick={() => handleWhatsAppQuery(product)}
            className="w-full py-4 bg-blue-500 text-white text-md font-bold uppercase flex items-center justify-center gap-2 hover:bg-blue-600 rounded-md transition-all group/btn"
          >
            {inquireNow}{" "}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
