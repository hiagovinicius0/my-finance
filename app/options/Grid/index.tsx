import * as C from "./styles";
import { Option, deleteOption } from "@/app/services/options";
import GridItem from "../GridItem";

interface GridProps {
	itens: Option[];
}

const Grid = ({ itens }: GridProps) => {
	const onDelete = (ID: number) => {
		deleteOption(ID);
	};

	return (
		<C.Table>
			<C.Thead>
				<C.Tr>
					<C.Th $width={40} $aligncenter={false}>
						Descrição
					</C.Th>
					<C.Th $width={10} $aligncenter={true}>
						Tipo
					</C.Th>
					<C.Th $width={10} $aligncenter={false}></C.Th>
				</C.Tr>
			</C.Thead>
			<C.Tbody>
				{itens?.map((item, index) => (
					<GridItem key={index} item={item} />
				))}
			</C.Tbody>
		</C.Table>
	);
};

export default Grid;
