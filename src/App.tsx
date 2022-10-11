import React from "react";
import Navbar from "./app/ui/Navigation/Navbar";
import Providers from "./app/Providers/ProvidersUtil";
import Routing from "./app/Routing/Routing";
import { ToastContainer } from "react-toastify";
import Footer from "./app/ui/Navigation/Footer"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Providers>
      <Navbar />
      <Routing />
      <ToastContainer />
      <Footer />
    </Providers>
  );
}

export default App;
