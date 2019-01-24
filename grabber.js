var number_of_question = 1;
var current_question = parseInt(document.getElementById("div_quest_count_tar").innerHTML.replace("/ ", ""));
let answersToQuestions = [];

var interval = setInterval(function() {copy_text()}, 500);

function copy_text() {
		if(number_of_question == current_question) {
				clearInterval(interval);
		}

		var question = document.querySelector(".div_task_pad").children[0].children[0].innerHTML.replace(/&nbsp;/gi, "");
		var right_point = document.querySelector("[title='Správná odpověď']").children[1].innerText;
		//var answer = correct_answer_by_point(right_point);

		// Vloží do JSON formátu //
		let atq = {
			q: question,
			a: []
		}
		console.log(question);
		atq.a = correct_answer_by_point(right_point);
		//console.log(JSON.stringify(answer));
		// Zavolá funkci na zobrazení další otázky //
		
		answersToQuestions.push(atq);
	
		show_next_question();
}

function correct_answer_by_point(point) {
		let answers = [];
		var count_of_questions = document.querySelectorAll(".div_classic_answer_container").length;
		var how_many_right_points_are = point.length;

		for(var i = 1; i <= how_many_right_points_are; i++) {
				for(var j = 0; j < count_of_questions; j++) {
						var current_point_of_question = document.querySelectorAll(".div_classic_answer_container")[j].children[0].children[0].children[0].children[0].children[0].innerText;
						if(point[i-1] == current_point_of_question) {
								console.log(document.querySelectorAll(".div_classic_answer_container")[j].children[0].children[0].children[0].children[1].children[0].innerText);
								answers.push(document.querySelectorAll(".div_classic_answer_container")[j].children[0].children[0].children[0].children[1].children[0].innerText);	
								break;
						}
				}
				if(how_many_right_points_are == 1) {
						break;
				}
		}
		//return final_answer;
		console.log(" ");
	
		return answers;
}

function show_next_question() {
		document.getElementsByClassName("div_btn_op div_btn_q_nbr open_question_display div_main_show_button div_next test_display")[0].click();
		number_of_question++;
}
