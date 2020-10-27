/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./app.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");

  const loadData = () => {
    fetchData().then((data) => {
      if (!data) {
        return "Loading..";
      } else {
        setData(data);
      }
    });
  };

  const handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart country={country} data={data} />
    </div>
  );
};

export default App;
