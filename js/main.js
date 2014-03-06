/***
 * @file main.js
 * Controller for containing html view that simlates the desktop and wizard
 * chrome
 */

$(document).ready(function() {

    'use strict';

    resetLayout(function() {
        $('.container > .content').each(function(i) {
            if (this.dataset === {} ) return;
            $(this).load(this.dataset.file +'.html', function() {
                console.log(this.dataset.file +'.html content loaded');
            });
        });
    });
});

/**
 * Position elements based on configuration
 */
function resetLayout(onComplete) {

    'use strict';

    $('html').css('background-color', config.container.color);
    $('.container').css('margin-top', config.container.top);
    $('.container').height(config.container.height);
    $('.container').width(config.container.width);
    $('.container > .content').css({
        height: config.content.height,
        width: config.content.width,
        left: config.content.x,
        top: config.content.y
    });

    if (onComplete) onComplete();
}
