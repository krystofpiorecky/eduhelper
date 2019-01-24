let container, answ_letters_element, answ_text_element, question_element;

container = document.createElement("div");
question_element = document.createElement("h2");
answ_text_element = document.createElement("p");
answ_letters_element = document.createElement("h4");

container.style.width = "300px";
container.style.padding = "10px";
container.style.position = "fixed";
container.style.backgroundColor = "white";
container.style.left = "50vw";
container.style.bottom = "-1000px";
container.style.transform = "translate(-50%, 0)";
container.style.borderRadius = "10px";

container.appendChild(answ_letters_element);
container.appendChild(question_element);
container.appendChild(answ_text_element);
document.body.appendChild(container);

function answersTextOfQuestion(q)
{
	let output = [];

	for(let i = 0; i < answersToQuestions.length; i++)
	{
		if(answersToQuestions[i].q == q)
		{
			for(let j = 0; j < answersToQuestions[i].a.length; j++)
			{
				output.push(answersToQuestions[i].a[j]);
			}
		}
	}

	return output;
}

function availableAnswerIds()
{
	let available_answers = document.querySelectorAll(".answ_text");
	let output = [];
	let answers = answersTextOfQuestion(document.querySelector(".div_task_pad div span").innerText);

	for(let i = 0; i < available_answers.length; i++)
	{
		for(let j = 0; j < answers.length; j++)
		{
			if(available_answers[i].innerText == answers[j])
			{
				output.push(i);
			}
		}
	}

	return output;
}

document.onkeydown = (e) => {
  	if(e.which == 32)
  	{
  		container.style.bottom = "20px";
  		let answer_containers = document.querySelectorAll(".div_classic_answer_container");
  		let asd58 = document.querySelector(".div_task_pad div span").innerText;
  		answ_text_element.innerHTML = answersTextOfQuestion(document.querySelector(".div_task_pad div span").innerText).join("<br><br>");
  		let asd61 = "";
  		let asd62 = availableAnswerIds();
  		for(let i = 0; i < asd62.length; i++)
  		{
  			if(asd61.indexOf(String.fromCharCode(65+asd62[i])) == -1)
  			{
  				asd61 += String.fromCharCode(65+asd62[i]) + " ";
  				answer_containers[asd62[i]].style.backgroundColor = "rgba(50,255,50,0.2)";
  			}
  		}
  		question_element.innerText = asd61;
  		answ_letters_element.innerText = asd58;
  	}
}

document.onkeyup = (e) => {
  	if(e.which == 32)
  	{
		container.style.bottom = "-1000px";
		let answer_containers = document.querySelectorAll(".div_classic_answer_container");
		for(let i = 0; i < answer_containers.length; i++)
  		{
  			answer_containers[i].style.backgroundColor = "rgba(50,255,50,0)";
  		}
  	}
}
