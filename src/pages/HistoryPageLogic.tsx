import { useEffect, useState } from 'react';
import { Transaction, TransactionCategory, TransactionType } from '../data/transaction';
import { HistoryPageUI } from './HistoryPageUI';

function throwErrorIfNull(formData: FormData, dataName: string) {
    const value = formData.get(dataName);
    if (!value) {
        throw new Error(`Html ${dataName} form field should not be null !`);
    }
    return value as string;
}

function throwErrorIfNotInclude<T>(value: string, dataName: string, enumObj: Record<string, string>): T {
    if (!Object.values(enumObj).includes(value)) {
        throw new Error(`Form ${dataName} is not a valid value!`);
    }
    return value as T;
}

function HistoryPageLogic() {
    const [transactions, setTransactions] = useState<Array<Transaction>>([]);

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
        try {
            const name = throwErrorIfNull(formData, 'transaction-name');
            const amount = throwErrorIfNull(formData, 'transaction-amount');
            const type = throwErrorIfNull(formData, 'transaction-type');
            const category = throwErrorIfNull(formData, 'transaction-category');

            const newType = throwErrorIfNotInclude<TransactionType>(type, 'type', TransactionType);
            const newCategory = throwErrorIfNotInclude<TransactionCategory>(category, 'category', TransactionCategory);

            const timestamp = Date.now();
            const date = new Date(timestamp);
            const isoString = date.toISOString();

            const newTransaction: Transaction = {
                id: Date.now(),
                name: name,
                amount: parseFloat(amount),
                type: newType as TransactionType,
                category: newCategory as TransactionCategory,
                date: isoString,
            };

            const updatedTransactions = [...transactions, newTransaction];
            setTransactions(updatedTransactions);

            localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        } catch (error) {
            console.error(error);
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
        <HistoryPageUI handleAction={handleAction} transactions={transactions} handleClickDelete={handleClickDelete} />
    );
}

export { HistoryPageLogic };
