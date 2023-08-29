import { getAllOptions } from "../services/options";
import Form from "./Form";

const OptionsScreen = async () => {
	const options = await getAllOptions();

	return <Form options={options} />;
};

export default OptionsScreen;
