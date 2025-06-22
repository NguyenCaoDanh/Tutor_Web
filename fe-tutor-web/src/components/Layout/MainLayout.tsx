import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../BackToTopButton";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default MainLayout;
