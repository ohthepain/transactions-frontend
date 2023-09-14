import React, { useState } from "react";
import axios from "axios";
// Why doesn't this work?
// import transactionService from "../services/transaction-service";

const TransactionForm = () => {

  const defaultAccountId = "566944be-2dab-460b-b3ed-eeeebd8c5618"
  // const defaultAccountId = "00000000-0000-0000-0000-000000000000"
  const [accountId, setAccountId] = useState(defaultAccountId);
  const [amount, setAmount] = useState("100");

  const postTransaction = (account_id: string, amount: number) => {
    axios.post(`http://127.0.0.1:5000/transaction`, {"account_id": accountId, "amount": amount}).then(response => {
      // setTransactions(response.data)
    })
  }

  return (
  <div>
    <label className="block text-gray-700 text-medium font-bold mb-2">
        Submit New Transaction
    </label>
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Account ID:
          </label>
          <input onChange={(e) => { setAccountId(e.target.value) } } datatype="account-id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_id" type="text" placeholder={accountId}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount:
          </label>
          <input onChange={(e) => { setAmount(e.target.value) } } datatype="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="amount" placeholder={amount}/>
          <p className="text-red-500 text-xs italic">Amount must be non-zero</p>
        </div>
        {/* <div className="flex items-center justify-between"> */}
          <button onClick={() => { postTransaction(accountId, parseInt(amount)) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        {/* </div> */}
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Hire Me, Inc. All rights reserved.
      </p>
    </div>

  </div>)
}

export default TransactionForm;
