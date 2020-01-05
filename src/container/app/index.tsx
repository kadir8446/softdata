import React from "react";
import "../../scss/style.scss";
import Header from "../header";
import Footer from "../footer";
import Content from "../content";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
