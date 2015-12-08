function inputFocus(){
    $('.form_input input').focus(function() {
        $(this).parent().find('label').addClass('active');
    });
    $('.form_input input').blur(function() {
        if(!$(this).val()){
            $(this).parent().find('label').removeClass('active');
        }
    });
}
function bottomSelect(){
    $('.bottom_form_select').styler();
}
$(document).ready(function(){
    inputFocus();
    bottomSelect();

});

$(window).load(function(){

});

$(window).resize(function(){

});