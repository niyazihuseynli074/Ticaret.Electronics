import { Zap, Target, Users, Award, Truck, Shield, Headphones, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 items-center justify-center shadow-lg shadow-primary-500/30 mb-6">
            <Zap className="w-7 h-7 text-white" fill="white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Haqqımızda
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ticaret Electronics — Azərbaycanın etibarlı elektronika mağazası. 2018-ci ildən bəri müştərilərimizə ən yaxşı texnologiyaları təqdim edirik.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Müştəri', value: '50,000+' },
            { icon: Zap, label: 'Məhsul', value: '1,000+' },
            { icon: Award, label: 'Zəmanət', value: '2 il' },
            { icon: Truck, label: 'Çatdırılma', value: '2-3 gün' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
              <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
              <Target className="w-3.5 h-3.5" />
              Missiyamız
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Texnologiyanı hər kəsə əlçatan etmək
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Biz inanırıq ki, keyfiyyətli elektronika hər kəs üçün əlçatan olmalıdır. Ona görə də ən son texnologiyaları sərfəli qiymətlərə, rəsmi zəmanətlə və sürətli çatdırılma ilə təqdim edirik.
            </p>
            <ul className="space-y-3">
              {['Rəsmi diler zəmanəti', 'Orijinal məhsullar', 'Kreditlə alış imkanı', '7/24 müştəri dəstəyi'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Niyə bizi seçirlər?</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Sürətli çatdırılma</p>
                  <p className="text-xs text-gray-500 mt-0.5">Bakı daxilində 2-3 iş günü, rayonlara 3-5 gün</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">2 il zəmanət</p>
                  <p className="text-xs text-gray-500 mt-0.5">Bütün məhsullarda rəsmi diler zəmanəti</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">7/24 dəstək</p>
                  <p className="text-xs text-gray-500 mt-0.5">Hər zaman sizin üçün buradayıq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
