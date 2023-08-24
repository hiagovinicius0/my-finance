import { OptionsProps } from "./services/options";

export interface Transaction {
	id: number;
	description: string;
	amount: number;
	expense: boolean;
	optionId: number;
	option: OptionsProps;
}

export interface CreateTransaction extends Omit<Transaction, "id"> {}
