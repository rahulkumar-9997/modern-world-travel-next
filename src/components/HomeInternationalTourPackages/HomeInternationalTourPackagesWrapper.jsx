import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomeInternationalTourPackages } from "./HomeInternationalTourPackages";

export default async function HomeInternationalTourPackagesWrapper() {
  const queryClient = new QueryClient();  
  try {
    const data = await queryClient.fetchQuery({
      queryKey: ["International-Tour-Packages"],
      queryFn: async () => {
        const res = await axios.get('https://www.gdsons.co.in/draft/mwt/api/home-international-tour');
        return res.data;
      },
    });

    return <HomeInternationalTourPackages initialData={data} />;
  } catch (error) {
    console.error("Failed to fetch trending destinations:", error);
    return <HomeInternationalTourPackages initialData={[]} />;
  }
}