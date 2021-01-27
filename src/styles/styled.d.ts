// import original module declarations
import "styled-components";

// and extend theme!
declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius: string;

		colors: {
			main: string;
			secondary: string;
			ricky: string;
		};
	}
}
