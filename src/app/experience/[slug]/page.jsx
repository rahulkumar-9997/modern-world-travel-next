import React from 'react';
import ExperienceDetailsPage from './ExperienceDetailsPage';

async function getExperienceDetails(slug) {
    try {
        const res = await fetch(
            `https://www.gdsons.co.in/draft/mwt/api/experience/${slug}`
        );
        
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching Experience details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getExperienceDetails(slug);
        if (!data?.status) {
            return {
                title: 'Experience not found - Modern World Travel',
                description: 'Experience details not found',
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || "Experience"} - Modern World Travel`,
            description:
                data.meta_description ||
                `Explore ${data.title || "this Experience"} with Modern World Travel`,
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore experiences',
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    try {
        const placeData = await getExperienceDetails(slug);
        if (!placeData?.status) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>Experience Not Found</h4>
                            <p>The requested Experience could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <ExperienceDetailsPage
                initialData={placeData}
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
