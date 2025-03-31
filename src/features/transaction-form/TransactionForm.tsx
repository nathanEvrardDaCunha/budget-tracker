import { useState } from 'react';
import { Label } from '../../components/form/Label';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { Select } from '../../components/form/Select';
import {
    TransactionExpenseCategory,
    TransactionIncomeCategory,
    TransactionInvestmentCategory,
    TransactionType,
} from '../../data/transaction';

// IDEA: Separate the reusable components from the feature component into distinct folder.
// => "features" folder and "components" folder.

export function TransactionForm(props: any) {
    const [type, setType] = useState(TransactionType.EXPENSE);

    function handleTypeChange(event: { target: { value: any } }) {
        setType(event.target.value);
    }

    const convertTypeToSelect = [
        { key: 0, value: TransactionType.EXPENSE, name: 'Expense' },
        { key: 1, value: TransactionType.INCOME, name: 'Income' },
        { key: 2, value: TransactionType.INVESTMENT, name: 'Investment' },
    ];

    function convertCategoryToSelect() {
        // IDEA: Allow user to create custom category.

        // TODO: Make it dynamic instead of hardcoded
        if (type === TransactionType.EXPENSE) {
            return [
                { key: 0, value: TransactionExpenseCategory.GROCERY, name: 'Grocery' },
                { key: 1, value: TransactionExpenseCategory.ENTERTAINMENT, name: 'Entertainment' },
                { key: 2, value: TransactionExpenseCategory.HOUSING, name: 'Housing' },
                { key: 3, value: TransactionExpenseCategory.TRANSPORT, name: 'Transport' },
                { key: 4, value: TransactionExpenseCategory.OTHER, name: 'Other' },
            ];
        } else if (type === TransactionType.INCOME) {
            return [
                { key: 0, value: TransactionIncomeCategory.PRIMARY_JOB, name: 'Primary Job' },
                { key: 1, value: TransactionIncomeCategory.SIDE_HUSTLE, name: 'Side Hustle' },
                { key: 2, value: TransactionIncomeCategory.REFUND, name: 'Refund' },
                { key: 3, value: TransactionIncomeCategory.WARRANTY, name: 'Warranty' },
                { key: 4, value: TransactionIncomeCategory.OTHER, name: 'Other' },
            ];
        }
        return [
            { key: 0, value: TransactionInvestmentCategory.CRYPTO_CURRENCY, name: 'Crypto Currency' },
            { key: 1, value: TransactionInvestmentCategory.STOCK, name: 'Stock' },
            { key: 2, value: TransactionInvestmentCategory.BOND, name: 'Bond' },
            { key: 3, value: TransactionInvestmentCategory.RENT, name: 'Rent' },
            { key: 4, value: TransactionInvestmentCategory.OTHER, name: 'Other' },
        ];
    }

    return (
        // NOTE: Client side validation is not secure.
        // The reason we're doing this is because this software doesn't need a backend for now.
        <form action={props.handleFormAction}>
            <fieldset>
                <legend>Create new Transaction</legend>

                <Label for="transaction-name" message="Write Transaction Name" />
                <Input
                    type="text"
                    name="transaction-name"
                    id="transaction-name"
                    placeholder="Costco Grocery"
                    required={true}
                />

                <Label for="transaction-cost" message="Write Transaction Cost" />
                <Input
                    type="number"
                    name="transaction-cost"
                    id="transaction-cost"
                    placeholder="4.27"
                    required={true}
                    min={0}
                    max={100000000000}
                    step={0.01}
                />

                <Label for="transaction-type" message="Select Transaction Type" />
                <Select
                    name="transaction-type"
                    id="transaction-type"
                    required={true}
                    onChange={handleTypeChange}
                    options={convertTypeToSelect}
                />

                <Label for="transaction-category" message="Select Transaction Category" />
                <Select
                    name="transaction-category"
                    id="transaction-category"
                    required={true}
                    onChange={undefined}
                    // HOTFIX: Doesn't reset after a react reload
                    options={convertCategoryToSelect()}
                />

                <Button type="submit" message="Submit" />
                <Button type="reset" message="Reset" />
            </fieldset>
        </form>
    );
}
