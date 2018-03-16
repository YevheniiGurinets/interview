'use strict'

$(function() {
	var xhr = new XMLHttpRequest();
	var result;
	
	$( '.button' ).click(search)

	function search () {
		$('.resultBlock').remove();
		var name = $('#search').val();
		xhr.open('Get', 'https://pixabay.com/api/?key=5737438-5f42dbf912aaadd3f8f83083f&q=' + name, true )
		xhr.onreadystatechange = function () {
			if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				result = JSON.parse(xhr.responseText).hits;
				$('.result').append('<div class="resultBlock"></div>')
				for (var i = 0; i < 20; i++) {
					$('.resultBlock').append('<img src='+ result[i].webformatURL +' alt="">');
				}
			};
		};
		xhr.send();
	}
	
	document.onkeyup = function (e) {
		e = e || window.event;
		if (e.keyCode === 13) search();
		return false;
	}

});

$(function () {

	var data_array = [];
	var answer_array = $('.test').find('p');

	$('.newTest').on('click', newTest);
	$('.showTest').click(showTest);
	$('.hideTest').click(hideTest);

	function newTest () {

		data_array[0] = prompt( 'введите вопрос: ', '');

		data_array[1] = prompt( [1] + ' вариант ответа: ', '' )
		data_array[2] = prompt( [2] + ' вариант ответа: ', '' )
		data_array[3] = prompt( [3] + ' вариант ответа: ', '' )
		data_array[4] = prompt( [4] + ' вариант ответа: ', '' )

		data_array[5] = Number(prompt('введите № верного ответа: ', '' ))
	};

	function showTest () {
		if(data_array[0] == undefined || null) {
			alert('Введите вопрос и все варианты ответов!');
			return false
		};

		$('.prepare__test').attr('style','display: none;');
		$('.test').attr('style','display: block');

		document.getElementById('question').innerHTML= data_array[0];
		document.getElementById('var1').innerHTML='1. ' + data_array[1];
		document.getElementById('var2').innerHTML='2. ' + data_array[2];
		document.getElementById('var3').innerHTML='3. ' + data_array[3];
		document.getElementById('var4').innerHTML='4. ' + data_array[4];

		for (var i = 1; i <= 4; i++) {
			document.getElementById('var' + i).addEventListener('click', check);
		};
	};

	function check(e) {
		e = event.currentTarget;
		if ( e == answer_array[(data_array[5] - 1 )]) {
			alert('Верно!');
		} else alert('Неправильный ответ!');
	};

	function hideTest () {
		$('.test').attr('style', 'display: none');
		$('.prepare__test').attr('style', 'display: block');
	}
});
