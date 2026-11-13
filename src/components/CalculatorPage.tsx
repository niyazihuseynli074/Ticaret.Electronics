import { useState } from 'react';
import { Calculator as CalcIcon, DollarSign, Calendar, Wallet, TrendingUp } from 'lucide-react';

export default function CalculatorPage() {
  const [productPrice, setProductPrice] = useState('');
  const [monthly, setMonthly] = useState('12');
  const [downPayment, setDownPayment] = useState('');
  const [result, setResult] = useState<{ total: number; monthlyPayment: number; remaining: number } | null>(null);

  const handleCalculate = () => {
    const price = parseFloat(productPrice) || 0;
    const months = parseInt(monthly) || 1;
    const down = parseFloat(downPayment) || 0;

    if (price <= 0) return;

    const remaining = Math.max(0, price - down);
    const monthlyPayment = remaining / months;
    const total = down + monthlyPayment * months;

    setResult({ total, monthlyPayment, remaining });
  };

  const formatPrice = (n: number) =>
    n.toLocaleString('az-AZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 items-center justify-center shadow-lg shadow-primary-500/30 mb-4">
            <CalcIcon className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Kredit Kalkulyatoru</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Məhsul qiymətini, aylıq sayını və ilkin ödənişi daxil edin, ümumi məbləği hesablayın.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="space-y-5">
            {/* Mehsul qiymeti */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 text-primary-600" />
                Məhsul qiyməti
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-semibold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">AZN</span>
              </div>
            </div>

            {/* Ayliq */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 text-primary-600" />
                Aylıq taksit
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 12, 18].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonthly(String(m))}
                    className={`py-3 rounded-2xl text-sm font-semibold transition-all active:scale-95 ${
                      monthly === String(m)
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {m} ay
                  </button>
                ))}
              </div>
              <div className="relative mt-2">
                <input
                  type="number"
                  inputMode="numeric"
                  value={monthly}
                  onChange={(e) => setMonthly(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-xs">ay</span>
              </div>
            </div>

            {/* Ilkin odenis */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Wallet className="w-4 h-4 text-primary-600" />
                İlkin ödəniş
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-semibold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">AZN</span>
              </div>
            </div>

            {/* Hesabla button */}
            <button
              onClick={handleCalculate}
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-bold text-base hover:from-primary-700 hover:to-primary-800 transition-all active:scale-[0.98] shadow-lg shadow-primary-500/30"
            >
              Hesabla
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 pt-6 border-t border-gray-100 animate-fade-in">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Nəticə</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm text-gray-600">İlkin ödəniş</span>
                  <span className="text-lg font-bold text-gray-900">{formatPrice(parseFloat(downPayment) || 0)} AZN</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm text-gray-600">Qalıq məbləğ</span>
                  <span className="text-lg font-bold text-gray-900">{formatPrice(result.remaining)} AZN</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm text-gray-600">Aylıq ödəniş</span>
                  <span className="text-lg font-bold text-gray-900">{formatPrice(result.monthlyPayment)} AZN</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-lg shadow-primary-500/30">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">Ümumi məbləğ</span>
                  </div>
                  <span className="text-2xl font-bold text-white">{formatPrice(result.total)} AZN</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
