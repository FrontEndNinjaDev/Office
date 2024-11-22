
import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [rates, setRates] = useState({});

  useEffect(() => {
    // Fetch all available currencies once
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then((res) => res.json())
      .then((data) => setCurrencyInfo(data))
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  useEffect(() => {
    if (fromCurrency) {
      // Fetch rates for the selected "from" currency
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
      )
        .then((res) => res.json())
        .then((data) => setRates(data[fromCurrency] || {}))
        .catch((error) => console.error("Error fetching rates:", error));
    }
  }, [fromCurrency]);

  return { currencyInfo, rates };
}

export default useCurrencyInfo;
