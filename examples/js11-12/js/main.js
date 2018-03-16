'use strict'

$(function() {

    $().mySlider();


});

$(function() {
    var html = $('#info').html();
    var info = [
    {
        img:  'img/image2.jpg',
        name: 'name firstName lastName',
        information: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Залетают наш большого свою раз, текст, однажды возвращайся силуэт, текстами знаках оксмокс составитель.',
        hobby: 'My hobby',
        first: 'play games',
        second: 'listen the music',
        third: 'read different books'
    },

    ];

    var content = tmpl(html, {
        data: info
    });

    $('body').append(content);
});