import React, { Dispatch, SetStateAction } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import { Transaction } from "@/app/constants";
import { deleteTransaction } from "@/app/services/transactions";

interface GridProps {
	itens: Transaction[];
	setReload: Dispatch<SetStateAction<boolean>>;
}

const Grid = ({ itens, setReload }: GridProps) => {
	const onDelete = (ID: number) => {
		deleteTransaction(ID);
		setReload(true);
	};

	return (
		<C.Table>
			<C.Thead>
				<C.Tr>
					<C.Th width={40}>Descrição</C.Th>
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
