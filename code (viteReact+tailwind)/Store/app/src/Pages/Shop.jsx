import { Footer, Header, Pagebanner } from "/src/components/Common";
import Shopsidebar from "../components/Common/Shop/sidebar";
import Maincontent from "../components/Common/Shop/maincontent";
import React, { useState } from 'react';

const shop = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />
      <Pagebanner title="Shop" />
      
      <div className="flex">
      {/* Sidebar */}
      <Shopsidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <button
          className="lg:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        <h1 className="text-2xl font-bold mb-6">Shop All Products</h1>
        {/* Main content with products */}
        <Maincontent />
      </div>
    </div>

      <Footer />
    </>
  );
};

export default shop;
