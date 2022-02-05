import "./styles.css";

const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <form>
      <div className="descricao">
        <h4>Descrição</h4>
        <input placeholder="Digite aqui sua descrição" />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="valor">
        <h4>Valor</h4>
        <div>
          <input placeholder="Valor" />
          <p>R$</p>
        </div>
      </div>

      <div className="tipo-valor">
        <h4>Tipo de valor</h4>
        <select>
          <option>Entrada</option>
          <option>Saída</option>
        </select>
      </div>

      <button>Inserir Valor</button>
    </form>
  );
};

export default Form;
