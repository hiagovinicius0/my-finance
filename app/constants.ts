import { Option } from "./services/options";

export interface Transaction {
	id: number;
	description: string;
	amount: number;
	expense: boolean;
	optionId: number;
	option: Option;
}

export interface CreateTransaction extends Omit<Transaction, "id" | "option"> {}

export interface CreateOptionRequest extends Omit<Option, "id"> {}
