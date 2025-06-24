import "./App.css";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import SortedList from "./components/SortedList";
import CounterCallback from "./components/CounterCallback";
// import FetchJson from "./components/FetchJson";
import LocalStorage from "./components/LocalStorage";
import Debounce from "./components/Debounce";
function App() {
  return (
    <>
      <Toggle />
      <Counter />
      <SortedList />
      <CounterCallback />
      {/* <FetchJson /> */}
      <LocalStorage />
      <Debounce />
    </>
  );
}

export default App;
