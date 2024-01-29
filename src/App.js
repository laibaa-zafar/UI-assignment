// import NavBar from "./Components/NavBar/NavBar";
import Header from './Components/Header/Header';
import Location from "./Components/Location/Location";
import RideBooking from "./Components/RideBooking/RideBooking";
import HappyClients from "./Components/HappyClients/HappyClients";
import AppWorking from "./Components/AppWorking/AppWorking";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Header/>
      <Location />
      <RideBooking />
      <HappyClients />
      <AppWorking />
      <Footer />
    </div>
  );
}
export default App;
