// <Head-Section>
< script > jQuery(function($) {
    $('.et_pb_toggle_title').click(function() {
        var $toggle = $(this).closest('.et_pb_toggle');
        if (!$toggle.hasClass('et_pb_accordion_toggling')) {
            var $accordion = $toggle.closest('.et_pb_accordion');
            if ($toggle.hasClass('et_pb_toggle_open')) {
                $accordion.addClass('et_pb_accordion_toggling');
                $toggle.find('.et_pb_toggle_content').slideToggle(700, function() {
                    $toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');
                });
            }
            setTimeout(function() {
                $accordion.removeClass('et_pb_accordion_toggling');
            }, 750);
        }
    });
}); < /script>
// <Body-Section>
< script >
    var refTagger = {
        settings: {
            bibleVersion: "LU1912"
        }
    };
(function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = "//api.reftagger.com/v2/RefTagger.de.js";
    s.parentNode.insertBefore(g, s);
}(document, "script")); < /script>
<!-- Matomo -->
< script type = "text/javascript" >
    var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u = "//piwik.dbieling.de/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
})(); < /script>  < noscript > < p > < img src = "/ / piwik.dbieling.de / matomo.php ? idsite = 4 & amp;
rec = 1 "
style = "border:0;"
alt = "" / > < /p></noscript >
    <!-- End Matomo Code -->