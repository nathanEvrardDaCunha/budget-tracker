import { useState } from 'react';
import './TransactionCard.css';

export function TransactionCard() {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function handleClick() {
        console.log('test');
        setIsDisplayed((previous) => !previous);
    }

    // TODO: Replace the button content of "-" and "+" by proper icons.

    // TODO: Make the component display dynamic value.
    // => Single Source Of Truth

    // TODO: Allow the user to edit the component data.
    // => Single Source Of Truth

    // TODO: Allow the user to delete the component.
    // => Single Source Of Truth

    return (
        // IDEA: Could change the card background color based on the type of transaction.
        // E.g: Red for Expenses, Green for Income...
        <section className="transaction-variables transaction-card">
            <section className="transaction-card__header">
                <h4 className="transaction-card__name">Transaction Name</h4>
                <button className="transaction-card__button" onClick={handleClick}>
                    {isDisplayed ? '-' : '+'}
                </button>
            </section>
            {isDisplayed ? (
                <section className="transaction-card__body">
                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Cost:</span> 30$
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Date:</span> 2027/01/01
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Type:</span> Expenses
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Category:</span> Grocery
                    </p>
                </section>
            ) : null}
        </section>
    );
}
