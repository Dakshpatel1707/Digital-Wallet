import { useEffect, useState } from "react";
import api from "../services/api";
import SendMoneyForm from "../components/SendMoneyForm";
import TransactionTable from "../components/TransactionTable";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import UserQRCode from "../components/UserQRCode";
import Footer from "../components/Footer";
import BalanceCard from "../components/BalanceCard";
import QuickActions from "../components/QuickActions";
import ProfileCard from "../components/ProfileCard";



function Dashboard() {

    const [balance, setBalance] = useState(0);
    const [transactions,setTransactions] = useState([]);


    const getBalance = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response =
                await api.get(
                    "/wallet/balance",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setBalance(
                response.data.balance
            );

        } catch (error) {

             alert(
                error.response?.data?.message ||
                "Something went wrong"
             );

        }

    };


     const getHistory = async () => {

    try {

        const token =
            localStorage.getItem("token");

        const response =
            await api.get(
                "/transaction/history",
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        setTransactions(
            response.data
        );

    } catch (error) {

        alert(
             error.response?.data?.message ||
             "Something went wrong"
              );

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

   return (

    <>

        <Navbar />

        <div className="container mt-4">

            <div className="card p-4">

                <h2>Dashboard</h2>
           <h2 className="mb-4">

               Welcome 👋

            </h2>
           <BalanceCard
                  balance={balance}
           />

            </div>

            <QuickActions />

            <div id="qr-section">

              <UserQRCode />

            </div>

            <div id="profile-section">

              <ProfileCard />

            </div>


          <div id="send-money-section">

           <SendMoneyForm
              refreshBalance={refreshDashboard}
            />

          </div>

            <div id="history-section">

         <TransactionTable
             transactions={transactions}
           />

         </div>

        </div>
        <>
    

    <div className="container mt-4">

        {/* Dashboard Content */}

    </div>

    <Footer />

</>

    </>

);
}

export default Dashboard;