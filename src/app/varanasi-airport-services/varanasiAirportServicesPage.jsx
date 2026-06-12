'use client';
import React, { useState } from 'react';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
import { Leaf, Star, Droplet, Flame, MapPin, Compass, Circle, Globe } from 'lucide-react';
import EnquiryVaranasiAirportModal from '@/components/EnquiryVaranasiAirportModal/EnquiryVaranasiAirportModal';
const iconComponents = {
  leaf: Leaf,
  star: Star,
  droplet: Droplet,
  flame: Flame,
};

const defaultIcons = [MapPin, Compass, Circle, Globe];
const CityIcon = ({ icon, color }) => {
  let Icon = iconComponents[icon];

  if (!Icon) {
    const randomIndex = Math.floor(Math.random() * defaultIcons.length);
    Icon = defaultIcons[randomIndex];
  }

  return <Icon size={28} color={color} />;
};
const CITY_PALETTES = [
  { color: '#BA7517', bg: 'rgba(186,117,23,0.10)', lightBg: 'rgba(186,117,23,0.15)' },
  { color: '#185FA5', bg: 'rgba(24,95,165,0.10)', lightBg: 'rgba(24,95,165,0.15)' },
  { color: '#993556', bg: 'rgba(153,53,86,0.10)', lightBg: 'rgba(153,53,86,0.15)' },
  { color: '#0F6E56', bg: 'rgba(15,110,86,0.10)', lightBg: 'rgba(15,110,86,0.15)' },
];

const HERO_STATS = [
  { num: '4', label: 'Sacred Cities' },
  { num: '12+', label: 'Languages' },
  { num: '24/7', label: 'Airport Support' },
  { num: '100%', label: 'Customisable' },
];

const SERVICES = [
  { icon: 'user-check', color: '#BA7517', bg: 'rgba(186,117,23,0.1)', title: 'Expert local guide', desc: 'Certified, spiritually knowledgeable guides fluent in Hindi, English & foreign languages.' },
  { icon: 'car', color: '#185FA5', bg: 'rgba(24,95,165,0.1)', title: 'Dedicated AC cab', desc: 'Private cab with airport/station pickup & drop. No sharing — yours for the full trip.' },
  { icon: 'home', color: '#3B6D11', bg: 'rgba(59,109,17,0.1)', title: 'Homestay / hotel stay', desc: 'Optional add-on. Riverside homestays to heritage hotels — all curated & verified.' },
  { icon: 'language', color: '#993556', bg: 'rgba(153,53,86,0.1)', title: 'Foreign language support', desc: 'Japanese, Chinese, French, German, Spanish & more. Ideal for international pilgrims.' },
  { icon: 'clock', color: '#0F6E56', bg: 'rgba(15,110,86,0.1)', title: '24/7 airport assistance', desc: "Meet & greet, flight tracking, luggage help. We're there from the moment you land." },
  { icon: 'clipboard-list', color: '#534AB7', bg: 'rgba(83,74,183,0.1)', title: 'Custom itinerary', desc: 'Tailored to your faith, group size, duration & travel style — pilgrim or tourist.' },
];

const LANGUAGES = [
  'Japanese', 'Chinese (Mandarin)', 'French', 'German', 'Spanish',
  'Italian', 'Korean', 'Thai', 'Vietnamese', 'Arabic', 'Russian', 'Portuguese',
];

const STAY_OPTIONS = [
  { type: 'Budget', name: 'Authentic homestay', desc: 'Local family homes near temple areas. Includes meals & cultural experience.' },
  { type: 'Mid range', name: 'Heritage guesthouse', desc: 'Character properties near ghats. Comfortable, well-reviewed & curated.' },
  { type: 'Premium', name: 'Boutique hotel', desc: 'Handpicked hotels with modern amenities, riverside views & quality service.' },
];

