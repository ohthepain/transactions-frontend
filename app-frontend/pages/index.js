import Head from 'next/head'
import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import TransactionForm from "../components/TransactionForm.tsx";
import TransactionList from '../components/TransactionList.tsx';

export default function Home() {
  return (
    <div className="flex flex-col justify-top min-h-screen py-2 bg-yellow-200">
      <Head>
        <title>Transaction Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-full text-center bg-slate-300 flex-grow: 1">
        <div className="flex-4 p-10">
          <TransactionForm />
        </div>
        <div className="bg-blue-500 flex-1">
          <div>
            <h3 className="text-2xl font-bold">Transaction History</h3>
          </div>
          <TransactionList />
        </div>
      </main>
      <div className="align-self: flex-end; bg-pink-200">
        <Footer />
      </div>
      <div className="align-self: flex-end; bg-pink-200">
        <Footer />
      </div>
    </div>
  )
}
