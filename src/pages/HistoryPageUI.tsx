import { CreateTransactionLogic } from '../features/CreateTransactionLogic';
import { Card } from '../components/card/Card';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { Transaction } from '../data/transaction';

interface HistoryPageUIProps {
    handleAction: any;
    transactions: Array<Transaction>;
    handleClickDelete: any;
}

function HistoryPageUI(props: HistoryPageUIProps) {
    return (
        <>
            {/* TODO: 1. Push on Git */}
            {/* TODO: 2. Reintroduce Card UI temporarily */}
            {/* TODO: 3. Add modification feature on transaction */}

            <Header />

            <main>
                <CreateTransactionLogic handleAction={props.handleAction} />

                {props.transactions.length > 0 ? (
                    props.transactions.map((transaction) => {
                        return (
                            <Card
                                key={transaction.id}
                                transaction={transaction}
                                onClickDelete={props.handleClickDelete}
                            />
                        );
                    })
                ) : (
                    // IDEA: Display a warning or error message
                    <p>There are no transaction for now.</p>
                )}
            </main>

            <Footer />
        </>
    );
}

export { HistoryPageUI };
