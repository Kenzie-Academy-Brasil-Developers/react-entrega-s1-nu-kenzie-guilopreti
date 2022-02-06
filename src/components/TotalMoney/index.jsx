import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  const totalValues = listTransactions.reduce((acc, { value }) => {
    return (acc += value);
  }, 0);
  return (
    <div className="valor-total">
      <span className="valor-total-text">Valor Total:</span>
      <span className="valor-total-number">$ {totalValues}</span>
    </div>
  );
};

export default TotalMoney;
