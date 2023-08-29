import { getOptions } from "../services/options";
import { getAllTransactions } from "../services/transactions";
import { DashboardClient } from "./DashboardClient";

const DashboardStatic = async () => {
	const transactions = await getAllTransactions();

	const amountExpense = transactions
		.filter((item) => item.expense)
		.map((transaction) => Number(transaction.amount));

	const amountIncome = transactions
		.filter((item) => !item.expense)
		.map((transaction) => Number(transaction.amount));

	const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
	const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

	const total = Math.abs(parseFloat(income) - parseFloat(expense)).toFixed(2);

	return (
		<DashboardClient
			transactionsList={transactions}
			income={income}
			expense={expense}
			total={total}
		/>
	);
};
export default DashboardStatic;
