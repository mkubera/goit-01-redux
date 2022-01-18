import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./reducers/actions";

import Pokemons from "./components/Pokemons";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Pokemons />
        {/* <Pokemons pokemonName={"pikachu"} /> */}
        {/* <Pokemons pokemonName={"bulbasaur"} /> */}

        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
        />
      </header>
    </div>
  );
};

export default App;
