import React from "react";
// import styles
import { Grid, Header, Page, StyledLink } from "../styles/elements";

// ************
// component
// ************

function Index(): JSX.Element {
	return (
		<Page>
			<Grid>
				<Header>Welcome to the Trivia Challenge</Header>
				<div>
					You will be presented with 10 <strong>True</strong> or{" "}
					<strong>False</strong> questions
				</div>
				<div>Can you score 100%?</div>
				<StyledLink to="/questions">BEGIN</StyledLink>
			</Grid>
		</Page>
	);
}

export default Index;

// ************
// styles
// ************
