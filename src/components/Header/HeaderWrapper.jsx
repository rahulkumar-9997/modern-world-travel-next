import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Header } from "./Header";
export default async function HeaderWrapper() {
  const queryClient = new QueryClient();
  const menuList = await queryClient.fetchQuery({
    queryKey: ["header-menu"],
    queryFn: async () => {
      const res = await axios.get(
        "https://www.gdsons.co.in/draft/mwt/api/header-menu"
      );
      return res.data?.data;
    },
  });
  return <Header menuList={menuList}/>;
}
