import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Activity, Target, Users, CheckCircle2, 
  ChevronRight, Shield, Building2, Briefcase, 
  ArrowLeft, CheckCircle, AlertTriangle, BookOpen, FileText
} from 'lucide-react';

// ==========================================
// TYPE DEFINITIONS
// ==========================================



interface ResultType {
  brand: string;
  track: string;
  report: string[];
  isUrgent: boolean;
  description?: string;
  icon?: React.ReactNode;
}

interface HomeViewProps {
  onStartAssessment: () => void;
}

interface AssessmentViewProps {
  onBack: () => void;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  variant?: 'outline' | 'solid';
}

// Konstanta Brand & Assets
const brand = {
  primary: '#005073',
  secondary: '#107dac',
  dark: '#000000',
  light: '#ffffff',
  accent: '#4cc9f0'
};

const logoUtama = "https://i.ibb.co.com/1f7TdvLj/performa-only-logo.jpg";
const insightsURL = "https://insights.performa.co.id"; 

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackId: string) => {
  e.currentTarget.style.display = 'none';
  const fallbackEl = document.getElementById(fallbackId);
  if (fallbackEl) {
    fallbackEl.style.display = 'block';
  }
};

// ==========================================
// 1. KOMPONEN HALAMAN UTAMA (HOMEPAGE)
// ==========================================
const HomeView: React.FC<HomeViewProps> = ({ onStartAssessment }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}
        className="fixed w-full z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="https://www.performa.co.id" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/qMHcWzjh/Logo-Only-performa.png"
              alt="Performa International Indonesia"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#masalah"
              className="text-sm font-medium text-gray-600 hover:text-[#005073] transition-colors">
              Solusi
            </a>
            <a href="#tim"
              className="text-sm font-medium text-gray-600 hover:text-[#005073] transition-colors">
              Konsultan Kami
            </a>
            <a href="https://www.performa.co.id/insights"
              className="text-sm font-medium transition-colors"
              style={{ color: "#005073", fontWeight: 600 }}>
              Insights
            </a>
            <a href="https://wa.me/6287770781950"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-white px-4 py-2 rounded-full transition-colors"
              style={{ backgroundColor: "#005073" }}>
              WhatsApp
            </a>
            <a href="https://calendly.com/performaconsulting/diagnostic"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full border-2 transition-colors"
              style={{ borderColor: "#005073", color: "#005073" }}>
              Diagnostik Organisasi
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            <a href="#masalah"
              className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Solusi
            </a>
            <a href="#tim"
              className="text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>
              Konsultan Kami
            </a>
            <a href="https://www.performa.co.id/insights"
              className="text-sm font-semibold" style={{ color: "#005073" }}
              onClick={() => setMenuOpen(false)}>
              Insights
            </a>
            <a href="https://wa.me/6287770781950"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-white px-4 py-2 rounded-full text-center"
              style={{ backgroundColor: "#005073" }}>
              WhatsApp
            </a>
            <a href="https://calendly.com/performaconsulting/diagnostic"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full border-2 text-center"
              style={{ borderColor: "#005073", color: "#005073" }}>
              Diagnostik Organisasi
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Meeting" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${brand.primary}f2, ${brand.primary}cc)` }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.accent }}></span>
              <span>Konsultan Transformasi BUMN & Enterprise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Menghilangkan Ego Sektoral.<br />
              <span style={{ color: brand.accent }}>Memastikan Strategi Dieksekusi.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
              Kami membantu BUMN & Enterprise menyelaraskan proses bisnis yang berantakan, membongkar silo antar departemen, dan menghentikan pemborosan anggaran akibat strategi yang gagal dieksekusi di lapangan.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="px-8 py-4 rounded-lg text-white font-semibold flex items-center justify-center transition-all hover:bg-opacity-90 shadow-lg"
                style={{ backgroundColor: brand.secondary }}
                onClick={onStartAssessment}
              >
                Mulai Diagnostik Organisasi <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INSIGHTS PREVIEW */}
      <section id="insights" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Insights</h2>
              <p className="text-gray-600 max-w-xl text-lg">Laporan mendalam dan strategi praktis bagi para pemimpin korporasi di Indonesia.</p>
            </div>
            <a href={insightsURL} className="text-[#107dac] font-bold flex items-center mt-6 md:mt-0 hover:underline">
              Lihat Semua Artikel <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Mengapa 70% Inisiatif RJPP di BUMN Mandek di Tingkat Manajerial</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Laporan eksklusif Performa mengenai tantangan eksekusi strategi di lapisan menengah BUMN dan cara mengatasinya...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <FileText className="w-3 h-3 mr-1" /> Whitepaper
              </span>
            </div>

            <div className="group cursor-pointer">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1454165833772-d99626a4407d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Memangkas Waktu Siklus (Cycle Time) melalui Restrukturisasi BPM</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Bagaimana satu perubahan kecil dalam arsitektur proses bisnis dapat menghemat biaya operasional hingga 25%...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <CheckCircle className="w-3 h-3 mr-1" /> Case Study
              </span>
            </div>

            <div className="group cursor-pointer">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Silo Departemen: Pembunuh Tersembunyi dalam Perusahaan Raksasa</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Panduan praktis bagi Direktur Operasional untuk meruntuhkan tembok birokrasi antar divisi tanpa gesekan internal...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <BookOpen className="w-3 h-3 mr-1" /> Leadership Insight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM / AGITATION */}
      <section id="masalah" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: brand.primary }}>
              Strategi Brilian Seringkali Mati di Tahap Eksekusi.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Banyak perusahaan membuang miliaran rupiah untuk inisiatif perubahan yang pada akhirnya mandek. Jika Anda mengalami salah satu dari gejala ini, KPIs Anda sedang terancam:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg">Risiko Tinggi</div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${brand.primary}10`, color: brand.primary }}>
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Silo & Ego Sektoral</h3>
              <p className="text-gray-600">Setiap departemen bergerak dengan metriknya sendiri. Hasilnya? Saling lempar tanggung jawab, waktu terbuang, dan profitabilitas perusahaan bocor akibat birokrasi internal.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-bl-lg">Pemborosan</div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${brand.primary}10`, color: brand.primary }}>
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">SOP Hanya Menjadi Pajangan</h3>
              <p className="text-gray-600">Anda menyewa konsultan untuk membuat ratusan halaman SOP, namun dokumen itu hanya berdebu di laci. Tidak ada keselarasan dengan kenyataan proses di lapangan.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-50 text-yellow-600 text-xs font-bold px-3 py-1 rounded-bl-lg">Hambatan Eksekusi</div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${brand.primary}10`, color: brand.primary }}>
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resistensi & Kelumpuhan Tim</h3>
              <p className="text-gray-600">Inisiatif dari Direksi mati di tangan manajemen menengah. Budaya <i>"kita selalu melakukannya seperti ini"</i> menahan laju inovasi dan mengancam posisi pemimpin proyek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="solusi" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solusi Transformasi End-to-End
            </h2>
            <p className="text-gray-400 text-lg">
              Kami memetakan proses, menyelaraskan strategi (RJPP), dan menggunakan ilmu perilaku untuk memastikan lapisan manajerial Anda benar-benar menjalankannya.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group border border-gray-700 rounded-2xl p-8 hover:border-[#4cc9f0] transition-all bg-gray-800/50 hover:bg-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brand.secondary}30`, color: brand.accent }}>
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Business Process Architecture (BPM)</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Kami merancang arsitektur operasional 4-level. Memetakan dari <i>Customer Journey</i> hingga level SOP instruksional untuk menghilangkan tumpang tindih peran dan kebocoran proses.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-700 rounded-2xl p-8 hover:border-[#4cc9f0] transition-all bg-gray-800/50 hover:bg-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brand.secondary}30`, color: brand.accent }}>
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Perencanaan Strategis (RJPP)</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Menyusun Rencana Jangka Panjang Perusahaan (1-5 tahun). Menyelaraskan target finansial eksekutif dengan kemampuan operasional dan analisis lanskap pasar secara realistis.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-700 rounded-2xl p-8 hover:border-[#4cc9f0] transition-all bg-gray-800/50 hover:bg-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brand.secondary}30`, color: brand.accent }}>
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pengembangan Organisasi & SDM</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Manajemen perubahan tidak terjadi secara alami. Kami merancang <i>Assessment Center</i> dan program peningkatan kompetensi agar tim Anda mampu mengeksekusi sistem yang baru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PROFILE */}
      <section id="tim" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.primary }}>
              Konsultan Kami
            </h2>
            <p className="text-gray-600 text-lg">
              Konsultan yang pernah berada di posisi Anda. Kami memadukan standar manajemen bisnis dengan psikologi organisasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
  <div className="overflow-hidden">
    <img src="https://i.ibb.co.com/vHpQcdY/2.png"
    alt="Rono Jatmiko"
    className="w-full object-contain max-h-80"
    />
  </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rono Jatmiko</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: brand.secondary }}>Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lulusan Fakultas Psikologi Universitas Indonesia dengan pengalaman lebih dari 16 tahun mendampingi Instansi Pemerintahan, BUMN, Perusahaan Swasta, dan Multinational dalam pengembangan strategi bisnis, perbaikan proses bisnis, dan pengembangan SDM. Sebelum di Performa, Rono pernah memimpin unit Learning & Development di EY Indonesia, salah satu Big Four Firm.
                </p>
                <a href="https://www.linkedin.com/in/ronojatmiko/" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-[#0077b5]">
  <LinkedinIcon /> LinkedIn Profile
</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
  <div className="overflow-hidden">
    <img src="https://i.ibb.co.com/whj2snt9/Untitled-design.png" alt="Rahmi Aulia" className="w-full object-contain max-h-80" />
  </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rahmi Aulia</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: brand.secondary }}>COO and Senior Consultant</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pakar pengembangan kapabilitas organisasi. Ujung tombak dalam memetakan <i>Talent Assessment</i> dan rekayasa sumber daya manusia korporat.
                </p>
                <a href="https://www.linkedin.com/in/rahmiauliaelmu/" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-[#0077b5]">
  <LinkedinIcon /> LinkedIn Profile
</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Stop Menebak Dimana Kebocoran Sistem Anda.
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Gunakan alat diagnostik kami. Dapatkan <b>Mini-Report</b> seketika tentang celah operasional Anda, dan jadwalkan 60 menit diagnostik mendalam bersama tim konsultan kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="px-10 py-5 rounded-lg text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center w-full sm:w-auto justify-center"
              style={{ backgroundColor: brand.secondary }}
              onClick={onStartAssessment}
            >
              Mulai Diagnostik Sekarang <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            <a href="https://wa.me/6287770781950?text=Halo%20Performa%2C%20saya%20ingin%20konsultasi%20lebih%20lanjut"
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-all flex items-center"
>
  <WhatsAppIcon /> Hubungi via WhatsApp
</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 mt-24"
        style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <div className="font-bold text-xl mb-1" style={{ color: "#005073" }}>
              Performa International Indonesia
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Konsultan transformasi organisasi, sistem KPI, dan pengembangan kepemimpinan.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Centennial Tower 29th Floor Unit DE<br />
              Jl. Jend. Gatot Subroto Kav. 24-25<br />
              Jakarta Selatan 12930
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-gray-700 mb-1">Navigasi</div>
            <a href="#masalah"
              className="text-sm text-gray-500 hover:text-[#005073] transition-colors">
              Solusi
            </a>
            <a href="#tim"
              className="text-sm text-gray-500 hover:text-[#005073] transition-colors">
              Konsultan Kami
            </a>
            <a href="https://www.performa.co.id/insights"
              className="text-sm text-gray-500 hover:text-[#005073] transition-colors">
              Insights
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-gray-700 mb-1">Hubungi Kami</div>
            <a href="https://wa.me/6287770781950"
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-white px-4 py-2 rounded-full text-center transition-colors"
              style={{ backgroundColor: "#005073" }}>
              WhatsApp Kami
            </a>
            <a href="mailto:info@performa.co.id"
              className="text-sm text-gray-500 hover:text-[#005073] transition-colors">
              info@performa.co.id
            </a>
            <a href="https://calendly.com/performaconsulting/diagnostic"
              target="_blank" rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full border-2 text-center transition-colors"
              style={{ borderColor: "#005073", color: "#005073" }}>
              Diagnostik Organisasi
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} PT Performa International Indonesia. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// 2. KOMPONEN MESIN ASESMEN (DIAGNOSTIK)
// ==========================================
const AssessmentView: React.FC<AssessmentViewProps> = ({ onBack }) => {
  const [step, setStep] = useState<number>(0);
  const totalSteps = 5;

  const [answers, setAnswers] = useState({
    mainProblem: '',
    duration: '',
    attempted: '',
    urgency: '',
    role: ''
  });

  const [result, setResult] = useState<ResultType | null>(null);

  const handleStart = () => setStep(1);

  const handleAnswer = (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    if (step < totalSteps) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (a: typeof answers) => {
    // ── DIAGNOSIS NAME ──
    let diagnosisName = '';
    if (a.mainProblem === 'strategic') {
      diagnosisName = 'Kelumpuhan Arah Strategis';
    } else if (a.mainProblem === 'organizational') {
      diagnosisName = 'Sindrom Disfungsi Sistem Organisasi';
    } else {
      diagnosisName = 'Krisis Kapabilitas Kepemimpinan';
    }

    // ── SEVERITY ──
    let severityScore = 0;
    if (a.duration === 'chronic') severityScore += 2;
    else if (a.duration === 'medium') severityScore += 1;
    if (a.urgency === 'financial') severityScore += 2;
    else if (a.urgency === 'operational') severityScore += 1;
    if (a.attempted === 'failed') severityScore += 2;
    else if (a.attempted === 'inconsistent') severityScore += 1;

    let severity = '';
    let severityBg = '';
    let isUrgent = false;
    if (severityScore >= 4) {
      severity = 'KRITIS';
      severityBg = 'bg-red-100 text-red-700 border-red-200';
      isUrgent = true;
    } else if (severityScore >= 2) {
      severity = 'PERLU PERHATIAN SEGERA';
      severityBg = 'bg-orange-100 text-orange-700 border-orange-200';
    } else {
      severity = 'TAHAP AWAL';
      severityBg = 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }

    // ── FINDINGS ──
    const findings: string[] = [];

    // Finding 1 — based on main problem
    if (a.mainProblem === 'strategic') {
      findings.push('Organisasi Anda beroperasi tanpa kompas strategis yang jelas. Tim bekerja keras namun ke arah yang berbeda-beda, menyebabkan pemborosan sumber daya yang masif.');
    } else if (a.mainProblem === 'organizational') {
      findings.push('Sistem internal organisasi Anda tidak berjalan sebagaimana mestinya. Tumpang tindih peran, SOP yang diabaikan, dan KPI yang tidak relevan adalah gejala struktural yang perlu dibenahi dari akar.');
    } else {
      findings.push('Kapabilitas kepemimpinan di lapisan manajerial menjadi bottleneck utama. Strategi dan sistem sebaik apapun tidak akan berjalan tanpa pemimpin yang mampu mengeksekusi dan menggerakkan tim.');
    }

    // Finding 2 — based on duration + attempted
    if (a.duration === 'chronic' && a.attempted === 'failed') {
      findings.push('Masalah ini bersifat kronis dan telah berulang kali dicoba diselesaikan tanpa hasil yang bertahan. Ini mengindikasikan bahwa solusi yang digunakan selama ini hanya menyentuh gejala, bukan akar masalah.');
    } else if (a.attempted === 'failed') {
      findings.push('Upaya perbaikan sebelumnya tidak menghasilkan perubahan yang bertahan. Ini adalah sinyal bahwa pendekatan yang digunakan perlu dievaluasi ulang secara menyeluruh.');
    } else if (a.attempted === 'inconsistent') {
      findings.push('Inisiatif perbaikan sudah ada namun tidak konsisten dijalankan. Gap terbesar Anda bukan pada ide atau rencana, melainkan pada sistem eksekusi dan akuntabilitas.');
    } else {
      findings.push('Belum ada inisiatif perbaikan yang terstruktur. Ini sebenarnya posisi yang baik — Anda bisa memulai dengan pendekatan yang tepat tanpa harus membongkar sistem yang salah terlebih dahulu.');
    }

    // Finding 3 — based on urgency + role
    if (a.urgency === 'financial') {
      findings.push('Dampak masalah ini sudah menyentuh aspek finansial dan reputasi. Setiap hari tanpa intervensi yang tepat adalah biaya yang terus bertambah.');
    } else if (a.urgency === 'operational') {
      findings.push('Operasional harian sudah terganggu. Jika tidak ditangani sekarang, dampaknya akan merambat ke performa finansial dalam waktu dekat.');
    } else {
      findings.push('Masalah ini baru mulai mempengaruhi KPI. Ini adalah momentum terbaik untuk bertindak — lebih mudah dan lebih murah menyelesaikannya sebelum menjadi krisis.');
    }

    // ── TRACK ──
    let track = '';
    if (a.mainProblem === 'strategic') track = 'Perencanaan Strategis & RJPP';
    else if (a.mainProblem === 'organizational') track = 'Arsitektur Proses & Organisasi';
    else track = 'Pengembangan Kepemimpinan & SDM';

    // ── ROLE-BASED CLOSING ──
    let closing = '';
    if (a.role === 'clevel') {
      closing = 'Sebagai pengambil keputusan, Anda berada di posisi terbaik untuk menginisiasi perubahan ini. Sesi diagnostik 60 menit bersama tim kami dirancang khusus untuk level eksekutif — fokus pada keputusan strategis, bukan teknis.';
    } else if (a.role === 'manager') {
      closing = 'Sebagai sponsor proyek, Anda memiliki pengaruh untuk mendorong perubahan dari dalam. Sesi diagnostik kami akan membantu Anda membangun business case yang kuat untuk dibawa ke level atas.';
    } else {
      closing = 'Anda sudah mengambil langkah yang tepat dengan mencari solusi. Sesi diagnostik kami akan memberikan Anda peta jalan yang konkret untuk dipresentasikan kepada pimpinan.';
    }

    setResult({
  brand: diagnosisName,
  track,
  report: [findings[0], findings[1], findings[2], closing],
  isUrgent,
  description: `${severity}|${severityBg}|${a.mainProblem}`
});

    setTimeout(() => setStep(totalSteps + 1), 500);
  };

  const Button: React.FC<ButtonProps> = ({ children, onClick, active, variant = 'outline' }) => {
    const baseStyle = "w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between font-medium";
    const style = variant === 'solid'
      ? { backgroundColor: brand.secondary, borderColor: brand.secondary, color: 'white' }
      : { borderColor: active ? brand.primary : '#e5e7eb', backgroundColor: active ? '#eff6ff' : 'white', color: active ? brand.primary : '#374151' };
    return <button onClick={onClick} className={baseStyle} style={style}>{children}{active && <CheckCircle2 className="w-5 h-5" />}</button>;
  };

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
      <div className="h-full transition-all duration-500 ease-out" style={{ width: `${(step / totalSteps) * 100}%`, backgroundColor: brand.secondary }}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white shadow-sm border-b border-gray-100 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center">
          <img src={logoUtama} alt="Logo Performa" className="h-12 object-contain" onError={(e) => handleImageError(e, 'assess-fallback')} />
          <span id="assess-fallback" className="hidden text-xl font-bold tracking-tight" style={{ color: brand.primary }}>Performa</span>
        </div>
        <button onClick={onBack} className="text-sm font-medium text-gray-500 flex items-center"><ArrowLeft className="w-4 h-4 mr-2" /> Batal</button>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 text-center">
        <div className="max-w-2xl w-full">

          {step === 0 && (
            <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100">
              <div className="inline-block p-4 rounded-full mb-6" style={{ backgroundColor: `${brand.primary}15` }}>
                <AlertTriangle className="w-10 h-10" style={{ color: brand.primary }} />
              </div>
              <h1 className="text-3xl font-bold mb-4" style={{ color: brand.primary }}>Diagnosis Kebocoran Organisasi</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Jawab 5 pertanyaan singkat ini. Kami akan menghasilkan <b>Mini-Report</b> otomatis mengenai kondisi organisasi Anda dan area yang paling kritis untuk segera ditangani.</p>
              <div className="max-w-xs mx-auto">
                <Button variant="solid" onClick={handleStart}>Mulai Diagnostik <ArrowRight className="w-5 h-5 ml-2" /></Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Apa yang paling menghambat pertumbuhan organisasi Anda saat ini?</h2>
              <p className="text-gray-500 text-sm mb-6">Pilih yang paling mendekati kondisi Anda.</p>
              <div className="space-y-4">
                <Button active={answers.mainProblem === 'strategic'} onClick={() => handleAnswer('mainProblem', 'strategic')}>
                  <span className="flex items-center text-sm md:text-base"><Target className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Arah strategis tidak jelas — target 1-5 tahun kabur atau tidak realistis.</span>
                </Button>
                <Button active={answers.mainProblem === 'organizational'} onClick={() => handleAnswer('mainProblem', 'organizational')}>
                  <span className="flex items-center text-sm md:text-base"><Activity className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Sistem & proses berantakan — struktur, SOP, KPI, atau job desc tidak berjalan.</span>
                </Button>
                <Button active={answers.mainProblem === 'people'} onClick={() => handleAnswer('mainProblem', 'people')}>
                  <span className="flex items-center text-sm md:text-base"><Users className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Orang & kepemimpinan — manajer tidak efektif, tim tidak berkembang.</span>
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Sudah berapa lama masalah ini dirasakan?</h2>
              <p className="text-gray-500 text-sm mb-6">Durasi mempengaruhi kedalaman intervensi yang dibutuhkan.</p>
              <div className="space-y-4">
                <Button active={answers.duration === 'new'} onClick={() => handleAnswer('duration', 'new')}>Baru muncul — kurang dari 6 bulan.</Button>
                <Button active={answers.duration === 'medium'} onClick={() => handleAnswer('duration', 'medium')}>Sudah lama tapi baru jadi prioritas — 6 bulan hingga 2 tahun.</Button>
                <Button active={answers.duration === 'chronic'} onClick={() => handleAnswer('duration', 'chronic')}>Masalah kronis yang berulang — lebih dari 2 tahun.</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Apa yang sudah pernah dicoba?</h2>
              <p className="text-gray-500 text-sm mb-6">Jujur di sini akan membuat hasil diagnostik lebih akurat.</p>
              <div className="space-y-4">
                <Button active={answers.attempted === 'none'} onClick={() => handleAnswer('attempted', 'none')}>Belum ada inisiatif yang terstruktur sama sekali.</Button>
                <Button active={answers.attempted === 'inconsistent'} onClick={() => handleAnswer('attempted', 'inconsistent')}>Sudah ada upaya tapi tidak konsisten dijalankan.</Button>
                <Button active={answers.attempted === 'failed'} onClick={() => handleAnswer('attempted', 'failed')}>Sudah dicoba berkali-kali namun hasilnya tidak pernah bertahan.</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Seberapa kritis dampaknya sekarang?</h2>
              <p className="text-gray-500 text-sm mb-6">Ini menentukan tingkat urgensi intervensi yang kami rekomendasikan.</p>
              <div className="space-y-4">
                <Button active={answers.urgency === 'kpi'} onClick={() => handleAnswer('urgency', 'kpi')}>Mulai mempengaruhi pencapaian target & KPI perusahaan.</Button>
                <Button active={answers.urgency === 'operational'} onClick={() => handleAnswer('urgency', 'operational')}>Sudah mengganggu operasional harian secara nyata.</Button>
                <Button active={answers.urgency === 'financial'} onClick={() => handleAnswer('urgency', 'financial')}>Sudah berdampak langsung pada finansial atau reputasi perusahaan.</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Siapa Anda dalam konteks ini?</h2>
              <p className="text-gray-500 text-sm mb-6">Membantu kami menyesuaikan rekomendasi yang paling relevan.</p>
              <div className="space-y-4">
                <Button active={answers.role === 'clevel'} onClick={() => handleAnswer('role', 'clevel')}>
                  <span className="flex items-center text-sm md:text-base"><Building2 className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> C-Level / Direksi — saya yang memutuskan.</span>
                </Button>
                <Button active={answers.role === 'manager'} onClick={() => handleAnswer('role', 'manager')}>
                  <span className="flex items-center text-sm md:text-base"><Briefcase className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Manajemen Menengah — saya sponsor atau influencer.</span>
                </Button>
                <Button active={answers.role === 'executor'} onClick={() => handleAnswer('role', 'executor')}>
                  <span className="flex items-center text-sm md:text-base"><Users className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Tim Pelaksana — saya ditugaskan mencari solusi.</span>
                </Button>
              </div>
            </div>
          )}

          {step === 6 && result && (() => {
            const [severity, severityBg, mainProblem] = (result.description || '').split('|');
            return (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-500 text-left">
                <div className="py-6 px-8 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#4cc9f0] mb-1">Hasil Diagnostik Organisasi</h3>
                    <h2 className={`text-2xl font-bold text-white`}>{result.brand}</h2>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${severityBg} ${result.isUrgent ? 'animate-pulse' : ''}`}>
                    {severity}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Temuan Utama:</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">1</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{result.report[0]}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-orange-600 text-xs font-bold">2</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{result.report[1]}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-yellow-600 text-xs font-bold">3</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{result.report[2]}</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
  <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Fokus Intervensi yang Disarankan</p>
  <p className="text-blue-800 text-lg font-bold mb-4">{result.track}</p>
  <div className="border-t border-blue-200 pt-4">
    <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">Dalam sesi diagnostik 60 menit, kita akan memetakan:</p>
    <ul className="space-y-2">
      {mainProblem === 'strategic' ? (
        <>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya arah strategis Anda tidak selaras dengan kapabilitas organisasi</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Apakah RJPP Anda realistis atau perlu direkonstruksi ulang</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Langkah konkret pertama yang bisa dieksekusi dalam 30-90 hari ke depan</li>
        </>
      ) : mainProblem === 'organizational' ? (
        <>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya proses Anda bocor — apakah di struktur, SOP, KPI, atau job desc</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Siapa yang bertanggung jawab atas tiap bottleneck dan bagaimana membenahi akuntabilitasnya</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Estimasi waktu dan effort intervensi yang realistis untuk skala organisasi Anda</li>
        </>
      ) : (
        <>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya gap kapabilitas kepemimpinan yang menghambat eksekusi tim</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Apakah solusinya di level kompetensi, sistem, atau keduanya</li>
          <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Program intervensi yang paling efisien untuk skala dan urgensi organisasi Anda</li>
        </>
      )}
    </ul>
  </div>
  <div className="mt-4 pt-4 border-t border-blue-200 flex items-center space-x-4">
    <span className="flex items-center text-xs font-semibold text-blue-900"><CheckCircle className="w-4 h-4 mr-1 text-green-600" /> Gratis</span>
    <span className="flex items-center text-xs font-semibold text-blue-900"><CheckCircle className="w-4 h-4 mr-1 text-green-600" /> Online via Zoom</span>
    <span className="flex items-center text-xs font-semibold text-blue-900"><CheckCircle className="w-4 h-4 mr-1 text-green-600" /> 60 Menit</span>
  </div>
</div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
                    <p className="text-gray-700 text-sm leading-relaxed">{result.report[3]}</p>
                  </div>

                  <Button variant="solid" onClick={() => window.open('https://calendly.com/performaconsulting/diagnostic', '_blank')}>
                    Jadwalkan Sesi Diagnostik Online 60-Menit (Gratis) <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-3">Sesi ini dirancang khusus untuk mendiskusikan temuan di atas dan memetakan langkah konkret bersama konsultan kami.</p>
                </div>
              </div>
            );
          })()}
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 3. MAIN APP CONTROLLER
// ==========================================
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'assessment'>('home');

  useEffect(() => {
    // Inject Font Montserrat
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {currentView === 'home' ? (
        <HomeView onStartAssessment={() => { window.scrollTo(0, 0); setCurrentView('assessment'); }} />
      ) : (
        <AssessmentView onBack={() => { window.scrollTo(0, 0); setCurrentView('home'); }} />
      )}
    </div>
  );
};

export default App;