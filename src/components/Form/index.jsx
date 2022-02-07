import { useState } from "react";
import "./styles.css";

const Form = ({ newListTransactions }) => {
  const [description, setDescription] = useState(" ");

  const [value, setValue] = useState(0);

  const [type, setType] = useState("Entrada");

  const [transaction, setTransaction] = useState({
    description: description,
    value: value,
    type: type,
  });

  const newTransaction = () => {
    setTransaction({
      description: description,
      value: type === "Saída" ? ~value + 1 : value,
      type: type,
    });
  };

  const preventDefault = (evt) => {
    evt.preventDefault();
    console.log(transaction);
    newListTransactions(transaction);
  };

  return (
    <form onSubmit={(evt) => preventDefault(evt)}>
      <div className="descricao">
        <h4>Descrição</h4>
        <input
          placeholder="Digite aqui sua descrição"
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="valor">
        <h4>Valor</h4>
        <div>
          <input
            placeholder="1"
            onChange={(evt) => setValue(Number(evt.target.value))}
          />
          <p>R$</p>
        </div>
      </div>

      <div className="tipo-valor">
        <h4>Tipo de valor</h4>
        <select onChange={(evt) => setType(evt.target.value)}>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
      </div>

      <button type="submit" onClick={newTransaction}>
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
