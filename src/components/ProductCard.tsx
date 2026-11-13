import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ProductCard({ product, onView, isFavorite, onToggleFavorite }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card-shadow group bg-white rounded-2xl overflow-hidden cursor-pointer" onClick={() => onView(product)}>
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full bg-gray-900 text-white text-[10px] font-semibold uppercase tracking-wide">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-accent-500 text-white text-[10px] font-bold">
              -{discount}%
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-white transition-all active:scale-90"
          aria-label="Favori"
        >
          <Heart
            className={`w-4 h-4 transition-all ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'
            }`}
          />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-full">Stokda yoxdur</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-medium text-primary-600 uppercase tracking-wide">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through leading-none mb-0.5">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900 leading-none">${product.price}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            disabled={!product.inStock}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 disabled:bg-gray-300 transition-all active:scale-90 hover:shadow-lg hover:shadow-primary-500/30"
            aria-label="Səbətə əlavə et"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
