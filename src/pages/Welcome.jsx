import React from "react";
import Header from "../components/ui/header/Header";
import News from "../components/ui/news/main_news/News";

const MainPage = () => {
  console.log("MainPage рендерится");
  return (
    <>
      <Header />
      <News />
    </>
  );
};

export default MainPage;
