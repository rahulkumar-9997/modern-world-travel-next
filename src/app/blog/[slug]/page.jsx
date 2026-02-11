import React from 'react';
export const dynamic = 'force-dynamic';
import BlogDetailsPage from './BlogDetailsPage';

async function getBlogDetails(slug) {
    try {
        const res = await fetch(
            `https://www.gdsons.co.in/draft/mwt/api/blog/${slug}`,
            {
                cache: 'no-store',
            }
        );
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        return response;

    } catch (error) {
        console.error('Error fetching blog details:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const response = await getBlogDetails(slug);
        if (!response?.status || !response?.data) {
            return {
                title: 'Blog not found - Modern World Travel',
                description: 'Blog details not found',
            };
        }
        const blog = response.data;
        return {
            title:
                blog.meta_title ||
                blog.title ||
                'Modern World Travel Blog',

            description:
                blog.meta_description ||
                blog.intro ||
                'Modern World Travel Blog',
        };

    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Modern World Travel Blog',
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    try {
        const response = await getBlogDetails(slug);
        if (!response?.status || !response?.data) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>Blog Not Found</h4>
                            <p>The requested blog could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <BlogDetailsPage
                initialData={response.data}
                slug={slug}
            />
        );
    } catch (error) {
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center text-danger py-5">
                        <h4>Error Loading Page</h4>
                        <p>There was a problem loading the page. Please try again.</p>
                    </div>
                </div>
            </div>
        );
    }
}
