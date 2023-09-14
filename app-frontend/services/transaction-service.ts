import axios from "axios"

// I have no idea why i can't import this from TransactionForm.tsx!!

class TransactionService {

    get(transaction_id: string) {
        console.log(`SequenceDataService.get ${transaction_id}`)
        return axios.get(`http://localhost:5000/transaction/${transaction_id}`)
    }

    getAll() {
        console.log(`SequenceDataService.getAll`)
        return axios.get(`http://localhost:5000/transaction}`)
    }

    post(accountId: string, amount: number) {
        console.log(`Post transaction of ${amount} to account_id ${accountId}`)
        return axios.post(`http://127.0.0.1:5000/transaction`, {"account_id": accountId, "amount": amount})
        // return axios.post(`http://127.0.0.1:5000/transaction`, {"amount": 10, "account_id": "566944be-2dab-460b-b3ed-eeeebd8c5618"})
    }
}

export default new TransactionService();

