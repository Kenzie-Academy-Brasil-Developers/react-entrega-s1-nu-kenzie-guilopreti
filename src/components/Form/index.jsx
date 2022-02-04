const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <form>
      <input placeholder="Valor" />
      <input placeholder="Descrição" />
      <select>
        <option>Entrada</option>
        <option>Saída</option>
      </select>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
