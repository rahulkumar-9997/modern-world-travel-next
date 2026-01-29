import React from 'react';
import CityPage from './CityPage';
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

async function getCityDetails(slug) {
    const queryClient = new QueryClient();
    try {
        const data = await queryClient.fetchQuery({
            queryKey: ["city-details", slug],
            queryFn: async () => {
                const res = await axios.get(
                    `https://www.gdsons.co.in/draft/mwt/api/city/${slug}`
                );
                return res.data.data;
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching city details:", error);
        return null;
    }
}


export async function generateMetadata({ params }) {
    try {
        const resolvedParams = await params;
        const { slug } = resolvedParams;
        const data = await getCityDetails(slug);
        console.log(data);
        if (!data?.status) {
            return {
                title: 'City not found',
            };
        }

        return {
            title:
                data.city?.meta_title ||
                `${data.city?.title || "City"} - Modern World Travel`,
            description:
                data.city?.meta_description ||
                data.city?.city_details?.substring(0, 160),
        };
    } catch (error) {
        console.error('Error in generateMetadata:', error);
        return {
            title: 'Modern World Travel',
            description: 'Explore city details and packages',
        };
    }
}

export default async function Page({ params }) {
    try {
        const resolvedParams = await params;
        const { slug } = resolvedParams;
        
        const placeData = await getCityDetails(slug);
        return <CityPage initialData={placeData} slug={slug} />;
    } catch (error) {
        console.error('Error in Page component:', error);
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center text-danger py-5">
                        <h4>Error Loading Page</h4>
                        <p>There was a problem loading the page. Please try again.</p>
                        <p className="small text-muted mt-2">{error.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}