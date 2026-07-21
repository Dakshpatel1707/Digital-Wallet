import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userEmail", response.data.email);
      localStorage.setItem("userName", response.data.name);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logoWrap}>
          <div style={styles.logo}>₹</div>
        </div>
        <h1 style={styles.title}>Digital Wallet</h1>
        <p style={styles.subtitle}>Secure Payments Made Easy</p>
        <h2 style={styles.heading}>Welcome back</h2>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={styles.field}>
            <label style={styles.label}>Email address</label>
            <input style={styles.input} type="email" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" placeholder="••••••••"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button style={{ ...styles.btn, opacity: loading ? 0.7 : 1 }} type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p style={styles.switchText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>Create account</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  card: { background: "#1e293b", borderRadius: "16px", padding: "40px 36px", width: "100%", maxWidth: "420px", border: "1px solid #334155" },
  logoWrap: { display: "flex", justifyContent: "center", marginBottom: "16px" },
  logo: { width: "52px", height: "52px", borderRadius: "14px", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "700", color: "#fff" },
  title: { textAlign: "center", fontSize: "22px", fontWeight: "700", color: "#f1f5f9", margin: "0 0 4px" },
  subtitle: { textAlign: "center", color: "#64748b", fontSize: "13px", margin: "0 0 24px" },
  heading: { fontSize: "18px", fontWeight: "600", color: "#e2e8f0", marginBottom: "20px" },
  errorBox: { background: "#450a0a", border: "1px solid #7f1d1d", color: "#fca5a5", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", marginBottom: "16px" },
  field: { marginBottom: "16px" },
  label: { display: "block", fontSize: "13px", fontWeight: "500", color: "#94a3b8", marginBottom: "6px" },
  input: { width: "100%", padding: "11px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "14px", color: "#f1f5f9", boxSizing: "border-box", outline: "none" },
  btn: { width: "100%", padding: "12px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer", marginTop: "8px" },
  switchText: { textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#64748b" },
  link: { color: "#3b82f6", textDecoration: "none", fontWeight: "600" },
};

export default Login;
