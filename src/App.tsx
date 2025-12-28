import { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Instagram, ArrowRight, Code2, Server, Palette, Zap, Shield, Wrench } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            DD<span className="text-emerald-600">.</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {item === 'home' ? 'Beranda' : item === 'about' ? 'Tentang' : item === 'portfolio' ? 'Portfolio' : 'Kontak'}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left capitalize text-slate-600 hover:text-emerald-600"
                >
                  {item === 'home' ? 'Beranda' : item === 'about' ? 'Tentang' : item === 'portfolio' ? 'Portfolio' : 'Kontak'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative bg-white pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight">
                  Dimaz Darma Praja
                </h1>
                <p className="text-2xl text-slate-700 mb-6 font-medium">
                  Pendiri Arvore Group
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Membangun solusi teknologi yang mengubah cara bisnis beroperasi. Dari infrastruktur cloud hingga aplikasi custom, kami hadir untuk mewujudkan visi digital Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="px-8 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                    Lihat Layanan
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-md hover:bg-slate-50 transition-all font-medium"
                  >
                    Hubungi Saya
                  </button>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-80 h-80 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center px-6">
                    <Code2 size={56} className="text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-700 font-medium">Upload Foto Profil</p>
                    <p className="text-slate-500 text-sm mt-2">Ganti dengan foto pribadi Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                Tentang Saya
              </h2>
              <div className="w-16 h-1 bg-slate-900"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Saya memimpin Arvore Group dengan fokus pada inovasi teknologi dan kepuasan klien. Pengalaman lebih dari 10 tahun di industri telah mengajarkan saya bahwa solusi terbaik adalah yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Tim kami terdiri dari profesional berpengalaman di bidang infrastruktur cloud, pengembangan web, dan desain digital. Bersama-sama, kami telah membantu ratusan bisnis mencapai tujuan digital mereka.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Kepercayaan klien adalah aset paling berharga bagi kami. Itu mengapa kami selalu memberikan solusi yang transparan, berkualitas, dan dapat diandalkan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-900 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
                  <p className="text-slate-600">Tahun Pengalaman</p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-900 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
                  <p className="text-slate-600">Proyek Berhasil</p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-900 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
                  <p className="text-slate-600">Tim Profesional</p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-900 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
                  <p className="text-slate-600">Mitra Bisnis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-bold text-slate-900 mb-6">
                Layanan Kami
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                Kami menyediakan solusi teknologi lengkap untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
              </p>
              <div className="w-16 h-1 bg-slate-900 mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Server VPS & RDP',
                  description: 'Infrastruktur server yang handal dengan uptime 99.9% dan dukungan teknis 24/7.',
                  icon: Server
                },
                {
                  title: 'Pengembangan Web & Aplikasi',
                  description: 'Website dan aplikasi web modern, responsif, dan scalable untuk bisnis Anda.',
                  icon: Code2
                },
                {
                  title: 'Desain Visual & UI/UX',
                  description: 'Desain visual yang menarik dan user-friendly untuk pengalaman terbaik.',
                  icon: Palette
                },
                {
                  title: 'Konsultasi Teknologi',
                  description: 'Strategi dan rekomendasi teknologi yang tepat untuk pertumbuhan bisnis.',
                  icon: Zap
                },
                {
                  title: 'Maintenance & Support',
                  description: 'Dukungan teknis berkelanjutan, keamanan, dan monitoring sistem Anda.',
                  icon: Wrench
                },
                {
                  title: 'Custom Solutions',
                  description: 'Solusi teknologi yang disesuaikan dengan kebutuhan unik bisnis Anda.',
                  icon: Shield
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all"
                  >
                    <Icon size={40} className="text-slate-900 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Mari Berkolaborasi
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl">
              Punya proyek atau ingin membahas peluang baru? Hubungi saya dan mari kita ciptakan sesuatu yang luar biasa bersama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:dimaz@arvoregroup.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-all font-medium"
              >
                <Mail size={20} />
                Kirim Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-slate-900 transition-all font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-slate-900 transition-all font-medium"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4">
              Arvore Group
            </div>
            <p className="text-slate-400 mb-6">
              Dimaz Darma Praja
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Arvore Group. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
