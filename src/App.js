import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List/indx";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const newListTransactions = (value) => {
    setListTransactions([...listTransactions, value]);
  };

  const deleteTransaction = (deleteValue, lista) => {
    const remainTransactions = listTransactions.filter(({ description }) => {
      return description !== deleteValue;
    });
    setListTransactions(remainTransactions);
    setLista(lista);
  };

  const [lista, setLista] = useState("tudo");

  const todos = () => {
    setLista("tudo");
  };

  const showEntrada = () => {
    setLista("entradas");
  };

  const showSaida = () => {
    setLista("saidas");
  };

  const entradas = listTransactions.filter(({ type }) => {
    return type === "Entrada";
  });

  const saidas = listTransactions.filter(({ type }) => {
    return type === "Saída";
  });

  return (
    <div className="App">
      <Header />
      <section className="geral">
        {lista === "tudo" ? (
          <List
            listTransactions={listTransactions}
            deleteTransaction={deleteTransaction}
            todos={todos}
            showEntrada={showEntrada}
            showSaida={showSaida}
            lista={lista}
          />
        ) : lista === "entradas" ? (
          <List
            listTransactions={entradas}
            deleteTransaction={deleteTransaction}
            todos={todos}
            showEntrada={showEntrada}
            showSaida={showSaida}
            lista={lista}
          />
        ) : (
          <List
            listTransactions={saidas}
            deleteTransaction={deleteTransaction}
            todos={todos}
            showEntrada={showEntrada}
            showSaida={showSaida}
            lista={lista}
          />
        )}

        <section className="form-valorTotal">
          <Form newListTransactions={newListTransactions} />

          {lista === "tudo" ? (
            <TotalMoney listTransactions={listTransactions} />
          ) : lista === "entradas" ? (
            <TotalMoney listTransactions={entradas} />
          ) : (
            <TotalMoney listTransactions={saidas} />
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
