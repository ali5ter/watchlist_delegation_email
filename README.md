Beacon Delegation Email
=======================

An admin can delegate the action on a Host alert via email.

The email should reflect the alert details, the Host and any bookmarked solutions (KB Articles & web pages).

HTML email (email.html)
-----------------------
HTML written to render in as many clients as possible using current best practices. Images could be served off vmware.com but chosen to attache them as part of the mutipart message and use cid: URI scheme to refer to image attachements from within the HTML.

Plain-text email (email_plain.html)
-----------------------------------
This plain text version can also be sent with the HTML version in the multipart smtp message.

Testing
-------
The run script in the test directory will:
1. Create a multipart smtp message with both plain and html versions of the email message
2. Encode the png images and add these to the multipart smtp message
3. Update the HTML content to refer to these attachments using the cid: URI Scheme
4. Send this multipart smtp message to a set of test email addreses associated with different email clients

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
