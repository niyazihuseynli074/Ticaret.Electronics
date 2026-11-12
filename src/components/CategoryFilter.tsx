import { Smartphone, Laptop, Headphones, Watch, Camera, Tablet, Gamepad2, Plug, LayoutGrid } from 'lucide-react';
import type { Category } from '../types';

interface CategoryFilterProps {
  active: Category | 'all';
  onChange: (cat: Category | 'all') => void;
  counts: Record<string, number>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Tablet,
  Gamepad2,
  Plug,
};

const categories: { id: Category | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: 'Hamısı', icon: 'LayoutGrid' },
  { id: 'smartphones', label: 'Smartfonlar', icon: 'Smartphone' },
  { id: 'laptops', label: 'Noutbuklar', icon: 'Laptop' },
  { id: 'audio', label: 'Audio', icon: 'Headphones' },
  { id: 'wearables', label: 'Saatlar', icon: 'Watch' },
  { id: 'cameras', label: 'Kameralar', icon: 'Camera' },
  { id: 'tablets', label: 'Planşetlər', icon: 'Tablet' },
  { id: 'gaming', label: 'Oyun', icon: 'Gamepad2' },
  { id: 'accessories', label: 'Aksesuarlar', icon: 'Plug' },
];

export default function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
      {categories.map((cat) => {
        const Icon = iconMap[cat.icon] ?? LayoutGrid;
        const isActive = active === cat.id;
        const count = cat.id === 'all' ? Object.values(counts).reduce((a, b) => a + b, 0) : counts[cat.id] ?? 0;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
              isActive
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {cat.label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
