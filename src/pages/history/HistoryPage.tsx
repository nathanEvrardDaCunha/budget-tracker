import { useEffect, useState } from 'react';
import { TransactionCard } from '../../components/transaction-card/TransactionCard';
import { TransactionForm } from '../../components/transaction-form/TransactionForm';

export function HistoryPage() {
    // TODO: Display Card automatically based on user data.
    // => Map the data to JSX elements

    const [transaction, setTransaction] = useState('');

    useEffect(() => {
        if (transaction !== '') {
            const response = localStorage.getItem('transactions');

            const existingTransactions = JSON.parse(response || '[]');

            const updatedTransaction = [...existingTransactions, transaction];

            localStorage.setItem('transactions', JSON.stringify(updatedTransaction));
        }
    }, [transaction]);

    function handleFormAction(formData: FormData) {
        // IDEA: Add some form validation even if it's client side.

        const name = formData.get('transaction-name');
        const cost = formData.get('transaction-cost');
        const type = formData.get('transaction-type');
        const category = formData.get('transaction-category');

        // IDEA: Implement interface for Transaction
        const transaction = {
            id: Date.now(),
            name: name,
            cost: cost,
            type: type,
            category: category,
            // TODO: Allow user to choose "when" the transaction has been done.
            // E.g: "date: date"
        };

        const stringTransaction = JSON.stringify(transaction);

        setTransaction(stringTransaction);
    }

    return (
        <>
            <TransactionForm handleFormAction={handleFormAction} />
            <TransactionCard />
        </>
    );
}
