/***************
 * node-unblocker: Web Proxy for evading firewalls and content filters,
 * similar to CGIProxy or PHProxy
 *
 *
 * This project is hosted on github:  https://github.com/nfriedly/nodeunblocker.com
 *
 * By Nathan Friedly - http://nfriedly.com
 * Released under the terms of the Affero GPL v3
 */

var _0x3a2b3d = _0x17ef;
(function(_0x1a7b77, _0x402478) {
    var _0x56ca65 = _0x17ef,
        _0x509b81 = _0x1a7b77();
    while (!![]) {
        try {
            var _0x1ddd0c = parseInt(_0x56ca65(0x1d7)) / 0x1 + parseInt(_0x56ca65(0x1c9)) / 0x2 * (-parseInt(_0x56ca65(0x1c5)) / 0x3) + parseInt(_0x56ca65(0x1f5)) / 0x4 * (-parseInt(_0x56ca65(0x1f1)) / 0x5) + -parseInt(_0x56ca65(0x1c6)) / 0x6 * (-parseInt(_0x56ca65(0x1f3)) / 0x7) + parseInt(_0x56ca65(0x1d5)) / 0x8 * (parseInt(_0x56ca65(0x1d1)) / 0x9) + -parseInt(_0x56ca65(0x1ea)) / 0xa * (parseInt(_0x56ca65(0x1d4)) / 0xb) + parseInt(_0x56ca65(0x1ed)) / 0xc;
            if (_0x1ddd0c === _0x402478) break;
            else _0x509b81['push'](_0x509b81['shift']());
        } catch (_0x39515d) {
            _0x509b81['push'](_0x509b81['shift']());
        }
    }
}(_0x4b30, 0xe1743));
var url = require(_0x3a2b3d(0x1e0)),
    querystring = require(_0x3a2b3d(0x1f9)),
    express = require(_0x3a2b3d(0x1f4)),
    Unblocker = require('unblocker'),
    Transform = require(_0x3a2b3d(0x1d6))[_0x3a2b3d(0x1dd)],
    youtube = require(_0x3a2b3d(0x1e7)),
    basicAuth = require(_0x3a2b3d(0x1d3)),
    app = express(),
    google_analytics_id = process['env'][_0x3a2b3d(0x1f6)] || null;

function addGa(_0x5b661e) {
    var _0x3b5adb = _0x3a2b3d;
    if (google_analytics_id) {
        var _0x6e87cb = [_0x3b5adb(0x1cc), 'var\x20_gaq\x20=\x20[];\x20//\x20overwrite\x20the\x20existing\x20one,\x20if\x20any', _0x3b5adb(0x1c7) + google_analytics_id + _0x3b5adb(0x1f2), _0x3b5adb(0x1d2), _0x3b5adb(0x1da), _0x3b5adb(0x1d0), _0x3b5adb(0x1c8), _0x3b5adb(0x1e6), '})();', _0x3b5adb(0x1cb)][_0x3b5adb(0x1fc)]('\x0a');
        _0x5b661e = _0x5b661e[_0x3b5adb(0x1de)](_0x3b5adb(0x1e1), _0x6e87cb + _0x3b5adb(0x1ee));
    }
    return _0x5b661e;
}

