document.addEventListener('DOMContentLoaded', () => {

    const clamp = () => {
        const modules = document.querySelectorAll('.clamp');
        modules.forEach(module => $clamp(module, {clamp: 3}))
    };

    clamp();

    $readMoreJS.init({
        target: '.collapsed p',
        numOfWords: 60,
        toggle: true,
        moreLink: 'read more ...',
        lessLink: '... read less'
    });

    $('.load-more').on('click', function () {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '../data.html',
            type: 'GET',
            beforeSend: function () {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function (response) {
                setTimeout(function () {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(response);
                    clamp();
                }, 1000);
            },
            error: function () {
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });

    });



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));



});





