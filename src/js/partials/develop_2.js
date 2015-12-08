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

});

$(window).load(function(){

});

$(window).resize(function(){

});