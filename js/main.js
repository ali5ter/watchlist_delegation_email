/***
 * @file main.js
 */

function createLayout(onComplete) {

    'use strict';

    var titleText, contentFile, titleElem, linkElem, containerElem, chromeElem, contentElem,
        mockups = $('.mockup'),
        mockupLen = mockups.length -1;

    mockups.each(function(i) {
        titleText = this.dataset.title;
        contentFile = this.dataset.file +'.html';

        titleElem = $('<h3>', {text: titleText +' '}).append(
                $('<a>', {href: contentFile, alt: 'content without the chrome', text: 'content'})
        );
        containerElem = $('<div>', {class: 'container'});
        chromeElem = $('<img>', {src:'imgs/container.png', alt: 'device chrome and mail app heading'});
        contentElem = $('<div>', {class: 'content', 'data-file': this.dataset.file});
        $(containerElem).append(chromeElem, contentElem);
        $(this).append(titleElem, containerElem);
        console.log('created mockup layout for '+ this.dataset.file);

        if (mockupLen === i && onComplete) onComplete();
    });
}


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

$(document).ready(function() {

    'use strict';

    // TODO: Refactor to use promises
    createLayout(function() {
        resetLayout(function() {
            $('.container > .content').each(function(i) {
                if (this.dataset === {} ) return;
                $(this).load(this.dataset.file +'.html', function() {
                    console.log(this.dataset.file +'.html content loaded');
                });
            });
        });
    });
});
