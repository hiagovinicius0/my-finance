import React, { Dispatch, SetStateAction } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { Transaction } from "@/app/constants";

interface GridProps {
	itens: Transaction[];
	setItens: Dispatch<SetStateAction<Transaction[]>>;
}

const Grid = ({ itens, setItens }: GridProps) => {
	const onDelete = (ID: number) => {
		const newArray = itens.filter((transaction) => transaction.id !== ID);
		setItens(newArray);
		localStorage.setItem("transactions", JSON.stringify(newArray));
	};

	return (
		<C.Table>
			<C.Thead>
				<C.Tr>
					<C.Th width={40}>Descrição</C.Th>
					<C.Th width={40}>Valor</C.Th>
					<C.Th width={10} alignCenter>
						Tipo
					</C.Th>
					<C.Th width={10}></C.Th>
				</C.Tr>
			</C.Thead>
			<C.Tbody>
				{itens?.map((item, index) => (
					<GridItem key={index} item={item} onDelete={onDelete} />
				))}
			</C.Tbody>
		</C.Table>
	);
};

export default Grid;
