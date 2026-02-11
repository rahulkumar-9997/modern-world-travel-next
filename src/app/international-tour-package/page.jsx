export const dynamic = 'force-dynamic';
import React from 'react';
import { InternationalTourPackageList } from './InternationalTourPackageList';
async function getInternationalPackages() {
    try {
        const res = await fetch(
            'https://www.gdsons.co.in/draft/mwt/api/international-tour-package',
            { cache: 'no-store' }
        );
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error('Error fetching international packages:', error);
        return null;
    }
}

export async function generateMetadata() {
    try {
        const apiData = await getInternationalPackages();

        if (!apiData?.status) {
            return {
                title: 'International Tour Packages - Modern World Travel',
                description: 'Explore international tour packages',
            };
        }

        return {
            title:
                apiData.meta_title ||
                'International Tour Packages - Modern World Travel',

            description:
                apiData.meta_description ||
                'Explore international tour packages with Modern World Travel',
        };

    } catch (e) {
        return {
            title: 'International Tour Packages - Modern World Travel',
            description: 'Explore international tour packages',
        };
    }
}

export default async function Page() {

    const apiData = await getInternationalPackages();

    if (!apiData?.status) {
        return (
            <div className="section-blog-details padding-t-50 padding-b-100">
                <div className="container">
                    <div className="text-center py-5">
                        <h4>Data not found</h4>
                        <p>International tour packages not found.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <InternationalTourPackageList
            initialData={apiData.data || []}
        />
    );
}
