import { useNavigate, Link } from "react-router-dom";
import { FaWallet, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/dashboard" style={styles.brand}>
        <div style={styles.logo}>₹</div>
        <span style={styles.brandName}>Digital Wallet</span>
      </Link>
      <button style={styles.logoutBtn} onClick={handleLogout}>
        <FaSignOutAlt size={14} style={{ marginRight: "6px" }} />
        Logout
      </button>
    </nav>
  );
}

const styles = {
  nav: { background: "#1e293b", borderBottom: "1px solid #334155", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 },
  brand: { display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" },
  logo: { width: "34px", height: "34px", background: "#3b82f6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700", color: "#fff" },
  brandName: { color: "#f1f5f9", fontSize: "16px", fontWeight: "700" },
  logoutBtn: { display: "flex", alignItems: "center", padding: "7px 16px", background: "transparent", border: "1px solid #475569", borderRadius: "8px", color: "#94a3b8", fontSize: "13px", fontWeight: "600", cursor: "pointer" },
};

export default Navbar;
