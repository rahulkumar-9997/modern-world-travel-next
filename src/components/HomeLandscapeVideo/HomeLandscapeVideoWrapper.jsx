import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomeLandscapeVideo } from "./HomeLandscapeVideo";

const LANDSCAPE_VIDEO_API_URL = 'https://www.gdsons.co.in/draft/mwt/api/home-landscape-video';
export default async function HomeLandscapeVideoWrapper() {
    const queryClient = new QueryClient();
    try {
        const response = await queryClient.fetchQuery({
            queryKey: ["landscape-videos"],
            queryFn: async () => {
                const res = await axios.get(LANDSCAPE_VIDEO_API_URL);                
                return res.data;
            },
        });

        console.log('Server: Video Query response:', {
            hasStatus: !!response?.status,
            hasData: !!response?.data,
            isArray: Array.isArray(response?.data),
            dataLength: response?.data?.length,
            sectionInfo: response?.section_info
        });

        if (response?.status === true && Array.isArray(response.data)) {
            return (
                <HomeLandscapeVideo
                    initialData={response.data || []}
                    sectionInfo={response.section_info || {}}
                />
            );
        } else {
            throw new Error("Invalid video API response format");
        }

    } catch (error) {
        return (
            <HomeLandscapeVideo
                initialData={[]}
                sectionInfo={{
                    title: "Landscape video",
                    heading: "Trusted by Travelers, Loved Across Destinations",
                    sub_heading: "From first trips to repeat journeys, our travelers share their happiness.",
                    description: " "
                }}
            />
        );
    }
}