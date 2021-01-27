import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
	borderRadius: "30px",

	// TODO: example theme colors.  Styled-components theme not integrating correctly with typescript.  Keeps returning 'undefined' when using theme properties.  Need to troubleshoot
	colors: {
		main: "cyan",
		secondary: "magenta",
		ricky: "yellow",
	},
};
