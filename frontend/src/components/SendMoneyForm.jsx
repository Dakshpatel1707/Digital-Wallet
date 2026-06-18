
import { useState } from "react";
import api from "../services/api";
import QRScanner from "./QRScanner";
import {
  FaEnvelope,
  FaRupeeSign
} from "react-icons/fa";

function SendMoneyForm({ refreshBalance }) {

    const [receiverEmail, setReceiverEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [showScanner,setShowScanner] = useState(false);
    const [message, setMessage] = useState("");
    const [error,setError] =useState("");
    const handleSendMoney = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

         
            const response = await api.post(
                "/transaction/send",
                {
                    receiverEmail,
                    amount: Number(amount)
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            alert(response.data.message);

            setReceiverEmail("");
            setAmount("");
            setMessage("Money Sent Successfully");

            refreshBalance();

        } catch (error) {

             setError(
             error.response?.data?.message
             || "Transfer Failed"
          );
        }  

    };


 return (

    <div className="card p-4 mt-4">

        <h3 className="mb-4">
            Send Money
        </h3>


        {
          message && (

          <div
              className=
              "alert alert-success"
          >
              {message}
         </div>

         )
        }

        <form onSubmit={handleSendMoney}>

            <div className="input-group mb-3">

    <span className="input-group-text">

        <FaEnvelope />

    </span>

    <input
        type="email"
        className="form-control"
        placeholder="Enter Receiver Email"
        value={receiverEmail}
        onChange={(e) =>
            setReceiverEmail(
                e.target.value
            )
        }
    />

</div>

           <div className="input-group mb-3">

    <span className="input-group-text">

        <FaRupeeSign />

    </span>

    <input
        type="number"
        className="form-control"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) =>
            setAmount(
                e.target.value
            )
        }
    />

</div>

            <button
                type="submit"
                className="btn btn-info w-100"
            >

                Send Money

            </button>

        </form>

    </div>

);
}

export default SendMoneyForm;