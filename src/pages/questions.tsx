import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import axios from "axios";
import styled from "styled-components";
// import styles
import {
	Grid,
	Header,
	Page,
	StyledLink,
	StyledButton,
	StyledButtonLink,
} from "../styles/elements";

// ************
// types
// ************

export type CorrectAnswer = "True" | "False";
export type IncorrectAnswer = ["True"] | ["False"];
export type Question = Readonly<{
	category: string;
	correct_answer: CorrectAnswer;
	difficulty: string;
	incorrect_answers: IncorrectAnswer;
	question: string;
	type: string;
}>;
export type QuestionResponse = Readonly<{
	response_code: number;
	results: Question[];
}>;
export type Answer = "True" | "False";

// ************
// component
// ************

const Questions: React.FC<PageProps> = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [questionNumber, setQuestionNumber] = useState<number>(0);
	const [answers, setAnswers] = useState<Answer[]>([]);
	const [answered, setAnswered] = useState<boolean>(false);
	const [currentAnswer, setCurrentAnswer] = useState<string>();
	const [pleaseAnswer, setPleaseAnswer] = useState<boolean>(false);
	const [finished, setFinished] = useState<boolean>(false);

	// effect calls getQuestions function when component mounts
	useEffect(() => {
		getQuestions();
	}, []);

	// effect sets finished state to true if answers and questions arrays are the same length
	useEffect(() => {
		setFinished(answers.length === questions.length);
	}, [answered, questions]);

	// function fetches new questions from API
	const getQuestions = async () => {
		const response = await axios.get<QuestionResponse>(
			"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
		);
		const questions = response.data.results;
		// console.log("questions:", questions); // ? debug

		setQuestions(questions);
		setLoading(false);
	};

	// function updates answers array (to compare against questions array)
	const updateAnswers = (answer: Answer) => {
		answers.splice(questionNumber, 1, answer);
		setAnswers(answers);
		setCurrentAnswer(answer);
		setAnswered(true);
		setPleaseAnswer(false);

		// console.log("answers:", answers); // ? debug
	};

	// function moves onto next question
	const nextQuestion = () => {
		// check if answer saved
		// if answered, increment counter and move onto next question
		if (answered) {
			setQuestionNumber(questionNumber + 1);
			setAnswered(false);
		}
		// if no answer, prompt for answer
		else {
			setPleaseAnswer(true);
		}
	};

	return (
		<Page>
			{loading ? (
				"Loading..."
			) : (
				<Grid>
					<Header>{questions[questionNumber].category}</Header>
					<div
						// TODO: consider using DOMPurify here
						dangerouslySetInnerHTML={{
							__html: questions[questionNumber].question,
						}}
					></div>
					<div>
						Question {questionNumber + 1} of {questions.length}
					</div>
					<div>
						<StyledButton onClick={() => updateAnswers("True")}>
							TRUE
						</StyledButton>
						<StyledButton onClick={() => updateAnswers("False")}>
							FALSE
						</StyledButton>
					</div>
					<div>
						{/* check if finished */}
						{finished ? (
							// display finished button
							<StyledLink to="/results" state={{ questions, answers }}>
								FINISH
							</StyledLink>
						) : (
							// display next button
							<StyledButtonLink onClick={() => nextQuestion()}>
								NEXT
							</StyledButtonLink>
						)}
					</div>
				</Grid>
			)}
			{pleaseAnswer && (
				<FootNote>*** Please answer the question ***</FootNote>
			)}
			{answered && <FootNote>Answered: {currentAnswer}</FootNote>}
		</Page>
	);
};

export default Questions;

// ************
// styles
// ************

const FootNote = styled.div`
	margin: 0 auto;
	text-align: center;
`;
