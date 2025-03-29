import { useState } from 'react';

export function TransactionForm() {
    const [type, setType] = useState('expense');

    // IDEA: use React Context instead because the data storage will probably be global to the whole app.
    // => Allow for a single source of truth.
    // => This function will probably either be replaced by one of it's parent function or write in a global context.
    function handleFormAction(formData: FormData) {
        console.log(formData.get('transaction-name'));
        console.log(formData.get('transaction-cost'));
        console.log(formData.get('transaction-type'));
        console.log(formData.get('transaction-category'));

        // IDEA: Add some form validation even if it's client side.
    }

    function handleTypeChange(event: { target: { value: any } }) {
        // console.log(event.target.value);
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
        <form action={handleFormAction}>
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

                {/* TODO: Change category based on type selected before */}
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
