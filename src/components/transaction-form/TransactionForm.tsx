import { useState } from 'react';

// TODO: Separate this file into smaller component to make it smaller.
// IDEA: Separate the reusable components from the feature component into distinct folder.
// => "features" folder and "components" folder.

export function TransactionForm(props: any) {
    const [type, setType] = useState('expense');

    function handleTypeChange(event: { target: { value: any } }) {
        setType(event.target.value);
    }

    function displayRelevantCategory() {
        // IDEA: Allow user to create custom category.
        if (type === 'expense') {
            return (
                // IDEA: Map category by type instead of hard-coding them.
                <>
                    <option value="grocery">Grocery</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="housing">Housing</option>
                    <option value="transport">Transport</option>
                    <option value="others">Others</option>
                </>
            );
        } else if (type === 'income') {
            return (
                <>
                    <option value="primary-job">Primary job</option>
                    <option value="side-hustle">Side hustle</option>
                    <option value="refund">Refund</option>
                    <option value="others">Others</option>
                </>
            );
        }
        return (
            <>
                <option value="interest">Interest</option>
                <option value="stock">Stock</option>
                <option value="bond">Bond</option>
                <option value="rent">Rent</option>
                <option value="others">Others</option>
            </>
        );
    }

    return (
        // NOTE: Client side validation is not secure.
        // The reason we're doing this is because this software doesn't need a backend for now.
        <form action={props.handleFormAction}>
            <fieldset>
                <legend>Create new Transaction</legend>

                <label htmlFor="transaction-name">Write transaction name</label>
                <input
                    type="text"
                    name="transaction-name"
                    id="transaction-name"
                    placeholder="Supermarket"
                    required
                ></input>

                <label htmlFor="transaction-cost">Write transaction cost</label>
                <input
                    type="number"
                    name="transaction-cost"
                    step="0.001"
                    min="0"
                    id="transaction-cost"
                    placeholder="5"
                    required
                ></input>

                <label htmlFor="transaction-type">Select transaction type</label>
                <select onChange={handleTypeChange} name="transaction-type" id="transaction-type" required>
                    <option value="expense">Expenses</option>
                    <option value="income">Incomes</option>
                    <option value="investment">Investment</option>
                </select>

                <label htmlFor="transaction-category">Select transaction category</label>
                <select name="transaction-category" id="transaction-category" required>
                    {displayRelevantCategory()}
                </select>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </fieldset>
        </form>
    );
}
