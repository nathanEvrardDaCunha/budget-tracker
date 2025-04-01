import { useState } from 'react';
import { Form } from '../components/form/Form';
import { FormFieldset } from '../components/form/FormFieldset';
import { FormLabel } from '../components/form/FormLabel';
import { FormLegend } from '../components/form/FormLegend';
import { FormNumberInput } from '../components/form/FormNumberInput';
import { FormOption } from '../components/form/FormOption';
import { FormSelect } from '../components/form/FormSelect';
import { FormTextInput } from '../components/form/FormTextInput';
import { TransactionCategory, TransactionType } from '../data/transaction';
import { FormButton } from '../components/form/FormButton';

interface HistoryFormProps {
    handleAction: any;
}

export function HistoryForm(props: HistoryFormProps) {
    const [formData, setFormData] = useState({
        name: 'Supermarket Costco',
        amount: 6700.99,
        type: TransactionType.EXPENSE,
        category: TransactionCategory.EXPENSE_GROCERY,
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name.replace('transaction-', '')]: e.target.value,
        });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleReset = () => {
        setFormData({
            name: 'Supermarket Costco',
            amount: 6700.99,
            type: TransactionType.EXPENSE,
            category: TransactionCategory.EXPENSE_GROCERY,
        });
    };

    function submitForm(formData: FormData) {
        props.handleAction(formData);

        handleReset();
    }

    return (
        <Form handleAction={submitForm}>
            <FormFieldset>
                <FormLegend legend="Transaction creation form" />

                <FormLabel for="transaction-name" message="Input the name of your transaction:" />
                <FormTextInput
                    name="transaction-name"
                    id="transaction-name"
                    placeholder="Cookies at Costco"
                    required={true}
                    value={formData.name}
                    onChange={handleTextChange}
                />

                <FormLabel for="transaction-amount" message="Input the amount of your transaction:" />
                {/* Things like step; min and max don't work anymore with Controlled Component */}
                <FormNumberInput
                    name="transaction-amount"
                    id="transaction-amount"
                    placeholder="32.7"
                    required={true}
                    min={0}
                    max={10000000}
                    step={0.01}
                    value={formData.amount}
                    onChange={handleNumberChange}
                />

                <FormLabel for="transaction-type" message="Select the type of your transaction:" />
                <FormSelect
                    name="transaction-type"
                    id="transaction-type"
                    required={true}
                    onChange={handleTypeChange}
                    value={formData.type}
                >
                    <FormOption value={TransactionType.EXPENSE} name="Expense" />
                    <FormOption value={TransactionType.INCOME} name="Income" />
                    <FormOption value={TransactionType.INVESTMENT} name="Investment" />
                </FormSelect>

                <FormLabel for="transaction-category" message="Select the category of your transaction:" />
                <FormSelect
                    name="transaction-category"
                    id="transaction-category"
                    required={true}
                    onChange={handleCategoryChange}
                    value={formData.category}
                >
                    {formData.type === TransactionType.EXPENSE ? (
                        <>
                            <FormOption value={TransactionCategory.EXPENSE_GROCERY} name="Grocery" />
                            <FormOption value={TransactionCategory.EXPENSE_ENTERTAINMENT} name="Entertainment" />
                            <FormOption value={TransactionCategory.EXPENSE_HOUSE} name="House" />
                            <FormOption value={TransactionCategory.EXPENSE_TRANSPORT} name="Transport" />
                            <FormOption value={TransactionCategory.OTHER} name="Other" />
                        </>
                    ) : null}

                    {formData.type === TransactionType.INCOME ? (
                        <>
                            <FormOption value={TransactionCategory.INCOME_PRIMARY_JOB} name="Primary Job" />
                            <FormOption value={TransactionCategory.INCOME_SIDE_HUSTLE} name="Side Hustle" />
                            <FormOption value={TransactionCategory.INCOME_REFUND} name="Refund" />
                            <FormOption value={TransactionCategory.INCOME_WARRANT} name="Warrant" />
                            <FormOption value={TransactionCategory.OTHER} name="Other" />
                        </>
                    ) : null}

                    {formData.type === TransactionType.INVESTMENT ? (
                        <>
                            <FormOption value={TransactionCategory.INVESTMENT_STOCK} name="Stock" />
                            <FormOption value={TransactionCategory.INVESTMENT_BOND} name="Bond" />
                            <FormOption value={TransactionCategory.INVESTMENT_RENT} name="Rent" />
                            <FormOption value={TransactionCategory.INVESTMENT_CRYPTO_CURRENCY} name="Crypto Currency" />
                            <FormOption value={TransactionCategory.OTHER} name="Other" />
                        </>
                    ) : null}
                </FormSelect>

                <FormButton type="reset" message="Reset Form" onClick={handleReset} />
                <FormButton type="submit" message="Submit Form" />
            </FormFieldset>
        </Form>
    );
}
