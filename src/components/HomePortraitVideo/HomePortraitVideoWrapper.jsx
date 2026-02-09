import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomePortraitVideo } from "./HomePortraitVideo";
const PORTRAIT_VIDEO_API_URL = 'https://www.gdsons.co.in/draft/mwt/api/home-portrait-video';
export default async function HomePortraitVideoWrapper() {
    const queryClient = new QueryClient();
    try {
        const response = await queryClient.fetchQuery({
            queryKey: ["portrait-videos"],
            queryFn: async () => {
                const res = await axios.get(PORTRAIT_VIDEO_API_URL);
                return res.data;
            },
        });
        if (response?.status === true && Array.isArray(response.data)) {
            return (
                <HomePortraitVideo
                    initialData={response.data || []}
                    sectionInfo={response.section_info || {}}
                />
            );
        } else {
            throw new Error("Invalid video API response format");
        }

    } catch (error) {
        return (
            <HomePortraitVideo
                initialData={[]}
                sectionInfo={{
                    title: "Portrait video",
                    heading: "What Our Travelers Say About Us",
                    sub_heading: "Honest words from people who explored the world with us.",
                    description: " "
                }}
            />
        );
    }
}