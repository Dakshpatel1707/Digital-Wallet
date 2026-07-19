import { useEffect, useState } from "react";
import api from "../services/api";
import SendMoneyForm from "../components/SendMoneyForm";
import AddMoneyForm from "../components/AddMoneyForm";
import Navbar from "../components/Navbar";
import UserQRCode from "../components/UserQRCode";
import Footer from "../components/Footer";
import BalanceCard from "../components/BalanceCard";
import QuickActions from "../components/QuickActions";
import ProfileCard from "../components/ProfileCard";
import TransactionCard from "../components/TransactionCard";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const currentUserEmail = localStorage.getItem("userEmail");

  const getBalance = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/wallet/balance", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBalance(res.data.balance);
    } catch (err) {
      console.error(err);
    }
  };

  const getHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/transaction/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const refreshDashboard = () => {
    getBalance();
    getHistory();
  };

  useEffect(() => {
    getBalance();
    getHistory();
  }, []);

  // Compute totals
  const totalSent = transactions
    .filter((t) => t.sender?.email === currentUserEmail)
    .reduce((sum, t) => sum + t.amount, 0);
  const totalReceived = transactions
    .filter((t) => t.receiver?.email === currentUserEmail)
    .reduce((sum, t) => sum + t.amount, 0);

  // Filter transactions by search
  const filtered = transactions.filter((t) => {
    const other = t.sender?.email === currentUserEmail ? t.receiver : t.sender;
    return (
      other?.name?.toLowerCase().includes(search.toLowerCase()) ||
      other?.email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const userName = currentUserEmail?.split("@")[0] || "there";

  return (
    <>
      <Navbar />
      <div style={styles.page}>

        {/* Greeting */}
        <div style={styles.greeting}>
          <h2 style={styles.greetText}>{greeting}, <span style={styles.greetName}>{userName}</span> 👋</h2>
          <p style={styles.greetSub}>Here's your wallet overview</p>
        </div>

        {/* Balance Card */}
        <BalanceCard balance={balance} totalSent={totalSent} totalReceived={totalReceived} />

        {/* Quick Actions */}
        <QuickActions />

        {/* QR Code */}
        <div id="qr-section">
          <UserQRCode />
        </div>

        {/* Add Money */}
        <div id="add-money-section">
          <AddMoneyForm refreshBalance={refreshDashboard} />
        </div>

        {/* Send Money */}
        <div id="send-money-section">
          <SendMoneyForm refreshBalance={refreshDashboard} />
        </div>

        {/* Transaction History */}
        <div id="history-section" style={styles.historyCard}>
          <div style={styles.historyTop}>
            <div>
              <h3 style={styles.historyTitle}>Transaction History</h3>
              <p style={styles.historySub}>{transactions.length} total transactions</p>
            </div>
            <input
              style={styles.search}
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <div style={styles.empty}>
              <p style={styles.emptyText}>No transactions found</p>
              <p style={styles.emptySub}>Your transaction history will appear here</p>
            </div>
          ) : (
            filtered.map((t) => (
              <TransactionCard
                key={t._id}
                transaction={t}
                currentUserEmail={currentUserEmail}
              />
            ))
          )}
        </div>

        {/* Profile */}
        <div id="profile-section">
          <ProfileCard />
        </div>

      </div>
      <Footer />
    </>
  );
}

const styles = {
  page: { maxWidth: "780px", margin: "0 auto", padding: "24px 16px 48px" },
  greeting: { marginBottom: "20px" },
  greetText: { color: "#f1f5f9", fontSize: "22px", fontWeight: "700", margin: "0 0 4px" },
  greetName: { color: "#3b82f6", textTransform: "capitalize" },
  greetSub: { color: "#64748b", fontSize: "13px", margin: 0 },
  historyCard: { background: "#1e293b", border: "1px solid #334155", borderRadius: "16px", padding: "24px", marginTop: "20px" },
  historyTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", gap: "12px", flexWrap: "wrap" },
  historyTitle: { color: "#f1f5f9", fontSize: "18px", fontWeight: "700", margin: "0 0 2px" },
  historySub: { color: "#64748b", fontSize: "13px", margin: 0 },
  search: { padding: "8px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", color: "#f1f5f9", fontSize: "13px", outline: "none", minWidth: "220px" },
  empty: { textAlign: "center", padding: "40px 0" },
  emptyText: { color: "#f1f5f9", fontSize: "15px", fontWeight: "600", margin: "0 0 4px" },
  emptySub: { color: "#64748b", fontSize: "13px", margin: 0 },
};

export default Dashboard;
