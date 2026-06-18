import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function AdminDashboard() {

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalTransactions: 0,
        totalMoneyTransferred: 0
    });

    useEffect(() => {

        getStats();

    }, []);

    const getStats = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response =
                await api.get(
                    "/admin/stats",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4">
                    Admin Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card p-4">

                            <h4>Total Users</h4>

                            <h2>
                                {stats.totalUsers}
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card p-4">

                            <h4>Total Transactions</h4>

                            <h2>
                                {stats.totalTransactions}
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card p-4">

                            <h4>Total Money</h4>

                            <h2>
                                ₹{stats.totalMoneyTransferred}
                            </h2>

                        </div>

                    </div>

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

export default AdminDashboard;