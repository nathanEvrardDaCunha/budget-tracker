export interface Transaction {
    id: number;
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    date: string;
}

export enum TransactionType {
    EXPENSE = 'expense',
    INCOME = 'income',
    INVESTMENT = 'investment',
}

export enum TransactionCategory {
    EXPENSE_GROCERY = 'grocery',
    EXPENSE_ENTERTAINMENT = 'entertainment',
    EXPENSE_HOUSE = 'housing',
    EXPENSE_TRANSPORT = 'transport',
    INCOME_PRIMARY_JOB = 'primary Job',
    INCOME_SIDE_HUSTLE = 'side Hustle',
    INCOME_REFUND = 'refund',
    INCOME_WARRANT = 'warrant',
    INVESTMENT_CRYPTO_CURRENCY = 'crypto-currency',
    INVESTMENT_BOND = 'bond',
    INVESTMENT_RENT = 'rent',
    INVESTMENT_STOCK = 'stock',
    OTHER = 'other',
}
