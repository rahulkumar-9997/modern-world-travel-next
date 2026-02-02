import React from 'react';
import BlogListPage from './BlogListPage';
async function getBlogList() {
    try {
        const res = await fetch(
            'https://www.gdsons.co.in/draft/mwt/api/blog',
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
            title: 'Modern World Travel Blog',
            description: 'Modern World Travel Blog',
        };
    }
    return {
        title: res.meta_title || 'Modern World Travel Blog',
        description: res.meta_description || 'Modern World Travel Blog',
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
