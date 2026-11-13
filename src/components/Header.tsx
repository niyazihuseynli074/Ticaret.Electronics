import { Search, ShoppingCart, Zap, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export type Page = 'home' | 'about' | 'products' | 'calculator';

interface HeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  favoriteCount: number;
  onToggleFavorites: () => void;
  favoritesActive: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Ana səhifə', page: 'home' },
  { label: 'Haqqımızda', page: 'about' },
  { label: 'Məhsullar', page: 'products' },
  { label: 'Kalkulyator', page: 'calculator' },
];

export default function Header({
  search,
  onSearchChange,
  cartCount,
  onOpenCart,
  favoriteCount,
  onToggleFavorites,
  favoritesActive,
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileNavOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold leading-tight whitespace-nowrap">
              <span className="text-gray-900">Ticaret</span>
              <span className="text-primary-600 ml-1.5">Electronics</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPage === item.page
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search - desktop */}
          <div className="flex-1 max-w-xs hidden xl:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Məhsul axtar..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Axtarış"
            >
              {mobileSearchOpen ? <X className="w-5 h-5 text-gray-600" /> : <Search className="w-5 h-5 text-gray-600" />}
            </button>
            <button
              onClick={onToggleFavorites}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                favoritesActive
                  ? 'bg-red-50 hover:bg-red-100'
                  : 'hover:bg-gray-100'
              }`}
              aria-label="Favorilər"
            >
              <Heart
                className={`w-5 h-5 ${
                  favoritesActive ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
              {favoriteCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white">
                  {favoriteCount}
                </span>
              )}
            </button>
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
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menyu"
            >
              {mobileNavOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileNavOpen && (
          <nav className="lg:hidden pb-3 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium text-left transition-all ${
                    currentPage === item.page
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}

        {/* Mobile Search */}
        {mobileSearchOpen && (
          <div className="xl:hidden pb-3 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Məhsul axtar..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
