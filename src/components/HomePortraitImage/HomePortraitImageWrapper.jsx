import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomePortraitImage } from "./HomePortraitImage";
const PORTRAIT_API_URL = 'https://www.gdsons.co.in/draft/mwt/api/home-portrait-img';
export default async function HomePortraitImageWrapper() {
    const queryClient = new QueryClient();
    try {
        const response = await queryClient.fetchQuery({
            queryKey: ["portrait-images"],
            queryFn: async () => {
                const res = await axios.get(PORTRAIT_API_URL);
                return res.data;
            },
        });
        if (response?.status === true && Array.isArray(response.data)) {
            return (
                <HomePortraitImage
                    initialData={response.data || []}
                    sectionInfo={response.section_info || {}}
                />
            );
        } else {
            throw new Error("Invalid API response format");
        }

    } catch (error) {
        return (
            <HomePortraitImage
                initialData={[]}
                sectionInfo={{
                    title: "Portrait image",
                    heading: "Travel Stories That Speak From the Heart",
                    sub_heading: "Real experiences shared by travelers who trusted us with their journeys.",
                    description: " "
                }}
            />
        );
    }
}