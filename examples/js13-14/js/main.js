'use strict';

(()=>{

	function genDiv (parentElem, divClass) {
		var Div = document.createElement('div');
		Div.className = divClass;
		parentElem.appendChild(Div);
		return Div;
	}
	function genOl (parentElem) {
		var olInBlock = document.createElement('ol');
		parentElem.appendChild(olInBlock);
		return olInBlock;
	}
	function genUl (parentElem) {
		var ulInBlock = document.createElement('ul');
		parentElem.appendChild(ulInBlock);
		return ulInBlock;
	}

	function blockTitle (parent, child) {
		parent.appendChild(child);
		child.innerHTML = "Тест по программированию";
	}

	var questionNum = 0;
	var questionText = 'Вопрос №';
	function blockQuestion (parentElem) {
		var question = document.createElement('li');
		question.className = "listItem" +questionNum;
		question.innerHTML = questionText + questionNum;
		parentElem.appendChild(question);
	}

	var answerNum = 0;
	var answerText = 'Вариант ответа №';
	function blockAnswer (parentElem) {
		var answerLi = document.createElement('li');
		parentElem.appendChild(answerLi);
		var answerCheck = document.createElement('input');
		answerCheck.type = "checkbox";
		answerCheck.id = "ques" + questionNum + "answ" + answerNum;
		answerLi.appendChild(answerCheck);
		var answerLab = document.createElement('label');
		answerLab.className = "list-tem__label";
		answerLab.innerHTML = answerText + answerNum;
		answerLab.setAttribute('for','ques' + questionNum + 'answ' + answerNum);
		answerLi.appendChild(answerLab);
	}

	function blockButton (parentElem) {
		var button = document.createElement('button');
		button.innerHTML = "Проверить мои результаты";
		parentElem.appendChild(button);
	}

	var wrapper = genDiv (document.body, "wrapper");
	var h = document.querySelector('div');
	var h1 =document.createElement('h1');
	blockTitle(h, h1);

	var questOl = genOl(wrapper);
	for (var i = 0; i < 3; i++){
		questionNum = i+1;
		blockQuestion(questOl);

		var answerUl = genUl(questOl);
		for (var j = 0; j < 3; j++){
			answerNum = j+1;
			blockAnswer(answerUl);
		}
	}
	blockButton(wrapper);
	(()=>{

		var answ = {
			listItem1: "ques1answ1",
			listItem2: "ques2answ2",
			listItem3: "ques3answ3"
		};
		localStorage.setItem('answer', JSON.stringify(answ)); 
	})();
})();


(()=>{
	function removeModal () {
		$('.result').attr( 'style', 'display: none');
		$('.modalBlock').remove();

	}
	function check () {

		$(function() {
			var html = $('#modal').html();
			var answer = JSON.parse(localStorage.getItem('answer'));
			var mack = 0;
			var input = $('input[type="checkbox"]');
			var q = 0;
			var fps = 1;
			var margin = 500;

			function find (elemName) {
				var Elem;
				return Elem =  document.getElementById(  elemName );
			}

			if ( find(answer.listItem1).checked ) {
				mack += 1;
			};
			if ( find(answer.listItem2).checked ) {
				mack += 1;
			};
			if ( find(answer.listItem3).checked ) {
				mack += 1;
			};

			for (var i = 0; i < input.length; i++) {
				if( input[i].checked ) {q++}
			}

			var info = [ 
			{
				header: 'Слабак... Держи ответы!',
				text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				firstquest: 'Вариант ответа №1',
				secondquest: 'Вариант ответа №2',
				thirdquest: 'Вариант ответа №3'
			}
			];
			info[0].header = (mack == 3) ? "Хорошая работа, все верно!" :
			( mack == 2 ) ? "Неплохо, но чютка не дотянул!" :
			( mack == 1 ) ? "Слабовато, пройди материал еще разок!" :
			'Слабак... Держи ответы!';

			if ( q > 3 ) {
				info[0].header ='На каждый вопрос есть только 1 правильный ответ!'
				info[0].text ='...'
				info[0].firstquest = 'nope';
				info[0].secondquest = 'nope';
				info[0].thirdquest = 'nope';
			}

			var content = tmpl(html, {
				data: info                                          
			});

			$('.result').attr( 'style', 'display: block');
			$('.result').append(content);
			$('.result').on('click', removeModal);

			(function anim() {
				margin = margin - 10;
				$('.modalBlock').css('margin-top', '-' + margin + 'px');
				if (margin > 150) setTimeout(anim, fps);
			}());

		});
		// return value;
	};
	$(function() {
		var button = document.querySelector('button');
		$(button).click( check )
	});
})();





