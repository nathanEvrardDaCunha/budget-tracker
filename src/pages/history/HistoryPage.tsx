import { useEffect, useState } from 'react';
import { TransactionCard } from '../../components/transaction-card/TransactionCard';
import { TransactionForm } from '../../components/transaction-form/TransactionForm';

interface Transaction {
    id: number;
    name: string;
    cost: number;
    type: string;
    category: string;
}

export function HistoryPage() {
    // TODO: Display Card automatically based on user data.
    // => Map the data to JSX elements

    const [transaction, setTransaction] = useState<Transaction | null>(null);

    useEffect(() => {
        // For testing purposes.
        if (!transaction) {
            localStorage.removeItem('transactions');
        }

        if (transaction) {
            const stringifiedTransaction = JSON.stringify(transaction);

            const response = localStorage.getItem('transactions');

            const existingTransactions = JSON.parse(response || '[]');

            const updatedTransaction = [...existingTransactions, stringifiedTransaction];

            localStorage.setItem('transactions', JSON.stringify(updatedTransaction));
        }
    }, [transaction]);

    function handleFormAction(formData: FormData) {
        // IDEA: Add some form validation even if it's client side.

        const name = formData.get('transaction-name');
        if (name === null) {
            throw new Error('Form transaction name should not be null !');
        }

        const cost = formData.get('transaction-cost');
        if (cost === null) {
            throw new Error('Form transaction cost should not be null !');
        }

        const type = formData.get('transaction-type');
        if (type === null) {
            throw new Error('Form transaction type should not be null !');
        }

        const category = formData.get('transaction-category');
        if (category === null) {
            throw new Error('Form transaction category should not be null !');
        }

        const requiredName = name as string;
        const requiredCost = parseInt(cost as string);
        const requiredType = type as string;
        const requiredCategory = category as string;

        // IDEA: Implement interface for Transaction
        const transaction: Transaction = {
            id: Date.now(),
            name: requiredName,
            cost: requiredCost,
            type: requiredType,
            category: requiredCategory,
            // TODO: Allow user to choose "when" the transaction has been done.
            // E.g: "date: date"
        };

        // const stringTransaction = JSON.stringify(transaction);

        // setTransaction(stringTransaction);

        setTransaction(transaction);
    }

    // function displayTransaction() {
    //     const response = localStorage.getItem('transactions');

    //     if (response === null) {
    //         return <p>No transactions registered for now.</p>;
    //     }

    //     const existingTransactions = JSON.parse(response);

    //     const transactions = existingTransactions.forEach((transaction) => {
    //         return <strong key={transaction.id}>one transaction</strong>;
    //     });
    // }

    return (
        <>
            <TransactionForm handleFormAction={handleFormAction} />
            <TransactionCard />
        </>
    );
}
