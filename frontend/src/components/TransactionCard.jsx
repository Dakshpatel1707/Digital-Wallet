function TransactionCard({
  transaction
}) {

  return (

    <div
      className="card p-3 mb-3"
    >

      <div className="d-flex justify-content-between">

        <div>

          <h5>
            Money Transfer
          </h5>

          <p>

            To:
            {" "}
            {
              transaction.receiver?.name
            }

          </p>

        </div>

        <div>

          <h4>
            ₹
            {
              transaction.amount
            }
          </h4>

        </div>

      </div>

      <small>

        {
          new Date(
            transaction.createdAt
          ).toLocaleString()
        }

      </small>

    </div>

  );

}

export default TransactionCard;