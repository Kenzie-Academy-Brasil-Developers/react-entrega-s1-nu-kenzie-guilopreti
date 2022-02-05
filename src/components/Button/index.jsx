import "./styles.css";

const Button = ({ children, onClick, type = "button", pink = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={pink ? "button-pink" : "button-grey"}
    >
      {children}
    </button>
  );
};

export default Button;
