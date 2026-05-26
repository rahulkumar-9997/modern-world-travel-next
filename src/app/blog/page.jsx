export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
import BlogListPage from './BlogListPage';
async function getBlogList() {
    try {
        const res = await fetch(
            'https://admin.modernworldtravel.com/api/blog',
            { cache: 'no-store' }
        );
        if (!res.ok) {
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching blog list:', error);
        return null;
    }
}
export async function generateMetadata() {
    const res = await getBlogList();
    if (!res || !res.status) {
        return {
            title: 'Blog - Modern World Travel | Latest Travel Insights and Stories',
            description: 'Explore the Modern World Travel Blog for the latest travel insights, tips, and stories. Stay updated on domestic and international travel trends, destination guides, and expert advice.',
            alternates: {
                canonical: `${baseUrl}/blog`,
            },
        };
    }
    return {
        title: res.meta_title || 'Blog - Modern World Travel | Latest Travel Insights and Stories',
        description: res.meta_description || 'Explore the Modern World Travel Blog for the latest travel insights, tips, and stories. Stay updated on domestic and international travel trends, destination guides, and expert advice.',
        alternates: {
            canonical: `${baseUrl}/blog`,
        },
    };
}

export default async function Page() {
    const res = await getBlogList();
    if (!res || !res.status) {
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center py-5">
                        <h4>Blog Not Found</h4>
                        <p>The requested blog list could not be loaded.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <BlogListPage
            initialData={res.data}
        />
    );
}
