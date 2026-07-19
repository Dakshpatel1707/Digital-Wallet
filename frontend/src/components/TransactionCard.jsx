import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function TransactionCard({ transaction, currentUserEmail }) {
  const isSent = transaction.sender?.email === currentUserEmail;
  const otherParty = isSent ? transaction.receiver : transaction.sender;
  const label = isSent ? "Sent to" : "Received from";

  return (
    <div style={styles.card}>
      <div style={isSent ? styles.iconRed : styles.iconGreen}>
        {isSent ? <FaArrowUp size={14} /> : <FaArrowDown size={14} />}
      </div>
      <div style={styles.info}>
        <p style={styles.type}>Money Transfer</p>
        <p style={styles.party}>{label} <strong>{otherParty?.name || otherParty?.email || "Unknown"}</strong></p>
        <p style={styles.date}>{new Date(transaction.createdAt).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
      </div>
      <div style={styles.right}>
        <p style={isSent ? styles.amountRed : styles.amountGreen}>
          {isSent ? "-" : "+"}₹{Number(transaction.amount).toLocaleString("en-IN")}
        </p>
        <span style={isSent ? styles.badgeRed : styles.badgeGreen}>{isSent ? "Sent" : "Received"}</span>
      </div>
    </div>
  );
}

const styles = {
  card: { display: "flex", alignItems: "center", gap: "14px", background: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" },
  iconGreen: { width: "40px", height: "40px", borderRadius: "50%", background: "#052e16", border: "1px solid #166534", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80", flexShrink: 0 },
  iconRed: { width: "40px", height: "40px", borderRadius: "50%", background: "#450a0a", border: "1px solid #7f1d1d", display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171", flexShrink: 0 },
  info: { flex: 1 },
  type: { color: "#f1f5f9", fontSize: "14px", fontWeight: "600", margin: "0 0 2px" },
  party: { color: "#94a3b8", fontSize: "12px", margin: "0 0 2px" },
  date: { color: "#64748b", fontSize: "11px", margin: 0 },
  right: { textAlign: "right" },
  amountGreen: { color: "#4ade80", fontSize: "16px", fontWeight: "700", margin: "0 0 4px" },
  amountRed: { color: "#f87171", fontSize: "16px", fontWeight: "700", margin: "0 0 4px" },
  badgeGreen: { background: "#052e16", color: "#4ade80", border: "1px solid #166534", borderRadius: "20px", padding: "2px 8px", fontSize: "10px", fontWeight: "600" },
  badgeRed: { background: "#450a0a", color: "#f87171", border: "1px solid #7f1d1d", borderRadius: "20px", padding: "2px 8px", fontSize: "10px", fontWeight: "600" },
};

export default TransactionCard;
