export interface OptionsProps {
	id: number;
	description: string;
	expense: boolean;
}

export const getOptions = async (
	isExpense: boolean
): Promise<OptionsProps[]> => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_URL + `/options?expense=${isExpense}`
	);
	return response.json();
};
