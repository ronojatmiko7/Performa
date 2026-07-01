import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Activity, Target, Users, CheckCircle2,
  ChevronRight, Building2, Briefcase,
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
const insightsURL = "https://www.performa.co.id/insights";

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
            <button
              className="text-sm font-medium px-4 py-2 rounded-full border-2 transition-colors"
              style={{ borderColor: "#005073", color: "#005073" }}
              onClick={onStartAssessment}>
              Diagnostik Organisasi
            </button>
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
            <button
              className="text-sm font-medium px-4 py-2 rounded-full border-2 text-center"
              style={{ borderColor: "#005073", color: "#005073" }}
              onClick={onStartAssessment}>
              Diagnostik Organisasi
            </button>
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
              <span>Performance Consulting untuk BUMN &amp; Enterprise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Sudah Coba Berbagai Cara,<br />
              <span style={{ color: brand.accent }}>Tapi Target Kinerja Tetap Tidak Terasa?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
              Pelatihan sudah dijalankan. SOP sudah dibuat ulang. Konsultan sudah pernah masuk. Enam bulan kemudian, angkanya masih di tempat yang sama. Mungkin yang belum sempat dilakukan adalah berhenti sejenak, dan benar-benar mencari tahu di mana akar masalahnya.
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
            <a href={insightsURL} className="group cursor-pointer block">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Mengapa 70% Inisiatif RJPP di BUMN Mandek di Tingkat Manajerial</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Laporan eksklusif Performa mengenai tantangan eksekusi strategi di lapisan menengah BUMN dan cara mengatasinya...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <FileText className="w-3 h-3 mr-1" /> Whitepaper
              </span>
            </a>

            <a href={insightsURL} className="group cursor-pointer block">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1454165833772-d99626a4407d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Memangkas Waktu Siklus (Cycle Time) melalui Restrukturisasi BPM</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Bagaimana satu perubahan kecil dalam arsitektur proses bisnis dapat menghemat biaya operasional hingga 25%...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <CheckCircle className="w-3 h-3 mr-1" /> Case Study
              </span>
            </a>

            <a href={insightsURL} className="group cursor-pointer block">
              <div className="h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="BPM Insight" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">Silo Departemen: Pembunuh Tersembunyi dalam Perusahaan Raksasa</h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Panduan praktis bagi Direktur Operasional untuk meruntuhkan tembok birokrasi antar divisi tanpa gesekan internal...</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center italic">
                <BookOpen className="w-3 h-3 mr-1" /> Leadership Insight
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM / WHY IT KEEPS HAPPENING */}
      <section id="masalah" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: brand.primary }}>
              Kenapa Ini Terus Berulang
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Begitu kinerja macet, organisasi biasanya langsung bergerak ke solusi yang paling familiar — pelatihan, restrukturisasi, SOP baru. Solusi itu dipilih karena paling cepat disepakati semua orang di ruang rapat, bukan karena sudah terbukti itu akar masalahnya.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Kinerja yang macet bisa berasal dari empat tempat yang sangat berbeda. Kalau yang diperbaiki ternyata bukan yang sebenarnya bermasalah, usaha sebesar apa pun tidak akan membuat angkanya bergerak.
            </p>
          </div>

          {/* FOUR LAYER DIAGNOSTIC MAP */}
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-stretch bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="w-2 flex-shrink-0" style={{ backgroundColor: brand.primary }}></div>
              <div className="p-6 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>0 &mdash; Strategi</span>
                <p className="text-gray-800 mt-1">Strategi belum cukup jelas, atau target unit ternyata tidak pernah benar-benar diturunkan dari strategi perusahaan.</p>
              </div>
            </div>
            <div className="flex items-stretch bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="w-2 flex-shrink-0" style={{ backgroundColor: brand.primary }}></div>
              <div className="p-6 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>1 &mdash; Organisasi</span>
                <p className="text-gray-800 mt-1">Struktur yang tumpang tindih, sistem ukur yang mengukur hal yang salah, sumber daya yang dialokasikan ke tempat yang keliru.</p>
              </div>
            </div>
            <div className="flex items-stretch bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="w-2 flex-shrink-0" style={{ backgroundColor: brand.primary }}></div>
              <div className="p-6 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>2 &mdash; Proses</span>
                <p className="text-gray-800 mt-1">Pekerjaan yang harus melewati banyak fungsi, tanpa ada satu pun yang benar-benar memilikinya dari awal sampai akhir.</p>
              </div>
            </div>
            <div className="flex items-stretch bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="w-2 flex-shrink-0" style={{ backgroundColor: brand.accent }}></div>
              <div className="p-6 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>3 &mdash; Individu</span>
                <p className="text-gray-800 mt-1">Atau memang individunya &mdash; tapi ini ada di urutan paling akhir, setelah ekspektasi yang jelas, alat yang memadai, dan insentif yang selaras.</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Keempat lapisan ini bertumpuk. Kalau yang bermasalah ada di lapisan atas, perbaikan secanggih apa pun di lapisan bawahnya akan tetap terasa percuma.
            </p>
            <p className="text-xl font-bold mt-6" style={{ color: brand.primary }}>
              Dari empat lapisan tadi &mdash; yang mana yang sebenarnya belum pernah benar-benar diperiksa di organisasi Anda?
            </p>
          </div>
        </div>
      </section>

      {/* NAMED SERVICES */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.primary }}>
              Empat Layanan Diagnosa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Setiap layanan memetakan satu lapisan dari peta kinerja di atas. Anda bisa mulai dari mana saja yang paling terasa mendesak &mdash; atau biarkan diagnosa awal kami yang menentukan urutannya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>Lapisan 0</span>
              <h3 className="text-2xl font-bold mt-2 mb-3" style={{ color: brand.primary }}>Diagnosa Strategi</h3>
              <p className="text-gray-600 leading-relaxed">
                Memeriksa apakah strategi organisasi Anda valid untuk pasar yang dihadapi, cukup jelas untuk ditindaklanjuti, dan benar-benar diturunkan (cascading) sampai ke sasaran unit dan individu &mdash; bukan berhenti di dalam dek presentasi.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>Lapisan 1</span>
              <h3 className="text-2xl font-bold mt-2 mb-3" style={{ color: brand.primary }}>Diagnosa &amp; Desain Organisasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Memetakan struktur dan akuntabilitas, arsitektur proses bisnis, sistem KPI yang diturunkan dengan benar dari strategi, dan alokasi sumber daya &mdash; supaya organisasi memang dirancang untuk menghasilkan kinerja yang Anda kejar.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>Lapisan 2</span>
              <h3 className="text-2xl font-bold mt-2 mb-3" style={{ color: brand.primary }}>Diagnosa &amp; Perbaikan Proses Bisnis (BPM)</h3>
              <p className="text-gray-600 leading-relaxed">
                Menelusuri efektivitas dan efisiensi proses inti, serah-terima antar fungsi yang sering jadi titik macet, dan memastikan setiap proses punya pemilik yang benar-benar memantau dan memperbaikinya &mdash; bukan berjalan di autopilot.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.secondary }}>Lapisan 3</span>
              <h3 className="text-2xl font-bold mt-2 mb-3" style={{ color: brand.primary }}>Diagnosa Kapabilitas Individu</h3>
              <p className="text-gray-600 leading-relaxed">
                Memeriksa ekspektasi &amp; informasi, umpan balik, alat &amp; lingkungan kerja, insentif &amp; konsekuensi, kesesuaian orang dengan posisinya &mdash; dan, terakhir, kompetensi. Urutan ini disengaja: kompetensi adalah hal terakhir yang kami periksa, bukan yang pertama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="solusi" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kami Mulai dengan Mencari Letak Masalahnya
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Performa adalah firma performance consulting. Kami tidak datang dengan satu solusi favorit untuk dijual ke semua orang. Pekerjaan kami dimulai dengan satu pertanyaan: di antara empat lapisan tadi, di mana persisnya kinerja organisasi Anda berhenti mengalir?
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              Selama lebih dari 16 tahun, ini cara kami bekerja dengan organisasi besar di Indonesia &mdash; Bank Indonesia, OJK, kelompok Pertamina, Pelindo, Pelni, Bank BNI, Bank Danamon, Paragon, Petrosea, United Tractors, dan lainnya &mdash; menggunakan metodologi performance consulting (Rummler-Brache) untuk memetakan kinerja dari strategi sampai individu, sebelum meresepkan apa pun.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 pl-8 py-2" style={{ borderColor: brand.accent }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: brand.accent }}>Setelah Jelas Di Mana Masalahnya, Baru Kami Bicara Solusi</h3>
            </div>

            <div className="group border border-gray-700 rounded-2xl p-8 hover:border-[#4cc9f0] transition-all bg-gray-800/50 hover:bg-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brand.secondary}30`, color: brand.accent }}>
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Belum Punya Data yang Bisa Dipercaya?</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Kami bantu bangun dulu sistem KPI dan pengukurannya, supaya ada angka &ldquo;sebelum&rdquo; yang valid untuk dibandingkan nanti.
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
                  <h3 className="text-2xl font-bold mb-2">Akar Masalahnya Memang Kompetensi?</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Kami rancang dan jalankan programnya sendiri, dengan pengukuran dampak yang ditanam sejak awal &mdash; bukan ditempel belakangan.
                  </p>
                </div>
              </div>
            </div>

            <div className="group border border-gray-700 rounded-2xl p-8 hover:border-[#4cc9f0] transition-all bg-gray-800/50 hover:bg-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brand.secondary}30`, color: brand.accent }}>
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Di Ujungnya, Kami Selalu Kembali Mengukur</h3>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Apakah perbaikan tadi benar-benar menggerakkan angka yang Anda kejar, atau cuma terasa seperti kemajuan. Yang membedakan kami adalah urutan kerjanya &mdash; diagnosa dulu, baru bertindak.
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
                <img src="https://i.ibb.co.com/vHpQcdY/2.png" alt="Rono Jatmiko" className="w-full object-contain max-h-80" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rono Jatmiko</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: brand.secondary }}>Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lulusan Fakultas Psikologi Universitas Indonesia dengan pengalaman lebih dari 16 tahun mendampingi Instansi Pemerintahan, BUMN, Perusahaan Swasta, dan Multinational dalam pengembangan strategi bisnis, perbaikan proses bisnis, dan pengembangan SDM. Sebelum di Performa, Rono pernah memimpin unit Learning &amp; Development di EY Indonesia, salah satu Big Four Firm.
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

      {/* CONSEQUENCE */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kalau Siklus Ini Dibiarkan Terus Berulang
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">
            Dua versi tahun depan. Yang mana yang ingin Anda jalani?
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-red-900/40 rounded-2xl p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">Tanpa Diagnosa</span>
              <p className="text-gray-300 leading-relaxed mt-4">
                Anda duduk lagi di rapat yang sama, ditanya pertanyaan yang sama &mdash; apa hasilnya &mdash; dan harus menjawabnya dengan jawaban yang sama seperti tahun ini.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Tim Anda, setelah inisiatif keempat atau kelima yang tidak benar-benar mengubah apa-apa, mulai berhenti percaya inisiatif berikutnya akan berbeda.
              </p>
            </div>

            <div className="bg-gray-800/50 border rounded-2xl p-8" style={{ borderColor: `${brand.accent}50` }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: brand.accent }}>Mulai dari Diagnosa</span>
              <p className="text-gray-300 leading-relaxed mt-4">
                Anda datang ke rapat yang sama dengan jawaban yang berbeda &mdash; bukan rencana baru, tapi data yang menunjukkan persis di mana masalahnya.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Dan bukti bahwa langkah yang diambil benar-benar menggerakkan angkanya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Langkah Pertama Bukan Mencoba Cara Lain.
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Langkah pertama adalah Sesi Diagnostik Kinerja &mdash; memetakan persis di lapisan mana kinerja organisasi Anda berhenti mengalir, sebelum kami atau siapa pun menyarankan apa-apa.
          </p>
          <p className="text-gray-500 text-sm italic mb-10 max-w-xl mx-auto">
            Tanpa data pembanding, klaim apa pun tentang hasil sebuah intervensi bersifat bias. Pengukuran bukan langkah terakhir dari kerja kinerja &mdash; ia adalah langkah pertama.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="px-10 py-5 rounded-lg text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center w-full sm:w-auto justify-center"
              style={{ backgroundColor: brand.secondary }}
              onClick={onStartAssessment}
            >
              Jadwalkan Diagnostik Kinerja <ArrowRight className="ml-3 w-6 h-6" />
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
            <button
              className="text-sm px-4 py-2 rounded-full border-2 text-center transition-colors"
              style={{ borderColor: "#005073", color: "#005073" }}
              onClick={onStartAssessment}>
              Diagnostik Organisasi
            </button>
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
    role: '',
    name: '',
    email: '',
    company: ''
  });

  const [result, setResult] = useState<ResultType | null>(null);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState('');

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
    let diagnosisName = '';
    if (a.mainProblem === 'strategy') {
      diagnosisName = 'Diagnosa Strategi';
    } else if (a.mainProblem === 'organization') {
      diagnosisName = 'Diagnosa & Desain Organisasi';
    } else if (a.mainProblem === 'process') {
      diagnosisName = 'Diagnosa & Perbaikan Proses Bisnis (BPM)';
    } else {
      diagnosisName = 'Diagnosa Kapabilitas Individu';
    }

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

    const findings: string[] = [];

    if (a.mainProblem === 'strategy') {
      findings.push('Organisasi Anda kemungkinan menghadapi kesenjangan di lapisan strategi: validitas strategi untuk pasar yang dihadapi, kejelasan strategi agar bisa ditindaklanjuti, atau cascading sasaran yang tidak benar-benar turun sampai ke unit dan individu.');
    } else if (a.mainProblem === 'organization') {
      findings.push('Organisasi Anda kemungkinan menghadapi kesenjangan di lapisan organisasi: struktur dan akuntabilitas yang tumpang tindih, arsitektur proses yang tidak dirancang dengan baik, sistem KPI yang tidak diturunkan dengan benar dari strategi, atau alokasi sumber daya yang tidak sejalan dengan prioritas.');
    } else if (a.mainProblem === 'process') {
      findings.push('Organisasi Anda kemungkinan menghadapi kesenjangan di lapisan proses: pekerjaan yang tidak mengalir secara efektif atau efisien, serah-terima antar fungsi yang sering macet, atau proses yang berjalan tanpa pemilik yang benar-benar memantau dan memperbaikinya.');
    } else {
      findings.push('Organisasi Anda kemungkinan menghadapi kesenjangan di lapisan individu — namun ini patut diperiksa di urutan terakhir. Ekspektasi yang tidak jelas, umpan balik yang minim, alat kerja yang tidak memadai, atau insentif yang tidak selaras sering jadi penyebab yang lebih mendasar dibanding kompetensi itu sendiri.');
    }

    if (a.duration === 'chronic' && a.attempted === 'failed') {
      findings.push('Masalah ini bersifat kronis dan telah berulang kali dicoba diselesaikan tanpa hasil yang bertahan. Ini mengindikasikan bahwa solusi yang digunakan selama ini hanya menyentuh gejala, bukan akar masalah.');
    } else if (a.attempted === 'failed') {
      findings.push('Upaya perbaikan sebelumnya tidak menghasilkan perubahan yang bertahan. Ini adalah sinyal bahwa pendekatan yang digunakan perlu dievaluasi ulang secara menyeluruh.');
    } else if (a.attempted === 'inconsistent') {
      findings.push('Inisiatif perbaikan sudah ada namun tidak konsisten dijalankan. Gap terbesar Anda bukan pada ide atau rencana, melainkan pada sistem eksekusi dan akuntabilitas.');
    } else {
      findings.push('Belum ada inisiatif perbaikan yang terstruktur. Ini sebenarnya posisi yang baik — Anda bisa memulai dengan pendekatan yang tepat tanpa harus membongkar sistem yang salah terlebih dahulu.');
    }

    if (a.urgency === 'financial') {
      findings.push('Dampak masalah ini sudah menyentuh aspek finansial dan reputasi. Setiap hari tanpa intervensi yang tepat adalah biaya yang terus bertambah.');
    } else if (a.urgency === 'operational') {
      findings.push('Operasional harian sudah terganggu. Jika tidak ditangani sekarang, dampaknya akan merambat ke performa finansial dalam waktu dekat.');
    } else {
      findings.push('Masalah ini baru mulai mempengaruhi KPI. Ini adalah momentum terbaik untuk bertindak — lebih mudah dan lebih murah menyelesaikannya sebelum menjadi krisis.');
    }

    let track = '';
    if (a.mainProblem === 'strategy') track = 'Diagnosa Strategi';
    else if (a.mainProblem === 'organization') track = 'Diagnosa & Desain Organisasi';
    else if (a.mainProblem === 'process') track = 'Diagnosa & Perbaikan Proses Bisnis (BPM)';
    else track = 'Diagnosa Kapabilitas Individu';

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

    setStep(totalSteps + 1);
  };

  const buildCalendlyUrl = () => {
    const base = 'https://calendly.com/performaconsulting/diagnostic';
    const [severity] = (result?.description || '').split('|');
    const params = new URLSearchParams();
    if (answers.name) params.set('name', answers.name);
    if (answers.email) params.set('email', answers.email);
    if (answers.company) params.set('a1', answers.company);
    if (result?.brand) params.set('a2', result.brand);
    if (severity) params.set('a3', severity);
    return `${base}?${params.toString()}`;
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
                <Button active={answers.mainProblem === 'strategy'} onClick={() => handleAnswer('mainProblem', 'strategy')}>
                  <span className="flex items-center text-sm md:text-base"><Target className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Strategi tidak jelas — target 1-5 tahun kabur, atau tidak benar-benar turun ke unit dan individu.</span>
                </Button>
                <Button active={answers.mainProblem === 'organization'} onClick={() => handleAnswer('mainProblem', 'organization')}>
                  <span className="flex items-center text-sm md:text-base"><Building2 className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Struktur &amp; sistem berantakan — akuntabilitas tumpang tindih, KPI tidak diturunkan dengan benar, sumber daya salah alokasi.</span>
                </Button>
                <Button active={answers.mainProblem === 'process'} onClick={() => handleAnswer('mainProblem', 'process')}>
                  <span className="flex items-center text-sm md:text-base"><Activity className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Proses macet — pekerjaan lambat, serah-terima antar fungsi sering stuck, tidak ada yang benar-benar memilikinya.</span>
                </Button>
                <Button active={answers.mainProblem === 'people'} onClick={() => handleAnswer('mainProblem', 'people')}>
                  <span className="flex items-center text-sm md:text-base"><Users className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" /> Orang &amp; kepemimpinan — manajer tidak efektif, tim tidak berkembang.</span>
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
                <Button active={answers.urgency === 'kpi'} onClick={() => handleAnswer('urgency', 'kpi')}>Mulai mempengaruhi pencapaian target &amp; KPI perusahaan.</Button>
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

          {step === 6 && result && (
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-left">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Hampir Selesai</h2>
              <p className="text-gray-500 text-sm mb-6">Isi data di bawah untuk melihat hasil diagnostik Anda dan menjadwalkan sesi konsultasi gratis.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={answers.name}
                    onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                    placeholder="Nama lengkap Anda"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={answers.email}
                    onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                    placeholder="email@perusahaan.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Perusahaan</label>
                  <input
                    type="text"
                    value={answers.company}
                    onChange={(e) => setAnswers({ ...answers, company: e.target.value })}
                    placeholder="Nama perusahaan Anda"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
              {leadError && <p className="text-red-500 text-sm mt-3">{leadError}</p>}
              <button
                disabled={leadSubmitting}
                onClick={() => {
                  if (!answers.name.trim() || !answers.email.trim()) {
                    setLeadError('Nama dan email wajib diisi.');
                    return;
                  }
                  setLeadError('');
                  setLeadSubmitting(true);
                  setTimeout(() => {
                    setLeadSubmitting(false);
                    setStep(7);
                  }, 400);
                }}
                className="mt-6 w-full px-6 py-4 rounded-lg text-white font-semibold flex items-center justify-center transition-all"
                style={{ backgroundColor: brand.secondary, opacity: leadSubmitting ? 0.7 : 1 }}
              >
                {leadSubmitting ? 'Memproses...' : <>Lihat Hasil Diagnostik <ArrowRight className="w-5 h-5 ml-2" /></>}
              </button>
            </div>
          )}

          {step === 7 && result && (() => {
            const [severity, severityBg, mainProblem] = (result.description || '').split('|');
            return (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-500 text-left">
                <div className="py-6 px-8 bg-gray-900 border-b border-gray-800 flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#4cc9f0] mb-1">Hasil Diagnostik Organisasi</h3>
                    <h2 className="text-2xl font-bold text-white">{result.brand}</h2>
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
                        {mainProblem === 'strategy' ? (
                          <>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya arah strategis Anda tidak selaras dengan kapabilitas organisasi</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Apakah cascading sasaran sudah benar-benar turun sampai ke unit dan individu</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Langkah konkret pertama yang bisa dieksekusi dalam 30-90 hari ke depan</li>
                          </>
                        ) : mainProblem === 'organization' ? (
                          <>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya struktur dan akuntabilitas Anda tumpang tindih</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Apakah sistem KPI sudah diturunkan dengan benar dari strategi perusahaan</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Estimasi waktu dan effort intervensi yang realistis untuk skala organisasi Anda</li>
                          </>
                        ) : mainProblem === 'process' ? (
                          <>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya proses Anda macet dan siapa yang seharusnya memilikinya</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Serah-terima antar fungsi mana yang paling sering jadi titik macet</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Bagaimana membangun sistem monitoring proses yang tidak berjalan di autopilot</li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Apakah ekspektasi, umpan balik, dan insentif sudah cukup jelas sebelum bicara kompetensi</li>
                            <li className="flex items-start text-sm text-blue-800"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />Di mana persisnya gap kapabilitas kepemimpinan yang menghambat eksekusi tim</li>
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

                  <a
                    href={buildCalendlyUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 rounded-lg text-white font-semibold flex items-center justify-center transition-all"
                    style={{ backgroundColor: brand.secondary }}
                  >
                    Jadwalkan Sesi Diagnostik Online 60-Menit (Gratis) <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
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
