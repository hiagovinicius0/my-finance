import { CreateTransaction, Transaction } from "../constants";

export const getTransactions = async () => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_URL + `/transactions?_expand=option`
	);
	return response.json();
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_URL + `/transactions?_expand=option`,
		{
			cache: "force-cache",
		}
	);
	return response.json();
};

export const createTransaction = async (props: CreateTransaction) => {
	const response = await fetch(process.env.NEXT_PUBLIC_URL + `/transactions`, {
		method: "POST",
		body: JSON.stringify(props),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};

export const deleteTransaction = async (id: number) => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_URL + `/transactions/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return response.json();
};
