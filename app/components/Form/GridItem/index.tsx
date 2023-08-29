import * as C from "./styles";
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaTrash,
} from "react-icons/fa";
import { Transaction } from "@/app/constants";

interface GridItemProps {
	item: Transaction;
	onDelete: (ID: number) => void;
}

const GridItem = ({ item, onDelete }: GridItemProps) => {
	return (
		<C.Tr>
			<C.Td>{item.option.description}</C.Td>
			<C.Td>{item.description}</C.Td>
			<C.Td>{item.amount}</C.Td>
			<C.Td $alignCenter>
				{item.expense ? (
					<FaRegArrowAltCircleDown color="red" />
				) : (
					<FaRegArrowAltCircleUp color="green" />
				)}
			</C.Td>
			<C.Td $alignCenter>
				<FaTrash onClick={() => onDelete(item.id)} />
			</C.Td>
		</C.Tr>
	);
};

export default GridItem;
