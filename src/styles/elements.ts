import styled from "styled-components";
import { Link } from "gatsby";

// ************
// elements
// ************

export const Grid = styled.div`
	display: grid;
	justify-content: center;
	align-items: justify;

	height: 90%;
	width: 50%;
	margin: 0 auto;
	text-align: center;
`;
export const Header = styled.h2``;

export const Page = styled.div`
	height: 560px;
	width: 680px;
	margin: 0 auto;
	background-color: #e0e0e0;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 1.25em;
`;
export const StyledButtonLink = styled.button`
	text-decoration: none;
	font-size: 1.25em;
`;

export const StyledButton = styled.button`
	margin: 0 1rem;
`;
