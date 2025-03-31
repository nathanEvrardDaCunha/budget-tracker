import { useState } from 'react';
import './TransactionCard.css';
import { Transaction } from '../../data/transaction';

// Make it a brainless UI component ?
// => if yes, then maybe also make a proper interface like <Button> and the others...
export function TransactionCard(props: Transaction) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function handleClick() {
        setIsDisplayed((previous) => !previous);
    }

    // TODO: Replace the button content of "-" and "+" by proper icons.

    // TODO: Allow the user to edit the component data.
    // => Single Source Of Truth

    // TODO: Allow the user to delete the component.
    // => Single Source Of Truth

    return (
        // IDEA: Could change the card background color based on the type of transaction.
        // E.g: Red for Expenses, Green for Income...
        <section className="transaction-variables transaction-card">
            <section className="transaction-card__header">
                <h4 className="transaction-card__name">{props.title}</h4>
                <button className="transaction-card__button" onClick={handleClick}>
                    {isDisplayed ? '-' : '+'}
                </button>
            </section>

            {isDisplayed ? (
                <section className="transaction-card__body">
                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Cost:</span> {props.cost}
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Date:</span> {props.date}
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Type:</span> {props.type}
                    </p>

                    <p className="transaction-card__data">
                        <span className="transaction-card__label">Category:</span> {props.category}
                    </p>
                </section>
            ) : null}
        </section>
    );
}
