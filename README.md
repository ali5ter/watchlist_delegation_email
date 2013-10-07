Beacon Delegation Email
=======================

An admin can delegate the action on a VM alert via email.

The email should reflect the alert details, the VM and any bookmarked solutions (KB Articles & web pages).

The run script in the test directory will send the html and plain content via email.

HTML email (email.html)
-----------------------
Formatted so that:
* Table, not CSS, layout
* Simple in-line styles only
* No background images
* No image sizing
* Alt attributes on all images

Images will either have to be served off vmware.com so they're accessible to external customers or we have to embed them.

It is safer to create mutipart mime email bodies that containt a plain text alternative to the HTML email but not sure how we do that from our smartphone email clients.

Plain-text email (email_plain.html)
-----------------------------------
Works in all email clients but need to include links which could become very long.

Attachment email (email_attachment.html)
----------------------------------------
Could attach an HTML version of the email and provide plain-text overview.

However, why would we force Admin to open an attachement? Shouldn't we just provide decent plain-text version?

References
----------
* [Multipart MIME](http://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
* [URI Scheme of cid:](http://en.wikipedia.org/wiki/URI_scheme)
* [CID RFC](http://tools.ietf.org/html/rfc2392)
* [HTML Email best practices](http://24ways.org/2009/rock-solid-html-emails/)
* [More HTML Email best practices](http://net.tutsplus.com/tutorials/html-css-techniques/20-email-design-best-practices-and-resources-for-beginners/)
* [Plain text best practices](http://www.campaignmonitor.com/guides/design/designing/)
* [Mutipart/alternative email](http://kevinjmcmahon.net/articles/22/html-and-plain-text-multipart-email-/)
* [Embedding images in HTML emails](http://www.campaignmonitor.com/blog/post/3927/embedded-images-in-html-email)
* [Em to px conversion](http://pxtoem.com/)
* [RGB to hex color conversion](http://www.rgbtohex.net/)
* [Setting up postfix on osx](http://www.zenddeveloper.com/how-to-send-smtp-mails-with-postfix-mac-os-x-10-8/)
* [Email client popularity](http://www.campaignmonitor.com/resources/will-it-work/email-clients/)
