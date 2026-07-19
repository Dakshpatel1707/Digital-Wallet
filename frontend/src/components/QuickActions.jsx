import { FaPaperPlane, FaQrcode, FaHistory, FaUser, FaPlus } from "react-icons/fa";

const actions = [
  { icon: <FaPlus size={22} />, label: "Add Money", section: "add-money-section", color: "#10b981" },
  { icon: <FaPaperPlane size={22} />, label: "Send Money", section: "send-money-section", color: "#3b82f6" },
  { icon: <FaQrcode size={22} />, label: "QR Payment", section: "qr-section", color: "#8b5cf6" },
  { icon: <FaHistory size={22} />, label: "History", section: "history-section", color: "#f59e0b" },
  { icon: <FaUser size={22} />, label: "Profile", section: "profile-section", color: "#64748b" },
];

function QuickActions() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={styles.grid}>
      {actions.map((a) => (
        <div key={a.label} style={styles.card} onClick={() => scrollTo(a.section)}>
          <div style={{ ...styles.icon, background: a.color + "22", border: `1px solid ${a.color}44`, color: a.color }}>
            {a.icon}
          </div>
          <p style={styles.label}>{a.label}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", marginTop: "4px" },
  card: { background: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "16px 8px", textAlign: "center", cursor: "pointer", transition: "border-color 0.2s" },
  icon: { width: "46px", height: "46px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" },
  label: { color: "#94a3b8", fontSize: "12px", fontWeight: "600", margin: 0 },
};

export default QuickActions;
