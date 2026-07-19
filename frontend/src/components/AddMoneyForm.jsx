import { useState } from "react";
import api from "../services/api";
import { FaPlus, FaRupeeSign } from "react-icons/fa";

const QUICK_AMOUNTS = [100, 500, 1000, 2000];

function AddMoneyForm({ refreshBalance }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/wallet/add",
        { amount: Number(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(res.data.message);
      setAmount("");
      refreshBalance();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add money.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Add Money</h3>
      <p style={styles.sub}>Top up your wallet balance instantly</p>

      {success && <div style={styles.successBox}>{success}</div>}
      {error && <div style={styles.errorBox}>{error}</div>}

      <div style={styles.quickRow}>
        {QUICK_AMOUNTS.map((q) => (
          <button key={q} type="button" style={styles.quickBtn} onClick={() => setAmount(String(q))}>
            ₹{q}
          </button>
        ))}
      </div>

      <form onSubmit={handleAdd}>
        <div style={styles.field}>
          <label style={styles.label}>Custom Amount (₹)</label>
          <div style={styles.inputGroup}>
            <FaRupeeSign size={14} color="#64748b" style={styles.inputIcon} />
            <input style={styles.input} type="number" placeholder="Enter amount" min="1"
              value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </div>
        </div>
        <button style={{ ...styles.btn, opacity: loading ? 0.7 : 1 }} type="submit" disabled={loading}>
          <FaPlus size={13} style={{ marginRight: "8px" }} />
          {loading ? "Adding..." : "Add to Wallet"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: { background: "#1e293b", border: "1px solid #334155", borderRadius: "16px", padding: "24px", marginTop: "20px" },
  title: { color: "#f1f5f9", fontSize: "18px", fontWeight: "700", margin: "0 0 4px" },
  sub: { color: "#64748b", fontSize: "13px", margin: "0 0 16px" },
  successBox: { background: "#052e16", border: "1px solid #166534", color: "#4ade80", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", marginBottom: "16px" },
  errorBox: { background: "#450a0a", border: "1px solid #7f1d1d", color: "#fca5a5", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", marginBottom: "16px" },
  quickRow: { display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" },
  quickBtn: { padding: "6px 16px", background: "#0f172a", border: "1px solid #334155", borderRadius: "20px", color: "#93c5fd", fontSize: "13px", fontWeight: "600", cursor: "pointer" },
  field: { marginBottom: "16px" },
  label: { display: "block", fontSize: "12px", fontWeight: "500", color: "#94a3b8", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" },
  inputGroup: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "12px" },
  input: { width: "100%", padding: "11px 14px 11px 36px", background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "14px", color: "#f1f5f9", boxSizing: "border-box", outline: "none" },
  btn: { width: "100%", padding: "12px", background: "#10b981", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
};

export default AddMoneyForm;
