import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';


interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amout: number;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amout: number;
//   category: string;
//   type: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // pega todos os campos e tira alguns

// type TransactionInput = Pick<Transaction, 'title'| 'amout'| 'category'| 'type'> // pega todos os que estou selecionando

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransactions: (transactions: TransactionInput) => void;
}

export const  TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);


export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransactions(transactions: TransactionInput){
    api.post('/transactions',transactions)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )

}