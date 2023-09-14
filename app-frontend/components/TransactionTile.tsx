import React, { useState } from "react"

const TransactionTile = (props) => {

  const amount : number = props.transaction.amount
  
  return (
    <div className="flex flex-wrap w-full bg-red-200">
        <p className="mt-4 text-xl">
          Transferred ${amount} {(amount > 0 ? "to" : "from") } Account:
        </p>
        <p className="mt-4 text-s">
          {props.transaction.account_id}
        </p>
    </div>
)}

export default TransactionTile;