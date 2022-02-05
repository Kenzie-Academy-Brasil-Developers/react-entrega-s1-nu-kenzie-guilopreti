import Button from "../Button";
import Card from "../Card";

import "./styles.css";

const List = ({ listTransactions }) => {
  return (
    <>
      <div className="bloco-resumoFinanc">
        <h2>Resumo Financeiro</h2>
        <Button pink onClick={"todos"}>
          Todos
        </Button>
        <Button onClick={"entradas"}>Entradas</Button>
        <Button onClick={"despesas"}>Despesas</Button>
      </div>
      {/* <ul>
        {listTransactions.map((transaction) => ({
          /*Card*
      </ul> */}
    </>
  );
};

export default List;
