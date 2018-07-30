/**
 * Created by 麦兜 on 2018/7/15.
 */
//    导航栏显示下拉框
$(function(){
    $('#face-link').hover(function(){
        $('#face-bar').css('display','block');
        $('#face-img').css({'width':'40px','height':'40px'});

        //2s内移入face-bar则关闭定时器
        var timer=setTimeout(remove,2000);
        $('#face-bar').hover(function(){
            clearTimeout(timer);
            $('#face-bar').mouseleave(function(){
                remove();
            });
        });
        function remove(){
            $('#face-bar').css('display','none');
            $('#face-img').css({'width':'36px','height':'36px'});
        }
    });

//    自适应手机布局
    var oBox=$('.nav-wrap');
    $('#menu-toggle').on('click', function () {
        console.log('点击');
        if (oBox.hasClass('hidden')) {
            console.log('具有hidden属性');
            oBox.removeClass('hidden');
            requestAnimationFrame(function(){
                oBox.removeClass('visuallyhidden');
            });
        } else {
            oBox.addClass('visuallyhidden');
            oBox.one('transitionend', function(e) {
                oBox.addClass('hidden');
            });
        }
    });

    //    回到顶部链接
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>100) $('#goTop').fadeIn(1000);
            else $('#goTop').fadeOut(1000);
        })
        $('#goTop').on('click',function(){
            $('body,html').animate({scrollTop:0},400);
        });
    });

});
