import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

function ProfileCard() {
  const email = localStorage.getItem("userEmail") || "—";
  const token = localStorage.getItem("token");
  let memberSince = "—";
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const date = new Date(payload.iat * 1000);
    memberSince = date.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch (_) {}

  const initials = email.slice(0, 2).toUpperCase();

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.avatar}>{initials}</div>
        <div>
          <h4 style={styles.name}>{email.split("@")[0]}</h4>
          <span style={styles.badge}><FaShieldAlt size={10} style={{ marginRight: 4 }} />Verified Account</span>
        </div>
      </div>
      <div style={styles.divider} />
      <div style={styles.row}>
        <FaEnvelope size={14} color="#3b82f6" />
        <div>
          <p style={styles.rowLabel}>Email</p>
          <p style={styles.rowVal}>{email}</p>
        </div>
      </div>
      <div style={styles.row}>
        <FaCalendarAlt size={14} color="#3b82f6" />
        <div>
          <p style={styles.rowLabel}>Member since</p>
          <p style={styles.rowVal}>{memberSince}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "#1e293b", border: "1px solid #334155", borderRadius: "16px", padding: "24px", marginTop: "20px" },
  header: { display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" },
  avatar: { width: "56px", height: "56px", borderRadius: "50%", background: "#1e3a5f", border: "2px solid #3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "700", color: "#93c5fd", flexShrink: 0 },
  name: { color: "#f1f5f9", fontSize: "16px", fontWeight: "700", margin: "0 0 4px", textTransform: "capitalize" },
  badge: { background: "#052e16", color: "#4ade80", border: "1px solid #166534", borderRadius: "20px", padding: "2px 10px", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center" },
  divider: { height: "1px", background: "#334155", marginBottom: "16px" },
  row: { display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" },
  rowLabel: { color: "#64748b", fontSize: "11px", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.5px" },
  rowVal: { color: "#e2e8f0", fontSize: "14px", fontWeight: "500", margin: 0 },
};

export default ProfileCard;
