import React from 'react';
import CityPage from './CityPage';
import axios from "axios";

async function getCityDetails(slug) {
    try {
        const { data: response } = await axios.get(
            `https://www.gdsons.co.in/draft/mwt/api/city/${slug}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching city details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getCityDetails(slug);
        if (!data?.status || !data.city) {
            return {
                title: 'City not found - Modern World Travel',
                description: 'City details not found',
            };
        }

        return {
            title: data.city.meta_title || `${data.city.title || "City"} - Modern World Travel`,
            description: data.city.meta_description ||
                data.city.city_details?.substring(0, 160) ||
                `Explore ${data.city.title || "this city"} with Modern World Travel`,
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore city details and packages',
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;

    try {
        const placeData = await getCityDetails(slug);

        if (!placeData?.status || !placeData.city) {
            return (
                <div className="section-blog-details padding-t-50 padding-b-100">
                    <div className="container">
                        <div className="text-center py-5">
                            <h4>City Not Found</h4>
                            <p>The requested city could not be found.</p>
                        </div>
                    </div>
                </div>
            );
        }

        return <CityPage initialData={placeData} slug={slug} />;
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