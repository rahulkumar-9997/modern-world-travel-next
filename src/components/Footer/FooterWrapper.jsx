import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Footer } from "./Footer";

export default async function FooterWrapper() {
  const queryClient = new QueryClient();  
  try {
    const data = await queryClient.fetchQuery({
      queryKey: ["treanding-destinations-footer"],
      queryFn: async () => {
        const res = await axios.get('https://www.gdsons.co.in/draft/mwt/api/home-trending-destinations');
        return res.data;
      },
    });

    return <Footer initialData={data} />;
  } catch (error) {
    console.error("Failed to fetch trending destinations:", error);
    return <Footer initialData={[]} />;
  }
}