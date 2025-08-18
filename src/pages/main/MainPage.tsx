import "./MainPage.scss";
import FlightInputs from "@/containers/flightSearch/FlightSearch";
import FlightMap from "@/containers/FlightMap";
import NavBar from "@/containers/NavBar";

const MainPage = () => {
  return (
    <div className="main_page">
      <FlightInputs />

      <FlightMap />

      <NavBar />
    </div>
  );
};

export default MainPage;
