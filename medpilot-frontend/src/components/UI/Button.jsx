import { colors } from "../../styles/colors";

const Button = ({ children, type = "primary", ...props }) => {
  const bg =
    type === "primary"
      ? colors.primary
      : type === "danger"
      ? colors.danger
      : colors.success;

  return (
    <button
      style={{
        background: bg,
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;