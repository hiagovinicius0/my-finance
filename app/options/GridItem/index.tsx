import * as C from "./styles";
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaTrash,
} from "react-icons/fa";
import { Option } from "@/app/services/options";
import { handleDelete } from "../actions";

interface GridItemProps {
	item: Option;
}

const GridItem = ({ item }: GridItemProps) => {
	return (
		<C.Tr>
			<C.Td>{item.description}</C.Td>
			<C.Td $alignCenter>
				{item.expense ? (
					<FaRegArrowAltCircleDown color="red" />
				) : (
					<FaRegArrowAltCircleUp color="green" />
				)}
			</C.Td>
			<C.Td $alignCenter>
				<FaTrash onClick={() => handleDelete(item.id)} />
			</C.Td>
		</C.Tr>
	);
};

export default GridItem;
