import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const handleLogout = () => {
 
    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav
      className="navbar navbar-dark px-4"
      style={{
        background: "#1e293b"
      }}
    >

      <h4
        style={{
          cursor: "pointer"
        }}
        onClick={() =>
          navigate("/dashboard")
        }
      >
        <FaWallet />
        {" "}
        Digital Wallet
      </h4>

      <div>

        <button
          className="btn btn-outline-light me-2"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Dashboard
        </button>

         {
           role === "admin" && (

       <button
            className="btn btn-outline-info me-2"
            onClick={() => {
                navigate("/admin");
            }}
        >
            Admin
        </button>

        )
      }

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          {" "}
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;