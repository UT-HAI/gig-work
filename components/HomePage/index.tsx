import type { NextPage } from "next";
import Layout from "../Layout";
import { useAuth } from "../Provider/Auth";
import ContentArea from "../ContentArea";
import { useAppLocation } from "../Provider/Location";

const Home: NextPage = () => {
  const userId = useAuth();
  const currentPage = useAppLocation();
  console.log(currentPage)
  return (
    <Layout userId={userId}>
      <ContentArea page={currentPage} />
    </Layout>
  );
};
export default Home;
