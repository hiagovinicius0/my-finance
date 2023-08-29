import { CreateOptionRequest } from "../constants";

export interface Option {
	id: number;
	description: string;
	expense: boolean;
}

export const getOptions = async (isExpense: boolean): Promise<Option[]> => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_URL + `/options?expense=${isExpense}`,
		{
			cache: "force-cache",
		}
	);
	return response.json();
};

export const getAllOptions = async (): Promise<Option[]> => {
	const response = await fetch(process.env.NEXT_PUBLIC_URL + `/options`);
	console.log(response);
	return response.json();
};

export const deleteOption = async (id: number) => {
	const response = await fetch(process.env.NEXT_PUBLIC_URL + `/options/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};

export const createOption = async (props: CreateOptionRequest) => {
	const response = await fetch(process.env.NEXT_PUBLIC_URL + `/options`, {
		method: "POST",
		body: JSON.stringify(props),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};
