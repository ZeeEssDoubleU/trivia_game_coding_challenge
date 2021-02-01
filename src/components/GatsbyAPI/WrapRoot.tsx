import React from "react";
import { PageProps } from "gatsby";
// import providers
import { ThemeProvider } from "styled-components";
// import styles
import ResetStyle from "../../styles/reset";
import { theme } from "../../styles/theme";

// ************
// component
// ************

const WrapRoot: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<ResetStyle />
			{children}
		</ThemeProvider>
	);
};
export default WrapRoot;
