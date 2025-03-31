export interface Transaction {
    id: number;
    title: string;
    cost: number;
    type: TransactionType;
    category: TransactionCategory;
    date: string;
}

export enum TransactionType {
    EXPENSE = 'expense',
    INCOME = 'income',
    INVESTMENT = 'investment',
}

export enum TransactionExpenseCategory {
    GROCERY = 'grocery',
    ENTERTAINMENT = 'entertainment',
    HOUSING = 'housing',
    TRANSPORT = 'transport',
    OTHER = 'other',
}

export enum TransactionIncomeCategory {
    PRIMARY_JOB = 'primary Job',
    SIDE_HUSTLE = 'side Hustle',
    REFUND = 'refund',
    WARRANTY = 'warranty',
    OTHER = 'other',
}

export enum TransactionInvestmentCategory {
    CRYPTO_CURRENCY = 'crypto-currency',
    BOND = 'bond',
    RENT = 'rent',
    STOCK = 'stock',
    OTHER = 'other',
}

export type TransactionCategory =
    | TransactionExpenseCategory
    | TransactionIncomeCategory
    | TransactionInvestmentCategory;
