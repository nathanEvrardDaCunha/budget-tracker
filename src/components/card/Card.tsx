import { useState } from 'react';
import { TransactionCategory, TransactionType } from '../../data/transaction';
import { CardSection } from './CardSection';
import { CardTitle } from './CardTitle';
import { CardButton } from './CardButton';
import { CardContent } from './CardContent';

interface Card {
    transaction: {
        id: number;
        title: string;
        amount: number;
        type: TransactionType;
        category: TransactionCategory;
        date: string;
    };
    onClickDelete: any;
}

// TODO: Allow the user to choose the date in the form
// TODO: Make the date not display as ISO format but YYYY-MM-DD or DD-MM-YYYY
export function Card(props: Card) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function handleClick() {
        setIsDisplayed((previous) => !previous);
    }

    return (
        <CardSection>
            <CardSection>
                <CardTitle content={props.transaction.title} />
                <CardButton type="display" onClick={handleClick} />
            </CardSection>

            {isDisplayed ? (
                <>
                    <CardSection>
                        <CardContent
                            label="Amount"
                            value={props.transaction.amount}
                        />
                        <CardContent
                            label="Type"
                            value={props.transaction.type}
                        />
                        <CardContent
                            label="Category"
                            value={props.transaction.category}
                        />
                        <CardContent
                            label="Date"
                            value={props.transaction.date}
                        />
                    </CardSection>

                    <CardSection>
                        <CardButton
                            type="delete"
                            onClick={() =>
                                props.onClickDelete(props.transaction.id)
                            }
                        />
                    </CardSection>
                </>
            ) : null}
        </CardSection>
    );
}
