
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../sevices/api";

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (transaction: TransactionInput) => Promise<void>
}


export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransactions(transactionsInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionsInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ])
    }


    return (
        <TransactionContext.Provider value={{ transactions, createTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context
}
