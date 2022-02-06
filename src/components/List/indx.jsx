import { useState } from "react/cjs/react.development";
import Button from "../Button";
import Card from "../Card";

import "./styles.css";

const List = ({
  listTransactions,
  deleteTransaction,
  todos,
  showEntrada,
  showSaida,
  lista,
}) => {
  return (
    <section className="lista">
      <div className="bloco-resumoFinanc">
        <div className="lista-titulo">
          <h2>Resumo Financeiro</h2>
        </div>
        <div className="botoes-lista">
          <Button pink onClick={todos}>
            Todos
          </Button>
          <Button onClick={showEntrada}>Entradas</Button>
          <Button onClick={showSaida}>Despesas</Button>
        </div>
      </div>
      <ul>
        {listTransactions.map((transaction) => {
          return (
            <li>
              <Card
                description={transaction.description}
                money={transaction.value}
                typeMoney={transaction.type}
                deleteTransaction={deleteTransaction}
                lista={lista}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
