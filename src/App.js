import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
