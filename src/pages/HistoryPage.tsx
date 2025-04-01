import { useEffect, useState } from 'react';
import { Transaction, TransactionCategory, TransactionType } from '../data/transaction';
import { HistoryForm } from '../features/HistoryForm';
import { Card } from '../components/card/Card';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';

export function ModernHistoryPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

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
    }, []);

    function handleAction(formData: FormData) {
        const transactionName = formData.get('transaction-name') as string | null;
        if (transactionName === null) {
            throw new Error('Html transaction name form field should not be null !');
        }

        const transactionAmount = formData.get('transaction-amount') as string | null;
        if (transactionAmount === null) {
            throw new Error('Html transaction amount form field should not be null !');
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

        if (!Object.values(TransactionCategory).includes(transactionCategory as TransactionCategory)) {
            throw new Error('Form category is not a valid value !');
        }

        const timestamp = Date.now();
        const date = new Date(timestamp);
        const isoString = date.toISOString();

        const newTransaction: Transaction = {
            id: Date.now(),
            title: transactionName,
            amount: parseFloat(transactionAmount),
            type: transactionType as TransactionType,
            category: transactionCategory as TransactionCategory,
            date: isoString,
        };

        const updatedTransactions = [...transactions, newTransaction];
        setTransactions(updatedTransactions);

        try {
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    }

    function handleClickDelete(id: number) {
        const filteredTransaction = transactions.filter((transaction) => {
            if (transaction.id !== id) {
                return transaction;
            }
        });

        setTransactions(filteredTransaction);

        try {
            localStorage.setItem('transactions', JSON.stringify(filteredTransaction));
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    }

    return (
        <>
            <Header />

            <main>
                <HistoryForm handleAction={handleAction} />

                {transactions.length > 0 ? (
                    transactions.map((transaction) => {
                        return (
                            <Card key={transaction.id} transaction={transaction} onClickDelete={handleClickDelete} />
                        );
                    })
                ) : (
                    <p>There are no transaction for now.</p>
                )}
            </main>

            <Footer />
        </>
    );
}
