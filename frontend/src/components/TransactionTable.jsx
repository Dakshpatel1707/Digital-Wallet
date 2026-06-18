import TransactionCard
from "./TransactionCard";

function TransactionTable({
  transactions
}) {

  return (

    <div className="mt-4">

      <h3>
        Recent Transactions
      </h3>

      {
        transactions.map(
          (transaction) => (

            <TransactionCard
              key={
                transaction._id
              }
              transaction={
                transaction
              }
            />

          )
        )
      }

    </div>

  );

}

export default TransactionTable;