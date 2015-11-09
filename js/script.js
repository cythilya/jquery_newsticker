(function($) {
    $.fn.newsticker = function(opts) {
        // default configuration
        var config = $.extend({}, {
            height: 30,
            speed: 800,
            start: 8,
            interval: 3000
        }, opts);
        // main function
        function init(obj) {
            var dNewsticker = obj,
                dFrame = dNewsticker.find('.newsticker-list'),
                dItem = dFrame.find('.newsticker-item'),
                dNext,
                stop = false;

            dItem.eq(0).addClass('current');

            setInterval(function() {
                if (!stop) {
                    var dCurrent = dFrame.find('.current');

                    dFrame.animate({
                        top: '-=' + config.height + 'px'
                    }, config.speed, function() {
                        dNext = dFrame.find('.current').next();
                        dNext.addClass('current');
                        dCurrent.removeClass('current');
                        dCurrent.clone().appendTo(dFrame);
                        dCurrent.remove();
                        dFrame.css('top', config.start + 'px');
                    });
                }
            }, config.interval);

            dNewsticker.on('mouseover mouseout', function(e) {
                if (e.type == 'mouseover') {
                    stop = true;
                } else { // mouseout
                    stop = false;
                }
            });
        }
        // initialize every element
        this.each(function() {
            init($(this));
        });
        return this;
    };
    // start
    $(function() {
        $('.newsticker').newsticker();
    });
})(jQuery);