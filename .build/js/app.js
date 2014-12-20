'use strict';
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-47843645-7', 'auto');
ga('send', 'pageview');

stLight.options({
  publisher: '180c005e-31dd-43a7-8cc8-92a83751bd11',
  doNotHash: false,
  doNotCopy: false,
  hashAddressBar: false
});

var options = {
  'publisher': '180c005e-31dd-43a7-8cc8-92a83751bd11',
  'position': 'left',
  'ad': {
    'visible': false,
    'openDelay': 5,
    'closeDelay': 0
  },
  'chicklets': {
    'items': [
      'facebook',
      'twitter',
      'linkedin',
      'pinterest',
      'email',
      'sharethis'
    ]
  }
};
var stHoverWidget = new sharethis.widgets.hoverbuttons(options);
