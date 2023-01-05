import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes/index.routes";
import theme from "./src/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>
			<Routes />
		</ThemeProvider>
	);
}
