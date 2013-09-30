/***
 * @file main.js
 * Controller for containing html view that simlates the desktop and wizard
 * chrome
 */

$(document).ready(function() {

    'use strict';

    var annotation = $('.annotation > section');
    $('.annotation > img').click( function() { annotation.toggle(); });
    annotation.click( function() { annotation.toggle(); });

    resetLayout(function() {
        $('.container > .content.html').load('email.html', function() {
            console.log('html email content loaded');
        });
        $('.container > .content.plain').load('email_plain.html', function() {
            console.log('plain email content loaded');
        });
        $('.container > .content.attachment').load('email_attachment.html', function() {
            console.log('attachment email content loaded');
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
