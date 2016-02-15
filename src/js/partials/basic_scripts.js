/* input only Number  */
function inputNumber(block) {
    $('input', block).keypress(function(e) {
        if (e.which >= 47 && e.which <= 57 ){}
        else return false;
    });

    $('input', block).keyup(function() {
        $inputNum = $(this);
        if ($inputNum.val == '' || $inputNum.val() == 0) {
            $inputNum.val('');
        }
    });
}

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function initScrollpane(){
    $('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).outerHeight()>height){
                height=$(this).outerHeight();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}
function fancyboxform(){
  $('.fancybox').fancybox({
    autoResize:true,
    wrapCSS:'fancybox-form',
    fitToView:true,
  });
}
function fancyformMaskedinput(){
    $('.tel-mask').mask('+9 (999) 999-99-99 ');
}
/* DOCUMENT READY  */
$(document).ready(function() {
    fancyboxform();
    animationBlock($('.animate-section'));

    fancyformMaskedinput();
});

$(window).load(function(){

  oneHeightItems();
  //$('.footer_placeholder').height($('.footer').outerHeight());

});

$(window).resize(function() {

    //$('.footer_placeholder').height($('.footer').outerHeight());
});