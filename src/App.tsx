import React from "react";
import Navbar from "./app/ui/Navigation/Navbar";
import Providers from "./app/Providers/ProvidersUtil";
import Routing from "./app/Routing/Routing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Providers>
      <Navbar />
      <Routing />
      <ToastContainer/>
    </Providers>
  );
}

export default App;
