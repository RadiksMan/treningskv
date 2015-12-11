$(document).ready(function(){

    var today = new Date();
    today.setDate(today.getDate() + 14);
    var chistoChislo = today.getDate();
    var chistoMesec = today.getMonth();
    var chistoGod = today.getFullYear();
    var monthRus;
    switch (chistoMesec) {
        case 0:
            monthRus ='января';
            break
        case 1:
            monthRus ='февраля';
            break
        case 2:
            monthRus ='марта';
            break
        case 3:
            monthRus ='апреля';
            break
        case 4:
            monthRus ='мая';
            break
        case 5:
            monthRus ='июня';
            break
        case 6:
            monthRus ='июля';
            break
        case 7:
            monthRus ='августа';
            break
        case 8:
            monthRus ='сентября';
            break
        case 9:
            monthRus ='октября';
            break
        case 10:
            monthRus ='ноября';
            break
        case 11:
            monthRus ='декабря';
            break
    }

    $('.change-data-fix').text( chistoChislo + ' ' + monthRus + ' ' + chistoGod );
    $('.change-data-fix-two').text("до "+chistoChislo + ' ' + monthRus);

        var today_next = new Date();
        today_next.setDate(today_next.getDate() + 7);
        var chistoChislo_next = today_next.getDate();
        var chistoMesec_next = today_next.getMonth();
        var chistoGod_next = today_next.getFullYear();
        var monthRus_next;
        switch (chistoMesec_next) {
            case 0:
                monthRus_next ='января';
                break
            case 1:
                monthRus_next ='февраля';
                break
            case 2:
                monthRus_next ='марта';
                break
            case 3:
                monthRus_next ='апреля';
                break
            case 4:
                monthRus_next ='мая';
                break
            case 5:
                monthRus_next ='июня';
                break
            case 6:
                monthRus_next ='июля';
                break
            case 7:
                monthRus_next ='августа';
                break
            case 8:
                monthRus_next ='сентября';
                break
            case 9:
                monthRus_next ='октября';
                break
            case 10:
                monthRus_next ='ноября';
                break
            case 11:
                monthRus_next ='декабря';
                break
        }

        $('.hange-data-fix_next').text( chistoChislo_next + ' ' + monthRus_next + ' ' + chistoGod_next );

        $('.send-we-are-in').click(  function(){
            yaCounter34108025.reachGoal('send_on');
        });

        $('.call-back-me').click(  function(){
            yaCounter34108025.reachGoal('send_on');
        });

        $('.send_5000').click(  function(){
            yaCounter34108025.reachGoal('send_5000');
        });

        $('.send_25000').click(  function(){
            yaCounter34108025.reachGoal('send_25000');
        });

        $('.contact-submit').click(  function(){
            yaCounter34108025.reachGoal('send_down');
        });

});

$(window).load(function(){

});

$(window).resize(function(){

});