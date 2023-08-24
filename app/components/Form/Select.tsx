import { Dispatch, SetStateAction } from "react";
import * as C from "./styles";
import { OptionsProps } from "@/app/services/options";

interface SelectProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	options: OptionsProps[];
}

export const Select = ({ options, setValue, value }: SelectProps) => {
	return (
		<C.Select value={value} onChange={(e) => setValue(e.target.value)}>
			<option value=""></option>
			{options.map((option, index) => {
				return (
					<option value={option.id} key={index}>
						{option.description}
					</option>
				);
			})}
		</C.Select>
	);
};
