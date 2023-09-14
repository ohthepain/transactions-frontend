import React, { useEffect, useState } from "react"
import Tile from "./Tile";
import axios from "axios"
// It can't find the file if I don't add the extension
import TransactionTile from "./TransactionTile.tsx";

// interface Transaction {
//   id: number;
//   transaction_id : string;
//   account_id: string;
//   amount: Number;
//   created_at: Date;
// }

const TransactionList = () => {

  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const fetchTransactions = () => {
      axios.get("http://127.0.0.1:5000/transaction").then(response => {
        setTransactions(response.data);
        setIsLoading(false)
      }).catch(e => {
        console.error(e.errorMessage);
        setErrorMessage(e.errorMessage)
      })
    };
    
    fetchTransactions();
  }, []);

  if (isLoading) {
    return (<div>Loading ...</div>)
  }

  if (errorMessage != null) {
    return (<div>Error {errorMessage}</div>)
  }

  if (transactions.length === 0) {
    return (<div>No transactions so far ...</div>)
  }

  return (
  <div className="flex flex-wrap w-fit mt-6 sm:w-full">
    <ul>
      {transactions.map((transaction) => (
        <>
          <TransactionTile transaction={transaction}/>
        </>
      ))}
    </ul>
  </div>
)}

export default TransactionList;
