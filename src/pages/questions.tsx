import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "gatsby";
import styled from "styled-components";

// ************
// types
// ************

type CorrectAnswer = "True" | "False";
type IncorrectAnswer = ["True"] | ["False"];
type Question = {
	category: string;
	correct_answer: CorrectAnswer;
	difficulty: string;
	incorrect_answers: IncorrectAnswer;
	question: string;
	type: string;
};
type QuestionResponse = {
	response_code: number;
	results: Question[];
};
type Answer = "True" | "False";
type Answers = Answer[];

// ************
// component
// ************

function Questions(): JSX.Element {
	// questions state
	const [questions, setQuestions] = useState<Question[]>([]);
	// // loading state
	const [loading, setLoading]: [
		boolean,
		(loading: boolean) => void,
	] = useState<boolean>(true);

	useEffect(() => {
		getQuestions();
	}, []);

	// function fetches new questions from API
	const getQuestions = async () => {
		const response = await axios.get<QuestionResponse>(
			"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
		);
		const questions = response.data.results;

		console.log("questions:", questions); // debug

		setQuestions(questions);
		setLoading(false);
	};

	// TODO: Loading and Questions placeholder
	return <>{loading ? "Loading..." : "Questions"}</>;
}

export default Questions;

// ************
// styles
// ************
