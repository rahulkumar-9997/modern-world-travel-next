export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import GallerySlugPage from './GallerySlugPage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getGalleryDetails(slug) {
    try {
        const res = await fetch(
            `https://admin.modernworldtravel.com/api/gallery/${slug}`,
            {
                cache: 'no-store',
            }
        );
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error('Error fetching gallery details:', error);
        return null;
    }
}
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const response = await getGalleryDetails(slug);
    if (!response?.status || !response?.section_info) {
        return {
            title: 'Gallery - Modern World Travel',
            description: 'Gallery not found',
            alternates: {
                canonical: `${baseUrl}/gallery/${slug}`,
            },
        };
    }
    const section = response.section_info;
    return {
        title: section.heading || 'Gallery - Modern World Travel',
        description:
            section.sub_heading ||
            section.heading ||
            'Modern World Travel Gallery',
        alternates: {
            canonical: `${baseUrl}/gallery/${slug}`,
        },
    };
}
export default async function Page({ params }) {
    const { slug } = await params;
    const response = await getGalleryDetails(slug);
    if (!response?.status) {
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center py-5">
                        <h4>Gallery Not Found</h4>
                        <p>The requested gallery could not be found.</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <GallerySlugPage
            initialData={response}
            slug={slug}
        />
    );
}
