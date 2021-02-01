import * as React from "react";
import { Link, PageProps } from "gatsby";
import styled from "styled-components";

// ************
// component
// ************

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<Main>
			<title>Not found</title>
			<Heading>Page not found</Heading>
			<Paragraph>
				Sorry{" "}
				<span role="img" aria-label="Pensive emoji">
					😔
				</span>{" "}
				we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === "development" ? (
					<>
						<br />
						Try creating a page in <Code>src/pages/</Code>.
						<br />
					</>
				) : null}
				<br />
				<Link to="/">Go home</Link>.
			</Paragraph>
		</Main>
	);
};

export default NotFoundPage;

// ************
// styles
// ************

const Main = styled.main`
	color: #232129;
	padding: 96px;
	font-family: "-apple-system, Roboto, sans-serif, serif";
`;
const Heading = styled.h1`
	margin-top: 0;
	margin-bottom: 64;
	max-width: 320;
`;
const Paragraph = styled.p`
	margin-bottom: 48;
`;
const Code = styled.code`
	color: #8a6534;
	padding: 4;
	background-color: #fff4db;
	font-size: 1.25rem;
	border-radius: 4;
`;
