// libs
import React from "react";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
