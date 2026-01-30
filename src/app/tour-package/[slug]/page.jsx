import React from 'react';
import ItineraryOrTourPackagePage from './ItineraryOrTourPackagePage';

async function getItineraryDetails(slug) {
    try {
        const res = await fetch(
            `https://www.gdsons.co.in/draft/mwt/api/itinerary/${slug}`
        );
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        return response.data;
    } catch (error) {
        console.error("Error fetching Itinerary details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getItineraryDetails(slug);
        if (!data?.status) {
            return {
                title: 'Itinerary not found - Modern World Travel',
                description: 'Itinerary details not found',
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || "Itinerary"} - Modern World Travel`,

            description:
                data.meta_description ||
                `Explore ${data.title || "this Itinerary"} with Modern World Travel`,
        };

    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore tour packages',
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params; 
    try {
        const placeData = await getItineraryDetails(slug);
        if (!placeData?.status) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>Itinerary Not Found</h4>
                            <p>The requested Itinerary could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }

        return <ItineraryOrTourPackagePage initialData={placeData} slug={slug} />;

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