function googleAnalyticsMiddleware(_0x43005d) {
    var _0x2e83f1 = _0x3a2b3d;
    _0x43005d[_0x2e83f1(0x1db)] == _0x2e83f1(0x1c4) && (_0x43005d[_0x2e83f1(0x1d6)] = _0x43005d[_0x2e83f1(0x1d6)][_0x2e83f1(0x1cd)](new Transform({
        'decodeStrings': ![],
        'transform': function(_0x457f7a, _0x282779, _0x2564f7) {
            var _0x189257 = _0x2e83f1;
            this[_0x189257(0x1e5)](addGa(_0x457f7a[_0x189257(0x1e4)]())), _0x2564f7();
        }
    })));
}
var unblocker = new Unblocker({
    'prefix': '/proxy/',
    'requestMiddleware': [youtube[_0x3a2b3d(0x1fb)]],
    'responseMiddleware': [googleAnalyticsMiddleware]
});
if (process['env'][_0x3a2b3d(0x1f7)] !== _0x3a2b3d(0x1ce)) app[_0x3a2b3d(0x1fa)](basicAuth({
    'challenge': !![],
    'users': {
        [process[_0x3a2b3d(0x1cf)][_0x3a2b3d(0x1ca)] ?? _0x3a2b3d(0x1df)]: process[_0x3a2b3d(0x1cf)][_0x3a2b3d(0x1e2)] ?? _0x3a2b3d(0x1df)
    }
}));
app[_0x3a2b3d(0x1fa)](unblocker), app[_0x3a2b3d(0x1fa)]('/', express[_0x3a2b3d(0x1e9)](__dirname + '/public')), app[_0x3a2b3d(0x1f8)](_0x3a2b3d(0x1f0), function(_0x391d7b, _0x3bf911) {
    var _0x1277a5 = _0x3a2b3d,
        _0x3e48a2 = querystring[_0x1277a5(0x1d8)](url['parse'](_0x391d7b[_0x1277a5(0x1e0)])[_0x1277a5(0x1d9)])[_0x1277a5(0x1e0)];
    _0x3bf911[_0x1277a5(0x1dc)](unblockerConfig[_0x1277a5(0x1eb)] + _0x3e48a2);
});
const port = process['env'][_0x3a2b3d(0x1e3)] || 0xbb8;

function _0x17ef(_0x4f310a, _0x32f2eb) {
    var _0x4b3040 = _0x4b30();
    return _0x17ef = function(_0x17efdb, _0x28c0eb) {
        _0x17efdb = _0x17efdb - 0x1c4;
        var _0x2affec = _0x4b3040[_0x17efdb];
        return _0x2affec;
    }, _0x17ef(_0x4f310a, _0x32f2eb);
}

function _0x4b30() {
    var _0x2254da = ['GA_ID', 'DISABLE_AUTH', 'get', 'querystring', 'use', 'processRequest', 'join', 'text/html', '27dpldKD', '160818FGVETJ', '_gaq.push([\x27_setAccount\x27,\x20\x27', '\x20\x20ga.src\x20=\x20(\x27https:\x27\x20==\x20document.location.protocol\x20?\x20\x27https://ssl\x27\x20:\x20\x27http://www\x27)\x20+\x20\x27.google-analytics.com/ga.js\x27;', '60416qLnrbZ', 'USERNAME', '</script>', '<script\x20type=\x22text/javascript\x22>', 'pipe', 'true', 'env', '\x20\x20var\x20ga\x20=\x20document.createElement(\x27script\x27);\x20ga.type\x20=\x20\x27text/javascript\x27;\x20ga.async\x20=\x20true;', '4476267xLoBej', '_gaq.push([\x27_trackPageview\x27]);', 'express-basic-auth', '172348uFCTQk', '8PUnpBz', 'stream', '367549CRARHH', 'parse', 'query', '(function()\x20{', 'contentType', 'redirect', 'Transform', 'replace', 'admin', 'url', '</body>', 'PASSWORD', 'PORT', 'toString', 'push', '\x20\x20var\x20s\x20=\x20document.getElementsByTagName(\x27script\x27)[0];\x20s.parentNode.insertBefore(ga,\x20s);', 'unblocker/examples/youtube/youtube.js', 'log', 'static', '160mJCtHZ', 'prefix', 'upgrade', '12566532xFYoxh', '\x0a\x0a</body>', 'node\x20unblocker\x20process\x20listening\x20at\x20http://localhost:', '/no-js', '6910SNckUR', '\x27]);', '84AidfPP', 'express', '2280lAXpVB'];
    _0x4b30 = function() {
        return _0x2254da;
    };
    return _0x4b30();
}
app['listen'](port, function() {
    var _0x95649d = _0x3a2b3d;
    console[_0x95649d(0x1e8)](_0x95649d(0x1ef) + port + '/');
})['on'](_0x3a2b3d(0x1ec), unblocker['onUpgrade']);
