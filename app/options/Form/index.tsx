/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import * as C from "./styles";
import { Option } from "@/app/services/options";
import Grid from "../Grid";
import handleSubmit from "../actions";

interface FormProps {
	options: Option[];
}

const Form = ({ options }: FormProps) => {
	const [desc, setDesc] = useState("");
	const [isExpense, setExpense] = useState(false);

	const handlePrevSubmit = async () => {
		await handleSubmit(desc, isExpense);
		setDesc("");
		setExpense(true);
	};

	return (
		<>
			<C.Container>
				<C.InputContent>
					<C.Label>Descrição</C.Label>
					<C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
				</C.InputContent>
				<C.RadioGroup>
					<C.Input
						type="radio"
						id="rIncome"
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
				<C.Button onClick={() => handlePrevSubmit()}>ADICIONAR</C.Button>
			</C.Container>
			<Grid itens={options} />
		</>
	);
};

export default Form;
