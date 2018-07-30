/**
 * Created by 麦兜 on 2018/7/4.
 */
//$(function(){
//    // 在页面添加 mask
//    var mask = function() {
//        $('<div id="mask" style="width: ' + $(window).width() + 'px; '
//        + 'height: ' + $(window).height() + 'px;"></div>').appendTo("body");
//    };
//    // 窗口大小变化，调整 mask 大小
//    $(window).on("resize", function() {
//        if($("#mask").length) {
//            $("#mask").css({
//                width: $(window).width(),
//                height: $(window).height(),
//                opacity: 0
//            });
//        }
//    });
//    $(".btn-gift").on("click", function() {
//        // 调用 mask，遮盖全部
//        mask();
//        $('#alertT').css('display','block');
//        $('#alertF').css('display','block');
//    });
//    // 只有点击 alert 中的按钮 mask 才会被移除
//    $(document).on("click", "#ok", function() {
//        $("#mask, #alertT,#alertF").remove();
//    });
//
//    //$("#gift-btn-4").on("click", function() {
//    //    alert('成功');
//    //    $('#alertT').css('display','block');
//    //});
//});
