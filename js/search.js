/**
 * Created by 麦兜 on 2018/6/29.
 */
$(function(){
    $('#all-cf').on('click',function(){
        removeAct();
        $('#all-cf span').addClass('active');
    });
    $('#hotel').on('click',function(){
        removeAct();
        $('#hotel span').addClass('active');
    });
    $('#food').on('click',function(){
        removeAct();
        $('#food span').addClass('active');
    });
    $('#shopping').on('click',function(){
        removeAct();
        $('#shopping span').addClass('active');
    });
    $('#entertain').on('click',function(){
        removeAct();
        $('#entertain span').addClass('active');
    });
    $('#travel').on('click',function(){
        removeAct();
        $('#travel span').addClass('active');
    });

});

function removeAct(){
    $('#classify span').removeClass('active');
}

function createLi(obj){
    var $liItem=$("<li class=\"shop-item row clearfix\">\n"+
    "    <div class=\"col-sm-4\">\n"+
    "        <a href=\"#\" class=\"sendData\"><img src=\" "+obj.image+"\" onclick=\"ulrHtml('" + obj.compName + "');\" alt=\"商家图片\"/></a>\n"+
    "     </div>\n"+
    "    <div class=\"col-sm-8\">\n"+
    "    <a href=\"#\" class=\"shop-name sendData\" id=\"shop-name\" onclick=\"ulrHtml('" + obj.compName + "');\">"+obj.compName+"</a>\n"+
    "    <div class=\"info-bar\">\n"+
    "    <div class=\"comment ex\">\n"+
    "    <span id=\"distingu\">"+obj.classify+"</span> | <a href=\"#\" id=\"comment-num\">"+obj.comments+" 条点评 </a>\n"+
    "    </div>\n"+
    "    <div class=\"tag ex\" id=\"addre\"> "+obj.addr+"</div>\n"+
    "   </div>\n"+
    "    </div>\n"+
    "</li>");
    return $liItem;
}

function ulrHtml(name) {
    var toUrl = "merchantdetail?compName =" +name;
    //var toUrl = "info-member.html?compName =" +name;
    window.open(toUrl);
}
