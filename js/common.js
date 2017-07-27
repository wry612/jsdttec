/**
 * Created by Administrator on 2017/3/1.
 */

var nav = $('.nav-menu a');
var navWidth = [];
var clearNav = null;
for(var i=0;i<nav.length;i++){
    navWidth.push(nav[i].offsetWidth)
}
function initNav() {
    var index = $('.nav-menu a.active').index();
    var left = 0;
    for(var i=0;i<index;i++){
        left += navWidth[i];
    }
    left += index*84
    $('.nav-arrow').css('left',left);
}
initNav();
$('.nav-menu a').on('mouseover',function () {
    clearTimeout(clearNav);
    var index = $(this).index();
    var left = 0;
    for(var i=0;i<index;i++){
        left += navWidth[i];
    }
    left += index*84
    $('.nav-arrow').css('left',left);
});
$('.nav-menu a').on('mouseout',function () {
    clearTimeout(clearNav);
    clearNav = setTimeout(function(){initNav();},250);
});
$(window).on('scroll',function () {
    if($(window).scrollTop()>500){
        $('.arrow-top').fadeIn();
    }else{
        $('.arrow-top').fadeOut();
    }
});
var clearScroll = null;
$('.arrow-top').on('click',function () {
    var top = $(window).scrollTop();
    clearScroll = setInterval(function(){
        top-=20;
        if(top<0){
            top = 0;
            clearInterval(clearScroll);
        }
        $(window).scrollTop(top);
    },10);
});
