import { useState, useMemo, useRef } from 'react';
import { SlidersHorizontal, SearchX } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import { products } from './data';
import type { Product, Category } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

function Shop() {
  const { totalItems } = useCart();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of products) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [activeCategory, search, sortBy]);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        search={search}
        onSearchChange={setSearch}
        cartCount={totalItems}
        onOpenCart={() => setCartOpen(true)}
      />

      <main className="flex-1">
        <Hero onShopNow={scrollToProducts} />

        <div ref={productsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Məhsullar</h2>
              <p className="text-sm text-gray-500 mt-1">
                {filtered.length} məhsul tapıldı
              </p>
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/30 cursor-pointer"
              >
                <option value="featured">Tövsiyə edilən</option>
                <option value="price-asc">Qiymət: ucuzdan bahaya</option>
                <option value="price-desc">Qiymət: bahadan ucuza</option>
                <option value="rating">Ən yüksək reytinq</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} counts={counts} />
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Məhsul tapılmadı</h3>
              <p className="text-sm text-gray-500">Axtarış və ya filtri dəyişdirərək yenidən cəhd edin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onView={setSelectedProduct} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Shop />
    </CartProvider>
  );
}
