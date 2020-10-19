import './lib/lib';

// $('button').onEvent('click', function() {
//     $('div').eq(2).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
// console.log($('.findme').siblings());
// $('.findme').fadeIn(1000);

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});