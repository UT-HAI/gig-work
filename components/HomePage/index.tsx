import type { NextPage } from "next";
import AggregateEarningsPerDay from "../Tableau/Aggregate/DayOfWeek";
import AggregateEarningsPerHour from "../Tableau/Aggregate/Hourly";
import AggregateEarningsPerLocation from "../Tableau/Aggregate/Location";
import PersonalEarningsPerDay from "../Tableau/Personal/DayOfWeek";
import PersonalEarningsPerHour from "../Tableau/Personal/Hourly";
import PersonalEarningsPerLocation from "../Tableau/Personal/Location";
import DisplayPanel from "../Tableau/DisplayPanel";
import type { Tab } from "../Tableau/DisplayPanel";
import Layout from "../Layout";
import { useAuth } from "../AuthProvider";


const tabs: Tab[] = [
  {
    title: "Day Of Week",
    aggregate: <AggregateEarningsPerDay />,
    personal: <PersonalEarningsPerDay />,
  },
  {
    title: "Hourly",
    aggregate: <AggregateEarningsPerHour />,
    personal: <PersonalEarningsPerHour />,
  },
  {
    title: "Location",
    aggregate: <AggregateEarningsPerLocation />,
    personal: <PersonalEarningsPerLocation />,
  },
];

const Home: NextPage = () => {
  const userId = useAuth()
  return (
    <Layout title="Home" userId={userId}>
      <DisplayPanel tabs={tabs} />
    </Layout>
  );
};
export default Home;
