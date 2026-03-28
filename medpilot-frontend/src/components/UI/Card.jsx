import { colors } from "../../styles/colors";

const Card = ({ children }) => {
  return (
    <div
      style={{
        background: colors.white,
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;