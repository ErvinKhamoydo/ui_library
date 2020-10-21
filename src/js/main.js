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

// $('#first').click(() => {
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').click(() => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).click(() => {
//     $('.w-500').fadeToggle(800);
// });

// $('.wrap').html(
//     `
//         <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
//                 <a href="#" class="dropdown-item">Action #1</a>
//                 <a href="#" class="dropdown-item">Action #2</a>
//                 <a href="#" class="dropdown-item">Action #3</a>   
//             </div>
//         </div>
//     `
// );
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: "Ervin's modal title",
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores doloremque dicta libero, a eos, ullam dolor impedit exercitationem pariatur esse beatae quo commodi nemo laborum dolores perferendis itaque sunt natus!'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success', 'mr-10'],
                    false,
                    () => {
                        alert("Done!");
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning'],
                    false,
                    () => {
                        alert("Done2!");
                    }
                ]
            ]
        }
    });
});

//server
$().get()