const TotalMoney = ({ listTransactions }) => {
  const totalValues = listTransactions.reduce((acc, { value }) => {
    return (acc += value);
  }, 0);
};

export default TotalMoney;
