import React, { useEffect, useState } from "react"
import axios from "axios"

const TransactionTile = (props) => {

  const amount : number = props.transaction.amount
  const account_id : number = props.transaction.account_id
  // const transaction_id : number = props.transaction.transaction_id

  const [balance, setBalance] = useState(null)

  useEffect(() => {
    if (amount < 0) {
      const fetchAccount = () => {
        axios.get(`http://127.0.0.1:5000/account/${account_id}`).then(response => {
          setBalance(response.data.balance);
        }).catch(e => {
          console.error(e.errorMessage);
        })
      };
  
      fetchAccount();
    }
  }, []); 
  
  return (
    <div className="flex flex-col flex-wrap w-full bg-red-200">
        <p className="mt-4 text-xl">
          Transferred ${amount} {(amount > 0 ? "to" : "from") } Account:
        </p>
        <p className="mt-4 text-s">
          {props.transaction.account_id}
        </p>
        <div>
          {balance != null &&  (
            <>Balance: {balance}</>
          )}
        </div>
    </div>
)}

export default TransactionTile;