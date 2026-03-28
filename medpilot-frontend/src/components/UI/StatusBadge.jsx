import React from "react";

const statusColors = {
  taken: "#2ECC71",
  upcoming: "#00AD85",
  missed: "#E74C3C",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "12px",
        backgroundColor: statusColors[status],
        color: "#fff",
        fontSize: "12px",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;