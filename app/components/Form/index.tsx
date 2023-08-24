/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import { CreateTransaction, Transaction } from "@/app/constants";
import { Select } from "./Select";
import { OptionsProps, getOptions } from "@/app/services/options";
import { getTransactions } from "@/app/services/transactions";

interface FormProps {
	handleAdd: (transaction: CreateTransaction) => void;
	transactionsList: Transaction[];
	setTransactionsList: Dispatch<SetStateAction<Transaction[]>>;
}

const Form = ({
	handleAdd,
	transactionsList,
	setTransactionsList,
}: FormProps) => {
	const [desc, setDesc] = useState("");
	const [amount, setAmount] = useState(0);
	const [isExpense, setExpense] = useState(false);
	const [type, setType] = useState("");
	const [options, setOptions] = useState<OptionsProps[]>([]);
	const [reload, setReload] = useState<boolean>(false);

	const handleSave = () => {
		if (!desc || !amount) {
			alert("Informe a descrição e o valor!");
			return;
		} else if (amount < 0) {
			alert("O valor tem que ser positivo!");
			return;
		}

		const transaction = {
			description: desc,
			amount: amount,
			expense: isExpense,
			optionId: parseInt(type),
		};

		handleAdd(transaction);

		setDesc("");
		setAmount(0);
		setType("");
		getTransactionsApi();
	};

	const getOptionsApi = async () => {
		setOptions(await getOptions(isExpense));
	};

	const getTransactionsApi = async () => {
		setTransactionsList(await getTransactions());
		setReload(false);
	};

	useEffect(() => {
		getOptionsApi();
	}, [isExpense]);

	useEffect(() => {
		getTransactionsApi();
	}, [reload]);

	return (
		<>
			<C.Container>
				<C.InputContent>
					<C.Label>Descrição</C.Label>
					<C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
				</C.InputContent>
				<C.InputContent>
					<C.Label>Valor</C.Label>
					<C.Input
						value={amount}
						type="number"
						onChange={(e) => setAmount(parseFloat(e.target.value))}
					/>
				</C.InputContent>
				<C.RadioGroup>
					<C.Input
						type="radio"
						id="rIncome"
						defaultChecked
						name="group1"
						onChange={() => setExpense(!isExpense)}
					/>
					<C.Label htmlFor="rIncome">Entrada</C.Label>
					<C.Input
						type="radio"
						id="rExpenses"
						name="group1"
						onChange={() => setExpense(!isExpense)}
					/>
					<C.Label htmlFor="rExpenses">Saída</C.Label>
				</C.RadioGroup>
				<C.InputContent>
					<C.Label>Tipo</C.Label>
					<Select options={options} setValue={setType} value={type} />
				</C.InputContent>
				<C.Button onClick={handleSave}>ADICIONAR</C.Button>
			</C.Container>
			<Grid itens={transactionsList} setReload={setReload} />
		</>
	);
};

export default Form;
