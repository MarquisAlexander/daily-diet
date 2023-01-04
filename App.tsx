import "react-native-gesture-handler";
import { StatusBar } from "react-native";

import { Routes } from "./src/routes/index.routes";

export default function App() {
	return (
		<>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>
			<Routes />
		</>
	);
}
