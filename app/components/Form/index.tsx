/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import * as C from "./styles";
import { CreateTransaction, Transaction } from "@/app/constants";
import { Select } from "./Select";
import { Option, getOptions } from "@/app/services/options";
import { handleAdd } from "@/app/dashboard-static/DashboardClient";

interface FormProps {
	transactionsList: Transaction[];
}

const Form = ({ transactionsList }: FormProps) => {
	const [desc, setDesc] = useState("");
	const [amount, setAmount] = useState(0);
	const [isExpense, setExpense] = useState(false);
	const [type, setType] = useState("");
	const [options, setOptions] = useState<Option[]>([]);

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
	};

	const getOptionsApi = async () => {
		setOptions(await getOptions(isExpense));
	};

	useEffect(() => {
		getOptionsApi();
	}, [isExpense]);

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
			<Grid itens={transactionsList} />
		</>
	);
};

export default Form;
