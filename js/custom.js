$(function () {



    $('.aitem__link_arr').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            sub = $this.next();

        $this.toggleClass('active');
        sub.slideToggle(300);
    });

});