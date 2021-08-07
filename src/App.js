import React, { useEffect, useState, useCallback } from "react";

import Header from "./components/Header/Header";
import Launches from "./components/Launches/Launches";

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalLaunches, setTotalLaunches] = useState();
  const [launchLimit] = useState(10);

  const fetchLaunches = useCallback(async () => {
    const fetchedLaunches = await fetch(
      "https://api.spacexdata.com/v5/launches"
    );
    const parsedLaunches = await fetchedLaunches.json();
    setTotalLaunches(parsedLaunches.length);
    const copyLaunches = [...parsedLaunches];
    copyLaunches.splice(
      launchLimit * currentPage,
      parsedLaunches.length - launchLimit * currentPage
    );
    setLaunches(copyLaunches);
  }, [currentPage, launchLimit]);

  const scrollHandler = useCallback(
    (event) => {
      if (
        event.target.documentElement.scrollHeight -
          (event.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        launches.length < totalLaunches
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    },
    [launches.length, totalLaunches]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  return (
    <div>
      <Header />
      <Launches launches={launches} total={totalLaunches} />
    </div>
  );
};

export default App;
