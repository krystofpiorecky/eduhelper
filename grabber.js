// Číslo aktuální otázky //
var number_of_question = 1;

// Číslo poslední otázky //
var number_of_last_question = parseInt(document.getElementById("div_quest_count_tar").innerHTML.replace("/ ", ""));

// Kompletní JSON všech odpovědí a otázek //
var data = [];

var interval = setInterval(function() {copy_data()}, 500);

function copy_data() {
	if(number_of_question == number_of_last_question) {
		console.log(JSON.stringify(data));
		clearInterval(interval);
	}

	// Aktuální otázka //
	var question = document.querySelector(".div_task_pad div span").innerHTML.replace(/&nbsp;/gi, "");

	// Označení správných otázek //
	var sign_of_question = document.querySelector("[title='Správná odpověď'] td:nth-child(2)").innerText;;

	var json = {
		q: question,
		a: []
	}

	json.a = right_answer(sign_of_question);

	data.push(json);

	next_question();
}

function right_answer(sign_of_question) {
	// JSON kam se uloží otázka/otázky //	
	var answers = [];

	// Počet všech odpovědí //
	var count_of_answers = document.querySelectorAll(".div_classic_answer_container").length;

	// Počet správných odpovědí //
	var count_of_sign_of_questions = sign_of_question.length;

	for(var i = 1; i <= count_of_sign_of_questions; i++) {
		for(var j = 0; j < count_of_answers; j++) {
			var current_sign_of_question = document.querySelectorAll(".span_class_q_oznaceni")[j].innerText;
				if(sign_of_question[i-1] == current_sign_of_question) {
					answers.push(document.querySelectorAll(".answ_text")[j].innerText);	
					break;
				}
		}

		if(count_of_sign_of_questions == 1) {
			break;
		}
	}

	return answers;
}

function next_question() {
		document.querySelector("[onclick='nextPageQuestions()']").click();
		number_of_question++;
}
