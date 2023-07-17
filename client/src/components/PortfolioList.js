import React from "react";
import ShareItem from "./ShareItem";

const PortfolioList = ({ portfolio }) => {
  const portfolioNodes = portfolio.map((portfolioItem) => (
    <ShareItem key={portfolioItem.symbol} share={portfolioItem} />
  ));

  return (
    <>
      <h1>Portfolio Page</h1>
      <ul>{portfolioNodes}</ul>
    </>
  );
};

export default PortfolioList;
