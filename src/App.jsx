import "./App.css";
import useCounterStore from "./stores/counterStore";
import useEuroStore from "./stores/euroStore";
import useCountryStore from "./stores/countryStore";

function App() {
  const { count, increment, decrement, reset } = useCounterStore();
  const { euro, increaseEuro, decreaseEuro } = useEuroStore();
  const { country, setCountry } = useCountryStore();

  return (
    <div className="App">
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h1>Euro: {euro}</h1>
        <button onClick={increaseEuro}>Increment</button>
        <button onClick={decreaseEuro}>Decrement</button>
      </div>
      <div>
        <h1>Country: {country}</h1>
        <button onClick={() => setCountry("TR")}>Turkey</button>
        <button onClick={() => setCountry("USA")}>USA</button>
        <button onClick={() => setCountry("UK")}>UK</button>
      </div>
    </div>
  );
}

export default App;
