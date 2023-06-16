import React from "react";
//import Header from "../layouts/Header";
import Body from "../layouts/Body";
import { Button, Navbar } from "flowbite-react";
import "../assets/styles/index.css";
//import Search from "../components/Search";

function Home() {
  return (
    <div className="grid bg-gray-100">
           {/* Header */}

      <Header />

      {/* Content */}
      <main className="container mx-auto">
    

      </main>
      
      
        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
        
      </footer>
    </div>
  );
}

export default Home;
