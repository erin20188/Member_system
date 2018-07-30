/**
 * Created by 麦兜 on 2018/7/17.
 */
$(function(){
    getMessageList();

    function getMessageList(){
        $.ajax({
            type:"get",
            url:"message.txt",
            success:function(msg){
                console.log('msg:'+msg+'输出结束');
                var obj=eval("("+msg+")");
                $.each(obj,function(key,val){
                    var $liItem=createLi(val);
                    $('#commentPage').append($liItem);
                });
            },
            error:function(xhr){
                alert('失败!'+xhr.status);
            }
        });
    }

    function createLi(obj){
        var $liItem=$("<div class=\"shopitem btm-line\">\n"+
            "<div class=\"img\">\n"+
            "<img src=\"img/info-shop.jpg\" alt=\"商家头像\"/>\n"+
            "</div>\n"+
            "<div class=\"shop-name\"> "+obj.compName+" </div>\n"+
            "<div class=\"comment clearfix\">\n"+
            "<a href=\"#\" class=\"reply-link\" onclick=\"upDate(\<%=obj.compName%>);\">\n"+
            "<span>写点评 </span><i class=\"icon-comment-alt\"></i>\n"+
            "</a> </div>\n"+
            "</div>");
        return $liItem;
    }

})
