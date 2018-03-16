(function($) {

    $.fn.mySlider = function(options) {
        var leftUIEl = $('.slider-arrow-left');
        var rightUIEl = $('.slider-arrow-right');
        var elementsList = $('.slider-list');

        var defoults = {
            speed: 500,
            width: 125
        };

        var settings = $.extend(defoults, options);


        
        var pixelsOffset = settings.width;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
        
        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
            }        
        });
        
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
            }        
        });
    }

})(jQuery);
