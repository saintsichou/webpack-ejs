  $(function() {
                                // 导航切换
                                // $(".menuson li").click(function() {
                                //     $(".menuson li.active").removeClass("active")
                                //     $(this).addClass("active");
                                // });
                                // $('.title').click(function() {
                                //     $(".title").removeClass("active")
                                //     $(this).addClass("active");
                                //     var $ul = $(this).next('ul');
                                //     $('dd').find('ul').slideUp();
                                //     if ($ul.is(':visible')) {
                                //         $(this).next('ul').slideUp();
                                //     } else {
                                //         $(this).next('ul').slideDown();
                                //     }
                                // })
    // 导入菜单

    // $('.leftmenu').load('/assets/mock-data/menu.html',function(){
        
        
    // })
var path = window.location.href;
var a = path.lastIndexOf("/");
var b = path.lastIndexOf(".");
var fileName = path.slice(a+1,b);
if($('.titlemenu').hasClass('active')){
     $(this).parents("ul").slideDown();
}
$('.leftmenu a').each(function(){
    var link = $(this).attr('href');

    if(link == fileName+".html"){

        if($(this).parent('.titlemenu').length>0){
            $(this).parent('.titlemenu').addClass('active');
            
        } else{
            $(this).addClass('active');
            $(this).parents('dd').find('.titlemenu').addClass('active')
        }

    }
})
    // 角标

       $('.goin').click(function(){

        $('.sidebar').stop().animate({marginLeft:'-18%'},500)
        $('.comeup').stop().animate({left:'0'},500);
        $('.mainContent').stop().animate({marginLeft:'8%'},500)
        $('.sumtext2').stop().animate({left:'8%'},500);
    });
    $('.comeup').click(function(){
        $('.sidebar').stop().animate({marginLeft:'0'},500);
        $('.comeup').stop().animate({left:'-50%'},500);
        $('.tips').stop().animate({left:'14%'},500);
        $('.sumtext2').stop().animate({left:'15%'},500);
        $('.mainContent').stop().animate({marginLeft:'15%'},500)


    });
})