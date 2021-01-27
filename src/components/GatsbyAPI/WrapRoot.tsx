import React from "react";
// import providers
import { ThemeProvider } from "styled-components";
// import styles
import ResetStyle from "../../styles/reset";
import { theme } from "../../styles/theme";

// ************
// component
// ************

interface RootProps {
	element: React.ReactNode;
}

function WrapRoot({ element }: RootProps): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<ResetStyle />
			{element}
		</ThemeProvider>
	);
}
export default WrapRoot;
