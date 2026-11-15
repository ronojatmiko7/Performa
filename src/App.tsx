import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Activity, Target, Users,
  ChevronRight, Quote
} from 'lucide-react';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface HomeViewProps {
  onStartAssessment: () => void;
}

// Konstanta Brand & Assets
const brand = {
  primary: '#005073',
  secondary: '#107dac',
  dark: '#000000',
  light: '#ffffff',
  accent: '#4cc9f0'
};

const insightsURL = "https://www.performa.co.id/insights";
const catalogURL = "https://www.performa.co.id/pelatihan";
const insightsFeedURL = "https://insights.performa.co.id/posts.json";

interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string | null;
  url: string;
  // Absolute image URL from the feed, or null/missing when the article has no image yet.
  image?: string | null;
}

// Shown until the live feed answers, and kept if it never does.
const fallbackInsights: InsightPost[] = [
  {
    slug: "diagnosis-kinerja-organisasi",
    title: "Diagnosis Kinerja Organisasi: Empat Lapisan Tempat Kinerja Macet",
    excerpt: "Kinerja organisasi jarang macet di satu tempat. Ia macet di salah satu dari empat lapisan: strategi, organisasi, proses, atau individu. Ini cara membacanya, berurutan.",
    date: "2026-10-03",
    tag: "Diagnosis Kinerja",
    url: "https://www.performa.co.id/insights/diagnosis-kinerja-organisasi",
  },
  {
    slug: "sop-adalah-pengertian-cara-membuat-dan-kenapa-tidak-dijalankan",
    title: "SOP Adalah: Pengertian, Cara Membuat, dan Kenapa Tidak Dijalankan",
    excerpt: "SOP adalah prosedur tertulis agar pekerjaan yang sama menghasilkan hasil yang sama, siapa pun yang mengerjakannya. Ini isinya, cara membuatnya, contohnya, dan kenapa banyak SOP berhenti di laci.",
    date: "2026-10-03",
    tag: "SOP",
    url: "https://www.performa.co.id/insights/sop-adalah-pengertian-cara-membuat-dan-kenapa-tidak-dijalankan",
  },
  {
    slug: "kenapa-kpi-tidak-tercapai-dan-ini-bukan-salah-karyawan-anda",
    title: "Kenapa KPI Tidak Tercapai? (Dan Ini Bukan Salah Karyawan Anda)",
    excerpt: "Ketika KPI tidak tercapai, kebanyakan perusahaan mengganti orangnya, bukan sistemnya. Ini tiga akar masalah KPI yang paling sering diabaikan.",
    date: "2026-06-09",
    tag: "KPI",
    url: "https://www.performa.co.id/insights/kenapa-kpi-tidak-tercapai-dan-ini-bukan-salah-karyawan-anda",
  },
];

