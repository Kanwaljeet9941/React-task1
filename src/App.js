import Class from "./Components/Class";
import Greet from "./Components/greet";
import "./App.css";

function App() {
  const info = {
    name: "Kamal",
    age: "20",
  };
  return (
    <div className="App">
      <Greet info={info} />
      <Class info={info} />
    </div>
  );
}

export default App;
