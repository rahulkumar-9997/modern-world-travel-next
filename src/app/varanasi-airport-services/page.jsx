export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import VaranasiAirportServicesPage from './varanasiAirportServicesPage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

async function getAirportServices() {
  try {
    const res = await fetch(
      'https://admin.modernworldtravel.com/api/varansi-airport-services',
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Error fetching airport services:', error);
    return null;
  }
}

export async function generateMetadata() {
  const res = await getAirportServices();
  if (!res || !res.status) {
    return {
      title: 'Varanasi Airport Services - Modern World Travel',
      description: 'Expert guides, dedicated AC cabs and curated stays across four sacred cities.',
      alternates: { canonical: `${baseUrl}/varanasi-airport-services` },
    };
  }
  return {
    title: res.meta_title || 'Varanasi Airport Services - Modern World Travel',
    description: res.meta_description || 'Expert guides, dedicated AC cabs and curated stays across four sacred cities.',
    alternates: { canonical: `${baseUrl}/varanasi-airport-services` },
  };
}

export default async function Page() {
  const res = await getAirportServices();

  if (!res || !res.status) {
    return (
      <div className="section-blog-details padding-t-50 padding-b-100">
        <div className="container">
          <div className="text-center py-5">
            <h4>Airport Services Not Found</h4>
            <p>The requested airport services could not be loaded.</p>
          </div>
        </div>
      </div>
    );
  }

  return <VaranasiAirportServicesPage initialData={res.data} />;
}