function SvcIcon({ name, color }) {
  const cls = 'w-5 h-5';
  if (name === 'user-check')
    return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0C6.34 11 5 9.66 5 8s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>;
  if (name === 'car')
    return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17a2 2 0 104 0M5 17a2 2 0 014 0m6 0a2 2 0 104 0m-4 0a2 2 0 014 0" /></svg>;
  if (name === 'home')
    return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
  if (name === 'language')
    return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m-6 4h6m4 0l4 9m-4-9l-4 9M8 9l4 9M20 19l-2-4M14 19l2-4" /></svg>;
  if (name === 'clock')
    return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} className={cls}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
}

function CityCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden animate-pulse"
      style={{ borderTop: '4px solid #e5e7eb' }}>
      <div className="flex items-center gap-3 px-5 pt-5 pb-4">
        <div className="w-[38px] h-[38px] rounded-lg bg-stone-200 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-stone-200 rounded w-36" />
          <div className="h-3 bg-stone-100 rounded w-48" />
        </div>
      </div>
      <div className="h-px bg-stone-100 mx-5" />
      <div className="px-5 pt-4 pb-5 space-y-3">
        <div className="flex gap-2">
          {[72, 60, 68].map((w, i) => <div key={i} className="h-6 rounded-full bg-stone-100" style={{ width: w }} />)}
        </div>
        {[1, 2, 3, 4].map((i) => <div key={i} className="h-3 bg-stone-100 rounded w-full" />)}
        <div className="h-10 rounded-lg bg-stone-200 w-full" />
      </div>
    </div>
  );
}

