import Button from "../Button";
import "./styles.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ description, money, typeMoney, deleteTransaction, lista }) => {
  return (
    <>
      <div
        className={typeMoney === "Saída" ? "card-saida" : "card-entrada"}
      ></div>
      <div className="infos">
        <h2>{description}</h2>
        <p>R$ {money.toFixed(2).replace("-", " ").replace(".", ",")}</p>
        <Button onClick={() => deleteTransaction(description, lista)}>
          <FaTrash />
        </Button>
        <span>{typeMoney === "Saída" ? "Despesa" : "Entrada"}</span>
      </div>
    </>
  );
};

export default Card;
