import React from 'react';
import DestinationDetailsPage from './DestinationDetailsPage';

async function getDestinationDetails(slug1, slug2) {
    try {
        const res = await fetch(
            `https://www.gdsons.co.in/draft/mwt/api/destination/${slug1}/${slug2}`
        );
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        return response.data;
    } catch (error) {
        console.error("Error fetching destination details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug1, slug2 } = await params;
    try {
        const data = await getDestinationDetails(slug1, slug2);
        if (!data?.status) {
            return {
                title: 'Destination not found - Modern World Travel',
                description: 'Destination details not found',
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || decodeURIComponent(slug2)} - Modern World Travel`,
            description:
                data.meta_desc ||
                `Explore ${data.title || decodeURIComponent(slug2)} with Modern World Travel`,
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore destinations',
        };
    }
}

export default async function Page({ params }) {
    const { slug1, slug2 } = await params;
    try {
        const placeData = await getDestinationDetails(slug1, slug2);
        if (!placeData?.status) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>Destination Not Found</h4>
                            <p>The requested destination could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <DestinationDetailsPage
                initialData={placeData}
                slug1={slug1}
                slug2={slug2}
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