const VaranasiAirportServicesPage = ({ initialData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const openModal = (cityName) => {
    setSelectedCity(cityName);
    setIsModalOpen(true);
  };
  const cities = initialData?.data || initialData || [];
  const orderedCities = [...cities].reverse();
  return (
    <>
      <section className="for-varanasi-airport max-w-[1380px] mx-auto">
        <div className="pageHeader__bg relative z-1">
          <div className="bg-[#0f3460] px-8 pt-[25px] pb-[25px] text-center rounded-xl">
            <div className="inline-block bg-[rgba(239,159,39,0.2)] text-[#EF9F27] text-[11px] font-medium px-[14px] py-[3px] rounded-[100] border border-[rgba(239,159,39,0.35)] tracking-[1.2px] uppercase mb-[0.875rem]">
              New Service
            </div>
            <Heading
              level={1}
              text="Varanasi Airport Services"
              className="text-[24px] font-medium text-white mb-2 leading-[1.3]"
              style={{ color: 'white', WebkitTextFillColor: 'unset', fontWeight: 'normal' }}
            />
            <p className="text-[16px]! text-white/80! max-w-[500px] mx-auto mb-6 mt-3 leading-[1.6]">
              Arrive at Varanasi Airport and let us handle everything. Expert guides, dedicated AC cabs, and curated stays across four sacred cities — available in 12+ languages.
            </p>
            <div className="flex justify-center gap-10 flex-wrap mt-5">
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[26px] font-medium text-[#eb6605]">{s.num}</div>
                  <div className="text-[14px] text-white/80 uppercase tracking-[0.5px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto mb-4">
              <Heading
                level={2}
                text=" Choose your Destination"
                className="text-30 md:text-24"
              // style={{ color: '#eb6605',WebkitTextFillColor: 'unset', fontWeight: 'normal' }}
              />
              <div className="text-[19px] md:text-16 font-medium text-stone-800 mb-[3px]">
                Guide + Cab + Stay — city by city
              </div>
              <div className="text-[16px] text-gray-600 text-lg leading-relaxed">
                Every package is customised to your travel dates, group size, and language preference
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {orderedCities.length > 0
              ? orderedCities.map((city, i) => {
                const { color, bg, lightBg } = CITY_PALETTES[i % CITY_PALETTES.length];
                return (
                  <div key={city.nid}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-200 cursor-pointer"
                    style={{ borderTop: `4px solid ${color}` }}
                  >
                    <Link href={`/city/${city.city_url || city.nid}`} className="block no-underline">
                      <div className="flex! items-center! gap-3! lg:p-3 p-2 ">
                        <div
                          className="w-[50px] h-[50px] rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: bg }}
                        >
                          <CityIcon icon={city.icon} color={color} />
                        </div>
                        <div>
                          <Heading
                            level={3}
                            text={city.title}
                            className="text-[18px]! mb-0 leading-[1.3]"
                          />
                          <p className="text-[14px] text-stone-400 mb-0">
                            {city.sub_title}
                          </p>
                        </div>
                      </div>
                      <div className="h-px bg-stone-100 mx-2" />
                      <div className="lg:p-3 p-2 ">
                        {city.pills?.length > 0 && (
                          <div className="flex flex-wrap gap-[6px] mb-3">
                            {city.pills.map((pill, index) => {
                              const isAccent = index === city.pills.length - 1;
                              return (
                                <span
                                  key={index}
                                  className="text-[12px] px-3 py-1 rounded-2xl shadow-lg border font-medium leading-none"
                                  style={
                                    isAccent
                                      ? {
                                        background: lightBg,
                                        color: color,
                                        borderColor: color,
                                      }
                                      : {
                                        background: "#fff",
                                        color: "#374151",
                                        borderColor: "#d1d5db",
                                      }
                                  }
                                >
                                  {pill.title}
                                </span>
                              );
                            })}
                          </div>
                        )}
                        {/* Highlights */}
                        {city.highlights?.length > 0 && (
                          <ul className="flex flex-col gap-[5px] pb-3">
                            {city.highlights.map((hl, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-[10px] text-[13px] text-stone-600 mb-0"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  strokeWidth={2.5}
                                  stroke={color}
                                  className="w-[14px] h-[14px] flex-shrink-0"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {hl.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Link>
                    <div className="lg:p-3 p-2  pt-0">
                      <button
                        onClick={() => openModal(city.title)}
                        className="button -sm -dark-1 bg-accent-1 text-white col-12"
                        style={{ backgroundColor: color }}
                      >
                        Ask for Quote
                      </button>
                    </div>
                  </div>
                );
              })
               : [1, 2, 3, 4].map((i) => <CityCardSkeleton key={`skeleton-${i}`} />)}
          </div>
        </div>
      </section>

      <section className="layout-pb-lg layout-pt-lg" style={{
        background: 'linear-gradient(135deg, #fdf6ec 0%, #fef9f0 50%, #f0f7ff 100%)',
      }}>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto mb-4">
              <div className="text-[12px] font-medium text-stone-600 uppercase tracking-[1px] mb-1">
                What's included
              </div>
              <Heading
                level={4}
                text="Three Pillars of Every Package"
                className="text-30 md:text-20 mb-2 leading-[1.3]"
                style={{ color: '#eb6605' }}
              />
              <div className="text-[19px] md:text-16 font-medium text-[#555555] mb-[3px]">
                Guide + Cab + Stay — city by city
              </div>
            </div>
            {/* .svcs-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-white border border-stone-200 rounded-xl lg:p-4 p-3 text-center">
                  <div className="w-15 h-15 rounded-[10px] flex items-center justify-center mx-auto mb-[10px]"
                    style={{ background: s.bg }}>
                    <SvcIcon name={s.icon} color={s.color} />
                  </div>
                  <Heading
                    level={5}
                    text={s.title}
                    className="text-[13px] font-medium mb-[3px]"
                    style={{ color: '#eb6605', WebkitTextFillColor: 'unset', fontWeight: 'normal' }}
                  />
                  <h3 ></h3>
                  <p className="text-[11px] text-stone-400 leading-[1.5]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-lg layout-pt-lg"
        style={{ background: 'linear-gradient(135deg, #0f3460 0%, #16213e 60%, #1a2a4a 100%)' }}>
        <div className="container">
          <div className="row justify-center">
            <div className="bg-stone-50 rounded-xl p-[1.125rem]">
              <div className="text-[12px] font-medium text-stone-600 uppercase tracking-[1px] mb-1">
                International travellers welcome
              </div>
              <div className="text-[18px] font-medium mb-[3px]">
                Foreign Language Guides Available on Request
              </div>
              {/* .lang-grid */}
              <div className="flex flex-wrap gap-[6px] mt-[10px]">
                {LANGUAGES.map((lang) => (
                  <div key={lang}
                    className="flex items-center gap-[5px] text-[12px] px-[11px] py-1 rounded-[14px] bg-white border border-stone-200 text-stone-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth={1.8} className="w-3 h-3 flex-shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    <span className='text-[14px]'>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-lg layout-pt-lg"
      // style={{
      //   background: 'linear-gradient(135deg, #f0faf6 0%, #f7fdfb 50%, #f8f9ff 100%)',
      //   borderTop: '1px solid #cdeee2',
      //   borderBottom: '1px solid #cdeee2',
      // }}
      >
        <div className="container">
          <div className="row justify-center">
            <div>
              <div className="text-[12px] font-medium text-stone-600 uppercase tracking-[1px] mb-1">
                Accommodation options
              </div>
              <div className="text-[18px] font-medium mb-[3px]">
                Homestay or Hotel — Your Choice
              </div>
              <div className="text-[13px] text-stone-400 mb-4">
                Stay is optional. Add it to any package when you request a quote.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STAY_OPTIONS.map((s) => (
                  <div key={s.name} className="bg-white border border-stone-200 rounded-xl px-[0.875rem] py-[0.875rem]">
                    <div className="text-[12px] font-medium text-stone-400 uppercase tracking-[0.5px] mb-[3px]">
                      {s.type}
                    </div>
                    <div className="text-[14px] font-medium text-stone-800 mb-1">{s.name}</div>
                    <div className="text-[14px] text-stone-400 leading-[1.6]">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-lg layout-pt-lg">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl lg:px-8 lg:py-10 px-8 sm:py-10"
            style={{ background: 'linear-gradient(135deg, #0f3460 0%, #16213e 40%, #1e3a5f 100%)' }}
          >
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:text-left">
              {/* Left text */}
              <div className="">
                <h6 className="lg:text-[30px]! text-[24px]! font-bold text-white mb-2 leading-tight">
                  Plan your sacred journey today
                </h6>
                <p className="text-[14px] text-white/60! max-w-md leading-relaxed">
                  Tell us your travel dates, city &amp; group size — we&apos;ll send a personalised quote within 24 hours on WhatsApp or email.
                </p>
                {/* Trust badges */}
                <div className="flex items-center gap-5 mt-4 flex-wrap justify-center sm:justify-start">
                  <div className="flex items-center gap-1.5 text-[14px] text-white/55">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    Free consultation
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] text-white/55">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    Reply within 24 hrs
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] text-white/55">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    No advance payment
                  </div>
                </div>
              </div>

              {/* Right CTA card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center gap-3 lg:min-w-[210px] min-w-[100%]">
                <div className="text-center">
                  <div className="text-[13px] text-white/70 mb-0.5">Get your quote now</div>
                </div>
                <button
                  onClick={() => openModal('')}
                  className="button -sm -dark-1 bg-accent-1 text-white col-12 rounded-xl border-0 cursor-pointer whitespace-nowrap transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] w-full"
                >
                  Ask for Quote
                </button>
                <div className="text-[11px] text-white/35 text-center">
                  Or call: <span className="text-white/60 font-medium">+91 98399 01531</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ────────────────────────────────────────────────── */}
      <EnquiryVaranasiAirportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCity={selectedCity}
      />
    </>
  );
};

export default VaranasiAirportServicesPage;
