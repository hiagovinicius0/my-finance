import React, { Dispatch, SetStateAction, useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";
import { Transaction } from "@/app/constants";

interface FormProps {
	handleAdd: (transaction: Transaction) => void;
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

	const generateID = () => Math.round(Math.random() * 1000);

	const handleSave = () => {
		if (!desc || !amount) {
			alert("Informe a descrição e o valor!");
			return;
		} else if (amount < 0) {
			alert("O valor tem que ser positivo!");
			return;
		}

		const transaction = {
			id: generateID(),
			desc: desc,
			amount: amount,
			expense: isExpense,
		};

		handleAdd(transaction);

		setDesc("");
		setAmount(0);
	};

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
				<C.Button onClick={handleSave}>ADICIONAR</C.Button>
			</C.Container>
			<Grid itens={transactionsList} setItens={setTransactionsList} />
		</>
	);
};

export default Form;
