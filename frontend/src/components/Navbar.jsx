import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSignOutAlt, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      {/* Brand */}
      <Link to="/dashboard" style={styles.brand}>
        <div style={styles.logo}>₹</div>
        <span style={styles.brandName}>Digital Wallet</span>
      </Link>

      {/* Right side buttons */}
      <div style={styles.right}>

        {/* Admin button — only shows if role === "admin" */}
        {role === "admin" && (
          <Link to="/admin" style={styles.adminBtn}>
            <FaShieldAlt size={12} style={{ marginRight: "6px" }} />
            Admin Panel
          </Link>
        )}

        {/* Dashboard button */}
        <Link to="/dashboard" style={styles.navLink}>
          <FaTachometerAlt size={12} style={{ marginRight: "6px" }} />
          Dashboard
        </Link>

        {/* Logout */}
        <button style={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt size={12} style={{ marginRight: "6px" }} />
          Logout
        </button>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#1e293b",
    borderBottom: "1px solid #334155",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  logo: {
    width: "34px",
    height: "34px",
    background: "#3b82f6",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
  },
  brandName: {
    color: "#f1f5f9",
    fontSize: "16px",
    fontWeight: "700",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  adminBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 14px",
    background: "#450a0a",
    border: "1px solid #ef4444",
    borderRadius: "8px",
    color: "#f87171",
    fontSize: "13px",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer",
  },
  navLink: {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 14px",
    background: "transparent",
    border: "1px solid #334155",
    borderRadius: "8px",
    color: "#94a3b8",
    fontSize: "13px",
    fontWeight: "600",
    textDecoration: "none",
  },
  logoutBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 14px",
    background: "transparent",
    border: "1px solid #475569",
    borderRadius: "8px",
    color: "#94a3b8",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Navbar;
