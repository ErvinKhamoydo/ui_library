import './lib/lib';

$('button').onEvent('click', function() {
    $('div').eq(2).toggleClass('active');
});