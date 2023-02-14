import "./App.css";
import useCounterStore from "./stores/counterStore";
import useEuroStore from "./stores/euroStore";
import useCountryStore from "./stores/countryStore";
import useBookStore from "./stores/bookStore";
import useBearStore from "./stores/bears";

function App() {
  const { count, increment, decrement, reset } = useCounterStore();
  const { euro, increaseEuro, decreaseEuro } = useEuroStore();
  const { country, setCountry } = useCountryStore();
  const { amount, updateAmount } = useBookStore();
  const { bears, increasePopulation, removeAllBears } = useBearStore();

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

      <div>
        <h1>Bears: {bears}</h1>
        <button onClick={increasePopulation}>one up</button>
        <button onClick={removeAllBears}>reset</button>
      </div>

      <div>
        <h1> Books: {amount} </h1>
        <button onClick={() => updateAmount(1)}> Update Amount </button>
      </div>
    </div>
  );
}

export default App;
