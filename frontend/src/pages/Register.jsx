import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleRegister = async (e) => {

        e.preventDefault();

        try {
            setLoading(true);
            const response = await api.post(
                "/auth/register",
                {
                    name,
                    email,
                    password
                }
            );
            setLoading(false);
            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
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
                       Create Account 
                      </h3>

                    </div>

                        <form onSubmit={handleRegister}>

                            <div className="mb-3">

                               <label className="form-label">
                                  Name
                               </label>

                               <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Enter your name"
                                 value={name}
                                 onChange={(event) =>
                                 setName(event.target.value)
                               }
                            />

                            </div>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <button
                                type="submit"
                               className="btn btn-success w-100 py-2"
                            >
                                Register
                            </button>
                            <div className="text-center mt-3">

                             <p>
                                Already have an account?
                             <a
                               href="/login"
                               className="ms-2"
                             >
                                Login
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

export default Register;