import React from "react";
import data from "./data";
import Nav from "./components/Nav";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="container">
      <Nav />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
