export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import TourLocationPage from './TourLocationPage';
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getTourLocationDetails(slug) {
    try {
        const { data: response } = await axios.get(
            `https://admin.modernworldtravel.com/api/tour-location/${slug}`,
            {
                cache: 'no-store',
            }
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching tour location details:", error);
        return null;
    }
}
export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getTourLocationDetails(slug);        
        if (!data?.status) {
            return {
                title: 'Tour Location not found - Modern World Travel',
                description: 'Tour location details not found',
                alternates: {
                    canonical: `${baseUrl}/tours-location/${slug}`,
                },
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || "Tour Location"} - Modern World Travel`,

            description:
                data.meta_description ||
                `Explore ${data.title || "this tour location"} with Modern World Travel`,
            alternates: {
                canonical: `${baseUrl}/tours-location/${slug}`,
            },
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
        const placeData = await getTourLocationDetails(slug);
        //console.log("tour location", slug);
        if (!placeData?.status) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>Tour Location Not Found</h4>
                            <p>The requested tour location could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }
        return <TourLocationPage initialData={placeData} slug={slug} />;
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
