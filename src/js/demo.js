require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'com': '../js/common',
        'cart': '../js/cart',
        'fdj': '../js/magnifier.js',
    },
    shim: {
        'cart': ['jquery'],
        'cart': ['com'],
        'fdj': ['jquery']
    }
});
require(['jquery', 'com', 'cart', 'fdj'], function () {
});