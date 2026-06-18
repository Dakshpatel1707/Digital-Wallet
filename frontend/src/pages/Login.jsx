import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {

        event.preventDefault();

        try {

            const response = await api.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

         localStorage.setItem(
            "token",
             response.data.token
            );

         localStorage.setItem(
          "role",
           response.data.role
            );

          localStorage.setItem(
        "userEmail",
         response.data.email
           );

         navigate("/dashboard");

        } catch (error) {

           alert(
             error.response?.data?.message ||
             "Something went wrong"
               );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card p-4 shadow-lg border-0">

                       <div className="text-center mb-4">

                        <h1 className="fw-bold">
                           Digital Wallet
                        </h1>

                        <p className="text-secondary">
                           Secure Payments Made Easy
                        </p>

                         <h3>
                           Welcome Back 👋
                         </h3>

                      </div>

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100 py-2"
                            >
                                Login
                            </button>

                            <div className="text-center mt-3">

                           <p>

                               Don't have an account?

                             <a
                              href="/register"
                              className="ms-2"
                            >
                               Register
                            </a>

                         </p>

                      </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;