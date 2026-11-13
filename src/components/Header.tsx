import { ShoppingCart, Zap } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ cartCount, onOpenCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold leading-tight whitespace-nowrap">
              <span className="text-gray-900">Ticaret</span>
              <span className="text-primary-600 ml-1.5">Electronics</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Səbət</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-accent-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
