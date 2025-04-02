import { useState } from 'react';
import { TransactionCategory, TransactionType } from '../data/transaction';
import { CreateTransactionUI } from './CreateTransactionUI';

interface CreateTransactionLogicProps {
    handleAction: any;
}

const defaultData = {
    name: 'Supermarket Costco',
    amount: 6700.99,
    type: TransactionType.EXPENSE,
    category: TransactionCategory.EXPENSE_GROCERY,
};

function CreateTransactionLogic(props: CreateTransactionLogicProps) {
    const [formData, setFormData] = useState(defaultData);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name.replace('transaction-', '')]: e.target.value,
        });
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name.replace('transaction-', '')]: parseFloat(e.target.value),
        });
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value as TransactionType;

        let newCategory = TransactionCategory.EXPENSE_GROCERY;
        if (newType === TransactionType.INCOME) {
            newCategory = TransactionCategory.INCOME_PRIMARY_JOB;
        }
        if (newType === TransactionType.INVESTMENT) {
            newCategory = TransactionCategory.INVESTMENT_STOCK;
        }

        setFormData({
            ...formData,
            type: newType,
            category: newCategory,
        });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            category: e.target.value as TransactionCategory,
        });
    };

    function handleReset() {
        setFormData(defaultData);
    }

    function submitForm(formData: FormData) {
        props.handleAction(formData);
        handleReset();
    }

    return (
        <CreateTransactionUI
            action={submitForm}
            formData={formData}
            onNameChange={handleNameChange}
            onAmountChange={handleAmountChange}
            onTypeChange={handleTypeChange}
            onCategoryChange={handleCategoryChange}
            onResetClick={handleReset}
        />
    );
}

export { CreateTransactionLogic };
