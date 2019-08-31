$(window).bind('hashchange', function (e) {
    //code
    e.preventDefault();
    router(e);
    // $('.scrollToTop').click();
});
$(document).ready(function (e) {
    e.preventDefault();
    router(e);
    // $('.scrollToTop').click();
});


function router(e) {
    var link = window.location.toString();
    var content = link.split('#');
    console.log(content[0]);
    console.log(content[1]);
    if(content[1]) {
        console.log('valid');
        if(content[1] == "home") {
            $('main').load('home.html');
            $('#currentpage').val('home');
            $('.menu .nav-item').removeClass('active');
            $('#home').addClass('active');
            return true;
        } else if (content[1] == "about") {
            $('main').load('about.html');
            $('#currentpage').val('about');
            $('.menu .nav-item').removeClass('active');
            $('#about').addClass('active');
            return true;
        } else if (content[1] == "contact") {
            $('main').load('contact.html');
            $('#currentpage').val('contact');
            $('.menu .nav-item').removeClass('active');
            $('#contact').addClass('active');
            return true;
        }
    } else {
        $('main').load('home.html');
        $('#currentpage').val('home');
        $('.menu .nav-item').removeClass('active');
        $('#home').addClass('active');
    }
}

