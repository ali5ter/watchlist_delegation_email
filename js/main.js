/*

    @file main.js
    Generate mockups to simulate static but scrollable views on a mobile device
    @author Alister Lewis-Bowen <alister@vmware.com>

 */

/* ---------------------------------------------------------------------------
 *
 * @function createMockups
 * Fill out the child nodes of the section element containing the mobile
 * device mockup.
 * @return Promise resolved once all mockup sections filled out
 *
 */

function createMockups() {
    return new Promise(function(resolve, reject) {

        'use strict';

        var titleText, contentFile,
            titleElem, linkElem, containerElem,
            mockups = $('.mockup'),
            mockupLen = mockups.length -1;

        mockups.each(function(i) {
            titleText = this.dataset.title;
            contentFile = this.dataset.file +'.html';

            titleElem = $('<h3>', {text: titleText +' '}).append(
                $('<a>', {href: contentFile, alt: 'content without the chrome', text: 'content'})
            );
            containerElem = $('<div>', {class: 'container'}).append(
                $('<img>', {src:'imgs/container.png', alt: 'device chrome and mail app heading'}),
                $('<div>', {class: 'content', 'data-file': this.dataset.file})
            );

            $(this).append(titleElem, containerElem);
            console.debug('created mockup layout for '+ this.dataset.file);

            if (mockupLen === i) return resolve();
        });
    });
}

/* ---------------------------------------------------------------------------
 *
 * @function styleMockups
 * Apply style to all mockup container and content class elements declared in
 * the configuration data structure
 * @return Promise resolved once all definitions are applied
 *
 */

function styleMockups() {
    return new Promise(function(resolve, reject) {

        'use strict';

        $('.container').css({
            'margin-top': config.container.top,
            height: config.container.height,
            width: config.container.width
        });
        $('.container > .content').css({
            height: config.content.height,
            width: config.content.width,
            left: config.content.x,
            top: config.content.y
        });

        console.debug('style mockup containers');
        return resolve();
    });
}

/* ---------------------------------------------------------------------------
 *
 * @function loadMockupContent
 * Load mockup content from file
 * @return Promise resolved once all mockup content is loaded
 *
 */

function loadMockupContent() {
    return new Promise(function(resolve, reject) {

        'use strict';

        var content = $('.container > .content'),
            contentLen = content.length -1;

        $('.container > .content').each(function(i) {
            if (this.dataset === {} ) return;
            $(this).load(this.dataset.file +'.html', function() {
                console.debug('loading content for '+ this.dataset.file);
                if (contentLen === i) return resolve();
            });
        });
    });
}

/* starts here -------------------------------------------------------------- */

(function() {

    $(document).ready(function() {

        'use strict';

        createMockups()
        .then(function() { return styleMockups(); })
        .then(function() { return loadMockupContent(); })
        .then(function() { console.debug('complete'); });
    });

}());
