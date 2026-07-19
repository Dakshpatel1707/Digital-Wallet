import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

function BalanceCard({ balance, totalSent, totalReceived }) {
  return (
    <div style={styles.card}>
      <div style={styles.top}>
        <div>
          <p style={styles.label}>Total Balance</p>
          <h1 style={styles.amount}>₹{Number(balance).toLocaleString("en-IN")}</h1>
          <p style={styles.updated}>Updated just now</p>
        </div>
        <div style={styles.iconWrap}>
          <FaWallet size={28} color="#3b82f6" />
        </div>
      </div>
      <div style={styles.statsRow}>
        <div style={styles.stat}>
          <div style={styles.statIconGreen}><FaArrowDown size={12} /></div>
          <div>
            <p style={styles.statLabel}>Total Received</p>
            <p style={styles.statVal}>₹{Number(totalReceived || 0).toLocaleString("en-IN")}</p>
          </div>
        </div>
        <div style={styles.divider} />
        <div style={styles.stat}>
          <div style={styles.statIconRed}><FaArrowUp size={12} /></div>
          <div>
            <p style={styles.statLabel}>Total Sent</p>
            <p style={styles.statVal}>₹{Number(totalSent || 0).toLocaleString("en-IN")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: "linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)", borderRadius: "16px", padding: "28px", border: "1px solid #2d4a7a", marginBottom: "20px" },
  top: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" },
  label: { color: "#93c5fd", fontSize: "13px", fontWeight: "500", margin: "0 0 6px" },
  amount: { color: "#f1f5f9", fontSize: "40px", fontWeight: "800", margin: "0 0 4px", letterSpacing: "-1px" },
  updated: { color: "#64748b", fontSize: "12px", margin: 0 },
  iconWrap: { background: "#1e3a5f", border: "1px solid #2d4a7a", borderRadius: "12px", padding: "12px", display: "flex" },
  statsRow: { display: "flex", alignItems: "center", background: "rgba(0,0,0,0.2)", borderRadius: "10px", padding: "14px 20px" },
  stat: { display: "flex", alignItems: "center", gap: "10px", flex: 1 },
  statIconGreen: { background: "#052e16", border: "1px solid #166534", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80" },
  statIconRed: { background: "#450a0a", border: "1px solid #7f1d1d", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", color: "#f87171" },
  statLabel: { color: "#64748b", fontSize: "11px", margin: "0 0 2px" },
  statVal: { color: "#f1f5f9", fontSize: "15px", fontWeight: "700", margin: 0 },
  divider: { width: "1px", height: "36px", background: "#334155", margin: "0 20px" },
};

export default BalanceCard;
