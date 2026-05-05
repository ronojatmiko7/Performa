import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Activity, Target, Users, CheckCircle2, 
  ChevronRight, Shield, Building2, Briefcase, 
  ArrowLeft, CheckCircle, AlertTriangle, BookOpen, FileText
} from 'lucide-react';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface AnswersType {
  painPoint: string;
  documentation: string;
  alignment: string;
  resistance: string;
  timeline: string;
  role: string;
  companySize: string;
}

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
const insightsURL = "#insights"; 

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
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={logoUtama} 
              alt="Performa Internasional" 
              className="h-16 md:h-20 object-contain"
              onError={(e) => handleImageError(e, 'navbar-fallback')}
            />
            <span id="navbar-fallback" className="hidden text-2xl font-bold tracking-tight" style={{ color: brand.primary }}>
              Performa<span className="font-light">Internasional</span>
            </span>
          </div>
          
          <div className="hidden lg:flex space-x-8 items-center text-sm font-medium text-gray-600">
            <a href="#masalah" className="hover:text-[#107dac] transition-colors">Solusi</a>
            <a href="#tim" className="hover:text-[#107dac] transition-colors">Konsultan Kami</a>
            <a href={insightsURL} className="flex items-center text-[#005073] font-bold border-l pl-6 hover:opacity-80 transition-all">
              <BookOpen className="w-4 h-4 mr-2" /> Insights & Studi Kasus
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
  href="https://wa.me/6287770781950?text=Halo%20Performa%2C%20saya%20ingin%20konsultasi%20lebih%20lanjut"
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-all flex items-center"
>
  <WhatsAppIcon /> Hubungi via WhatsApp
