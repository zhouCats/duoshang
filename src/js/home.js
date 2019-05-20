require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'com': '../js/common',
        'cart': '../js/cart',

    },
    shim: {
        'cart': ['jquery'],
        'cart': ['com']
    }
});
require(['jquery', 'com', 'cart'], function () {
});