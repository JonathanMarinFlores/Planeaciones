/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'file-text2': '&#xe926;',
            'file4': '&#xe926;',
            'coin-dollar': '&#xe93b;',
            'money': '&#xe93b;',
            'clock': '&#xe94e;',
            'time2': '&#xe94e;',
            'lock': '&#xe98f;',
            'secure': '&#xe98f;',
            'unlocked': '&#xe990;',
            'lock-open': '&#xe990;',
            'clipboard': '&#xe9b8;',
            'board': '&#xe9b8;',
            'cloud-download': '&#xe9c2;',
            'cloud2': '&#xe9c2;',
            'download2': '&#xe9c5;',
            'save4': '&#xe9c5;',
            'checkmark2': '&#xea11;',
            'tick2': '&#xea11;',
            'mail2': '&#xea83;',
            'contact2': '&#xea83;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'file-pdf': '&#xeadf;',
            'file10': '&#xeadf;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
