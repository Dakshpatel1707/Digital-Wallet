import { FaWallet } from "react-icons/fa";

function BalanceCard({ balance }) {

  return (

    <div
      className="card p-4 mb-4"
    >

      <h5>

        <FaWallet />
        {" "}
        Wallet Balance

      </h5>

      <h1>
        ₹{balance}
      </h1>

      <p>
        Updated Just Now
      </p>

    </div>

  );

}

export default BalanceCard;