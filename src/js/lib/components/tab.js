import $ from '../core';

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i])
                .addClass('tab-item__active')
                .siblings()
                .removeClass('tab-item__active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content__active')
                .eq($(this[i])
                .index())
                .addClass('tab-content__active');
        });
    }
};

$('[data-tabpanel] .tab-item').tab();