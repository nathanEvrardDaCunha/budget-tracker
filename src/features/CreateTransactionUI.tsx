import { Fieldset } from '../components/form/Fieldset';
import { Legend } from '../components/form/Legend';
import { Label } from '../components/form/Label';
import { Input } from '../components/form/Input';
import { Select } from '../components/form/Select';
import { Option } from '../components/form/Option';
import { Button } from '../components/form/Button';
import { Form } from '../components/form/Form';
import { TransactionCategory, TransactionType } from '../data/transaction';

interface FormData {
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
}

interface CreateTransactionUIProps {
    action: any;
    formData: FormData;
    onNameChange: any;
    onAmountChange: any;
    onTypeChange: any;
    onCategoryChange: any;
    onResetClick: any;
}

function CreateTransactionUI(props: CreateTransactionUIProps) {
    return (
        <Form action={props.action}>
            <Fieldset>
                <Legend message="Transaction creation form" />

                <Label htmlFor="transaction-name" message="Input the name of your transaction:" />
                <Input
                    type="text"
                    name="transaction-name"
                    id="transaction-name"
                    placeholder="Cookies at Costco"
                    required={true}
                    value={props.formData.name}
                    onChange={props.onNameChange}
                />

                <Label htmlFor="transaction-amount" message="Input the amount of your transaction:" />
                <Input
                    type="number"
                    name="transaction-amount"
                    id="transaction-amount"
                    placeholder="32.7"
                    required={true}
                    min={0}
                    max={10000000}
                    step={0.01}
                    value={props.formData.amount}
                    onChange={props.onAmountChange}
                />

                <Label htmlFor="transaction-type" message="Select the type of your transaction:" />
                <Select
                    name="transaction-type"
                    id="transaction-type"
                    required={true}
                    onChange={props.onTypeChange}
                    value={props.formData.type}
                >
                    <Option value={TransactionType.EXPENSE} message="Expense" />
                    <Option value={TransactionType.INCOME} message="Income" />
                    <Option value={TransactionType.INVESTMENT} message="Investment" />
                </Select>

                <Label htmlFor="transaction-category" message="Select the category of your transaction:" />
                <Select
                    name="transaction-category"
                    id="transaction-category"
                    required={true}
                    onChange={props.onCategoryChange}
                    value={props.formData.category}
                >
                    {props.formData.type === TransactionType.EXPENSE ? (
                        <>
                            <Option value={TransactionCategory.EXPENSE_GROCERY} message="Grocery" />
                            <Option value={TransactionCategory.EXPENSE_ENTERTAINMENT} message="Entertainment" />
                            <Option value={TransactionCategory.EXPENSE_HOUSE} message="House" />
                            <Option value={TransactionCategory.EXPENSE_TRANSPORT} message="Transport" />
                            <Option value={TransactionCategory.OTHER} message="Other" />
                        </>
                    ) : null}

                    {props.formData.type === TransactionType.INCOME ? (
                        <>
                            <Option value={TransactionCategory.INCOME_PRIMARY_JOB} message="Primary Job" />
                            <Option value={TransactionCategory.INCOME_SIDE_HUSTLE} message="Side Hustle" />
                            <Option value={TransactionCategory.INCOME_REFUND} message="Refund" />
                            <Option value={TransactionCategory.INCOME_WARRANT} message="Warrant" />
                            <Option value={TransactionCategory.OTHER} message="Other" />
                        </>
                    ) : null}

                    {props.formData.type === TransactionType.INVESTMENT ? (
                        <>
                            <Option value={TransactionCategory.INVESTMENT_STOCK} message="Stock" />
                            <Option value={TransactionCategory.INVESTMENT_BOND} message="Bond" />
                            <Option value={TransactionCategory.INVESTMENT_RENT} message="Rent" />
                            <Option value={TransactionCategory.INVESTMENT_CRYPTO_CURRENCY} message="Crypto Currency" />
                            <Option value={TransactionCategory.OTHER} message="Other" />
                        </>
                    ) : null}
                </Select>

                <Button type="reset" message="Reset Form" onClick={props.onResetClick} />
                <Button type="submit" message="Submit Form" />
            </Fieldset>
        </Form>
    );
}

export { CreateTransactionUI };
