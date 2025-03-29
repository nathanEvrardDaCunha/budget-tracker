import { TransactionCard } from '../../components/transaction-card/TransactionCard';
import { TransactionForm } from '../../components/transaction-form/TransactionForm';

export function HistoryPage() {
    // TODO: Display Card automatically based on user data.
    // => Map the data to JSX elements

    return (
        <>
            <TransactionForm />
            <TransactionCard />
        </>
    );
}
