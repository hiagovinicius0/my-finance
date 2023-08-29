import { CreateTransaction, Transaction } from "../constants";
import { createTransaction } from "../services/transactions";
import Form from "../components/Form";
import GlobalStyle from "../styles/global";
import Header from "../components/Form/Header";
import Resume from "../components/Form/Resume";

export interface DashboardClientProps {
	transactionsList: Transaction[];
	income: string;
	expense: string;
	total: string;
}

export const handleAdd = async (transaction: CreateTransaction) => {
	await createTransaction(transaction);
};

export const DashboardClient = ({
	transactionsList,
	income,
	expense,
	total,
}: DashboardClientProps) => {
	return (
		<>
			<Header />
			<Resume income={income} expense={expense} total={total} />
			<Form transactionsList={transactionsList} />
			<GlobalStyle />
		</>
	);
};
