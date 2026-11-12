import { Zap, Twitter, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold leading-tight whitespace-nowrap">
                <span className="text-white">Ticaret</span>
                <span className="text-primary-400 ml-1.5">Electronics</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Azərbaycanın ən böyük elektronika mağazası. 20-dən çox məhsul, rəsmi zəmanət və sürətli çatdırılma.
            </p>
            <div className="flex gap-2">
              {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Sosial"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kateqoriyalar</h4>
            <ul className="space-y-2.5 text-sm">
              {['Smartfonlar', 'Noutbuklar', 'Audio', 'Saatlar', 'Kameralar'].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kömək</h4>
            <ul className="space-y-2.5 text-sm">
              {['Çatdırılma', 'Zəmanət', 'Qaytarılma', 'FAQ', 'Əlaqə'].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Əlaqə</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+994 12 345 67 89</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info@ticaret.az</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span>Bakı, Nərimanov r., Ticaret Electronics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 Ticaret Electronics. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Məxfilik</a>
            <a href="#" className="hover:text-white transition-colors">Şərtlər</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
