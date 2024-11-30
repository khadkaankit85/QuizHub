import { BrowserRouter } from "react-router";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