const InsightsPreview = () => {
  const [posts, setPosts] = useState<InsightPost[]>(fallbackInsights);

  useEffect(() => {
    let cancelled = false;
    fetch(insightsFeedURL)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: InsightPost[]) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setPosts(data.slice(0, 3));
        }
      })
      .catch(() => {
        /* keep the fallback list */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
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
          {posts.map((post) => (
            <a key={post.slug} href={post.url} className="group cursor-pointer block">
              {post.image ? (
                // Square, uncropped: the picture carries its own headline, a strip crop would cut it.
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full rounded-xl mb-6 object-cover"
                />
              ) : (
                <div
                  className="h-48 rounded-xl mb-6 p-6 flex items-end"
                  style={{ backgroundColor: "#005073" }}
                >
                  {post.tag && (
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                      {post.tag}
                    </span>
                  )}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#107dac] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Kutipan dari formulir umpan balik peserta pelatihan Performa.
// Teks dikutip apa adanya; hanya ejaan, huruf kapital, dan tanda baca yang dirapikan.
const testimonials: Testimonial[] = [
  {
    quote: "Sangat luar biasa, memberikan impact yang sangat bagus untuk performa dari tim internal kami.",
    name: "Agnes P.",
    role: "Lead Supply & Vendor Management",
    company: "PT Tibeka Logistik Indonesia",
  },
  {
    quote: "Pelatihannya sangat menarik, dan menjadi hal baru yang saya pelajari, sangat relevan dengan kondisi yang akan dihadapi dan implementatif.",
    name: "Cut Nurul H.",
    role: "Staf Subbagian Pengawasan Bank",
    company: "Otoritas Jasa Keuangan, Provinsi Aceh",
  },
  {
    quote: "Materinya bagus, simple, dibawakan dengan sangat komunikatif dan interaktif oleh Mas Rono, dan penting banget nih: pake bahasa yang sederhana dan applicable.",
    name: "Vina",
    role: "Organization, Policy & Compliance Specialist",
    company: "PT Solusi Bangun Indonesia Tbk",
  },
  {
    quote: "Sangat bermanfaat, apa yang dikerjakan ternyata ada teori yang lebih efisien dan cocok dalam pendekatan atas masalah yang terjadi.",
    name: "Yudha P.",
    role: "Hardware Programmer",
    company: "PT Nutech Integrasi",
  },
  {
    quote: "Penyampaian materi singkat, jelas, dan sangat tepat sasaran.",
    name: "Gratianus N.",
    role: "Manager",
    company: "PT PP Infrastruktur",
  },
  {
    quote: "Training ini memberikan insight lebih dalam mengenai cara berkomunikasi dengan baik dan Pak Rono sangat baik dalam menyampaikan materi sehingga tidak membosankan.",
    name: "Humairoh",
    role: "Staff",
    company: "Bank Sinarmas",
  },
];

// Jasa Raharja, Kantor Wilayah Banten dan Cabang Tangerang, 17 dan 18 Juni 2026.
// Angka dihitung dari 67 respons peserta; kutipan diambil apa adanya dari kolom komentar evaluasi.
const jasaRaharjaStats = [
  { value: "67", label: "Peserta dalam 2 sesi" },
  { value: "7,2 \u2192 9,6", label: "Skor tes pengetahuan (dari 10), sebelum dan sesudah sesi" },
  { value: "4,8 / 5", label: "Penilaian peserta terhadap pelatihan" },
];

const jasaRaharjaTestimonials: Testimonial[] = [
  {
    quote: "Simulasi penanganan keluarga korban memberikan gambaran nyata yang sangat membantu kami dalam menyelaraskan empati dengan ketegasan administratif di lapangan.",
    name: "Shanty W.",
    role: "Peserta pelatihan",
    company: "Jasa Raharja, Cabang Tangerang",
  },
  {
    quote: "Hal yang paling berkesan adalah pemahaman bahwa respons keluarga yang terlihat bingung atau lambat bukanlah hambatan, tetapi bagian dari proses duka yang normal. Ini membantu saya lebih sabar dan tidak terburu-buru dalam menyampaikan informasi.",
    name: "Risa N.",
    role: "Peserta pelatihan",
    company: "Jasa Raharja, Kantor Wilayah Banten",
  },
  {
    quote: "Pelatihan sangat relevan dengan pekerjaan saya, dan banyak hal yang menurut kita biasa saja tetapi ternyata salah.",
    name: "Indah H.",
    role: "Peserta pelatihan",
    company: "Jasa Raharja, Cabang Tangerang",
  },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <figure
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
    style={{ borderTop: `4px solid ${brand.secondary}` }}
  >
    <Quote className="w-8 h-8 mb-4" style={{ color: brand.accent }} aria-hidden="true" />
    <blockquote className="text-gray-700 leading-relaxed flex-grow">
      &ldquo;{t.quote}&rdquo;
    </blockquote>
    <figcaption className="mt-6 pt-6 border-t border-gray-100">
      <div className="font-bold text-gray-900">{t.name}</div>
      <div className="text-sm text-gray-500">{t.role}</div>
      <div className="text-sm font-semibold" style={{ color: brand.secondary }}>{t.company}</div>
    </figcaption>
  </figure>
);

const TestimonialsSection = () => (
  <section id="testimoni" className="py-24 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.primary }}>
          Kata Peserta Pelatihan Kami
        </h2>
        <p className="text-gray-600 text-lg">
          Umpan balik tertulis dari peserta di Jasa Raharja, OJK, Bank Sinarmas, PT PP Infrastruktur, PT Solusi Bangun Indonesia, dan perusahaan lain.
        </p>
      </div>

      {/* Jasa Raharja, Juni 2026: angka */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-center text-sm font-bold uppercase tracking-widest mb-6" style={{ color: brand.secondary }}>
          Jasa Raharja &middot; Program komunikasi empatik untuk petugas, Juni 2026
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {jasaRaharjaStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold" style={{ color: brand.primary }}>{stat.value}</div>
              <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          Kantor Wilayah Banten dan Cabang Tangerang, 17 dan 18 Juni 2026. Skor berasal dari tes pengetahuan 10 soal sebelum dan sesudah sesi, diambil pada sesi yang sama; 52 dari 67 peserta mencapai nilai penuh setelahnya. Penilaian peserta adalah rata-rata empat pertanyaan evaluasi pada skala 1 sampai 5.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...jasaRaharjaTestimonials, ...testimonials].map((t) => (
          <TestimonialCard key={`${t.name}-${t.company}`} t={t} />
        ))}
      </div>
    </div>
  </section>
);

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
            <a href={catalogURL}
              className="text-sm font-medium text-gray-600 hover:text-[#005073] transition-colors">
              Pelatihan
            </a>
            <a href={insightsURL}
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
            <a href={catalogURL}
              className="text-sm font-semibold" style={{ color: "#005073" }}
              onClick={() => setMenuOpen(false)}>
              Pelatihan
            </a>
            <a href={insightsURL}
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
      <InsightsPreview />

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

      {/* TESTIMONIALS */}
      <TestimonialsSection />

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
            <a href={catalogURL}
              className="text-sm text-gray-500 hover:text-[#005073] transition-colors">
              Pelatihan
            </a>
            <a href={insightsURL}
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
// 3. MAIN APP CONTROLLER
// ==========================================
// The organizational diagnostic now lives as a standalone page at
// /prediagnosis (public/prediagnosis/index.html — the corporate
// Pra-Diagnosis Kinerja Organisasi funnel). Every "Diagnostik Organisasi"
// button on the home page navigates there.
const goToPrediagnosis = () => {
  window.location.assign('/prediagnosis');
};

const App: React.FC = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <HomeView onStartAssessment={goToPrediagnosis} />
    </div>
  );
};

export default App;
