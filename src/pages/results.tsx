import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Question, Answer } from "./questions";
// import styles
import { Grid, Header, Page, StyledLink } from "../styles/elements";

// ************
// types
// ************

interface ResultsProps {
	location: {
		state: {
			key: number;
			questions: Question[];
			answers: Answer[];
		};
	};
}

// ************
// component
// ************

function Results({ location }: ResultsProps): JSX.Element {
	const [score, setScore] = useState<number>(0);
	const [questions, setQuestions] = useState<Question[]>(
		location.state?.questions,
	);
	const [answers, setAnswers] = useState<Answer[]>(location.state?.answers);

	// effect calculates score when components mounts
	useEffect(() => {
		calcScore();
		// console.log("location:", location); // ? debug
	}, []);

	// function calculates score by looping through questions and answers and comparing results
	const calcScore = () => {
		let recordScore = 0;

		// loop through questions (and answers)
		questions?.forEach((question: Question, index: number) => {
			const answer = answers[index];

			if (question.correct_answer === answer) recordScore++;
		});

		setScore(recordScore);
	};

	// variable displays list of questions
	const displayQuestions = questions?.map(
		(question: Question, index: number) => {
			const answer = answers[index];
			const correct = question.correct_answer === answer;

			return (
				<Cell key={index}>
					{/* displays 'check' next to question if correct, displays 'ex' next to question if incorrect */}
					{correct ? <div>&#10003;</div> : <div>&#10007;</div>}
					<div>
						<div
							// TODO: consider using DOMPurify here
							dangerouslySetInnerHTML={{
								__html: question.question,
							}}
						></div>
						{/* correct answer displayed below each question */}
						<AnswerDiv>
							<strong>Answer: {question.correct_answer}</strong>
						</AnswerDiv>
					</div>
				</Cell>
			);
		},
	);

	return (
		<StyledPage>
			<Grid>
				<Header>
					<div>You scored</div>
					<div>
						{score} / {questions?.length}
					</div>
				</Header>

				<div>{displayQuestions}</div>
				<StyledLink to="/">PLAY AGAIN?</StyledLink>
			</Grid>
		</StyledPage>
	);
}

export default Results;

// ************
// styles
// ************

const Cell = styled.div`
	display: grid;
	grid-gap: 0.5em;
	grid-template-columns: auto 1fr;
	padding: 0.5em;
`;
const AnswerDiv = styled.div`
	padding-top: 0.25em;
`;
const StyledPage = styled(Page)`
	height: 100%;
`;
