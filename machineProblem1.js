// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: Computation of Grades using Function
	Programmer: Jacob A. Gutierrez
	Section: BCS22
	Start Date: April 17, 2023
	End Date: April 23, 2023
*/

let Grade = [];

var name, enablingAssessment1, enablingAssessment2, enablingAssessment3, enablingAssessment4, enablingAssessment5, summativeAssessment1, summativeAssessment2, summativeAssessment3, majorexamGrade, classParticipation, summativeassessmentFinal, letterGrade, letter;


for (let i = 0; i < 5; i++){
	name = prompt("Enter the name of the student: ");
	enablingAssessment1 = parseInt(prompt("Enter enabling assessment 1: "));
	enablingAssessment2 = parseInt(prompt("Enter enabling assessment 2: "));
	enablingAssessment3 = parseInt(prompt("Enter enabling assessment 3: "));
	enablingAssessment4 = parseInt(prompt("Enter enabling assessment 4: "));
	enablingAssessment5 = parseInt(prompt("Enter enabling assessment 5: "));
	summativeAssessment1 = parseInt(prompt("Enter summative assessment 1: "));
	summativeAssessment2 = parseInt(prompt("Enter summative assessment 2: "));
	summativeAssessment3 = parseInt(prompt("Enter summative assessment 3: "));
	majorexamGrade = parseInt(prompt("Enter major exam grade: "));

	classParticipation = Math.round((enablingAssessment1 + enablingAssessment2 + enablingAssessment3 + enablingAssessment4 + enablingAssessment5) / 5);

	summativeassessmentFinal = Math.round((summativeAssessment1 + summativeAssessment2 + summativeAssessment3) / 3);

	letterGrade = Math.round((classParticipation * 0.3) + (summativeassessmentFinal * 0.3) + (majorexamGrade * 0.4));

	if (letterGrade >= 90) {
		letter = "A";
	} else if (letterGrade >= 80 &&  letterGrade <= 89) {
		letter = "B";
	} else if (letterGrade >= 70 && letterGrade <= 79) {
		letter = "C";
	} else if (letterGrade >= 60 && letterGrade <= 69) {
		letter = "D";
	} else {
		letter = "F";
	};

	Grade[i] = {
		Student_Name: name,
		Class_Participation: classParticipation,
		Summative_Assessment: summativeassessmentFinal,
		Exam_Grade: majorexamGrade,
		Grade_Score: majorexamGrade,
		Letter_Grade: letter
	};
};

console.table(Grade);