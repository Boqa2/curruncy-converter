import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../libs/url";

interface CurrencyRate {
  currency: string;
  rate: number;
}

const Currency = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [conversionResult, setConversionResult] = useState<number | null>(null);
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([]);

  useEffect(() => {
    // Загрузка курсов валют и преобразование в массив объектов
    axios
      .get(url)
      .then((response) => {
        const ratesArray = Object.entries(response.data.rates).map(
          ([currency, rate]) => ({
            currency,
            rate: rate as number,
          })
        );
        setCurrencyRates(ratesArray);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке курсов валют:", error);
      });
  }, []);

  const handleConvert = () => {
    const fromRate = currencyRates.find(
      (rate) => rate.currency === fromCurrency
    )?.rate;
    const toRate = currencyRates.find(
      (rate) => rate.currency === toCurrency
    )?.rate;

    if (!fromRate || !toRate) {
      alert("Некорректные валюты");
      return;
    }

    // Рассчитать результат конвертации
    const result = amount * (toRate / fromRate);
    setConversionResult(result);
  };

  return (
    <div className="h-[calc(100vh-75px)] grid place-items-center">
      <div className="px-8 py-5 border border-indigo-600 rounded-lg shadow-xl">
        <h2 className="text-center text-xl mb-2 font-bold">Конвертер валют</h2>
        <div className="flex flex-col gap-4">
          <input
            className="bg-indigo-300 px-3 rounded-lg py-1"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <div>
            <select
              className="border border-indigo-500 py-1 px-4 rounded-lg"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyRates.map((rate) => (
                <option key={rate.currency} value={rate.currency}>
                  {rate.currency}
                </option>
              ))}
            </select>
            <span> в </span>
            <select
              className="border border-indigo-500 py-1 px-4 rounded-lg"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyRates.map((rate) => (
                <option key={rate.currency} value={rate.currency}>
                  {rate.currency}
                </option>
              ))}
            </select>
          </div>
          {conversionResult !== null && (
            <p className="text-red-500">
              {amount} {fromCurrency} = {conversionResult.toFixed(2)}{" "}
              {toCurrency}
            </p>
          )}
          <button
            className="bg-indigo-600 text-white py-1 rounded-md"
            onClick={handleConvert}
          >
            Конвертировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
