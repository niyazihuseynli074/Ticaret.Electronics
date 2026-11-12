import { X, Star, ShoppingCart, Check, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur hover:bg-gray-100 transition-colors shadow"
          aria-label="Bağla"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto bg-gray-50 md:rounded-l-3xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-semibold uppercase tracking-wide">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="absolute top-4 right-16 px-3 py-1.5 rounded-full bg-accent-500 text-white text-xs font-bold">
                -{discount}%
              </span>
            )}
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{product.brand}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400">· {product.reviews} rəy</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Xüsusiyyətlər</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="flex items-end gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through mb-0.5">${product.oldPrice}</span>
                )}
              </div>

              {product.inStock ? (
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-green-600 font-medium">
                    <Check className="w-4 h-4" /> Stokda var
                  </span>
                </div>
              ) : (
                <p className="text-sm text-red-500 font-medium mb-4">Stokda yoxdur</p>
              )}

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Azalt"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="w-10 text-center font-semibold text-gray-900">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Artır"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    added ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Əlavə edildi
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" /> Səbətə əlavə et
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-gray-100">
                <div className="flex flex-col items-center text-center gap-1">
                  <Truck className="w-4 h-4 text-gray-400" />
                  <span className="text-[11px] text-gray-500">Sürətli çatdırılma</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-[11px] text-gray-500">2 il zəmanət</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <RotateCcw className="w-4 h-4 text-gray-400" />
                  <span className="text-[11px] text-gray-500">14 gün qaytarılma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
