import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
	const incomeLabel = `R$ ${income}`;
	const expenseLabel = `R$ ${expense}`;
	const totalLabel = `${
		Number(income) < Number(expense) ? "-" : ""
	}R$ ${total}`;

	return (
		<C.Container>
			<ResumeItem
				title="Entradas"
				Icon={FaRegArrowAltCircleUp}
				value={incomeLabel}
			/>
			<ResumeItem
				title="Saídas"
				Icon={FaRegArrowAltCircleDown}
				value={expenseLabel}
			/>
			<ResumeItem title="Total" Icon={FaDollarSign} value={totalLabel} />
		</C.Container>
	);
};

export default Resume;
