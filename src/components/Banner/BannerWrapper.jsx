import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Banner } from "./Banner";
const BANNER_API_URL = 'https://www.gdsons.co.in/draft/mwt/api/banner-img';
export default async function BannerWrapper() {
    const queryClient = new QueryClient();
    try {
        const data = await queryClient.fetchQuery({
            queryKey: ["banner-images"],
            queryFn: async () => {
                const res = await axios.get(BANNER_API_URL);
                return res.data;
            },
        });
        if (data?.status && Array.isArray(data.data)) {
            return <Banner initialData={data.data} />;
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("Failed to fetch banner data:", error);
        return <Banner initialData={[]} />;
    }
}