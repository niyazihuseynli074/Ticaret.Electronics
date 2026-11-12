import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs font-medium text-primary-200 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Yeni kolleksiya gəldi
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Elektronika dünyası
              <span className="block bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                barmaqlarınızın ucunda
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Ən son smartfonlar, noutbuklar, audio və daha çox — 20-dən çox məhsul, sürətli çatdırılma və 2 il zəmanətlə.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onShopNow}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all hover:shadow-2xl active:scale-95"
              >
                İndi alış-veriş et
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <Truck className="w-5 h-5 text-primary-300 mb-2" />
                <p className="text-sm font-semibold">Sürətli çatdırılma</p>
                <p className="text-xs text-gray-400 mt-0.5">2-3 iş günü</p>
              </div>
              <div>
                <Shield className="w-5 h-5 text-primary-300 mb-2" />
                <p className="text-sm font-semibold">2 il zəmanət</p>
                <p className="text-xs text-gray-400 mt-0.5">Rəsmi diler</p>
              </div>
              <div>
                <Headphones className="w-5 h-5 text-primary-300 mb-2" />
                <p className="text-sm font-semibold">7/24 dəstək</p>
                <p className="text-xs text-gray-400 mt-0.5">Hər zaman yanınızda</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.pexels.com/photos/36680544/pexels-photo-36680544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl mt-8">
                  <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl -mt-4">
                  <img src="https://images.pexels.com/photos/16070479/pexels-photo-16070479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl mt-4">
                  <img src="https://images.pexels.com/photos/12564670/pexels-photo-12564670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white text-gray-900 rounded-2xl shadow-xl px-5 py-3">
                <p className="text-xs text-gray-500">Bu həftə endirimi</p>
                <p className="text-xl font-bold">40%-ə qədər</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
