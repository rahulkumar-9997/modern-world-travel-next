import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomeTrendingDestinations } from "./HomeTrendingDestinations";

export default async function HomeTrendingDestinationsWrapper() {
  const queryClient = new QueryClient();  
  try {
    const data = await queryClient.fetchQuery({
      queryKey: ["treanding-destinations"],
      queryFn: async () => {
        const res = await axios.get('https://www.gdsons.co.in/draft/mwt/api/home-trending-destinations');
        return res.data;
      },
    });

    return <HomeTrendingDestinations initialData={data} />;
  } catch (error) {
    console.error("Failed to fetch trending destinations:", error);
    return <HomeTrendingDestinations initialData={[]} />;
  }
}