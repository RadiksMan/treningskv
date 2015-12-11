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
    $('.bottom_form_select').styler({
        onSelectClosed:function(){
            setTimeout(function() {
                $('.bottom_form_select').trigger('refresh');
            }, 1)
        }
    });
}

function countToForm(){
    $(document).on('click', '.form-count', function(event) {
        var count = $(this).data('count');
        $('#contact_count').val(count);
    });
}
$(document).ready(function(){
    countToForm();

    inputFocus();
    bottomSelect();

});

$(window).load(function(){

});

$(window).resize(function(){

});