import { useEffect, useState } from 'react';
import {
    Transaction,
    TransactionCategory,
    TransactionExpenseCategory,
    TransactionIncomeCategory,
    TransactionInvestmentCategory,
    TransactionType,
} from '../data/transaction';
import { TransactionForm } from '../features/transaction-form/TransactionForm';
import { TransactionCard } from '../components/transaction-card/TransactionCard';

export function ModernHistoryPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Load transactions from localStorage on component mount only
    useEffect(() => {
        const storedTransactions = localStorage.getItem('transactions');
        if (storedTransactions) {
            try {
                const parsedTransactions = JSON.parse(storedTransactions);
                if (Array.isArray(parsedTransactions)) {
                    setTransactions(parsedTransactions);
                }
            } catch (error) {
                console.error('Error loading transactions:', error);
                localStorage.removeItem('transactions');
            }
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    function handleFormAction(formData: FormData) {
        // IDEA: Replace the hardcoded "get" value by a data constant
        // => Also include it in TransactionForm for each input and label
        const transactionName = formData.get('transaction-name') as string | null;
        if (transactionName === null) {
            throw new Error('Html transaction name form field should not be null !');
        }

        const transactionCost = formData.get('transaction-cost') as string | null;
        if (transactionCost === null) {
            throw new Error('Html transaction cost form field should not be null !');
        }

        const transactionType = formData.get('transaction-type') as string | null;
        if (transactionType === null) {
            throw new Error('Html transaction type form field should not be null !');
        }

        const transactionCategory = formData.get('transaction-category') as string | null;
        if (transactionCategory === null) {
            throw new Error('Html transaction category form field should not be null !');
        }

        if (!Object.values(TransactionType).includes(transactionType as TransactionType)) {
            throw new Error('Form type is not a valid value !');
        }

        const categories = [
            ...Object.values(TransactionExpenseCategory),
            ...Object.values(TransactionIncomeCategory),
            ...Object.values(TransactionInvestmentCategory),
        ];

        if (!categories.includes(transactionCategory as TransactionCategory)) {
            throw new Error('Form category is not a valid value !');
        }

        const timestamp = Date.now();
        const date = new Date(timestamp);
        const isoString = date.toISOString();

        const newTransaction: Transaction = {
            id: Date.now(),
            title: transactionName,
            cost: parseFloat(transactionCost),
            type: transactionType as TransactionType,
            category: transactionCategory as TransactionCategory,
            date: isoString,
        };

        // Update state with new transaction
        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);

        // Save to localStorage
        try {
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    }

    return (
        <>
            <TransactionForm handleFormAction={handleFormAction} />

            {transactions.length > 0 ? (
                transactions.map((transaction) => {
                    return (
                        <TransactionCard
                            key={transaction.id}
                            id={transaction.id}
                            title={transaction.title}
                            cost={transaction.cost}
                            type={transaction.type}
                            category={transaction.category}
                            // TODO: Allow the user to choose the date in the form
                            // TODO: Make the date not display as ISO format but YYYY-MM-DD or DD-MM-YYYY
                            date={transaction.date}
                        />
                    );
                })
            ) : (
                <p>There are no transaction for now.</p>
            )}
        </>
    );
}
