
export interface AdminAnalyticsResponse {
  message: string;
  data?: {
    users: Expense;
    transactions: Expense;
    income: Expense;
    expense: Expense;
    lastFiveTransactions: LastFiveTransaction[];
    monthlyOverview: MonthlyOverview[];
  };
  error?: {
    statusCode: number;
    errorCode: string;
  };
}

export interface Expense {
    total:            number;
    percentageChange: string;
    trend:            string;
}

export interface LastFiveTransaction {
    _id:               string;
    userId:            UserID | null;
    title:             string;
    type:              string;
    amount:            number;
    description:       string;
    category:          string;
    date:              Date;
    isRecurring:       boolean;
    recurringInterval: null;
    nextRecurringDate: null;
    lastProcessed:     null;
    status:            string;
    paymentMethod:     string;
    createdAt:         Date;
    updatedAt:         Date;
    __v:               number;
}

export interface UserID {
    _id:            string;
    name:           string;
    email:          string;
    profilePicture: null;
    role:           string;
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
}

export interface MonthlyOverview {
    month:        string;
    users:        number;
    transactions: number;
    income:       number;
    expense:      number;
}


