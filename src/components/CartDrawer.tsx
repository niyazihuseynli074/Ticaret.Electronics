import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (!open) return null;

  const shipping = totalPrice > 500 ? 0 : totalPrice > 0 ? 15 : 0;
  const grandTotal = totalPrice + shipping;

  const handleCheckout = () => {
    setOrdered(true);
    clearCart();
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
            <h2 className="font-bold text-gray-900">Səbətim</h2>
            {totalItems > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-semibold">
                {totalItems} məhsul
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {ordered ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Sifariş qəbul edildi!</h3>
            <p className="text-sm text-gray-500">Sifarişiniz üçün təşəkkür edirik. Tezliklə əlaqə saxlanılacaq.</p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Səbət boşdur</h3>
            <p className="text-sm text-gray-500 mb-6">Məhsulları səbətə əlavə edərək alış-verişə başlayın.</p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Məhsullara bax
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 bg-gray-50 rounded-2xl p-3">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium text-primary-600 uppercase">{product.brand}</p>
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors shrink-0"
                        aria-label="Sil"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full bg-white">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 rounded-l-full"
                          aria-label="Azalt"
                        >
                          <Minus className="w-3 h-3 text-gray-500" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 rounded-r-full"
                          aria-label="Artır"
                        >
                          <Plus className="w-3 h-3 text-gray-500" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        ${product.price * quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-gray-400 hover:text-red-500 transition-colors py-2"
              >
                Səbəti təmizlə
              </button>
            </div>

            <div className="border-t border-gray-100 px-5 py-4 space-y-3 bg-gray-50">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Cəmi</span>
                  <span className="font-medium text-gray-900">${totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Çatdırılma</span>
                  <span className="font-medium text-gray-900">
                    {shipping === 0 ? 'Pulsuz' : `$${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[11px] text-amber-600">
                    $500-dən çox sifarişdə çatdırılma pulsuzdur. ${500 - totalPrice} qaldı!
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-600">Ümumi</span>
                <span className="text-xl font-bold text-gray-900">${grandTotal}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-all active:scale-[0.98] hover:shadow-lg"
              >
                Sifarişi tamamla
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
