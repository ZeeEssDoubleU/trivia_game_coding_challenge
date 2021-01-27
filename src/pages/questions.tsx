import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "gatsby";
import styled from "styled-components";

// ************
// types
// ************

export type CorrectAnswer = "True" | "False";
export type IncorrectAnswer = ["True"] | ["False"];
export type Question = {
	category: string;
	correct_answer: CorrectAnswer;
	difficulty: string;
	incorrect_answers: IncorrectAnswer;
	question: string;
	type: string;
};
export type QuestionResponse = {
	response_code: number;
	results: Question[];
};
export type Answer = "True" | "False";

// ************
// component
// ************

function Questions(): JSX.Element {
	const [loading, setLoading] = useState<boolean>(true);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [questionNumber, setQuestionNumber] = useState<number>(0);
	const [answers, setAnswers] = useState<Answer[]>([]);
	const [answered, setAnswered] = useState<boolean>(false);
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
		setAnswered(true);

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
			console.log("please answer question"); // TODO: make a component
		}
	};

	return (
		<>
			{loading ? (
				"Loading..."
			) : (
				<>
					<h2>{questions[questionNumber].category}</h2>
					<div
						// TODO: consider using DOMPurify here
						dangerouslySetInnerHTML={{
							__html: questions[questionNumber].question,
						}}
					></div>
					<div>
						Question {questionNumber + 1} of {questions.length}
					</div>
					<button onClick={() => updateAnswers("True")}>TRUE</button>
					<button onClick={() => updateAnswers("False")}>FALSE</button>
					<div>
						{/* check if finished */}
						{finished ? (
							// display finished button
							<Link to="/results" state={{ questions, answers }}>
								FINISH
							</Link>
						) : (
							// display next button
							<button onClick={() => nextQuestion()}>NEXT</button>
						)}
					</div>
				</>
			)}
		</>
	);
}

export default Questions;

// ************
// styles
// ************
