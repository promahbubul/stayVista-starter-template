import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  console.log(category);
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <h1>Welcome to StayVista</h1>
      {/* Categories Section */}
      <Categories />
      {/* Rooms Section */}
      <Rooms />
    </div>
  );
};

export default Home;
