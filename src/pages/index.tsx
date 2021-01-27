import React from "react";
import { Link } from "gatsby";

// ************
// component
// ************

const Index: React.FC = () => {
	return (
		<>
			<div>Welcome to the Trivia Challenge</div>
			<div>You will be presented with 10 True or False questions</div>
			<div>Can you score 100%?</div>
			<Link to="/questions">BEGIN</Link>
		</>
	);
};

export default Index;

// ************
// styles
// ************