</a>
            <button 
              className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: brand.secondary }}
              onClick={onStartAssessment}
            >
              Diagnostik Organisasi
            </button>
          </div>
        </div>
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://i.ibb.co.com/NdKgjz5v/IMG20170220142420-copy-2.png"
                alt="Rono Jatmiko"
  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rono Jatmiko</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: brand.secondary }}>Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Berlatar belakang di EY Indonesia, ia memimpin pivot strategis Performa. Fokus utamanya adalah mendesain <i>Business Process Reengineering</i> yang berorientasi pada ROI ketat.
                </p>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Pencapaian Kunci:</p>
                  <p className="text-sm text-gray-600">Memimpin proyek optimalisasi BPM dan strategis di grup Pertamina & United Tractors, memotong inefisiensi operasional secara terukur.</p>
                </div>
                <a href="#!" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-[#0077b5]">
                  <LinkedinIcon /> LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rahmi Aulia" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rahmi Aulia</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: brand.secondary }}>COO and Senior Consultant</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pakar pengembangan kapabilitas organisasi. Ujung tombak dalam memetakan <i>Talent Assessment</i> dan rekayasa sumber daya manusia korporat.
                </p>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Pencapaian Kunci:</p>
                  <p className="text-sm text-gray-600">Mendesain dan mengeksekusi sistem <i>Assessment Center</i> yang menekan angka turnover dan memastikan penempatan karyawan di PP Persero.</p>
                </div>
                <a href="#!" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-[#0077b5]">
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
            Gunakan alat diagnostik kami. Dapatkan <b>Mini-Report</b> seketika tentang celah operasional Anda, dan jadwalkan 60 menit tinjauan mendalam bersama tim kepemimpinan kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="px-10 py-5 rounded-lg text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center w-full sm:w-auto justify-center"
              style={{ backgroundColor: brand.secondary }}
              onClick={onStartAssessment}
            >
              Mulai Diagnostik Sekarang <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            <a 
  href="https://wa.me/6287770781950?text=Halo%20Performa%2C%20saya%20ingin%20konsultasi%20lebih%20lanjut"
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
      <footer className="bg-white border-t border-gray-200 py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 text-gray-600">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logoUtama} 
              alt="Performa Internasional" 
              className="h-32 object-contain mb-6" 
              onError={(e) => handleImageError(e, 'footer-fallback')} 
            />
            <span id="footer-fallback" className="hidden text-2xl font-bold tracking-tight mb-6" style={{ color: brand.primary }}>
              Performa<span className="font-light">Internasional</span>
            </span>
            <p className="mb-6 max-w-md text-sm leading-relaxed">
              PT. Performa International Indonesia.<br />
              Centennial Tower 29 Floor Unit DE, Jakarta Selatan 12930
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-6 italic">Strategic Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={insightsURL} className="hover:text-[#107dac] transition-colors">Case Studies</a></li>
              <li><a href={insightsURL} className="hover:text-[#107dac] transition-colors">Whitepapers</a></li>
              <li><a href={insightsURL} className="hover:text-[#107dac] transition-colors">Leadership Blog</a></li>
              <li><a href="#!" className="hover:text-[#107dac] transition-colors">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Layanan</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#!" className="hover:text-[#107dac] transition-colors">Arsitektur Proses</a></li>
              <li><a href="#!" className="hover:text-[#107dac] transition-colors">Penyusunan RJPP</a></li>
              <li><a href="#!" className="hover:text-[#107dac] transition-colors">Pengembangan SDM</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-200 text-sm flex justify-center items-center text-gray-500">
          <p>© 2026 PT. Performa International Indonesia. All rights reserved.</p>
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
  const totalSteps = 7; 
  
  const [answers, setAnswers] = useState<AnswersType>({
    painPoint: '', documentation: '', alignment: '', resistance: '', timeline: '', role: '', companySize: ''
  });
  
  const [result, setResult] = useState<ResultType | null>(null);

  const handleStart = () => setStep(1);

  const handleAnswer = (question: keyof AnswersType, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);
    if (step < totalSteps) { 
      setTimeout(() => setStep(step + 1), 300); 
    }
    else { 
      calculateResult(newAnswers); 
    }
  };

  const calculateResult = (finalAnswers: AnswersType) => {
    const isEnterprise = finalAnswers.companySize === '200+';
    const recommendedBrand = isEnterprise ? 'Performa Enterprise' : 'Elmu Agile Systems';
    
    let trackTitle = '';
    let observation1 = '';
    let observation2 = '';
    let recommendation = '';

    if (finalAnswers.painPoint === 'processes') {
      trackTitle = 'Arsitektur Proses Bisnis (BPM)';
      observation1 = 'Terdeteksi adanya ego sektoral yang tinggi. Tanpa perbaikan alur kerja yang lintas-departemen, organisasi Anda membuang waktu dan biaya untuk birokrasi internal.';
    } else if (finalAnswers.painPoint === 'strategy') {
      trackTitle = 'Perencanaan Strategis & RJPP';
      observation1 = 'Kurangnya arah strategis menyebabkan tim Anda bekerja secara reaktif, bukan proaktif. Metrik KPI kemungkinan besar tidak selaras dengan target finansial akhir.';
    } else {
      trackTitle = 'Intervensi Organisasi & SDM';
      observation1 = 'Resistensi perilaku adalah akar masalah Anda. Sebaik apapun sistem atau strategi yang dibuat, tidak akan berjalan jika lapisan manajerial kurang memiliki kapabilitas eksekusi.';
    }

    if (finalAnswers.documentation === 'none' || finalAnswers.alignment === 'misaligned') {
      observation2 = 'Kondisi diperparah oleh ketergantungan pada individu tertentu (key person risk) dan ketidakselarasan di level eksekutif/manajerial.';
    } else {
      observation2 = 'Anda memiliki dasar dokumen dan visi yang cukup baik, titik kritis kegagalan Anda saat ini murni berada pada tahap adopsi dan kedisiplinan eksekusi.';
    }

    if (finalAnswers.role === 'decision_maker' && finalAnswers.timeline === 'immediate') {
      recommendation = `Mengingat Anda sebagai pengambil keputusan dan urgensi waktu (1-3 bulan), kami sangat menyarankan pendekatan "Sprint Audit" untuk memetakan bottlenecks krusial minggu ini.`;
    } else {
      recommendation = `Langkah awal terbaik adalah memetakan peta jalan (roadmap) perubahan secara objektif sebelum menggelontorkan anggaran besar untuk pelatihan atau sistem baru.`;
    }

    setResult({ 
      brand: recommendedBrand, 
      track: trackTitle, 
      report: [observation1, observation2, recommendation],
      isUrgent: finalAnswers.timeline === 'immediate'
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
          <img src={logoUtama} alt="Logo Performa" className="h-8 object-contain" onError={(e) => handleImageError(e, 'assess-fallback')} />
          <span id="assess-fallback" className="hidden text-xl font-bold tracking-tight" style={{ color: brand.primary }}>Performa</span>
        </div>
        <button onClick={onBack} className="text-sm font-medium text-gray-500 flex items-center"><ArrowLeft className="w-4 h-4 mr-2"/> Batal</button>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 text-center">
        <div className="max-w-2xl w-full">
          
          {step === 0 && (
            <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100">
               <div className="inline-block p-4 rounded-full mb-6" style={{ backgroundColor: `${brand.primary}15` }}>
                 <AlertTriangle className="w-10 h-10" style={{ color: brand.primary }} />
               </div>
               <h1 className="text-3xl font-bold mb-4" style={{ color: brand.primary }}>Diagnosis Kebocoran Organisasi</h1>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">Jawab 7 pertanyaan singkat ini. Kami akan menghasilkan <b>Mini-Report</b> otomatis mengenai area mana dari operasional Anda yang membakar anggaran dan gagal mencapai KPI.</p>
               <div className="max-w-xs mx-auto">
                 <Button variant="solid" onClick={handleStart}>Mulai Diagnostik <ArrowRight className="w-5 h-5 ml-2" /></Button>
               </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Apa gejala utama yang mengancam target perusahaan saat ini?</h2>
              <div className="space-y-4">
                <Button active={answers.painPoint === 'processes'} onClick={() => handleAnswer('painPoint', 'processes')}>
                  <span className="flex items-center text-sm md:text-base"><Activity className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Birokrasi internal berbelit, silo antar departemen saling hambat.</span>
                </Button>
                <Button active={answers.painPoint === 'strategy'} onClick={() => handleAnswer('painPoint', 'strategy')}>
                  <span className="flex items-center text-sm md:text-base"><Target className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Strategi bisnis buram, eksekutif tidak punya rencana 1-3 tahun yang tajam.</span>
                </Button>
                <Button active={answers.painPoint === 'people'} onClick={() => handleAnswer('painPoint', 'people')}>
                  <span className="flex items-center text-sm md:text-base"><Users className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Target jelas, namun tim lapangan pasif dan manajer gagal memimpin.</span>
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Sejujurnya, bagaimana kondisi SOP / Alur Kerja Anda di lapangan?</h2>
              <div className="space-y-4">
                <Button active={answers.documentation === 'none'} onClick={() => handleAnswer('documentation', 'none')}>Sangat bergantung pada ingatan dan "feeling" individu tertentu.</Button>
                <Button active={answers.documentation === 'some'} onClick={() => handleAnswer('documentation', 'some')}>Ada SOP lama, tapi sudah tidak relevan dengan kondisi bisnis saat ini.</Button>
                <Button active={answers.documentation === 'ignored'} onClick={() => handleAnswer('documentation', 'ignored')}>SOP tebal dan lengkap, tapi 80% karyawan mengabaikannya.</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Seberapa padu jajaran Eksekutif/Manajemen dalam mengejar target?</h2>
              <div className="space-y-4">
                <Button active={answers.alignment === 'misaligned'} onClick={() => handleAnswer('alignment', 'misaligned')}>Ada konflik prioritas yang tak terlihat antar petinggi divisi.</Button>
                <Button active={answers.alignment === 'somewhat'} onClick={() => handleAnswer('alignment', 'somewhat')}>Sepakat di ruang rapat, namun beda interpretasi saat eksekusi.</Button>
                <Button active={answers.alignment === 'aligned'} onClick={() => handleAnswer('alignment', 'aligned')}>Sangat padu di atas, masalah murni ada di lapisan pekerja bawah.</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Bagaimana kultur tim Anda saat dipaksa menggunakan sistem baru?</h2>
              <div className="space-y-4">
                <Button active={answers.resistance === 'high'} onClick={() => handleAnswer('resistance', 'high')}>Menolak keras. Berdalih sistem lama lebih nyaman.</Button>
                <Button active={answers.resistance === 'confusion'} onClick={() => handleAnswer('resistance', 'confusion')}>Berusaha patuh, namun bingung dan sering melakukan kesalahan.</Button>
                <Button active={answers.resistance === 'good'} onClick={() => handleAnswer('resistance', 'good')}>Cepat beradaptasi asalkan instruksinya masuk akal.</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Seberapa mendesak kebutuhan untuk menyelesaikan hambatan ini?</h2>
              <p className="text-gray-500 mb-6">Membantu kami merekomendasikan intervensi yang realistis.</p>
              <div className="space-y-4">
                <Button active={answers.timeline === 'immediate'} onClick={() => handleAnswer('timeline', 'immediate')}>Sangat Kritis (Harus ada perbaikan dalam 1-3 bulan ke depan).</Button>
                <Button active={answers.timeline === 'medium'} onClick={() => handleAnswer('timeline', 'medium')}>Menengah (Target penyelesaian 3-6 bulan ke depan).</Button>
                <Button active={answers.timeline === 'exploration'} onClick={() => handleAnswer('timeline', 'exploration')}>Belum Mendesak (Hanya memetakan opsi untuk tahun depan).</Button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Apa peran Anda terkait inisiatif perbaikan ini?</h2>
              <div className="space-y-4">
                <Button active={answers.role === 'decision_maker'} onClick={() => handleAnswer('role', 'decision_maker')}>C-Level / Eksekutif (Pengambil Keputusan & Anggaran Utama).</Button>
                <Button active={answers.role === 'manager'} onClick={() => handleAnswer('role', 'manager')}>Manajemen Menengah (Sponsor Proyek / Influencer Kuat).</Button>
                <Button active={answers.role === 'executor'} onClick={() => handleAnswer('role', 'executor')}>Tim Eksekusi (Ditugaskan mencari solusi oleh atasan).</Button>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
              <ProgressBar />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Terakhir: Berapa jumlah karyawan di organisasi Anda?</h2>
              <p className="text-gray-500 mb-6">Mempengaruhi struktur kerangka kerja yang akan digunakan.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => handleAnswer('companySize', '<200')} className={`p-8 rounded-xl border-2 transition-all flex flex-col items-center text-center ${answers.companySize === '<200' ? 'bg-blue-50' : 'hover:bg-gray-50 bg-white'}`} style={{ borderColor: answers.companySize === '<200' ? brand.primary : '#e5e7eb' }}>
                  <Briefcase className="w-12 h-12 mb-4 text-gray-400" />
                  <span className="text-xl font-bold text-gray-900 mb-2">Kurang dari 200</span>
                  <span className="text-sm text-gray-500">Karyawan</span>
                </button>
                <button onClick={() => handleAnswer('companySize', '200+')} className={`p-8 rounded-xl border-2 transition-all flex flex-col items-center text-center ${answers.companySize === '200+' ? 'bg-blue-50' : 'hover:bg-gray-50 bg-white'}`} style={{ borderColor: answers.companySize === '200+' ? brand.primary : '#e5e7eb' }}>
                  <Building2 className="w-12 h-12 mb-4 text-gray-400" />
                  <span className="text-xl font-bold text-gray-900 mb-2">200 atau Lebih</span>
                  <span className="text-sm text-gray-500">Karyawan (Enterprise)</span>
                </button>
              </div>
            </div>
          )}

          {step === 8 && result && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-500 text-left">
              <div className="py-6 px-8 bg-gray-900 border-b border-gray-800 relative flex justify-between items-center">
                 <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-[#4cc9f0] mb-1">Hasil Diagnostik</h3>
                   <h2 className="text-2xl font-bold text-white">{result.brand}</h2>
                 </div>
                 {result.isUrgent && <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">URGENT</span>}
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Ringkasan Eksekutif (Mini-Report):</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{result.report[0]}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{result.report[1]}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-900 font-medium text-sm leading-relaxed">{result.report[2]}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8">
                   <p className="text-sm font-bold text-blue-900 mb-1">Fokus Intervensi yang Disarankan:</p>
                   <p className="text-blue-800 text-lg font-bold">{result.track}</p>
                </div>

                <div className="space-y-4">
                  <Button variant="solid" onClick={() => alert('Membuka Kalender khusus untuk Sesi Tinjauan Diagnostik 60-Menit.')}>
                     Jadwalkan Sesi Tinjauan 60-Menit (Gratis) <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-2">Sesi eksekutif ini dirancang khusus untuk mendiskusikan laporan di atas lebih dalam dan memetakan solusi.</p>
                </div>
              </div>
            </div>
          )}
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