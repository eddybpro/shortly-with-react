import { useEffect, useState } from "react";
import "./App.css";
import BoostCard from "./components/BoostCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShortenedLinksCard from "./components/ShortenedLinksCard";
import ShorteningCard from "./components/ShorteningCard";
import Statistics from "./components/Statistics";

function App() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const addToShortenedList = (data) => {
    if (!shortenedLinks.includes(data)) {
      const link = {
        id:
          shortenedLinks.length == 0
            ? 1
            : shortenedLinks[shortenedLinks.length - 1].id + 1,
        links: data,
      };
      setShortenedLinks((prev) => [...prev, link]);
    }
  };

  const list = JSON.parse(localStorage.getItem("list")) || [];
  const storedList = [...shortenedLinks, ...list];

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  return (
    <>
      <Header />
      <main>
        <ShorteningCard addToShortenedList={addToShortenedList} />
        <div className="ShortLinksWrapper">
          {storedList.map((link, id) => (
            <ShortenedLinksCard key={id} link={link} />
          ))}
        </div>

        <Statistics />
        <BoostCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
